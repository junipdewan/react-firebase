import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_COUNTRIES = gql `
query {
	Country {
    name
    area
    nativeName
  }
}
`


const showCountries = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  
  return(
    <div>
      { !loading &&
        data.Country.map((country , i) =>{
          return(
          <li key={i}>{country.name} ---- {country.nativeName} --- {country.area}</li>
          )
        })
      }
    </div>
  )
}

export default showCountries;