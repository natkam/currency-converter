import React from 'react';

function CurrencySelect({ currency, setCurrency }) {
  return (
    <select value={currency} onChange={(event) => setCurrency(event.target.value)}>
      <option value="EUR">EUR</option>
      <option value="CHF">CHF</option>
      <option value="GBP">GBP</option>
      <option value="USD">USD</option>
      <option value="PLN">PLN</option>
    </select>
  );
}

export default CurrencySelect;
