import React, { useState } from 'react';
import CurrencySelect from './CurrencySelect';

// With class-based components, it would be:
// state = {
//   amount: 0,
//   currencyFrom: 'EUR',
//   currencyTo: 'PLN',
// }
// this.setState({ currencyFrom: event.target.value }, () => { callback })


function Calculator() {
  const [amount, setAmount] = useState(0);
  const [currencyFrom, setCurrencyFrom] = useState("EUR");
  const [currencyTo, setCurrencyTo] = useState("PLN");
  return (
    <form>
      <div>
        <input type="number" placeholder="Amount" onChange={
          (event) => setAmount(event.target.value)} />
      </div>
      <div>
        <span>From: </span>
        <CurrencySelect currency={currencyFrom} setCurrency={setCurrencyFrom} />
      </div>
      <div>
        <span>To: </span>
        <CurrencySelect currency={currencyTo} setCurrency={setCurrencyTo} />
      </div>
      <div>
        <span>Result: {amount} {currencyFrom}</span>
      </div>
    </form>
  );
}

export default Calculator;
