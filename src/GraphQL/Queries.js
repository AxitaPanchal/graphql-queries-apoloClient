import { gql } from "apollo-boost";

const getBooks = gql`
  query($number: Int!) {
    books(number: $number) {
      name
      id
      genre
      author {
        name
      }
    }
  }
`;

const getAuthors = gql`
  query($number: Int!) {
    authors(number: $number) {
      id
      name
      age
      books {
        name
      }
    }
  }
`;

export { getBooks, getAuthors };
