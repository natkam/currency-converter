import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { CurrencySelect, Result } from '../components/Calculator';

// With class-based components, it would be:
// state = {
//   amount: 0,
//   currencyFrom: 'EUR',
//   currencyTo: 'PLN',
// }
// this.setState({ currencyFrom: event.target.value }, () => { // callback (optional) })


function Calculator() {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(0);
  const [currencyFrom, setCurrencyFrom] = useState("EUR");
  const [currencyTo, setCurrencyTo] = useState("PLN");
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch('https://api.ratesapi.io/api/latest?base=PLN')
      .then(resp => resp.json())
      .then(data => {
        setCurrencies(Object.keys(data.rates))
      });
    return () => {
      // clearInterval()
      // removeEventListener()
      // etc.
    }

  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (amount && Number(amount) !== 0) {
      fetch(`https://api.ratesapi.io/api/latest?base=${currencyFrom}`)
        .then(resp => resp.json())
        .then(data => {
          setResult(`${amount * data.rates[currencyTo]} ${currencyTo}`);
        });
    }
  }
  return (
    <>
      <h1>Hello! This is a hideous currency calculator created with React.</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="number" placeholder="Amount" onChange={
            (event) => setAmount(event.target.value)} />
        </div>
        <div>
          <span>From: </span>
          <CurrencySelect
            currencies={currencies}
            currency={currencyFrom}
            setCurrency={setCurrencyFrom} />
        </div>
        <div>
          <span>To: </span>
          <CurrencySelect
            currencies={currencies}
            currency={currencyTo}
            setCurrency={setCurrencyTo} />
        </div>
        <Button type="submit">Send</Button>
      </form>
      {result && <Result result={result} />}
    </>
  );
}

export default Calculator;
