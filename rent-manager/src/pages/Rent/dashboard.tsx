import { useEffect } from "react";
import { formatTime } from "../../assets/functions/functions";
import useFetch from "../../components/api/useFetch";
import Button from "../../components/button";
import Section from "../../components/section";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import NoContent from "../../components/noContent";
import Loading from "../../components/loading";
import ErrorComponent from "../../components/error";

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
            {isLoading ? <Loading /> : ""}
            {error ? <ErrorComponent /> : ""}

            {data ? <>
               <header>
                  <h2 className="rent-name">{data?.name}</h2>
                  <p>{formatTime().now()}</p>
               </header>

               <div className="usages">
                  {data?.utilities ? <Utilities utils={data?.utilities.target.utilities} /> : <NoContent>No utilities set yet!</NoContent>}
                  {data?.utilities ? <TotalCalculator utils={data?.utilities.target.utilities} /> : <NoContent>No utilities set yet!</NoContent>}
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
               <p className="units">{props.util.units}</p>
            </div>
            <p className="aproximately-cost">~ {props.util.value * props.util.price_per_unit} {props.util.currency}</p>
            <p className="index">Last index: {props.util.index}</p>
         </div>
      </div>
   )
}

function TotalCalculator(props: {
   utils: UtilityType[]
}) {

   const total_val = props.utils.reduce((acc, red) => acc + red.value, 0);
   
   function getProcent(value: number) {
      return (value * 100) / total_val;
   }

   return (
      <div className="total-calculator">
         <h2>Total</h2>

         <div className="wrapper">
            <div className="progress-bar">
               {
                  props.utils.map((util: UtilityType, index: number) => {
                     return <Progress
                     key={index}
                     name={util.name}
                     price={util.value}
                     type={util.name}
                     currency={util.currency}
                     value={getProcent(util.value)}
                     />
                  })
               }
      
            </div>
            <h3 className="total">Total: {total_val} RON</h3>
         </div>
      </div>
   )
}

function Progress(props: {
   type: string,
   value: number,
   price: number,
   name: string,
   currency: string
}) {

   return (
      <div
         style={{
            width: `${props.value}%`,
         }}

         className={`progress progress-color`}>
         <p>{props.name}</p>
         <span>{props.name} {props.price} {props.currency}</span>
      </div>
   )
}