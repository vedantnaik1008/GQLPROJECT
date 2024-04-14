import React, { useState } from 'react'
import { gql, useLazyQuery } from '@apollo/client';

const GET_COUNTRY_BY_NAME = gql`
    query Country($code: ID!) {
        country(code: $code) {
            name
            capital
            emoji
            code
            currency
        }
    }
`;

const Search = () => {
    const [search, setSearch] = useState('')
    const [fetchCountry, { data, error, loading }] =
        useLazyQuery(GET_COUNTRY_BY_NAME);
        if(loading)return <p className='bg-black text-white w-full p-2'>Loading...</p>
        if (error)return <p className='bg-red-500 text-white w-full p-2'>{error.message}</p>;
  return (
      <div>
          <input
              type='text'
              placeholder='Enter Country Code (ex. BR)...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
          />
          <button
              onClick={() =>{
                  fetchCountry({
                      variables: {
                          code: search.toUpperCase()
                      }
                  });
                  search.length === 0 && <p>error</p>
              }}>
              Search
          </button>
          <div>{data && <p className='bg-black text-white w-full p-2'>{data.country?.name}</p>}</div>
      </div>
  );
}

export default Search
