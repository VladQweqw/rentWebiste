import { ReactNode } from "react"

export default function NoContent(props: {
    children: ReactNode
}) {

   return(
        <div className="no-content">
            <h3>{props.children}</h3>
        </div>
   )
}