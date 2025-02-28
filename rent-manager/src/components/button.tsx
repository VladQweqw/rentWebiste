
export default function Button(props: {
    children: React.ReactNode,
    type: "PRIMARY" | "SECONDARY" | "DANGER",
    cb: () => void
}) {

   return(
    <button 
    onClick={props.cb}
    className={`button ${props.type}`}
    >{props.children}</button>
   )
}