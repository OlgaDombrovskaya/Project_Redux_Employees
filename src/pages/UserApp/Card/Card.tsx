import { CardComponent, CardInfo, CardTitle, JobPositionBlock } from "./styles"
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

  return (
    <CardComponent>
      <JobPositionBlock>
        <CardTitle>Name</CardTitle>
        <CardInfo>{userData.name}</CardInfo>
        <CardTitle>Surname</CardTitle>
        <CardInfo>{userData.surname}</CardInfo>
        <CardTitle>Age</CardTitle>
        <CardInfo>{userData.age}</CardInfo>
        {/* Условный рендеринг */}
        {userData?.jobPosition && <CardTitle>Job Position </CardTitle>}
        <CardInfo>{userData?.jobPosition}</CardInfo>
      </JobPositionBlock>
      <Button onClick={deleteEmployee} name="Delete" type="submit" isRed />
    </CardComponent>
  )
}

export default Card

//Employees.tsx (или любая другая страница) диспатчит
// setSelectedIndex(index) — записывает в store, какой сотрудник выбран.
// Card через useAppSelector достаёт:
// весь массив сотрудников,
// индекс выбранного.
// Если индекс не null, рендерит данные выбранного сотрудника.
// Кнопка Delete диспатчит deleteEmployee(selectedIndex),
// удаляя именно этого сотрудника.
