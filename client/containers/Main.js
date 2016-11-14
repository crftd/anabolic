/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 14.11.16
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router'

class Main extends Component {
    render() {
        return (
            <div>Hello, world! <Link to="/test">/test</Link></div>
        )
    }
}

export default connect(() => ({}))(Main)