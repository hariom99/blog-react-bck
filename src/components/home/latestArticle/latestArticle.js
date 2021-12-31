import axios from "axios";
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import "./latestArticle.css"


function LatestArticle(props) {
    let [art, setArt] = useState([]);
    const [count, setCount] = useState(3);
    useEffect(() => {
        const getData = () => {
            // axios.post("http://localhost:8000/api/v1/home-articles").then((res) => {
            axios.post("https://blog-app-pb.herokuapp.com/api/v1/home-articles/").then((res) => {
                setArt(res.data);
            }).catch((error) => {
                console.log(error);
            })
        }
        if (art.length === 0)
            getData();
    }, [art]);
    // console.log(articles[0]);
    const loadMore = () => {
        setCount(() => {
            return count + 3;
        })

    }
    // console.log(art);
    const viewArticle = (id, ob) => {

        props.history.push(`/articles/${id}`, ob);
    }

    return (
        <div className="latest-article-parent" >
            <div className="latest-article-heading" >
                <span>Latest </span>
                Articles
            </div>
            <div className="latest-article-container" >
                <div className="card-container-lac">

                    {art.map((val, ind) => {

                        if (ind >= count) {
                            return null;
                        }

                        return <div onClick={() => viewArticle(ind, val)} className="card" key={ind} >
                            <img className="lac-img" src={val.img} alt="" />
                            <div className="card-text" >
                                <span className="card-heading" >
                                    {val.heading}
                                </span>
                                <p>
                                    {val.desc}
                                </p>
                                <p><span className="travel-text" >{val.type} </span> <span className="travel-date" >{val.date}</span></p>
                            </div>
                        </div>

                    })}
                    <div className="load-more-articles" onClick={loadMore} >Load More &#8595;</div>
                </div>
                <div className="advertisement" >
                    <p> Advertisement</p>
                </div>

            </div>
        </div>);
}

export default withRouter(LatestArticle);