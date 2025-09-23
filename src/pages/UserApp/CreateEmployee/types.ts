export enum EMPLOYEE_FORM_VALUES {
  NAME = "name",
  SURNAME = "surname",
  AGE = "age",
  "JOB POSITION" = "jobPosition",
}

export interface UserData {
  name: string
  surname: string
  age: string
  jobPosition: string
}
