import { Input, InputNumber } from "antd";
import { v4 as uuidv4 } from "uuid";

import { TGrade, TPupil } from "@src/@types/general";
import { useGlobalProvider } from "@src/provider/GlobalProvider";
import {
  SGradeListItem,
  SGradeListItemInfo,
  SGradeListInputs,
} from "./GradeListItem.styled";

type GradeListItemProps = { pupil: TPupil };

export function GradeListItem({ pupil }: GradeListItemProps) {
  const { currentWeek, days, grades, currentSubject, setGrades } =
    useGlobalProvider();

  const currentDays = days.filter((day) => day.weekId === currentWeek?.id);

  function CreateGrade(data: { oldGrade?: TGrade } & Omit<TGrade, "id">) {
    setGrades((prev) => prev.filter((grade) => grade.id !== data.oldGrade?.id));

    const id = uuidv4();
    const grade: TGrade = { id, ...data };
    setGrades((prev) => [...prev, grade]);
  }

  return (
    <SGradeListItem>
      <SGradeListItemInfo>
        {`${pupil.firstName} ${pupil.lastName}`}
      </SGradeListItemInfo>
      <SGradeListInputs>
        {currentDays?.map((day) => {
          const currentGrade = grades.find(
            (grade) =>
              grade.dayId === day.id &&
              grade.subjectId === currentSubject?.id &&
              grade.pupilIdNumber === pupil.idNumber
          );

          return (
            <InputNumber
              value={currentGrade?.grade}
              placeholder={day.title}
              onChange={(grade) => {
                if (currentSubject?.id && grade)
                  CreateGrade({
                    dayId: day.id,
                    subjectId: currentSubject?.id,
                    pupilIdNumber: pupil.idNumber,
                    grade: Number(grade),
                    oldGrade: currentGrade,
                  });
              }}
            />
          );
        })}
      </SGradeListInputs>
    </SGradeListItem>
  );
}
