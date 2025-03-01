import { formatTime } from "../../assets/functions/functions";
import Button from "../../components/button";
import Section from "../../components/section";

export default function Manage() {



   return (
      <Section>
         <div className="rent-dashboard d-height">
            <header>
               <h2 className="rent-name">Floreasca 53</h2>
               <p>{formatTime().now()}</p>
            </header>

            <div className="usages">
               <Utilities />
        
            </div>

            <div className="buttons">
                  <Button
                  type="SECONDARY"
                  cb={() => {}}
                  >Delete rent</Button>

                  <Button
                  type="PRIMARY"
                  cb={() => {}}
                  >Save readings</Button>
            </div>
         </div>
      </Section>
   )
}

function Utilities() {
   return (
      <div className="utilities">
         <h2>Utilities</h2>
         <div className="utilities-grid manage-utilty">
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
         <h2>Water index: </h2>
         <div className="input">
            <input type="text" placeholder="Water index" className="input-field" />
         </div>
      </div>
   )
}

