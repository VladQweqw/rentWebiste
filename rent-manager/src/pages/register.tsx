import Section from "../components/section";

import leaf from "../assets/leaf.svg";
import Button from "../components/button";
import { Link } from "react-router-dom";
import useFetch from "../components/api/useFetch";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const form = useRef<HTMLFormElement | null>(null);
    const { data, isLoading, error, call } = useFetch();
    const navigate = useNavigate();

    function submit_form() {
        const credentials = {
            email: form.current!.email.value,
            name: form.current!.name.value,
            tel: form.current!.tel.value,
            password: form.current!.password.value,
        }

        
        call({
            data: credentials,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            method: "POST",
            url: "/user/register"
        })
        
        
    }

    if(data) {
        if(data?.email) {
            navigate("/login")
        }  
    }

   return(
        <Section>
            <img src={leaf} alt="decor leaft" className="background-decor leaf-1" />
            <img src={leaf} alt="decor leaft" className="background-decor leaf-2" />

            <div className="form-wrapper d-height ht">
                <h2 className="title">Sign in</h2>

                <form 
                ref={form}
                className="form">
                    <div className="input">
                        <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        placeholder="Your name" 
                        className="input-field" />
                    </div>

                    <div className="input">
                        <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        placeholder="Your email" 
                        className="input-field" />
                    </div>

                    <div className="input">
                        <input 
                        type="tel" 
                        id="tel"
                        name="tel"
                        required
                        placeholder="Phone number" 
                        className="input-field" />
                    </div>

                    <div className="input">
                        <input 
                        type="password" 
                        id="password"
                        name="password"
                        required
                        placeholder="Password" 
                        className="input-field" />
                    </div>

                    {
                        error ? 
                        <p className="danger secondary-text">An error occured</p>
                        : ""
                    }

                    {!isLoading ?
                    <Button 
                    type={"PRIMARY"}
                    cb={() => {
                        submit_form();
                    }}
                    >Create account</Button>
                    : <Button 
                    type={"PRIMARY"}
                    cb={() => {
                    }}
                    >Loading...</Button>}
                    
                    <p className="option">Already have an account? <Link to="/login">sign in</Link></p>
                </form>
            </div>
        </Section>
   )
}

