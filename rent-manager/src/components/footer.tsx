import NavbarItem from "./navbarItem";

export default function Footer() {

    return(
     <div className="footer">
         <div className="logo">
             <h3>Logo</h3>
         </div>
 
         <nav className="nav">
             <NavbarItem redirect="/faq">FAQ</NavbarItem>
             <NavbarItem redirect="/terms">Terms</NavbarItem>
         </nav>
     </div>
    )
}
