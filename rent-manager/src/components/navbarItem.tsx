import { useNavigate } from "react-router"

export default function NavbarItem(props: {
    children: React.ReactNode,
    redirect: string
}) {
    const navigate = useNavigate();

   return(
    <div 
    onClick={() => {
        navigate(props.redirect)
    }}
    className="nav-item">
        {props.children}
    </div>
   )
}