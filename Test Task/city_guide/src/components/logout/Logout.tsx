import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { StoreContext } from "../../context/State"

const Logout = () => {

	const navigate = useNavigate()
	const { store } = useContext(StoreContext);

	const handleLogout = () => {
        store.logout();
		navigate("/", { state: { message: "You have been logged out!"} })
	}

	return (
		<>
			<li>
				<Link className="dropdown-item" to={"/profile"}>
					Профиль
				</Link>
			</li>
			<li>
				<hr className="dropdown-divider" />
			</li>
			<button className="dropdown-item" onClick={handleLogout}>
				Выход
			</button>
		</>
	)
}

export default Logout
