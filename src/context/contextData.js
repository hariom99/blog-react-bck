import NavCategories from "./context";
// import { useState } from "react";
// bollywood

import b1 from "../images/bollywood/b1.jpg"
import b2 from "../images/bollywood/b2.jpg"
import b3 from "../images/bollywood/b3.jpg"
import b4 from "../images/bollywood/b4.jpg"

// hollywood

import h1 from "../images/hollywood/h1.jpg"
import h2 from "../images/hollywood/h2.jpg"
import h3 from "../images/hollywood/h3.jpg"
import h4 from "../images/hollywood/h4.jpg"

// technology

import t1 from "../images/technology/t1.jpg"
import t2 from "../images/technology/t2.jpg"
import t3 from "../images/technology/t3.jpg"
import t4 from "../images/technology/t4.jpg"

// fitness

import f1 from "../images/fitness/f1.jpeg";
import f2 from "../images/fitness/f2.jpg";
import f3 from "../images/fitness/f3.jpg";
import f4 from "../images/fitness/f4.jpg";

// food

import ff1 from "../images/food/ff1.jpg"
import ff2 from "../images/food/ff2.jpg"
import ff3 from "../images/food/ff3.jpg"
import ff4 from "../images/food/ff4.jpg"

const BlogData = (props) => {
    let navLinkData = {
        bollywood: [
            {
                img: b1,
                blogHead: "Dia, Mirza aksed to speak out",
                blogDesc: "Recently, Dia mirza has been asked to speek out about their personal life. She accepted that and speaked out",
                type: "Bollywood",
                date: " / August 21 2020"
            },
            {
                img: b2,
                blogHead: "Bollywood is Trending now",
                blogDesc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                type: "Bollywood",
                date: " / june 21 2019"
            },
            {
                img: b4,
                blogHead: "Ranbir Kapoor did as Alia Bhatt",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Bollywood",
                date: " / may 21 2021"
            },
            {
                img: b3,
                blogHead: "Catch waves with adventure guide",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Bollywood",
                date: " / August 21 2011"
            },
            {
                img: b4,
                blogHead: "Saif reveals he is in Bunty Aur Babli 2",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Bollywood",
                date: " / August 21 2021"
            },
            {
                img: b1,
                blogHead: "Dia, Mirza aksed to speak out",
                blogDesc: "Recently, Dia mirza has been asked to speek out about their personal life. She accepted that and speaked out",
                type: "Bollywood",
                date: " / August 21 2020"
            },
            {
                img: b2,
                blogHead: "Bollywood is Trending now",
                blogDesc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                type: "Bollywood",
                date: " / june 21 2019"
            },
            {
                img: b4,
                blogHead: "Ranbir Kapoor did as Alia Bhatt",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Bollywood",
                date: " / may 21 2021"
            },
            {
                img: b3,
                blogHead: "Catch waves with adventure guide",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Bollywood",
                date: " / August 21 2011"
            },
            {
                img: b4,
                blogHead: "Saif reveals he is in Bunty Aur Babli 2",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Bollywood",
                date: " / August 21 2021"
            },
        ],
        hollywood: [
            {
                img: h4,
                blogHead: "Melissa mcarity headlines ghosbustures.",
                blogDesc: "Admittedly, we still don’t whether next summer’s reboot of Ghostbusters, with an all-female crew of stars,",
                type: "Hollywood",
                date: " / August 3 2021"
            },
            {
                img: h3,
                blogHead: "Disney officially announces frozen 2",
                blogDesc: "When any movie earns over $1.27 billion, it shouldn’t be particularly surprising when the studio eventually",
                type: "Hollywood",
                date: " / september 21 2021"
            },
            {
                img: h2,
                blogHead: "eddie redmaye to star in harry potter spinoff.",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Hollywood",
                date: " / july 21 2021"
            },
            {
                img: h1,
                blogHead: "Client eastwood directing captain sullenberger biopic",
                blogDesc: "As Warner Bros prepared to launch its next franchise with J.K. Rowling, one of this year’s",
                type: "Hollywood",
                date: " / may 21 2021"
            },
            {
                img: h4,
                blogHead: "Han solo to get hits own solo prequel",
                blogDesc: "Following the surprise runaway success of American Sniper, Clint Eastwood became an unusually hot",
                type: "Hollywood",
                date: " / August 21 2021"
            },
            {
                img: h3,
                blogHead: "Disney officially announces frozen 2",
                blogDesc: "When any movie earns over $1.27 billion, it shouldn’t be particularly surprising when the studio eventually",
                type: "Hollywood",
                date: " / september 21 2021"
            },
            {
                img: h2,
                blogHead: "eddie redmaye to star in harry potter spinoff.",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Hollywood",
                date: " / july 21 2021"
            },
            {
                img: h1,
                blogHead: "Client eastwood directing captain sullenberger biopic",
                blogDesc: "As Warner Bros prepared to launch its next franchise with J.K. Rowling, one of this year’s",
                type: "Hollywood",
                date: " / may 21 2021"
            },

        ],
        technology: [
            // {
            //     blogHead: "Work to a strict framework but then remove it",
            //     blogDesc: "just to prove that the house was properly built, but the cement mixer is left in the garden. ",
            //     type: "Technology",
            //     date: " / may 21 2021"
            // },
            {
                img: t1,
                blogHead: "Periphrastic perambulations are anathema",
                blogDesc: "Keep words short where possible, but pop in the occasional polysyllable just to help the rhythm of the words.",
                type: "Technology",
                date: " / August 21 2021"
            },
            {
                img: t2,
                blogHead: "Artificial intelligence",
                blogDesc: "Artificial intelligence (AI) is a wide-ranging branch of computer science concerned with building smart machines .",
                type: "Technology",
                date: " / july 21 2017"
            },
            {
                img: t3,
                blogHead: "Computer world  areas of IT",
                blogDesc: " including desktop, mobile, and web applications. It also provides tips and guidance to help IT managers enhance client systems",
                type: "Technology",
                date: " / August 21 2021"
            },
            {
                img: t4,
                blogHead: " InformationWeek examines the value ",
                blogDesc: " InformationWeek examines the value of tech in the digital age. The blog is designed to engage the tech community",
                type: "Technology",
                date: " / August 21 2011"
            },
            {
                img: t1,
                blogHead: "Periphrastic perambulations are anathema",
                blogDesc: "Keep words short where possible, but pop in the occasional polysyllable just to help the rhythm of the words.",
                type: "Technology",
                date: " / August 21 2021"
            },
            {
                img: t2,
                blogHead: "Artificial intelligence",
                blogDesc: "Artificial intelligence (AI) is a wide-ranging branch of computer science concerned with building smart machines .",
                type: "Technology",
                date: " / july 21 2017"
            },
            {
                img: t3,
                blogHead: "Computer world areas of IT",
                blogDesc: " including desktop, mobile, and web applications. It also provides tips and guidance to help IT managers enhance client systems",
                type: "Technology",
                date: " / August 21 2021"
            },
            {
                img: t1,
                blogHead: " InformationWeek examines the value ",
                blogDesc: " InformationWeek examines the value of tech in the digital age. The blog is designed to engage the tech community",
                type: "Technology",
                date: " / August 21 2011"
            },

        ],
        fitness: [
            {
                img: f1,
                blogHead: "Exercise is great for your brain.",
                blogDesc: "It’s linked to less depression, better memory and quicker learning. Studies also suggest that exercise is,",
                type: "Fitness",
                date: " / August 11 2015"
            },
            {
                img: f2,
                blogHead: "You might get happier.",
                blogDesc: "Countless studies show that many types of exercise, from walking to cycling, make people feel better",
                type: "Travel",
                date: " / october 21 2021"
            },
            {
                img: f3,
                blogHead: "It might make you age slower.",
                blogDesc: "Exercise has been shown to lengthen lifespan by as much as five years.",
                type: "Fitness",
                date: " / november 21 2021"
            },
            {
                img: f4,
                blogHead: "It’ll make your skin look better.",
                blogDesc: "Aerobic exercise revs up blood flow to the skin, delivering oxygen and nutrients that improve skin",
                type: "Fitness",
                date: " / August 21 2021"
            },
            {
                img: f1,
                blogHead: "Amazing things can happen in just a few minutes.",
                blogDesc: "Emerging research suggests that it doesn’t take much movement to get the benefits.",
                type: "Fitness",
                date: " / August 21 2021"
            },
            {
                img: f2,
                blogHead: "It can help you recover from a major illness.",
                blogDesc: "Even very vigorous exercise—like the interval workouts Gibala is studying—can",
                type: "Fitness",
                date: " / August 21 2021"
            },
            {
                img: f3,
                blogHead: "Your fat cells will shrink.",
                blogDesc: "The body uses both carbohydrates and fats as energy sources. But after consistent aerobic exercise training.",
                type: "Fitness",
                date: " / june 21 2021"
            },
            {
                img: f4,
                blogHead: "Why is a balanced diet important?",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Fitness",
                date: " / August 21 2021"
            },
        ],
        food: [
            {
                img: ff4,
                blogHead: "Food Policy  for Food Policy,",
                blogDesc: "A balanced diet is vital. A proper quantity of fiber, protein, and vitamin should be taken. It leads to good physical and good mental health.",
                type: "Food",
                date: " / August 21 2021"
            },
            {
                img: ff3,
                blogHead: "Why are healthy food habits important?",
                blogDesc: "Healthy food habits help in preventing various illnesses. Having organic or food containing fiber helps",
                type: "Food",
                date: " / August 21 2021"
            },
            {
                img: ff2,
                blogHead: "What help does the nutritionist/dietician do?",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Food",
                date: " / August 21 2021"
            },
            {
                img: ff1,
                blogHead: "Catch waves with adventure guide",
                blogDesc: "A dietitian or a nutritionist can help us with the adequate quantity of food we should intake in our everyday routine.",
                type: "Food",
                date: " / August 21 2021"
            },
            {
                img: ff1,
                blogHead: "Catch waves with adventure guide",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Food",
                date: " / August 21 2021"
            },
            {
                img: ff1,
                blogHead: "Catch waves with adventure guide",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Food",
                date: " / August 21 2021"
            },
            {
                img: ff2,
                blogHead: "Catch waves with adventure guide",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Food",
                date: " / August 21 2021"
            },
            {
                img: ff3,
                blogHead: "Catch waves with adventure guide",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Food",
                date: " / August 21 2021"
            },
        ],
    };

    // let navLinkData = [
    //     { bollywood: [1, 2, 3] },
    //     { hollywood: [] },
    //     { technologies: [] },
    //     { fitness: [] },
    //     { food: [] },
    // ];


    // const [ar1, setar1] = useState(navLinkData);
    // console.log(ar1);
    return (
        <NavCategories.Provider value={navLinkData} >
            {props.children}
        </NavCategories.Provider>
    );
}


export default BlogData;