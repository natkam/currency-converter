import React from 'react';

function CurrencySelect({ currencies, currency, setCurrency }) {
  return (
    <select value={currency} onChange={(event) => setCurrency(event.target.value)}>
      {currencies.map((elem) =>
        <option key={`curr-${elem}`} value={elem}>{elem}</option>)}
    </select>
  );
}

export default CurrencySelect;
