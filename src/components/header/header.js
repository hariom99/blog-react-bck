import React, { useState, createRef } from "react";
import { withRouter } from "react-router";
import "./header.css";
import icon from "./bar.png";
function Header(prop) {
    // const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("login"));
    let isLoggedIn = localStorage.getItem("login");
    // console.log(isLoggedIn);
    const navLinks = (comp) => {
        if (isLoggedIn === "true")
            prop.history.push(comp);
        else
            prop.history.push("/");
        // console.log(comp.split("/")[2]);
        if (window.innerWidth < 700) {
            toggler();
        }

    }
    // console.log(window.innerWidth);



    let refNav = createRef(null);
    let [navVisible, setNavVisible] = useState(false);

    let toggler = () => {
        // console.log(navVisible);
        if (navVisible) {
            refNav.current.style.display = "none";
            setNavVisible(() => { return !navVisible });
        }
        else {
            refNav.current.style.display = "block";
            setNavVisible(() => { return !navVisible });
        }

    }

    const logOut = (path) => {
        localStorage.setItem("login", "false");
        isLoggedIn = localStorage.getItem("login");
        // setIsLoggedIn(localStorage.getItem("login"));
        prop.history.push(path);
    }
    return <>

        <div className="header">
            <div className="header-the">
                The
            </div>
            <div className="header-siren">Siren</div>
            <span className="toggle" onClick={toggler} >
                <img className="icon" src={icon} alt="icon" />
            </span>
        </div>
        <div className="nav-links" >

            <ul>

                {/* {navVisible ? */}
                <div ref={refNav} className="nav-link-container" id="nav-link-container" >
                    <li onClick={() => navLinks("/home")} >Home</li>
                    <li onClick={() => navLinks("/category/bollywood")} >Bollywood</li>
                    <li onClick={() => navLinks("/category/technology")} >Technology</li>
                    <li onClick={() => navLinks("/category/hollywood")} >Hollywood</li>
                    <li onClick={() => navLinks("/category/fitness")} >Fitness</li>
                    <li onClick={() => navLinks("/category/food")} >Food</li>
                    {
                        (isLoggedIn === "false") ?
                            <li onClick={() => navLinks("/")} >Login/Register</li>
                            :
                            <li onClick={() => logOut("/")} >Logout</li>
                    }
                </div>
                {/* : null} */}
            </ul>
        </div>

        <hr className="header-hr" />
    </>;
}
export default withRouter(Header);
// bollywood -> /bollywood

// <Link to="/bollywood">