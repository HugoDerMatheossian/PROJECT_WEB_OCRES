import React from "react";
import './css/Quotes.css';

function Quotes({ quote }) {

    return (

        <div className="quotes">
            <div className="quote">

                <u><h1>Random Anime Quotes</h1></u>
                <div className="anime" title={quote.anime}>
                    {quote.anime}
                </div>
                <blockquote>
                    {quote.quote}
                </blockquote>
                <div className="character" title={quote.character}>
                    {quote.character}
                </div>

            </div>

        </div>
    )
}

export default Quotes
