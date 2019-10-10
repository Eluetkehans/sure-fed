import React, {useState} from "react"
import "../scss/quote.scss"

const usdFormatter = new Intl.NumberFormat('en-US', { style: 'currency',  currency: 'USD' })

const Quote = (({quote}) => {
  const[selection, setSelection] = useState('deductible')
  return (
    <article className="main--section-container">
      <h2 className="quote--title">Quote Overview</h2>
      <section className="quote--card">
        {/* It is better to use an <img /> tag pointing to a cdn,
        but I wanted your rocket, darn it! :) */}
        <div className="quote--rocket">🚀</div>
        <div className="quote--content-container">
          <div className="quote--results-row">
            <span>Premium:</span><span>{usdFormatter.format(quote.premium)}</span>
          </div>
          <div className="quote--results-row">
            <select onChange={(e) => setSelection(e.target.value)}>
              <option value="deductible">Deductable</option>
              <option value="asteroid_collision">Astroid Collision Limit</option>
            </select>
            <span>{usdFormatter.format(quote.variable_selections[selection])}</span>
          </div>
        </div>
      </section>
    </article>
  )
})

export default Quote