import React from "react";
import "./latest.css"
import wolf from "../../../images/home/latest/wolf.jpg"
import f1 from "../../../images/home/latest/f1.jpg";
import t1 from "../../../images/home/latest/t1.jpg";
import { withRouter } from "react-router";


function Latest(props) {
    const pushLatestPost = (path) => {
        props.history.push(path);
    }

    return (

        <div className="latest-parent" >
            <div className="latest-heading" ><span>The </span> Latest</div>

            <div className="latest-card-parent" >


                <div onClick={() => pushLatestPost("/latest-1")} className="latest-card" >
                    <img className="latest-card-img" src={wolf} alt="" />
                    <div className="latest-card-text" >
                        <span className="blog-heading" >
                            Wolf is craziest animal while eating</span>
                        <p>there is paragraph detailing about
                            wolf. Wolf is craziest animal while eating,
                            wolf. while eating,
                            Stay away from it.
                        </p>
                        <p><span className="travel-text" >Travel </span> <span className="travel-date" >/ August 21 2017</span></p>
                    </div>
                </div>


                <div onClick={() => pushLatestPost("/latest-2")} className="latest-card" >
                    <img className="latest-card-img" src={f1} alt="" />
                    <div className="latest-card-text" >
                        <span className="blog-heading" >
                            Fitness is the key for healthy life</span>
                        <p>there is paragraph detailing about
                            current blog. There is something you
                            don't know about it. But You should know about it.
                        </p>
                        <p><span className="travel-text" >Travel </span> <span className="travel-date" >/ August 21 2017</span></p>
                    </div>
                </div>


                <div onClick={() => pushLatestPost("/latest-3")} className="latest-card" >
                    <img className="latest-card-img" src={t1} alt="" />
                    <div className="latest-card-text" >
                        <span className="blog-heading" >
                            Traveling is also important for happy life</span>
                        <p>there is paragraph detailing about
                            current blog. There is something you
                            don't know about it. But You should know about it.
                        </p>
                        <p><span className="travel-text" >Travel </span> <span className="travel-date" >/ August 21 2017</span></p>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default withRouter(Latest);