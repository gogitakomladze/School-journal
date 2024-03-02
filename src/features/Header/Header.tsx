import { useState } from "react";

import { Button, Space } from "antd";
import { SHeader } from "./Header.styled";

import { NewPupilModal } from "../NewPupilModal";
import { useGlobalProvider } from "@src/provider/GlobalProvider";

export function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const {
    weeks,
    currentSubject,
    currentWeek,
    setCurrentSubject,
    setCurrentWeek,
    subjects,
  } = useGlobalProvider();

  return (
    <SHeader>
      <Space>
        {subjects.map((subject) => {
          return (
            <Button
              type={subject.id === currentSubject?.id ? "primary" : "default"}
              onClick={() => setCurrentSubject(subject)}
            >
              {subject.title}
            </Button>
          );
        })}
      </Space>
      <Space>
        {weeks.map((week) => {
          return (
            <Button
              type={week.id === currentWeek?.id ? "primary" : "default"}
              onClick={() => setCurrentWeek(week)}
            >
              {week.title}
            </Button>
          );
        })}
        <Button type="dashed" onClick={() => setOpen(true)}>
          ახალი მოსწავლის დამატება
        </Button>
      </Space>
      {open && <NewPupilModal onCancel={() => setOpen(false)} />}
    </SHeader>
  );
}
