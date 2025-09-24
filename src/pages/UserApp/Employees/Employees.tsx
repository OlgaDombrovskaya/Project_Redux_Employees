import Card from "pages/UserApp/Card/Card"
import Button from "components/Button/Button"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  employeeMainActions,
  employeeMainSelectors,
} from "store/redux/employeeMain/employeeMainSlice"

import { ButtonControl, CardBox, Cards, EmployeesWrapper } from "./styles"

function Employees() {
  const dispatch = useAppDispatch()
  const employees = useAppSelector(employeeMainSelectors.employees)

  const deleteAllCards = () => {
    dispatch(employeeMainActions.deleteAllEmployees())
  }

  return (
    <EmployeesWrapper>
      <Cards>
        {employees.map((_employee, index) => (
          <CardBox
            key={index}
            onClick={() =>
              dispatch(employeeMainActions.setSelectedIndex(index))
            }
          >
            <Card />
          </CardBox>
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
