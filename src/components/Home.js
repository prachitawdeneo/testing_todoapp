import React, { Component } from 'react'

export class Home extends Component {
    constructor(props){
        super(props)
        this.state={count:0}
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
        return (
            <div>
                <h2> Counter</h2>
                <p>{this.state.count}</p>
                <button onClick={this.increment}>Click Here</button>
            </div>
        )
    }
}

export default Home
