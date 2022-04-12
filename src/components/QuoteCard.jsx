import React from 'react';

function QuoteCard({ simpson }) {
  const { quote, character, image } = simpson;
  return (
    simpson && (
  <figure className="QuoteCard">
    <img src={image} alt={character} />
    <figcaption>
      <blockquote>{quote}</blockquote>
      <cite>{character}</cite>
    </figcaption>
  </figure>
    )
  )
}
export default QuoteCard;
