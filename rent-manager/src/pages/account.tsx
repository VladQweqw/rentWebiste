import Button from "../components/button";
import Section from "../components/section";

export default function Account() {

   return(
    <Section>
      <div className="account d-height">
         <FirstRun />
      </div>
    </Section>
   )
}

function FirstRun() {
   
   return(
      <div className="person-choice">
         <h1>Which one are you?</h1>
      
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
   )
}

