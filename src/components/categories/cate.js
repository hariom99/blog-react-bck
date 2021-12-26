import React, { useContext } from "react";
import BlogData from "../../context/contextData";
import Categories from "./categories";

export default function Cate() {
    const bdc = useContext(BlogData);
    console.log(bdc);


    return (
        <BlogData>
            <Categories />
        </BlogData>);

}



















// import React, { useContext } from "react";
// import "./category.css"
// import img1 from "../../images/home/latest-article/img1.jpg";
// // import NavCategories from "../../context/context"; "../../context/contextData";
// import NavCategories from "../../context/context";



// // import NavCategories from "../../context/context";


// export default function Categories(prop) {
//     const blogData = useContext(NavCategories);
//     const currentPage = prop.match.params.cat;
//     // console.log(blogData);
//     // console.log(currentPage);
//     console.log(blogData[currentPage]);

//     // console.log(prop.match.params.cat);
//     return (
//         <div className="category-container" >
//             {blogData[currentPage].map((val, ind) => {
//             {/* return <p key={ind}>{val.blogHead}</p> */}
//             <div key={ind} className="left-child-category" >
//                 <span className="category-heading">
//                     <span>{currentPage}</span>
//                 </span>

//                 <div className="category-card" >
//                     <img className="category-card-img" src={img1} alt="categoryimage" />
//                     <div className="category-card-text-container" >
//                         <span className="category-blog-heading">
//                             Catch waves with adventure
//                             guide
//                         </span>
//                         <p>
//                             Gujarat is vastly underrated
//                             and it's a mystery the region is'nt <br />a mystery the region is'nt
//                             more well
//                         </p>
//                         <p>
//                             <span className="category-travel" >
//                                 Travel
//                             </span>
//                             <span className="category-date">
//                                 / August 21 2021
//                             </span>
//                         </p>

//                     </div>

//                 </div>
//             </div>
//              })} 


//             <div className="right-child-category">
//                 <span>
//                     <span className="category-heading"> <span>Top</span> Posts</span>
//                 </span>
//                 <div>
//                     <img className="category-card-img-right" src={img1} alt="categoryimage" />
//                 </div>

//                 <div className="right-card-text-category">
//                     <span className="category-blog-heading-right">
//                         Catch waves with adventure
//                         guide
//                     </span>
//                     <p>
//                         Gujarat is vastly underrated
//                         and it's a mystery the region is'nt <br />a mystery the region is'nt
//                         more well
//                     </p>
//                     <p>
//                         <span className="category-travel" >
//                             Travel
//                         </span>
//                         <span className="category-date">
//                             / August 21 2021
//                         </span>
//                     </p>
//                 </div>


//                 <div className="category-card-right" >
//                     <img className="category-card-img-right-card" src={img1} alt="categoryimage" />
//                     <div className="category-card-text-container" >
//                         <span className="category-blog-heading-right-card">
//                             Catch waves with adventure
//                             guide
//                         </span>
//                         <p>
//                             Gujarat is vastly underrated
//                             and it's a mystery the region is'nt <br />a mystery the region is'nt
//                             more well
//                         </p>
//                         <p>
//                             <span className="category-travel" >
//                                 Travel
//                             </span>
//                             <span className="category-date">
//                                 / August 21 2021
//                             </span>
//                         </p>

//                     </div>

//                 </div>



//             </div>
//         </div>
//     );
// }



// {/* <div className="card-text" >
//     <span className="card-heading" >
//         Catch waves with an
//         adventure guide
//     </span>
//     <p>
//         Gujarat is vastly underrated
//         and it's a mystery the region is'nt
//         more well
//     </p>
//     <p><span className="travel-text" >Travel </span> <span className="travel-date" >/ August 21 2017</span></p>
// </div> */}