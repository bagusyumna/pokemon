import gql from 'graphql-tag';

export const GET_TYPE_POKEMON = gql`
  query {
    pokemon(name: "ditto") {
      id
      name
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`