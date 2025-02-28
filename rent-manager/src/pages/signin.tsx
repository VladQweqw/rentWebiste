import Section from "../components/section";

import leaf from "../assets/leaf.svg";
import Button from "../components/button";
import { Link } from "react-router-dom";

export default function LoginForm() {

   return(
        <Section>
            <img src={leaf} alt="decor leaft" className="background-decor leaf-1" />
            <img src={leaf} alt="decor leaft" className="background-decor leaf-2" />

            <div className="form-wrapper d-height ht">
                <h2 className="title">Sign in</h2>

                <form className="form">
                    <div className="input">
                        <input 
                        type="email" 
                        required
                        placeholder="Your email" 
                        className="input-field" />
                    </div>

                    <div className="input">
                        <input 
                        type="password" 
                        required
                        placeholder="Password" 
                        className="input-field" />
                    </div>

                    <Button 
                    type={"PRIMARY"}
                    cb={() => {

                    }}
                    >Sign in</Button>
                    
                    <p className="option">Don't have an account? <Link to="/register">create one</Link></p>
                </form>
            </div>
        </Section>
   )
}

