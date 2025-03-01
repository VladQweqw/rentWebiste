import { formatTime } from "../../assets/functions/functions";
import Button from "../../components/button";
import Section from "../../components/section";

export default function Dashboard() {



   return (
      <Section>
         <div className="rent-dashboard d-height">
            <header>
               <h2 className="rent-name">Floreasca 53</h2>
               <p>{formatTime().now()}</p>
            </header>

            <div className="usages">
               <Utilities />
               <TotalCalculator />
            </div>

            <div className="buttons">
                  <Button
                  type="SECONDARY"
                  cb={() => {}}
                  >Contact Landlord</Button>

                  <Button
                  type="PRIMARY"
                  cb={() => {}}
                  >Send readings</Button>
            </div>
         </div>
      </Section>
   )
}

function Utilities() {
   return (
      <div className="utilities">
         <h2>Utilities</h2>
         <div className="utilities-grid">
            <Utility />
            <Utility />
            <Utility />
            <Utility />
            <Utility />
         </div>
      </div>
   )
}

function Utility() {

   return (
      <div className="utility">
         <h2>Water use</h2>
         <div className="circle">
            <div className="usage">
               <h1 className="usage-value">4</h1>
               <p className="units">m3</p>
            </div>
            <p className="aproximately-cost">~ 10.55Eur</p>
            <p className="index">Last index: 2313</p>
         </div>
      </div>
   )
}

function TotalCalculator() {

   return(
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

   return(
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