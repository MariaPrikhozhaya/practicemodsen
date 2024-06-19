import React, {useState} from "react";
import Logout from "../logout/Logout";

const LinkAccount = () => {
  

const [showAccount, setShowAccount] = useState(false)

const handleAccountClick = () => {
		setShowAccount(!showAccount)
	}

  return (
    <section style={{display: 'flex', flexDirection: 'row'}}>
      <li className="nav-item dropdown">
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


