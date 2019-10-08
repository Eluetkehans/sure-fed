import React, { Component } from "react"
import axios from "axios"
import RatingInformation from "./rating-information"
import "../scss/main.scss"

const API_ENDPOINT = 'https://fed-challenge.sure.now.sh/api/v1/quotes'

export default class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      quote: null
    }
  }

  getQuote = ({first_name, last_name, line_1, line_2, city, region, postal}) => {
    this.setState({isLoading: true}, () => {
      const body = {
        first_name,
        last_name,
        address: {
          line_1,
          line_2,
          city,
          region,
          postal
        }
      }
      axios.post(API_ENDPOINT, body).then((res) => {
        console.log(res)
        this.setState({isLoading: false, quote: res.data})
      })
    })
  }

  render() {
    return(
      <>
        <header><h1>Rocket Insurance? Sure!</h1></header>
        <main>
          <RatingInformation getQuote={this.getQuote} isLoading={this.state.isLoading} />
        </main>
        <footer>footer</footer>
      </>
    )
  }
}