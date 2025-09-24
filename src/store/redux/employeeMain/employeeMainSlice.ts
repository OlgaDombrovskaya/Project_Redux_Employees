import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"
import { Employee } from "./types"

export interface EmployeeMainSliceState {
  employees: Employee[]
  selectedIndex: number | null
}
const employeeInitialState: EmployeeMainSliceState = {
  employees: [],
  selectedIndex: null,
}

export const employeeMainSlice = createAppSlice({
  name: "EMPLOYEE",
  initialState: employeeInitialState,

  reducers: create => ({
    addEmployee: create.reducer(
      (state: EmployeeMainSliceState, action: PayloadAction<Employee>) => {
        state.employees.push(action.payload)
      },
    ),
    deleteEmployee: create.reducer(
      (state: EmployeeMainSliceState, action: PayloadAction<string>) => {
        state.employees = state.employees.filter(
          employee => employee.id !== action.payload,
        )
      },
    ),

    deleteAllEmployees: create.reducer(() => {
      return employeeInitialState
    }),

    setSelectedIndex: create.reducer(
      (state, action: PayloadAction<number | null>) => {
        state.selectedIndex = action.payload
      },
    ),
  }),

  selectors: {
    employees: state => state.employees,
    selectedIndex: state => state.selectedIndex,
  },
})

export const employeeMainActions = employeeMainSlice.actions
export const employeeMainSelectors = employeeMainSlice.selectors
