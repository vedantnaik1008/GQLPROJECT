import React from 'react'
import { gql, useQuery } from '@apollo/client'

const QUERY_ALL_COUNTRIES = gql`
    query GetAllCountries {
        countries {
            name
            continent {
                code
                name
            }
            currency
            capital
            emoji
            emojiU
        }
    }
`;

const Home = () => {
  const {data, loading, error} = useQuery(QUERY_ALL_COUNTRIES)

  if(loading) return (
      <div className='h-screen w-full flex items-center justify-center text-blue-300 font-bold py-2 px-4 rounded-full'>
          <span>Loading...</span>
      </div>
  );

  if (error) return <p>{error.message}</p>;

  return (
      <section className='flex flex-wrap justify-start items-center gap-4 w-11/12 mx-auto py-10'>
          <p>countries: {data.countries.length}</p>
          {data &&
              data.countries.map((country) => (
                  <div className=''>
                      <p
                          key={country.name}
                          className='bg-blue-300 text-white font-bold p-2 rounded-md flex gap-2'>
                          <span>Name: {country.name},</span>
                          <span>Continent: {country.continent.name},</span>
                          <span>Capital: {country.capital},</span>
                          <span>Currency:{country.currency}</span>
                          <label>Emoji:{country.emoji}</label>
                      </p>
                  </div>
              ))}
      </section>
  );
}

export default Home
