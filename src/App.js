// create your App component here
import React from "react";

export default class App extends React.Component {
    contructor() {
        super()
        this.state = {
            peopleInSpace: null
        }
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json").then(res => res.json()).then(data => {
            this.setState({
                peopleInSpace: data
            })
        })
    }

    render() {
        return (
            <div>
            </div>
        )
    }

}
