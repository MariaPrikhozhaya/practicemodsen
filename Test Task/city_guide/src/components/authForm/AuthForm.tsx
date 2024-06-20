import React, { useState, useContext} from "react"
import { StoreContext } from "../../context/State"
import { SInput, SBlock, SButton,  SForm, STitle, 
	SMainBlock, SText, SLink, SRow, SMdArrowBack } from "./styles"

const AuthForm = () => {

    const [login, setLogin] = useState({
		email: "",
		password: ""
	})

	const { store } = useContext(StoreContext);

	const handleInputChange = (e) => {
		setLogin({ ...login, [e.target.name]: e.target.value })
	}

    const handleLogin = () => {
		store.login(login.email, login.password);
	}
	return (
			<SMainBlock>
				<SForm onSubmit={handleLogin}>
					<SRow>
						<SLink to={"/"}><SMdArrowBack /></SLink>
						<STitle>Вход</STitle>
					</SRow>
					<SBlock>
						<SInput
							id="email"
							name="email"
							type="email"
							placeholder="email"
							value={login.email}
							onChange={handleInputChange}
						/>
						<SInput
							id="password"
							name="password"
							type="password"
							placeholder="пароль"
							value={login.password}
							onChange={handleInputChange}
						/>
						<SButton type="submit">Войти</SButton>
					</SBlock>
						
					<SText>нет аккаунта? <SLink to={"/register"}>Зарегистрироваться</SLink></SText>
				</SForm>
			</SMainBlock>
	)
}

export default AuthForm