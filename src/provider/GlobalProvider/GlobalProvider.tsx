import { PropsWithChildren, useState } from "react";
import { TDay, TSubject, TWeek, TGrade, TPupil } from "@src/@types/general";
import { GlobalContext } from "./GlobalContext";

import { mock_days } from "@src/mocks/days";
import { mock_weeks } from "@src/mocks/weeks";
import { mock_subjects } from "@src/mocks/subjects";

export function GlobalProvider({ children }: PropsWithChildren) {
  const [weeks, setWeeks] = useState<TWeek[]>(mock_weeks);
  const [subjects, setSubjects] = useState<TSubject[]>(mock_subjects);
  const [days, setDays] = useState<TDay[]>(mock_days);
  const [pupils, setPupils] = useState<TPupil[]>([]);

  const [grades, setGrades] = useState<TGrade[]>([]);

  const [currentWeek, setCurrentWeek] = useState<TWeek>();
  const [currentSubject, setCurrentSubject] = useState<TSubject>();

  return (
    <GlobalContext.Provider
      value={{
        days,
        grades,
        pupils,
        setDays,
        weeks,
        setWeeks,
        subjects,
        setSubjects,
        currentWeek,
        setCurrentWeek,
        currentSubject,
        setCurrentSubject,
        setGrades,
        setPupils,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}