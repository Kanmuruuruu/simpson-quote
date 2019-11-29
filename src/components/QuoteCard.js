import React from 'react';
import './QuoteCard.css';

function QuoteCard({character,img,quote}){
    return (
        <figure className="QuoteCard">
            <img
                src={img}
                alt={character}/>
                <figcaption>
                    <blockquote>
                        {quote}
                    </blockquote>
                    <cite>{character}</cite>
                </figcaption>
        </figure>
    );
}

export default QuoteCard;
