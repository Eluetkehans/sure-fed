import React, { Component } from "react"
import RatingInformation from "./rating-information"
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
        <header><h1>Rocket Insurance? Sure!</h1></header>
        <main>
          <RatingInformation />
        </main>
        <footer>footer</footer>
      </>
    )
  }
}