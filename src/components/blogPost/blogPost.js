import React, { useContext } from "react";
// import img from "../../images/home/latest-article/img1.jpg"
import Clap from "../clap/clap";
import ShareIcon from "../share-icon/share";
import "./blogPost.css";
import NavCategories from "../../context/context"


export default function BlogPost(prop) {
    // console.log(prop);
    // console.log(prop.location.state.img);
    const blogData = useContext(NavCategories);
    // console.log(blogData[prop.location.pathname.split("/")[2]]);
    const suggestArticle = blogData[prop.location.pathname.split("/")[2]];
    // console.log(suggestArticle);
    return (
        <>
            <div className="container-blog" >
                <ShareIcon />
                <h1>{prop.location.state.blogHead}</h1>
                <img className="bimg" src={prop.location.state.img} alt="hii" />
                <div>{prop.location.state.blogDesc +
                    prop.location.state.blogDesc +
                    prop.location.state.blogDesc
                }</div>
                <br />
                <h4>{prop.location.state.type}</h4>
                <span>{prop.location.state.date}</span>
                <Clap />
            </div>
            <div>
                <h2>More From {prop.location.pathname.split("/")[2]}</h2>
                <div className="suggested-articles" >
                    {suggestArticle.map((data, ind) => {
                        if (ind >= 4 || ind === 2)
                            return null;
                        return (
                            <div key={ind} className="latest-card" >

                                <img className="latest-card-img" src={data.img} alt="" />
                                <div className="latest-card-text" >
                                    <span className="blog-heading" >
                                        {data.blogHead}
                                    </span>
                                    <p>
                                        {data.blogDesc}
                                    </p>
                                    <p><span className="travel-text" >{data.type} </span> <span className="travel-date" >{data.date}</span></p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    );
}