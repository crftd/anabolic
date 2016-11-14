/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 14.11.16
 */

import React, { Component } from 'react'

// import css as s object
import s from './menu.pcss'

import { Link } from 'react-router'

export default class Menu extends Component {
    render() {
        return (
            <div className={ s.menu }>
                <Link to="/">Main</Link>
                <Link to="test">Test</Link>
            </div>
        )
    }
}