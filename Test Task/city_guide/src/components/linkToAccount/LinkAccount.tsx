import React, {useState} from "react";
import Logout from "../logout/Logout";
import { Link } from "react-router-dom";
import { Avatar } from '@mui/material';

const LinkAccount = () => {
  
const isLoggedIn = localStorage.getItem("auth")
const [showAccount, setShowAccount] = useState(false)

const handleAccountClick = () => {
		setShowAccount(!showAccount)
	}

  return (
    <section style={{display: 'flex', flexDirection: 'row'}}>
      <li className="nav-item dropdown">
              
            <Avatar style={{ marginTop: 'auto' }}>A</Avatar>
            <Avatar src="/broken-image.jpg"/>
              
              <a
                className={`nav-link dropdown-toggle ${showAccount ? "show" : ""}`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={handleAccountClick}>
                {" "}
                Аккаунт
              </a>

              <ul
                className={`dropdown-menu ${showAccount ? "show" : ""}`}
                aria-labelledby="navbarDropdown">
                {isLoggedIn ? (
                  <Logout />
                ) : (
                  <li>
                    <Link className="dropdown-item" to={"/login"}>
                      Вход
                    </Link>
                  </li>
                )}
              </ul>


            </li>
    </section>
  );
};

export default LinkAccount;


