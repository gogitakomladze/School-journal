import { createContext } from "react";

import { TWeek, TSubject, TDay, TPupil, TGrade } from "@src/@types/general";

interface TGlobalContext {
  weeks: TWeek[];
  subjects: TSubject[];
  setWeeks: React.Dispatch<React.SetStateAction<TWeek[]>>;
  setSubjects: React.Dispatch<React.SetStateAction<TSubject[]>>;
  currentWeek?: TWeek;
  currentSubject?: TSubject;
  setCurrentWeek: React.Dispatch<React.SetStateAction<TWeek | undefined>>;
  setCurrentSubject: React.Dispatch<React.SetStateAction<TSubject | undefined>>;
  days: TDay[];
  pupils: TPupil[];
  grades: TGrade[];
  setDays: React.Dispatch<React.SetStateAction<TDay[]>>;
  setPupils: React.Dispatch<React.SetStateAction<TPupil[]>>;
  setGrades: React.Dispatch<React.SetStateAction<TGrade[]>>;
}

export const GlobalContext = createContext<TGlobalContext>({
  currentWeek: undefined,
  currentSubject: undefined,
  setCurrentWeek: () => {},
  setCurrentSubject: () => {},
  weeks: [],
  pupils: [],
  grades: [],
  subjects: [],
  days: [],
  setSubjects: () => {},
  setWeeks: () => {},
  setDays: () => {},
  setGrades: () => {},
  setPupils: () => {},
});
