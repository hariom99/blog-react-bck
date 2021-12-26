import React from "react";
import whtspp from ".././../images/share-icons/whtspp.png"
import fb from ".././../images/share-icons/fb.png"
import twitter from ".././../images/share-icons/twitter.png"
import instagram from ".././../images/share-icons/instagram.png"
import youtube from ".././../images/share-icons/youtube.png"
import "./share.css";


const ShareIcon = () => {
    return (
        <div className="icon" >
            <img className="icons" src={whtspp} alt="whtspp-img" />
            <img className="icons" src={fb} alt="whtspp-img" />
            <img className="icons" src={twitter} alt="whtspp-img" />
            <img className="icons" src={instagram} alt="whtspp-img" />
            <img className="icons" src={youtube} alt="whtspp-img" />
        </div>
    );
}
export default ShareIcon;