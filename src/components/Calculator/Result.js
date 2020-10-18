import React from 'react';

function Result({ result, currency }) {
  if (result !== 0) {
    return (
      <span>Result: {result} {currency}</span>
    )
  }
  return null
}

export default Result;
