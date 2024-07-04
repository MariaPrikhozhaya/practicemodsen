import React from 'react';
import { Avatar } from '@mui/material';
import { SAvatar, SButton, SAvatarMobile } from './styles';
import { useAuth } from '../../hooks/useAuth';
import { useAppDispatch } from '../../hooks/redux';
import { removeUser } from '../../store/reducers/userSlice';
import login from '@assets/login.png';
import { Desktop, Mobile } from '../../constants/version';

const LinkAccount = () => {
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();

  return (
    <>
      <Desktop>
        {isAuth ? (
          <SAvatar>
            <SButton onClick={() => dispatch(removeUser())}>
              <Avatar src="/broken-image.jpg" />
            </SButton>
          </SAvatar>
        ) : (
          <SAvatar>
            <a href="/login" role="button">
              <Avatar src={login} />
            </a>
          </SAvatar>
        )}
      </Desktop>
      <Mobile>
        {isAuth ? (
          <SAvatarMobile>
            <SButton onClick={() => dispatch(removeUser())}>
              <Avatar src="/broken-image.jpg" />
            </SButton>
          </SAvatarMobile>
        ) : (
          <SAvatarMobile>
            <a href="/login" role="button">
              <Avatar src={login} />
            </a>
          </SAvatarMobile>
        )}
      </Mobile>
    </>
  );
};

export default LinkAccount;


