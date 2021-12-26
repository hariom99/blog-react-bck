import React from "react";
import img1 from "../../images/home/latest/wolf.jpg";
import ShareIcon from "../share-icon/share";
import Clap from "../clap/clap";
import LatestSuggest from "../latest-suggestions/latestSuggest";

const LatestPost1 = () => {

    return (
        <>
            <div className="container-blog" >

                <ShareIcon />


                <h1>Wolf is craziest animal while eating</h1>
                <img className="posts" src={img1} alt="hii" />
                <div>
                    there is paragraph detailing about wolf. Wolf is craziest animal while eating, wolf. while eating, Stay away from it.
                    there is paragraph detailing about wolf. Wolf is craziest animal while eating, wolf. while eating, Stay away from it.

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

export default LatestPost1;