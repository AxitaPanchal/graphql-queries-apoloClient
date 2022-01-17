import { useQuery, gql } from "@apollo//client";

const CATEGORY_LIST = gql`
query{
    viewer{
      categoryList{
        name
        categoryID
        description
      }   
    }
  }
`;

export const useCategory = () =>{
    const { loading, error, data } = useQuery(CATEGORY_LIST);
    console.log(" loading, error, data" , { loading, error, data } );
  return {
      data,
      loading,
       error
  }
}