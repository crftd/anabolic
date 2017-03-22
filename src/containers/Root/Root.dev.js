import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import DevTools from '../devTools';

import Main from '../Main/Main';

const Root = ({ store }) => (
    <Provider store={store}>
        <div>
            <Main/>
            <DevTools/>
        </div>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;