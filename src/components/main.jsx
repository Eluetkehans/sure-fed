import React, { Component, lazy, Suspense } from "react"
import axios from "axios"
import RatingInformation from "./rating-information"
const Quote = lazy(() => import("./quote"))
import "../scss/main.scss"

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
      axios.post('/quote', body).then((res) => {
        console.log(res)
        this.setState({isLoading: false, quote: res.data.quote})
      })
    })
  }

  render() {
    return(
      <>
        <header className="main--header-container">
          <h1 className="main--header-title">Rocket Insurance? Sure!</h1>
        </header>
        <main className="main--content-container">
          {
            (!this.state.quote) ?
            <RatingInformation getQuote={this.getQuote} isLoading={this.state.isLoading} /> :
            <Suspense fallback={<span>Loading ...</span>}>
              <Quote quote={this.state.quote} />
            </Suspense>
          }
        </main>
        <footer className="main--footer"/>
      </>
    )
  }
}