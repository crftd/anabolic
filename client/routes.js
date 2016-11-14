/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 14.11.16
 */

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Main from './containers/Main'
import Test from './containers/Test'

export default (
    <Route path='/'>
        <IndexRoute component={Main}/>
        <Route path="test" component={Test}/>
    </Route>
);