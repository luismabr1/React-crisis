import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Committees from '../pages/Committees';
import Bicameral from '../pages/Bicameral';
import Unicameral from '../pages/Unicameral';
import Security from '../pages/Security';
import BadgeNew from '../pages/BadgeNew';
import BadgeNew2 from '../pages/BadgeNew2';
import BadgeDetails from '../pages/BadgeDetailsContainer';
import BadgeEdit from '../pages/BadgeEdit';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/comite" component={Committees} />
          <Route exact path="/comite/bicameral" component={Bicameral} />
          <Route exact path="/comite/unicameral" component={Unicameral} />
          <Route exact path="/comite/security" component={Security} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/newtwo" component={BadgeNew2} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
