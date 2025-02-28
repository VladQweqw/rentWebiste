import Button from "../components/button";
import Section from "../components/section";
import { useNavigate } from "react-router";
export default function NotFound() {
    const navigate = useNavigate();

    return (
        <Section>
            <div className="not-found d-height">
                <div>
                    <h1>Page not found - 404</h1>
                    <p>Check the URL or try again later</p>
                </div>
                <br />

                <div className="buttons">
                    <Button
                        cb={() => {
                            navigate(-1)
                        }}
                        type="PRIMARY"
                    >Go back</Button>

                    <Button
                        cb={() => {
                            location.reload()
                        }}
                        type="SECONDARY"
                    >Try again</Button>
                </div>
            </div>
        </Section>
    )
}