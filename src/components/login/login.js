import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logMessage, setLogMessage] = useState();
    let history = useHistory();
    // console.log(history);

    const login = () => {
        const auth = { email, password };
        // console.log(auth);
        axios.post("https://blog-app-pb.herokuapp.com/api/v1/login/",
            auth).then((res) => {
                // console.log(res);
                if (res.data === "SUCCESS") {
                    localStorage.setItem("login", "true");
                    setLogMessage("Login Success");
                    history.push("/home");
                }
                else if (res.data === "NOT_REGISTERED") {
                    setLogMessage("Not Registered");
                }
                else if (res.data === "LOGIN_FAILED") {
                    setLogMessage("Invalid username/password");
                }
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="login-container">
            <h1>Login </h1>
            <label htmlFor="email" > Email : </label>
            <input
                name="email"
                onChange={(t) => setEmail(t.target.value)}
                id="email"
                type="email"
                placeholder="email" />
            <br />
            <br />
            password : <input
                type="password"
                onChange={(t) => setPassword(t.target.value)}
                placeholder="password"
            />
            <br />
            <br />
            <button className="btn-lr" onClick={login} >Login</button>
            <br />
            {logMessage}
            <p>new user ? <Link to="/register" >Click here to Register</Link> </p>
            {/* <p>already registered <Link>Click here to Login</Link> </p> */}
        </div>
    );
}

export default Login;