import React, { useState, useContext} from "react"
import { SInput, SBlock, SButton,  SForm, STitle, 
	SMainBlock, SText, SLink, SRow, SMdArrowBack } from "./styles"
import { useDispatch } from "react-redux";
import { setUser } from "../../store/reducers/userSlice";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleRegister = (email: string, password: string) => {
		const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
          console.log(user);
          dispatch(setUser({
            id: user.uid,
            email: user.email,
            token: user.refreshToken,
          }));
          navigate('/');
        })
        .catch(console.error);
	}

	return (
			<SMainBlock>
				<SForm onSubmit={(e) => {
          e.preventDefault();
          handleRegister(email, password);
        }}>
					<SRow>
						<SLink to={"/"}><SMdArrowBack /></SLink>
						<STitle>Регистрация</STitle>
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
                        {/* <SInput
							id="password"
							name="password"
							type="password"
							placeholder="повторите пароль"
							// value={}
							// onChange={}
						/> */}
						<SButton type="submit" >Зарегистрироваться</SButton>
					</SBlock>
						
					<SText>уже есть аккаунт? <SLink to={"/login"}>Войти</SLink></SText>
				</SForm>
			</SMainBlock>
	)
}

export default RegisterForm