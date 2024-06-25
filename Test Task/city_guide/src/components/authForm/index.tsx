import React, { useState, useContext} from "react"
import { SInput, SBlock, SButton,  SForm, STitle, 
	SMainBlock, SText, SLink, SRow, SMdArrowBack } from "./styles"
import { useDispatch } from "react-redux";
import { setUser } from "../../store/reducers/userSlice";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";


const AuthForm = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = (email: string, password: string) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
		.then(({user}) => {
		  console.log(user);
		  dispatch(setUser({
			id: user.uid,
			email: user.email,
			token: user.refreshToken,
		  }));
		  navigate('/');
		})
		.catch(() => alert('Invalid user!'));
	  }

	return (
			<SMainBlock>
				<SForm onSubmit={(e) => {
          e.preventDefault();
          handleLogin(email, password);
        }}>
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
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<SInput
							id="password"
							name="password"
							type="password"
							placeholder="пароль"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<SButton type="submit">Войти</SButton>
					</SBlock>
						
					<SText>нет аккаунта? <SLink to={"/register"}>Зарегистрироваться</SLink></SText>
				</SForm>
			</SMainBlock>
	)
}

export default AuthForm