/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 14.11.16
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import Menu from '../components/Menu/Menu'

class Main extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <div>/main</div>
            </div>
        )
    }
}

export default connect(() => ({}))(Main)