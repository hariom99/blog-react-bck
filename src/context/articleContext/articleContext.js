import { createContext } from 'react';

import f1 from "../../images/fitness/f2.jpg";
import f2 from "../../images/food/ff1.jpg";
import f3 from "../../images/hollywood/h4.jpg";

export const ArticlesContext = createContext();


export default function Articles(props) {
    const articlesContainer = [
        {
            img: f1,
            heading: "A visit to mumbai city after long time",
            desc: " Gujarat is vastly underrated and it's a mystery the region is'nt more well",
            type: "Travel ",
            date: " / May 11 2019"
        },
        {
            img: f2,
            heading: "We should be very careful while eating",
            desc: " junk food may be dangerous if we take it too much, so be careful in that case",
            type: "Travel ",
            date: " / May 11 2019"
        },
        {
            img: f3,
            heading: "A visit to mumbai city after long time",
            desc: " Gujarat is vastly underrated and it's a mystery the region is'nt more well",
            type: "Travel ",
            date: " / May 11 2019"
        },
        {
            img: f1,
            heading: "A visit to mumbai city after long time",
            desc: " Gujarat is vastly underrated and it's a mystery the region is'nt more well",
            type: "Travel ",
            date: " / May 11 2019"
        },
        {
            img: f2,
            heading: "A visit to mumbai city after long time",
            desc: " Gujarat is vastly underrated and it's a mystery the region is'nt more well",
            type: "Travel ",
            date: " / May 11 2019"
        },
        {
            img: f3,
            heading: "A visit to mumbai city after long time",
            desc: " Gujarat is vastly underrated and it's a mystery the region is'nt more well",
            type: "Travel ",
            date: " / May 11 2019"
        },
        {
            img: f1,
            heading: "A visit to mumbai city after long time",
            desc: " Gujarat is vastly underrated and it's a mystery the region is'nt more well",
            type: "Travel ",
            date: " / May 11 2019"
        },
    ];
    return (
        <ArticlesContext.Provider value={articlesContainer}>
            {props.children}
        </ArticlesContext.Provider>);
}

