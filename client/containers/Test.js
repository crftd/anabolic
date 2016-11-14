/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 14.11.16
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

class Test extends Component {
    render() {
        return (
            <div>Test, world!</div>
        )
    }
}

export default connect(() => ({}))(Test)