"use client";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { FormEvent, useState } from "react";

export default function SigninForm() {
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoader(
            <div className="loader-wrapper">
                <div className="loader"></div>
            </div>
        );
    
        if (!executeRecaptcha) {
            console.log("not available to execute recaptcha")
            return;
        }
    
        const gRecaptchaToken = await executeRecaptcha('inquirySubmit');
        
        const response = await fetch("/api/recaptchaSubmit", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: gRecaptchaToken }),
        });
        
    
        const data = await response.json();
    
        if (data?.success === true) {
            setLoader(null)
            setFormData(
                <div className="message">
                    <h1>Sign in successful!</h1>
                    <small>You will be redirected.</small>
                </div>
            );

            setTimeout(() => {
                window.location.href = "/dashboard";
            }, 2000);
        } else {
            setLoader(null);
            setFormData(
                <div className="message">
                    <h1>Sign in failed!</h1>
                    <small>{data.message}</small>
                </div>
            );

            setTimeout(() => {
                window.location.href = "/home";
            }, 2000);
        }
    }

    const [loader, setLoader] = useState<JSX.Element | null>(null);
    const [formData, setFormData] = useState(
        <div className="default">
            <label htmlFor="username">Username</label>
            <input
                id="username"
                name="username"
                type="text"
                placeholder="Username"
            />

            <br></br>

            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
            />

            <br></br>
            <input type="submit" value="Sign In" />
        </div>
    );

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                {formData}
                {loader}
            </form>
        </div>
    );
}