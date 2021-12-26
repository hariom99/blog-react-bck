import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Register = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [status, setStatus] = useState(null);
    const registerUser = () => {
        const user = { userName, userEmail, userPassword }
        axios.post("https://blog-app-pb.herokuapp.com/api/v1/register-user/",
            user).then((res) => {
                setStatus(res.data);

                // console.log(res.data);
            }).catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="login-container">
            <h1>Register </h1>
            <label htmlFor="name" > Name : </label>
            <input
                name="name"
                onChange={(e) => setUserName(e.target.value)}
                id="name"
                type="name"
                placeholder="name" />

            <br />
            <br />
            <label htmlFor="email" > Email : </label>
            <input
                name="email"
                onChange={(e) => setUserEmail(e.target.value)}
                id="email"
                type="email"
                placeholder="email" />
            <br />
            <br />
            password : <input
                type="password"
                onChange={(e) => setUserPassword(e.target.value)}
                placeholder="password"
            />
            <br />
            <br />
            <button className="btn-lr" onClick={registerUser} >Register</button>
            <br />
            {status}
            {/* <p>new user ? <Link to="/register" >Click here to Login</Link> </p> */}
            <p>already registered <Link to="/" >Click here to Login</Link> </p>
        </div>
    );
}

export default Register;