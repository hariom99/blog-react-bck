import React from "react";
import img1 from "../../images/home/latest/f1.jpg";
import Clap from "../clap/clap";
import LatestSuggest from "../latest-suggestions/latestSuggest";
import ShareIcon from "../share-icon/share";

const LatestPost2 = () => {

    return (
        <>
            <div className="container-blog" >
                <ShareIcon />
                <h1>Fitness is the key for healthy life</h1>
                <img className="posts" src={img1} alt="hii" />
                <div>
                    here is paragraph detailing about current blog. There is something you don't know about it. But You should know about it.
                    here is paragraph detailing about current blog. There is something you don't know about it. But You should know about it.
                    here is paragraph detailing about current blog. There is something you don't know about it. But You should know about it.
                </div>
                <br />
                <h4>Travel</h4>
                <span> / August 21 2021</span>


                <Clap />

            </div>
            <LatestSuggest />
        </>
    );
}

export default LatestPost2;