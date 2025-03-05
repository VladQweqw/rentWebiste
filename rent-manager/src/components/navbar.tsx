import { useNavigate } from "react-router"
import NavbarItem from "./navbarItem";

export default function Navbar(props: {
    isLogged: boolean
}) {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <div className="logo">
                <h2
                    onClick={() => {
                        navigate("/")
                    }}
                >Logo</h2>
            </div>

            <nav className="nav">
                {props.isLogged ? 
                <NavbarItem redirect="/account">Account</NavbarItem>
                :
                <NavbarItem redirect="/login">Sign in</NavbarItem>
                }
            </nav>
        </div>
    )
}