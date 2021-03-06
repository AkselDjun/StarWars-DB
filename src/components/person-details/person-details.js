import React, { Component } from 'react';

import "./person-details.css"
import SwapiService from './../../services/swapiServices';

export default class PersonDetails extends Component {

    SwapiService = new SwapiService();

    state = {
        person: null
    }

    componentDidMount() {
        this.updatePerson();
    };

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    };

    updatePerson() {
        const { personId } = this.props;
        if (!personId) {
            return;
        }

        this.SwapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({ person })
            });
    };

    render() {

        const { person } = this.state;

        if (!this.state.person) {
            return (
                <div className="person-details card">
                    <div className="card-body">
                        <h4 className="text-white">Select a character from the list</h4>
                    </div>
                </div>
            )
        }

        const { id, name, gender,
            birthYear, eyeColor } = person;

        return (
            <div className="person-details card">
                <img className="person-image"
                    alt="character"
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
                <div className="card-body">
                    <h3 className="text-white">{name}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender:</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year:</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color:</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}