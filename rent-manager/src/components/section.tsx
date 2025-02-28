
export default function Section(props: {
    children: React.ReactNode
}) {

   return(
    <section className="section p-5">
        {props.children}
    </section>
   )
}