import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import AboutUs from '../pages/aboutus';
import Contact from '../pages/contact';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/aboutus" exact component={AboutUs} />
    <Route path="/contact" exact component={Contact} />
  </Switch>
);

export default Routes;
