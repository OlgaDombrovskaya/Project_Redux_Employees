// import { createAppSlice } from "store/createAppSlice"
// import { PayloadAction } from "@reduxjs/toolkit"
// import { CardEmployeeSliceState} from "./types"


// //  Начальное состояние: по умолчанию список сотрудников пустой.
// const cardEmployeeInitialState: CardEmployeeSliceState = {
//   name: "",
//   surname: "",
//   age: "",
//   jobPosition: "",
//   onSubmit: 
// }

// export const cardEmployeeSlice = createAppSlice({
//   //это имя используется для нахождения событий слайса
//   name: "CARD",
//   // это стэйт по умолчанию
//   initialState: cardEmployeeInitialState,

//   //функция которая возвращает объект содержащий функции которые будут изменять стэйт
//   reducers: create => ({
    
//     createCard: create.reducer(
//       (state: CardEmployeeSliceState) => {
//         return cardEmployeeInitialState
//       },
//     ),

//   // подписка на хранилище в store
//   selectors: {
//     employees: (state: CardEmployeeSliceState) => {
//       return state.employees
//     },
//   },
// })

// // feedbackSlice сам создает экшон для каждого редюсера
// export const cardEmployeeActions = cardEmployeeSlice .actions
// //место для храниения selectors
// export const cardEmployeeSelectors = cardEmployeeSlice .selectors