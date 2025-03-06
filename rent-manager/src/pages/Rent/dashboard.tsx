import { useEffect } from "react";
import { formatTime } from "../../assets/functions/functions";
import useFetch from "../../components/api/useFetch";
import Button from "../../components/button";
import Section from "../../components/section";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import NoContent from "../../components/noContent";

export default function Dashboard() {
   const navigate = useNavigate();


   const { rent_id } = useParams();

   useEffect(() => {
      const user = localStorage.getItem("user") || null;

      if (user && rent_id) {


         call({
            url: `/rent/${rent_id}`,
            method: 'GET',
            data: {},
            headers: {
               "Content-Type": "application/json"
            },
         })
      } else {
         navigate("/login")
      }
   }, [])

   const { data, isLoading, error, call } = useFetch();

   if (data) {
      console.log(data);
   }

   return (
      <Section>
         <div className="rent-dashboard d-height">
            {data ? <>

               <header>
                  <h2 className="rent-name">{data?.name}</h2>
                  <p>{formatTime().now()}</p>
               </header>

               <div className="usages">
                  {data?.utilities ? <Utilities utils={data?.utilities} /> : <NoContent>No utilities set yet!</NoContent>}
                  {data?.utilities ? <TotalCalculator utils={data?.utilities} /> : <NoContent>No utilities set yet!</NoContent>}
               </div>

               <div className="buttons">
                  <Button
                     type="SECONDARY"
                     cb={() => { }}
                  >Contact Landlord</Button>

                  <Button
                     type="PRIMARY"
                     cb={() => { }}
                  >Send readings</Button>
               </div>

            </> : ""}
         </div>
      </Section>
   )
}

function Utilities(props: {
   utils: UtilityType[]
}) {
   return (
      <div className="utilities">
         <h2>Utilities</h2>
         <div className="utilities-grid">
            {
               props.utils.map((util: UtilityType, index: number) => {
                  return  <Utility 
                  key={index}
                  util={util} />
               })
            }
         </div>
      </div>
   )
}

function Utility(props: {
   util: UtilityType
}) {

   return (
      <div className="utility">
         <h2>{props.util.name}</h2>
         <div className="circle">
            <div className="usage">
               <h1 className="usage-value">{props.util.value}</h1>
               <p className="units">completat</p>
            </div>
            <p className="aproximately-cost">~ {props.util.value * props.util.price_per_unit} {props.util.currency}</p>
            <p className="index">Last index: 2313</p>
         </div>
      </div>
   )
}

function TotalCalculator() {

   return (
      <div className="total-calculator">
         <h2>Total</h2>

         <div className="wrapper">
            <div className="progress-bar">
               <Progress name={"Ethernet"} price={23} type="ethernet" value={5} />
               <Progress name={"Gas"} price={23} type="gas" value={20} />
               <Progress name={"Water"} price={23} type="water" value={20} />
               <Progress name={"Rent"} price={23} type="rent" value={55} />
            </div>
            <h3 className="total">Total: 333 Euro</h3>
         </div>
      </div>
   )
}

function Progress(props: {
   type: string,
   value: number,
   price: number,
   name: string,
}) {

   return (
      <div
         style={{
            width: `${props.value}%`,
         }}

         className={`progress ${props.type}`}>
         <p>{props.name}</p>
         <span>{props.name} {props.price} Euro</span>
      </div>
   )
}