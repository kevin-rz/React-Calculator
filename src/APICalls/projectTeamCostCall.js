import React, {Component, useState} from 'react';
import ProjectTeamComponent from '../Components/projectTeamCost';

class projectTeamCost extends Component {
    render() {
        return (
            <ProjectTeamComponent breweries={this.state.prices} />
        )
    }

    state = {
        prices: [],
    };

    componentDidMount() {
        fetch('https://api.openbrewerydb.org/breweries/')
            .then(res => res.json())
            .then((data) => {
                this.setState({ prices: data })
            })
            .catch(console.log)
    }
}

export default projectTeamCost