import React, { useState } from "react"
import "../scss/rating-information.scss"


const RatingInformation = ({getQuote, isLoading}) => {
  
  // I think this component would actually be better as a
  // stateful component, but I figured you guys would
  // want to see the React Hooks demoed. Ask me about
  // anonymous functions and React render cycles sometime.
  
  const[first_name, setFirst_name] = useState('')
  const[last_name, setLast_name] = useState('')
  const[line_1, setLine_1] = useState('')
  const[line_2, setLine_2] = useState('')
  const[city, setCity] = useState('')
  const[region, setRegion] = useState('')
  const[postal, setPostal] = useState('')
  
  const formSubmit = (e) => {
    e.preventDefault()
    getQuote({first_name, last_name, line_1, line_2, city, region, postal})
  }

  return (
    <article className="main--section-container">
      <section className="rating-information--card">
        <h2 className="rating-information--card-title">Rating Information</h2>
        <form className="rating-information--form-container" onSubmit={formSubmit}>
          <div className="rating-information--name-container">
            <div className="rating-information--form-group">
              <label htmlFor="first_name">First Name</label>
              <input
                id="first_name"
                type="text"
                placeholder="James"
                value={first_name}
                onChange={({target: {value}}) => setFirst_name(value)}
              />
            </div>
            <div className="rating-information--form-group">
              <label htmlFor="last_name">Last Name</label>
              <input
                id="last_name"
                type="text"
                placeholder="Smith"
                value={last_name}
                onChange={({target: {value}}) => setLast_name(value)}
              />
            </div>
          </div>
          <div className="rating-information--address-block">
            <div className="rating-information--form-group">
              <label htmlFor="line_1">Address</label>
              <input
                id="line_1"
                type="text"
                placeholder="1220 Stanford Heart dr."
                value={line_1}
                onChange={({target: {value}}) => setLine_1(value)}
              />
            </div>
            <div className="rating-information--form-group">
              <label htmlFor="line_2">Line 2</label>
              <input
                id="line_2"
                type="text"
                placeholder="Apt C720"
                value={line_2}
                onChange={({target: {value}}) => setLine_2(value)}
              />
            </div>
            <div className="rating-information--form-group">
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                placeholder="Olympia"
                value={city}
                onChange={({target: {value}}) => setCity(value)}
              />
            </div>
            <div className="rating-information--form-group">
              <label htmlFor="region">Region</label>
              <input
                id="region"
                type="text"
                placeholder="WA"
                value={region}
                onChange={({target: {value}}) => setRegion(value)}
              />
            </div>
            <div className="rating-information--form-group">
              <label htmlFor="postal">Zip Code</label>
              <input
                id="postal"
                type="text"
                placeholder="98502"
                value={postal}
                onChange={({target: {value}}) => setPostal(value)}
              />
            </div>
          </div>
          <button
            className="rating-information--button"
            disabled={isLoading}
            type="submit"
          >Submit</button>
        </form>
      </section>
    </article>
  )
}

export default RatingInformation;  