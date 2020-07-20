import React, { Component } from 'react';

import "./item-list.css"

export default class ItemList extends Component {

    render() {
        return (
            <div className="border-list">
                <ul className="item-list list-group">
                    <li className="list-group-item">
                        <h5>Luke Skywaker</h5>
                    </li>
                    <li className="list-group-item">
                        <h5>Darth Vader</h5>
                    </li>
                    <li className="list-group-item">
                        <h5>R2-D2</h5>
                    </li>
                </ul>
            </div>
        )
    }
}