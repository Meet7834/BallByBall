import React from 'react'

const CreateUser = () => {
    const handleSubmit = async(e) => {
        e.preventDefault()
        const username = e.target.username.value;
        const password = e.target.password.value;
        const battingHand = e.target.battingHand.value;
        const bowlingStyle = e.target.bowlingStyle.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const playerRole = e.target.playerRole.value;
        const dateOfBirth = e.target.dob.value;
        const user = {
            username,
            password,
            battingHand,
            bowlingStyle,
            phone,
            email,
            playerRole,
            dateOfBirth
        }
        const response = await fetch('http://localhost:8080/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const data = await response.json()
        console.log(data)
    }



    return (
        <>
            <h1>User</h1>
            <p>API to manage users</p>
            <form action="handleSubmit">
                <input type="text" name="username" id="username" placeholder="Username" />
                <br />
                <input type="password" name="password" id="password" placeholder="Password" />
                <br />
                <input type="number" name='phone' id='phone' placeholder='Phone' />
                <br />
                <input type="email" name='email' id='email' placeholder='johndoe@gmail.com' />
                <br />
                <select name="playerRole" id="playerRole">
                    <option value="batsman">Batsman</option>
                    <option value="bowler">Bowler</option>
                    <option value="all-rounder">All-Rounder</option>
                    <option value="wicket-keeper">Wicket Keeper</option>
                </select>
                <br />
                <select name="batting-hand" id="battingHand">
                    <option value="right">Right</option>
                    <option value="left">Left</option>
                </select>
                <select name="bowling-style" id="bowlingStyle">
                    <option value="raf">Right Arm Fast</option>
                    <option value="ram">Right Arm Medium</option>
                    <option value="rlo">Right Arm Leg Spin</option>
                    <option value="rso">Right Arm Off Spin</option>
                    <option value="laf">Left Arm Fast</option>
                    <option value="lam">Left Arm Medium</option>
                    <option value="sla">Left Arm Orthodox</option>
                </select>
                <br />
                <input type="date" name="dateOfBirth" id="dob" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </>
    )
}

export default CreateUser