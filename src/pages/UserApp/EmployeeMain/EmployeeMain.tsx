import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import CreateEmployee from "../CreateEmployee/CreateEmployee";
import Employees from "../Employees/Employees";
import { EmployeeContext } from "./EmployeeContext";
import { type UserData } from "../CreateEmployee/types";
import { ROUTES } from "../constants/navMenuRoutes";

function EmployeeMain() {
  const [employees, setEmployees] = useState<UserData[]>([]);

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      <Routes>
        <Route path={ROUTES.CREATE_EMPLOYEE} element={<CreateEmployee />} />
        <Route path={ROUTES.EMPLOYEES} element={<Employees />} />
      </Routes>
    </EmployeeContext.Provider>
  );
}

export default EmployeeMain;
