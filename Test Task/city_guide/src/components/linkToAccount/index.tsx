import React, {useState} from "react";
import Logout from "../Logout";
import { Avatar } from '@mui/material';
import {
  SAvatar, SLink, DropdownMenu, DropdownItem
} from "./styles";

const LinkAccount = () => {
  
const isLoggedIn = localStorage.getItem("auth")
const [showAccount, setShowAccount] = useState(false)

const handleAccountClick = () => {
		setShowAccount(!showAccount)
	}

  return (
      <SAvatar>
        <a
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={handleAccountClick}
        >
        <Avatar src="/broken-image.jpg" />
        </a>
        <DropdownMenu show={showAccount}>
          {isLoggedIn ? (
            <Logout />
          ) : (
            <DropdownItem>
              <SLink to="/login">
                Вход
              </SLink>
            </DropdownItem>
          )}
        </DropdownMenu>
    </SAvatar>
  );
};

export default LinkAccount;


