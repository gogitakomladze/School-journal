import { Typography } from "antd";
import { GradeListItem } from "./GradeListltem";
import { SGradeList } from "./GradeList.styled";
import { useGlobalProvider } from "@src/provider/GlobalProvider";

export function GradeList() {
  const { pupils } = useGlobalProvider();

  return (
    <SGradeList>
      <Typography.Title level={3}>ნიშნები</Typography.Title>
      {pupils.map((pupil) => {
        return <GradeListItem key={pupil.idNumber} pupil={pupil} />;
      })}
    </SGradeList>
  );
}
