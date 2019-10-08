import React, { useState } from "react"

const RatingInformation = (props) => {

  const[first_name, setFirst_name] = useState('')
  const[last_name, setLast_name] = useState('')
  const[line_1, setLine_1] = useState('')
  const[line_2, setLine_2] = useState('')
  const[city, setCity] = useState('')
  const[region, setRegion] = useState('')
  const[postal, setPostal] = useState('')

  return (
    <article>
      <h2>Rating Information</h2>
      <form>
        <div className="rating-information--form-group">
          <label htmlFor="first_name">First Name</label>
          <input id="first_name" type="text" value={first_name} onChange={setFirst_name}/>
        </div>
        <div className="rating-information--form-group">
          <label htmlFor="last_name">Last Name</label>
          <input id="last_name" type="text" value={last_name} onChange={setLast_name}/>
        </div>
        <div className="rating-information--form-group">
          <label htmlFor="line_1">Address</label>
          <input id="line_1" type="text" value={line_1} onChange={setLine_1} />
          <label htmlFor="line_2">Line 2</label>
          <input id="line_2" type="text" value={line_2} onChange={setLine_2} />
          <label htmlFor="city">City</label>
          <input id="city" type="text" value={city} onChange={setCity} />
          <label htmlFor="region">Region</label>
          <input id="region" type="text" value={region} onChange={setRegion} />
          <label htmlFor="postal">Zip Code</label>
          <input id="postal" type="text" value={postal} onChange={setPostal} />
        </div>
        <button>Submit</button>
      </form>
    </article>
  )
}

export default RatingInformation;  