import { createAppSlice } from "store/createAppSlice"

import { EmployeeMainSliceState } from "./types"

const employeeInitialState = {
  name: "",
  surname: "",
  age: "",
  jobPosition: "",
}

export const employeeMainSlice = createAppSlice({
    //это имя используется для нахождения событий слайса
    name: "EMPLOYEE",
    // это стэйт по умолчанию
    initialState: employeeInitialState,

    //функция которая возвращает объект содержащий функции которые будут изменять стэйт
    reducers: create => ({
     employee: create.reducer((state: EmployeeMainSliceState ) => {
        state.name;
        state.surname;
        state.age;
        state.jobPosition;
      }),
        reset: create.reducer(() => employeeInitialState),
    }),

    // подписка на хранилище в store
    selectors: {
        employee: (state: EmployeeMainSliceState) => {
            return state
        }
    },
});

// feedbackSlice сам создает экшон для каждого редюсера
export const employeeMainActions = employeeMainSlice.actions
//место для храниения selectors
export const employeeMainSelectors = employeeMainSlice.selectors
