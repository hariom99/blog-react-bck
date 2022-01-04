import React, { useEffect, useState, } from "react"
import "./top-post.css"
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function TopPosts() {
    const [topPosts, setTopPosts] = useState([]);
    const history = useHistory()
    useEffect(() => {
        axios.post("https://sblog-app-pb.herokuapp.com/api/v1/top-posts/").then((res) => {
            // axios.post("http://localhost:8000/api/v1/top-posts/").then((res) => {
            // console.log(res.data);
            setTopPosts((prev) => res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    // let topPosts = [1, 2, 3, 4];
    return (<>
        <div className="top-post-heading" >
            <span>Top </span> Posts
        </div>
        <div className="top-post-parent" >
            <div className="top-post-img" >

            </div>
            <div className="top-post-container" >
                <div className="top-post-head-div" >

                    <img className="top-post-img2" src="https://res.cloudinary.com/practicaldev/image/fetch/s--0FRJGdyZ--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/epv55hgtsfi8csprpj9u.jpg" alt="img 2 " />
                    <div className="top-post-text" > MERN stack technology is trending </div>
                    <p className="top-post-travel" >
                        <span className="travel-text" >Technology  </span>
                        <span className="travel-date" > / July 21 2021 </span>
                    </p>
                </div>
                {/* // <Link onClick={() => history.push(data)} to={"/top-posts/:" + ind} > */}
                <div className="top-post-cards" >
                    {topPosts.map((data, ind) => {
                        return <div
                            onClick={() => history.push("/top-posts/:" + ind, data)}
                            key={ind} className="top-post-card" >

                            <div>
                                <img className="top-post-card-img" src={data.img} alt="card img" />
                            </div>


                            <div className="top-post-desc" >

                                <div className="top-post-text" > {data.blogHead}</div>

                                <p className="top-post-travel" >
                                    <span className="travel-text" >{data.type}  </span>
                                    <span className="travel-date" > {data.date} </span>
                                </p>
                            </div>


                        </div>
                        // </Link>
                    })}

                </div>
            </div>
        </div>
    </>
    );
}