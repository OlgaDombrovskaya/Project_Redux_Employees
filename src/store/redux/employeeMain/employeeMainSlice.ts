import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"
import { Employee } from "./types"

// Описываем тип всего состояния этого слайса.(храним массив сотрудников)
export interface EmployeeMainSliceState {
  employees: Employee[]
  selectedIndex: number | null 
}

//  Начальное состояние: по умолчанию список сотрудников пустой.
const employeeInitialState: EmployeeMainSliceState = {
  employees: [],
  selectedIndex: null,
}

export const employeeMainSlice = createAppSlice({
  //это имя используется для нахождения событий слайса
  name: "EMPLOYEE",
  // это стэйт по умолчанию
  initialState: employeeInitialState,

  //функция которая возвращает объект содержащий функции которые будут изменять стэйт
  reducers: create => ({
    //добавляем одну карточку
    addEmployee: create.reducer(
      (state: EmployeeMainSliceState, action: PayloadAction<Employee>) => {
        state.employees.push(action.payload)
      },
    ),
    deleteEmployee: create.reducer(
      (state: EmployeeMainSliceState, action: PayloadAction<number>) => {
        state.employees = state.employees.filter(
          (_Employee, index) => index !== action.payload,
        )
      },
    ),
    // deleteAllEmployees: create.reducer((state: EmployeeMainSliceState) => {
    //     state.employees = []
    // }),

//      deleteAllEmployees: create.reducer(() => 
//      employeeInitialState 
//     ),
//   }),

    deleteAllEmployees: create.reducer(() => {
     return employeeInitialState 
    }),

    setSelectedIndex: create.reducer(
      (state, action: PayloadAction<number | null>) => {
        state.selectedIndex = action.payload
      },
    ),
  }),

  // подписка на хранилище в store
  selectors: {
    employees: (state) => state.employees,
    selectedIndex: (state) => state.selectedIndex,
    },
  })

// feedbackSlice сам создает экшон для каждого редюсера
export const employeeMainActions = employeeMainSlice.actions
//место для храниения selectors
export const employeeMainSelectors = employeeMainSlice.selectors
