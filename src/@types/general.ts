export type TDay = {
    id: string;
    title: string;
    weekId: string;
  };

  export type TSubject = {
    id: string;
    title: string;
  };

  export type TWeek = {
    id: string;
    title: string;
  };
  
  export type TGrade = {
    id: string;
    grade: number;
    dayId: string;
    subjectId: string;
    pupilIdNumber: string;
  };
  
  export type TPupil = {
    idNumber: string;
    firstName: string;
    lastName: string;
  };
  