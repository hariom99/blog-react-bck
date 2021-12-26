import React from "react";
import ShareIcon from "../share-icon/share";
// import img from "../../images/home/latest-article/img1.jpg"
import "./articles.css"
import Clap from "../clap/clap"
import LatestSuggest from "../latest-suggestions/latestSuggest";


export default function ViewArticles(prop) {
    // console.log(prop.location.state);
    return (
        <>
            <div className="article-container" >
                <ShareIcon />
                <h1>{prop.location.state.heading}</h1>
                <img className="aimg" src={prop.location.state.img} alt="hii" />
                <div>{prop.location.state.desc +
                    prop.location.state.desc +
                    prop.location.state.desc
                }</div>

                <h4>{prop.location.state.type}</h4>
                <span>{prop.location.state.date}</span>
                <Clap />


            </div>
            <LatestSuggest />
        </>
    );
}