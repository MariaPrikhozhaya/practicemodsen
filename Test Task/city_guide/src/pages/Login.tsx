import React, { useState, useContext } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { StoreContext } from "../context/State"
import AuthForm from "../components/authForm/AuthForm"

const Login = () => {

	const [login, setLogin] = useState({
		email: "",
		password: ""
	})

    const { store } = useContext(StoreContext);
	const location = useLocation()

	const handleInputChange = (e) => {
		setLogin({ ...login, [e.target.name]: e.target.value })
	}

	const handleLogin = () => {
		store.login(login.email, login.password);
	}


	return (
		<AuthForm/>
	)
}

export default Login
