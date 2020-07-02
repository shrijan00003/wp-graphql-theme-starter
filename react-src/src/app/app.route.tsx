import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Main from "./main";
import Pages from "../templates/pages";
import Posts from "../templates/posts";
import SinglePage from "../templates/page-single";
import SinglePost from "../templates/post-single";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/pages" component={Pages} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/pages/:slug" component={SinglePage} />
        <Route exact path="/posts/:slug" component={SinglePost} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoute;
