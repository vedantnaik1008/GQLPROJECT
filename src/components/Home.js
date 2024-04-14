import React from 'react'
import { gql, useQuery } from '@apollo/client'

const QUERY_ALL_COUNTRIES = gql`
  query GetAllCountries {
    countries {
      name
    }
  }
`

const Home = () => {
  const {data, loading, error} = useQuery(QUERY_ALL_COUNTRIES)
  if(loading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>;
  console.log(data);
  return (
    <section>
      {data && data.countries.map((country) => (
        <div className="" key={country.name}>{country.name}</div>
      ))}
    </section>
  )
}

export default Home
