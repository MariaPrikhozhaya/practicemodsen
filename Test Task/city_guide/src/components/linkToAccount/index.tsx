import React from "react";
import { Avatar } from '@mui/material';
import { SAvatar, SButton } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { useAppDispatch } from "../../hooks/redux";
import { removeUser } from "../../store/reducers/userSlice";
import login from '@assets/login.png'

const LinkAccount = () => {
  
  const {isAuth} = useAuth();
    const dispatch = useAppDispatch();

    return (
      isAuth ? (
        <SAvatar>
        <SButton
          onClick={() => dispatch(removeUser())}>
          <Avatar src="/broken-image.jpg"/>
        </SButton>
      </SAvatar>
      ) : (
        <SAvatar>
          <a
            href="/login"
            role="button">
            <img src={login}/>
          </a>
        </SAvatar>
      )
    )
};

export default LinkAccount;


