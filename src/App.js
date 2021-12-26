
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Categories from './components/categories/categories';
import { Route, Switch } from "react-router-dom"
import BlogData from './context/contextData';
import ViewArticles from "./components/articles/articles"
import pageNotFound from './components/notFound/pageNotFound';
import BlogPost from './components/blogPost/blogPost';
import Post1 from './components/home/homePosts/post1';
import Post2 from './components/home/homePosts/post2';
import Post3 from './components/home/homePosts/post3';
import LatestPost1 from './components/latestPosts/latestPost1';
import LatestPost2 from './components/latestPosts/latestPost2';
import LatestPost3 from './components/latestPosts/latestPost3';
import Login from './components/login/login';
import Register from './components/login/register';

// import Cate from './components/categories/cate'


function App() {
  return (<div>
    {/* <BlogData> */}
    <Header />
    {/* </BlogData> */}

    <Switch>
      <BlogData>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/register" component={Register} />

        <Route exact path="/post1" component={Post1} />
        <Route exact path="/post2" component={Post2} />
        <Route exact path="/post3" component={Post3} />


        <Route exact path="/latest-1" component={LatestPost1} />
        <Route exact path="/latest-2" component={LatestPost2} />
        <Route exact path="/latest-3" component={LatestPost3} />

        <Route exact path="/articles/:id" component={ViewArticles} />


        <Route exact path="/category/:cat/blog/:path" component={BlogPost} />
        {/* <Route exact path="/category/hollywood/blog/:path" component={BlogPost} />
      <Route exact path="/category/fitness/blog/:path" component={BlogPost} />
      <Route exact path="/category/food/blog/:path" component={BlogPost} />
      <Route exact path="/category/technology/blog/:path" component={BlogPost} /> */}



        <Route exact path="/category/:cat" component={Categories} >

        </Route>
      </BlogData>

      <Route component={pageNotFound} />
    </Switch>

  </div>
  );
}

export default App;



  // {/*
  //   <switch>
  //   <route path="/bollywood"  component={Bollywood} exact  />
  //   </switch>
  //    */}