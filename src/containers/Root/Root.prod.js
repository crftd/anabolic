import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

import Main from '../Main/Main';

const Root = ({ store }) => (
    <Provider store={store}>
        <Main/>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;