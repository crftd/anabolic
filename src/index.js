import React from 'react';
import { render } from 'react-dom';

import store from './store';
import Root from './containers/Root';

import './index.html';

render(
    <Root store={store}/>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/root/index', () => {
        const NewRoot = require('./containers/Root/index').default;
        render(
            <NewRoot store={store}/>,
            document.getElementById('root')
        );
    });
}