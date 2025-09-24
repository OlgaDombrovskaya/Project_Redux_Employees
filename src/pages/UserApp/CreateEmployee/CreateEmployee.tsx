import { useFormik } from "formik"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"

import Button from "components/Button/Button"
import Input from "components/Input/input"
import { v4 as uuidv4 } from "uuid"

import {
  CreateEmployeeContainer,
  CreateEmployeeWrapper,
  InputsContainer,
} from "./styles"

import { EMPLOYEE_FORM_VALUES } from "./types"
import { useAppDispatch } from "store/hooks"
import { employeeMainActions } from "store/redux/employeeMain/employeeMainSlice"
import { Employee } from "store/redux/employeeMain/types"

function CreateEmployee() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    [EMPLOYEE_FORM_VALUES.NAME]: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be no more than 50 characters")
      .required("Name is required"),
    [EMPLOYEE_FORM_VALUES.SURNAME]: Yup.string()
      .min(2, "Surname must be at least 2 characters")
      .max(15, "Surname must be no more than 15 characters")
      .required("Surname is required"),
    [EMPLOYEE_FORM_VALUES.AGE]: Yup.string()
      .min(1, "Age must be at least 1 character")
      .max(3, "Age must be no more than 3 character")
      .required("Age is required"),
    [EMPLOYEE_FORM_VALUES["JOB POSITION"]]: Yup.string()
      .min(2, "Job Position must be at least 2 characters")
      .max(30, "Job Position must be no more than 30 characters"),
  })

  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_VALUES.NAME]: "",
      [EMPLOYEE_FORM_VALUES.SURNAME]: "",
      [EMPLOYEE_FORM_VALUES.AGE]: "",
      [EMPLOYEE_FORM_VALUES["JOB POSITION"]]: "",
    },
    validationSchema,
    onSubmit: values => {
      const newEmployee: Employee = {
        id: uuidv4(),
        name: values.name.trim(),
        surname: values.surname.trim(),
        age: values.age.trim(),
        jobPosition: values.jobPosition.trim(),
      }
      dispatch(employeeMainActions.addEmployee(newEmployee))
      navigate("/employees")
    },
  })

  return (
    <CreateEmployeeWrapper>
      <CreateEmployeeContainer onSubmit={formik.handleSubmit}>
        <InputsContainer>
          <Input
            id="name-id"
            name={EMPLOYEE_FORM_VALUES.NAME}
            type="text"
            placeholder="John"
            label="Name*"
            value={formik.values[EMPLOYEE_FORM_VALUES.NAME]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEE_FORM_VALUES.NAME]}
          />
          <Input
            id="surname-id"
            name={EMPLOYEE_FORM_VALUES.SURNAME}
            type="text"
            placeholder="Johnson"
            label="Surname*"
            value={formik.values[EMPLOYEE_FORM_VALUES.SURNAME]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEE_FORM_VALUES.SURNAME]}
          />
          <Input
            id="age-id"
            name={EMPLOYEE_FORM_VALUES.AGE}
            type="text"
            placeholder="25"
            label="Age*"
            value={formik.values[EMPLOYEE_FORM_VALUES.AGE]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEE_FORM_VALUES.AGE]}
          />

          <Input
            id="job-position-id"
            name={EMPLOYEE_FORM_VALUES["JOB POSITION"]}
            type="text"
            placeholder="QA"
            label="Job Position"
            onChange={formik.handleChange}
          />
        </InputsContainer>
        <Button name="Create" type="submit" />
      </CreateEmployeeContainer>
    </CreateEmployeeWrapper>
  )
}

export default CreateEmployee
