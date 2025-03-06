import { useEffect, useRef, useState } from "react";
import { formatTime } from "../../assets/functions/functions";
import Button from "../../components/button";
import Section from "../../components/section";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../components/api/useFetch";
import NoContent from "../../components/noContent";
import ErrorComponent from "../../components/error";

export default function Manage() {
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
   }, [rent_id])

   const { data, isLoading, error, call } = useFetch();

   if (data) {
      console.log(data);
   }

   return (
      <Section>
         <div className="rent-dashboard d-height">
            {data ? <>

               <header>
                  <h2 className="rent-name">Floreasca 53</h2>
                  <p>{formatTime().now()}</p>
               </header>

               <div className="usages">
                  <Utilities utilities={data?.utilities.target.utilities} />
                  <AddUtility rent_id={rent_id || ""} />
               </div>

               <div className="buttons">
                  <Button
                     type="SECONDARY"
                     cb={() => { }}
                  >Delete rent</Button>

                  <Button
                     type="PRIMARY"
                     cb={() => { }}
                  >Save readings</Button>
               </div>
            </> : ""}
         </div>
      </Section>
   )
}

function Utilities(props: {
   utilities: UtilityType[]
}) {
   return (
      <div className="utilities">
         <h2>Utilities</h2>
         <div className="utilities-grid manage-utilty">
            {props.utilities ?
               props?.utilities?.map((utility: UtilityType, index: number) => {
                  return <Utility utility={utility} key={index} />
               })
            : <NoContent>No utilities yet</NoContent>
            }
         
         </div>
      </div>
   )
}

function AddUtility(props: {
   utilities: [],
   setUtilities: (args0: any) => void,
   rent_id: string
}) {
   const form = useRef<HTMLFormElement | null>(null);

   const { data, isLoading, error, call } = useFetch();

   function add_util() {

      const new_utility = {
         name: form.current!.util_name.value,
         value: form.current!.util_init_val.value,
         price_per_unit: form.current!.util_price.value,
         currency: form.current!.util_currency.value,
         index: form.current!.util_index.value,
         units: form.current!.util_units.value,
      }
      
      call({
         url: `/rent/${props.rent_id}/utilities`,
         method: 'PUT',
         data: new_utility,
         headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
         },
      })
   }

   if(data) {
      console.log(data);
   }

   return (
      <div className="utility">
         <form
         ref={form}
         action="" className="form utilties-form">
            <div className="input">
               <input 
               name="util_name"
               id="util_name"
               type="text" 
               placeholder={"Utility Name"} 
               className="input-field" />
            </div>
            <div className="input">
               <input 
               name="util_init_val"
               id="util_init_val"
               type="text" 
               placeholder={"Utility Initial value"} 
               className="input-field" />
            </div>
            <div className="input">
               <input 
               name="util_price"
               id="util_price"
               type="text" 
               placeholder={"Utility price per unit"} 
               className="input-field" />
            </div>
            <div className="input">
               <input 
               name="util_currency"
               id="util_currency"
               type="text" 
               placeholder={"Utility currency"} 
               className="input-field" />
            </div>
            <div className="input">
               <input 
               name="util_index"
               id="util_index"
               type="text" 
               placeholder={"Index"} 
               className="input-field" />
            </div>
            <div className="input">
               <input 
               name="util_units"
               id="util_units"
               type="text" 
               placeholder={"Units"} 
               className="input-field" />
            </div>

            {error ? <ErrorComponent /> : ""}

            {
               isLoading ? 
               <Button
               type="PRIMARY"
               cb={() => {
                  
               }}
               >Loading</Button>
               : 
               <Button
               type="PRIMARY"
               cb={() => {
                  add_util()
               }}
               >Create Utility</Button>
            }
         </form>
      </div>
   )
}

function Utility(props: {
   utility: UtilityType
}) {

   return (
      <div className="utility">
         <h2>{props.utility.name} index:</h2>
         <div className="input">
            <input type="text" placeholder={`${props.utility.index}`} className="input-field" />
         </div>
      </div>
   )
}

