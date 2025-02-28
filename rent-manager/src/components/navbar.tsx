import { useEffect, useState } from "react";
import { useNavigate } from "react-router"
import NavbarItem from "./navbarItem";

export default function Navbar() {
    const navigate = useNavigate();
    const [isLogged, setIsLogged] = useState<boolean>(false)

    useEffect(() => {
        
        const local = JSON.parse(localStorage.getItem("user_id") || null);

        if(local) {
            setIsLogged(true)
        }

        
    }, [])


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
                {isLogged ? 
                <NavbarItem redirect="/acount">Account</NavbarItem>
                :
                <NavbarItem redirect="/login">Sign in</NavbarItem>
                }
            </nav>
        </div>
    )
}