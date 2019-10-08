import React, { Component } from "react"
import "../scss/main.scss"

export default class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return(
      <>
        <header>header</header>
        <main>main</main>
        <footer>footer</footer>
      </>
    )
  }
}