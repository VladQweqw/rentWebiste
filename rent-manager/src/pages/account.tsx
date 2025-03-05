import Button from "../components/button";
import Section from "../components/section";

import leaf from "../assets/leaf.svg";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import useFetch from "../components/api/useFetch";
import Loading from "../components/loading";
import ErrorComponent from "../components/error";
import NoContent from "../components/noContent";

export default function Account() {
   const navigate = useNavigate();
   const [userId, setUserId] = useState("");

   useEffect(() => {
      const user = localStorage.getItem("user") || null;
      
      if (user) {
         setUserId(user);

         call({
            url: `/user/${user}`,
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
         <img src={leaf} alt="decor leaft" className="background-decor leaf-1" />
         <img src={leaf} alt="decor leaft" className="background-decor leaf-2" />

         <div className="account d-height">
            {error ? <ErrorComponent /> : ""}
            {isLoading ? <Loading /> : ""}
            {data ?
               <div className="user-account d-height">
                  <div className="user-details">
                     <h2>Welcome, {data?.name}!</h2>
                     <p>Email: {data?.email}</p>
                     <p>Tel: {data?.phone_number}</p>

                     <div className="buttons">
                        <Button
                           type="SECONDARY"
                           cb={() => {
                              navigate('/edit')
                           }}
                        >Edit</Button>
                        <Button
                           type="DANGER"
                           cb={() => {
                              localStorage.clear();
                              navigate('/login')
                              location.reload();
                           }}
                        >Log out</Button>
                     </div>
                  </div>

                  {data.type == null ?
                     <FirstRun id={userId} />
                     : ""}

                  {
                     data?.type != null ? 
                     <Rents isLandlord={data?.type == "landlord"} rents={data?.rents} />
                     : ""
                  }

               </div>
               : <ErrorComponent />}
         </div>
      </Section>
   )
}


function AddRent() {
   const imagePreview = useRef<HTMLImageElement | null>(null);
   const { data, isLoading, error, call } = useFetch();

   const form = useRef<HTMLFormElement | null>(null)

   function create_rent() {
      const credentials = {
         name: form.current!.rent_name.value,
         landlord: localStorage.getItem("user") || "",
     }

      call({
         url: `/rent`,
         method: 'POST',
         data: credentials,
         headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
      })
   }

   
   if (data) {
      if(data.id) {
         location.reload();
      }
   }  

   return (
      <div className="rents-wrapper new-rent-wrapper">
               <h2>New rent:</h2>

               <div className="new-rent">
                  <form
                  ref={form}
                  action="" className="add-rent-form">
                     <div className="form-image">
                        <img
                           ref={imagePreview}
                           className="preview-image"
                           src="" />
                        <input
                           onChange={(e) => {
                              const file = e.target.files?.[0];

                              if (file) {
                                 const reader = new FileReader();

                                 reader.onload = function (e) {
                                    imagePreview.current!.src = e.target?.result || "";
                                 };

                                 reader.readAsDataURL(file);
                              }
                           }}
                           type="file"
                           name="image"
                           id="image"
                           className="input-field"
                           accept="image/*" />
                     </div>
                     <div className="input">
                        <input 
                        type="text" 
                        placeholder="Rent name" 
                        id="rent_name"
                        name="rent_name"
                        className="input-field" />
                     </div>
                     
                     
                     {error ? 
                     <ErrorComponent />
                     : ""}

                     {
                        isLoading ?
                        <Button
                        type="PRIMARY"
                        cb={() => {

                        }}
                        >Loading..</Button>
                        : 
                        <Button
                        type="PRIMARY"
                        cb={() => {
                           create_rent();
                        }}
                     >Create rent</Button>
                     }
                  </form>
               </div>
            </div>
   )
}

function Rents(props: {
   isLandlord: boolean,
   rents: RentType[]
}) {


   return (
      <div className="rents-wrapper">
         <h2>My rents:</h2>
         {props.rents.length > 0 ?
            <div className="rents">
               {props.rents.map((rent: RentType, index: number) => {
                  return <Rent
                     key={index}
                     isLandlord={props.isLandlord}
                     rent={rent} />
               })}
            </div>
            :
            <NoContent>No rents yet!</NoContent>}

         {props?.isLandlord ?
            <AddRent />
            : ""}
      </div>
   )
}


function Rent(props: {
   isLandlord: boolean,
   rent: RentType
}) {
   const navigate = useNavigate();
   console.log(props.rent);

   return (
      <div className="rent">
         <div className="rent-image-wrapper">
            <img src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rent-image" alt="" />
         </div>
         <div className="rent-details">
            <h2>{props.rent.name}</h2>
            <p>#{props.rent.rent_identification}</p>
         </div>
         <div className="buttons">
            {props.isLandlord ?
               <Button
                  type="SECONDARY"
                  cb={() => {
                     navigate(`/rent/1/manage`)
                  }}>Manage</Button>
               :
               <Button
                  type="DANGER"
                  cb={() => {

                  }}>Leave</Button>}
            <Button
               type="PRIMARY"
               cb={() => {
                  navigate(`/rent/1/dashboard`)
               }}>Dashboard</Button>
         </div>
      </div>
   )
}

function FirstRun(props: {
   id: string
}) {

   // after the person choice refresh apge and dispaly proper account page

   const { data, isLoading, error, call } = useFetch();



   function change_type(type: string) {
      call({
         url: `/user/${props.id}?type=${type}`,
         method: 'PUT',
         data: {},
         headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
         }
      })
   }

   if (isLoading) return <Loading />
   if (error) return <ErrorComponent />

   if (data) {
      location.reload();
   }

   return (
      <div className="person-choice first-run d-height">
         <h1>Which one are you?</h1>

         <div className="cards">
            <div
               onClick={() => {
                  change_type("tenant")
               }}
               className="card">
               <h2>Tenant</h2>
               <br />
               <ul>
                  <li>Check utilities</li>
                  <li>Send utilities to landlord</li>
                  <li>Talk to landlord</li>
                  <li>See what's happening live</li>
               </ul>

               <br />
               <Button
                  type="PRIMARY"
                  cb={() => {

                  }}
               >I am a Tenant</Button>
            </div>

            <div
               onClick={() => {
                  change_type("landlord")
               }}
               className="card">
               <h2>Landlord</h2>
               <br />
               <ul>
                  <li>Manage multiple tenants</li>
                  <li>Automatically calculate the utilities</li>
                  <li>Chat directly to tenants</li>
                  <li>Easy to use!</li>
               </ul>

               <br />
               <Button
                  type="PRIMARY"
                  cb={() => {

                  }}
               >I am a landlord</Button>
            </div>
         </div>

      </div>
   )
}

