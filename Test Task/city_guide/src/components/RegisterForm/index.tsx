import React, { useState, useContext} from "react"
import { StoreContext } from "../../context/State"
import { SInput, SBlock, SButton,  SForm, STitle, 
	SMainBlock, SText, SLink, SRow, SMdArrowBack } from "./styles"

const RegisterForm = () => {

	return (
			<SMainBlock>
				<SForm>
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
							// value={}
							// onChange={}
						/>
						<SInput
							id="password"
							name="password"
							type="password"
							placeholder="пароль"
							// value={}
							// onChange={}
						/>
                        <SInput
							id="password"
							name="password"
							type="password"
							placeholder="повторите пароль"
							// value={}
							// onChange={}
						/>
						<SButton type="submit">Войти</SButton>
					</SBlock>
						
					<SText>уже есть аккаунт? <SLink to={"/login"}>Войти</SLink></SText>
				</SForm>
			</SMainBlock>
	)
}

export default RegisterForm