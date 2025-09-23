import Card from "pages/UserApp/Card/Card";
import { EmployeesWrapper } from "./styles";
import Button from "components/Button/Button";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  employeeMainActions,
  employeeMainSelectors,
} from "store/redux/employeeMain/employeeMainSlice";

function Employees() {
  const dispatch = useAppDispatch();
  const employees = useAppSelector(employeeMainSelectors.employees);

  const deleteEmployee = (index: number) => {
    dispatch(employeeMainActions.deleteEmployee(index));
  };

  const deleteAllCards = () => {
    dispatch(employeeMainActions.deleteAllEmployees());
  };

  return (
    <EmployeesWrapper>
      {employees.map((employee, index) => (
        <Card
          key={index}
          userData={employee}
          onDelete={() => deleteEmployee(index)}
        />
      ))}

      {!!employees.length && (
        <Button
          name="Remove All Employees"
          isRed
          onClick={deleteAllCards}
        />
      )}
    </EmployeesWrapper>
  );
}

export default Employees;
