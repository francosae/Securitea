import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const useAuthenticationForm = ({ user }) => {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    passwordConfirm: "",
    title: "mrs.",
    birthday: ""
  })

  useEffect(() => {
    if (user?.email) {
      navigate("/UserDashboard")
    }
  }, [user, navigate])

  const handleOnInputChange = (event) => {
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }
    }
    if (event.target.name === "password" || event.target.name === "passwordConfirm") {
      if (event.target.value !== form.password) {
        setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }))
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }))
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  return {
    form,
    errors,
    setErrors,
    handleOnInputChange,
  }
}