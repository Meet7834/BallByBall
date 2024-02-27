"use client";
import { useState } from 'react';

const RegisterForm = () => {

    const [name, setName] = useState("");
    const[phone, setPhone] = useState("");
    const[password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!name || !phone || !password) {
            console.log("All feilds are nessecary");
            return;
        }

        try {
            const res = await fetch("http://localhost:8080/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    name, phone, password
                }),
            });

            if(res.ok) {
                const form = e.target;
                form.reset();
            } else{
                console.log("User registration failed");
            }
        } catch (error) {
            console.log("error during registration: ", error);
        }
    }

    // console.log("Name => " + name);
    // console.log("Phone Number => " + phone);
    // console.log("Password => " + password);

    return (
        <div>
            Register form
            <form action="" onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder='Name'/>

                <br />
                <input
                    onChange={(e) => setPhone(e.target.value)}
                    type="number"
                    placeholder='number'/>
                <br />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder='password' />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default RegisterForm