import Card from "pages/UserApp/Card/Card"
import Button from "components/Button/Button"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  employeeMainActions,
  employeeMainSelectors,
} from "store/redux/employeeMain/employeeMainSlice"

import { ButtonControl, Cards, EmployeesWrapper } from "./styles"

function Employees() {
  const dispatch = useAppDispatch()
  const employees = useAppSelector(employeeMainSelectors.employees)

  const deleteEmployee = (id: string) => {
    dispatch(employeeMainActions.deleteEmployee(id))
  }

  const deleteAllCards = () => {
    dispatch(employeeMainActions.deleteAllEmployees())
  }

  return (
    <EmployeesWrapper>
      <Cards>
        {employees.map(employee => (
          <Card
            key={employee.id}
            userData={employee}
            onDelete={() => deleteEmployee(employee.id)}
          />
        ))}
      </Cards>

      {!!employees.length && (
        <ButtonControl>
          <Button name="Remove All Employees" isRed onClick={deleteAllCards} />
        </ButtonControl>
      )}
    </EmployeesWrapper>
  )
}

export default Employees
