import { useContext } from "react";
import { EmployeeContext } from "../EmployeeMain/EmployeeContext";
import Card from "pages/UserApp/Card/Card";
import { EmployeesWrapper} from "./styles";
import Button from "components/Button/Button";

function Employees() {
  const { employees, setEmployees } = useContext(EmployeeContext);

  const deleteEmployee = (index: number) => {
    const updated = employees.filter((_emoloyees, i) => i !== index);
    setEmployees(updated);
  };

    const deleteAllCards = () => {
    setEmployees([]);
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
        // <ButtonControl>
          <Button
            name="Remove All Employees"
            isRed
            onClick={deleteAllCards}
          />
        // </ButtonControl>
      )}
    </EmployeesWrapper>
  );
}

export default Employees;
