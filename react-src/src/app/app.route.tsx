import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Main from "./main";
import Posts from "../templates/posts";
import Pages from "../templates/pages";
import SinglePost from "../post/single.post";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/pages" component={Pages} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/pages/:slug" component={SinglePost} />
        <Route exact path="/posts/:id/:slug" component={SinglePost} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoute;
