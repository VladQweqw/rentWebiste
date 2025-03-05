import Section from "../components/section";

import leaf from "../assets/leaf.svg";
import Button from "../components/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import useFetch from "../components/api/useFetch";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const form = useRef<HTMLFormElement | null>(null);
    const { data, isLoading, error, call } = useFetch();
    const navigate = useNavigate();

    function submit_form() {
        const credentials = {
            email: form.current!.email.value,
            password: form.current!.password.value,
        }


        call({
            data: credentials,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            method: "POST",
            url: "/user/login"
        })


    }

    if (data) {
        if(data?.email) {
            navigate("/")            
            localStorage.setItem("user", data?.id) // set the global state
        } 
    }

    return (
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
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="Your email"
                            className="input-field" />
                    </div>

                    <div className="input">
                        <input
                            type="password"
                            required
                            name="password"
                            id="password"
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
                        >Login</Button>
                        : <Button
                            type={"PRIMARY"}
                            cb={() => {
                            }}
                        >Loading...</Button>}

                    <p className="option">Don't have an account? <Link to="/register">create one</Link></p>
                </form>
            </div>
        </Section>
    )
}

