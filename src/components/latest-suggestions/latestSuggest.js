import React from "react";
import wolf from "../../images/home/latest/wolf.jpg"
import f1 from "../../images/fitness/f1.jpeg"
import t1 from "../../images/technology/t1.jpg"

const LatestSuggest = () => {
    return (
        <>
            <h2>More Articles</h2>
            <div className="latest-card-parent" >


                <div className="latest-card" >
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


                <div className="latest-card" >
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


                <div className="latest-card" >
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
        </>
    );
}


export default LatestSuggest