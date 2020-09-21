import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from'./pages/Home';
import Detail from'./pages/Detail';
import Edit from'./pages/Edit';
import newDoctor from'./pages/Register';

const Routes = () => (
<BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/doctor/:id" component={Detail}/>
        <Route path="/doctor/:id/edit" component={Edit}/>
        <Route path="/newDoctors" component={newDoctor}/>
    </Switch>
</BrowserRouter>
);

export default Routes;