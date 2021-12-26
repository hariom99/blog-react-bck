import React from "react";
import img1 from "../../images/home/latest/t1.jpg";
import Clap from "../clap/clap";
import LatestSuggest from "../latest-suggestions/latestSuggest";
import ShareIcon from "../share-icon/share";

const LatestPost3 = () => {

    return (
        <>
            <div className="container-blog" >

                <ShareIcon />
                <h1>Traveling is also important for happy life</h1>
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

export default LatestPost3;