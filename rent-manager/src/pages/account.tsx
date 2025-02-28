import Button from "../components/button";
import Section from "../components/section";

import leaf from "../assets/leaf.svg";

export default function Account() {

   return (
      <Section>
         <img src={leaf} alt="decor leaft" className="background-decor leaf-1" />
         <img src={leaf} alt="decor leaft" className="background-decor leaf-2" />
         <div className="account d-height">
            {/* <FirstRun /> */}
            <UserAcccount />
         </div>
      </Section>
   )
}

function UserAcccount() {
   return (
      <div className="user-account d-height">
         <div className="user-details">
            <h2>Welcome, Vlad!</h2>
            <p>Email: vladpoienariu@gmail.com</p>
            <p>Tel: +40723382048</p>
         </div>
         <div className="rents-wrapper">
            <h2>My rent:</h2>

            <div className="rents">
               <Rent />
               <Rent />
               <Rent />
               <Rent />
            </div>
         </div>
      </div>
   )
}

function Rent() {
   return(
      <div className="rent">
         <div className="rent-image-wrapper">
            <img src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rent-image" alt="" />
         </div>
         <div className="rent-details">
            <h2>Floreasca 53</h2>
            <p>#1234123</p>
         </div>
         <div className="buttons">
            <Button 
            type="DANGER" 
            cb={() => {

            }}>Leave</Button>
             <Button 
            type="PRIMARY" 
            cb={() => {

            }}>Dashboard</Button>
         </div>
      </div>
   )
}

function FirstRun() {

   // after the person choice refresh apge and dispaly proper account page



   return (
      <div className="person-choice first-run d-height">
         <h1>Which one are you?</h1>

         <div className="cards">
            <div className="card">
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

            <div className="card">
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

