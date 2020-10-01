import React, { Component } from 'react'


export default class Test extends Component {
  constructor(props) {
    super(props)

    this.state = {
       name: "Marcus"
    }
  }

  handleClick = () => {
    console.log("click")
    console.log(this.state.name)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>This is a test</button>
      </div>
    )
  }
}

