import React from 'react'
import { useQuery, gql } from "@apollo/client";
const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;
const handleChange = () => { 
console.log("handlechnage");
}
const FilmQueries = () => {
    const { data, loading, error } = useQuery(EXCHANGE_RATES);
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    return data.rates.map(({ currency, rate , __typename }) => (
    <div key={currency}>
      <input onChange={handleChange} value={currency}>
        {/* {currency}: {rate} : {__typename} */}
      </input>
    </div>
  ));
}

export default FilmQueries
