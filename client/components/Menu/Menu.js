/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 14.11.16
 */

import React, { Component } from 'react'
import { Link } from 'react-router'

import s from './menu.pcss'

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