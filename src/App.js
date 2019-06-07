// create your App component here
import React, {PureComponent} from 'react'

export default class App extends PureComponent {
    render() {
        return(
            <div>

            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(obj => {
            return obj
        })
    }
}