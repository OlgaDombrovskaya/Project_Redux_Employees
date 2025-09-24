import { CardComponent, CardInfo, CardTitle } from "./styles"
import type { UserData } from "../CreateEmployee/types"
import Button from "components/Button/Button"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { employeeMainSelectors, employeeMainActions} from "store/redux/employeeMain/employeeMainSlice"

function Card() {
   
    const dispatch = useAppDispatch()

      // достаём индекс выбранного сотрудника и весь массив
    const employees = useAppSelector(employeeMainSelectors.employees)
    const selectedIndex = useAppSelector(employeeMainSelectors.selectedIndex)

      // если сотрудник не выбран – ничего не показываем
  if (selectedIndex === null) return null

  const userData = employees[selectedIndex]

  const deleteEmployee = () => {
    dispatch(employeeMainActions.deleteEmployee(selectedIndex))
      // сброс выбора после удаления
    dispatch(employeeMainActions.setSelectedIndex(null))
  }

  function onDelete(): void {
    throw new Error("Function not implemented.")
  }

  return (
    <CardComponent>
      <CardTitle>Name</CardTitle>
      <CardInfo>{userData.name}</CardInfo>
      <CardTitle>Surname</CardTitle>
      <CardInfo>{userData.surname}</CardInfo>
      <CardTitle>Age</CardTitle>
      <CardInfo>{userData.age}</CardInfo>
       {/* Условный рендеринг */}
      {userData.jobPosition && (
        <>
          <CardTitle>Job Position</CardTitle>
          <CardInfo>{userData.jobPosition}</CardInfo>
        </>
      )}
      <Button onClick={onDelete} name="Delete" type="submit" isRed />
    </CardComponent>
  );
}

export default Card;
