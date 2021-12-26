import React from "react"
import "./top-post.css"
import img2 from "../../../images/home/top-posts/img2.jpg"

export default function TopPosts() {
    let topPosts = [1, 2, 3, 4];
    return (<>
        <div className="top-post-heading" >
            <span>Top </span> Posts
        </div>
        <div className="top-post-parent" >
            <div className="top-post-img" >

            </div>
            <div className="top-post-container" >
                <div>
                    <img className="top-post-img2" src={img2} alt="img 2 " />
                    <div className="top-post-text" > Catch waves an adventure guide</div>
                    <p className="top-post-travel" >
                        <span className="travel-text" >Travel  </span>
                        <span className="travel-date" > / August 21 2021 </span>
                    </p>
                </div>
                <div className="top-post-cards" >
                    {topPosts.map((data, ind) => {
                        return <div key={ind} className="top-post-card" >

                            <div>
                                <img className="top-post-card-img" src={img2} alt="card img" />
                            </div>


                            <div className="top-post-desc" >

                                <div className="top-post-text" > Catch waves an adventure guide</div>

                                <p className="top-post-travel" >
                                    <span className="travel-text" >Travel  </span>
                                    <span className="travel-date" > / August 21 2021 </span>
                                </p>
                            </div>


                        </div>
                    })}

                </div>
            </div>
        </div>
    </>
    );
}