import { useQuery, gql } from "@apollo//client";

const CHARACTER_LIST = gql`
query {
  characters {
    results {
      id
      name
      image
    }
  }
}
`;

const CHARACTER_BY_ID = gql`
query GetCharacter($id : ID!){
    character(id : $id){ 
      id
      name
      image
      episode{
      name
        episode   
    }
    }
   }
`

export const useCharacter = () =>{
    const { loading, error, data } = useQuery(CHARACTER_LIST);
  return {
      data,
      loading,
       error
  }
}

export const useCharacterByID = (id) => {
    const  { loading, error, data } = useQuery(CHARACTER_BY_ID , {
        variables :{ id }
    });
    return {
        data, loading , 
        error
    }
}