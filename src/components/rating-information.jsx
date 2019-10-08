import React, { useState } from "react"


const RatingInformation = ({getQuote, isLoading}) => {
  
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
    <article>
      <h2>Rating Information</h2>
      <form onSubmit={formSubmit}>
        <div className="rating-information--form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            id="first_name"
            type="text"
            value={first_name}
            onChange={({target: {value}}) => setFirst_name(value)}
          />
        </div>
        <div className="rating-information--form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            id="last_name"
            type="text"
            value={last_name}
            onChange={({target: {value}}) => setLast_name(value)}
          />
        </div>
        <div className="rating-information--form-group">
          <label htmlFor="line_1">Address</label>
          <input
            id="line_1"
            type="text"
            value={line_1}
            onChange={({target: {value}}) => setLine_1(value)}
          />
          <label htmlFor="line_2">Line 2</label>
          <input
            id="line_2"
            type="text"
            value={line_2}
            onChange={({target: {value}}) => setLine_2(value)}
          />
          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            value={city}
            onChange={({target: {value}}) => setCity(value)}
          />
          <label htmlFor="region">Region</label>
          <input
            id="region"
            type="text"
            value={region}
            onChange={({target: {value}}) => setRegion(value)}
          />
          <label htmlFor="postal">Zip Code</label>
          <input
            id="postal"
            type="text"
            value={postal}
            onChange={({target: {value}}) => setPostal(value)}
          />
        </div>
        <button
          disabled={isLoading}
          type="submit"
        >Submit</button>
      </form>
    </article>
  )
}

export default RatingInformation;  