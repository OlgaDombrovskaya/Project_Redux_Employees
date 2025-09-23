import { Routes, Route } from "react-router-dom";

import CreateEmployee from "../CreateEmployee/CreateEmployee";
import Employees from "../Employees/Employees";
import { ROUTES } from "../constants/navMenuRoutes";

function EmployeeMain() {
  return (
      <Routes>
        <Route path={ROUTES.CREATE_EMPLOYEE} element={<CreateEmployee />} />
        <Route path={ROUTES.EMPLOYEES} element={<Employees />} />
      </Routes>
  );
}

export default EmployeeMain;
