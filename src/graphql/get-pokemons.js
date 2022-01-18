import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
    query {
        pokemons(limit: 20, offset: 0) {
            count
            next
            previous
            status
            message
            results {
            id
            name
            image
            }
        }
    }
`