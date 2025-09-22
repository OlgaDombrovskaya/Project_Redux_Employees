import { createContext } from "react";
import { type Dispatch, type SetStateAction } from "react";
import { type UserData } from "../CreateEmployee/types";

export interface UserDataContext {
  employees: UserData[];
  setEmployees: Dispatch<SetStateAction<UserData[]>>;
}

export const EmployeeContext = createContext<UserDataContext>({
  employees: [],
  setEmployees: () => {},
});
