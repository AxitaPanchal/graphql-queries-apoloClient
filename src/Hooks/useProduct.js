import { useQuery, gql, useMutation } from "@apollo//client";

const PRODUCT_LIST = gql`
  query {
    viewer {
      product {
        name
        productID
        supplierID
        categoryID
        quantityPerUnit
      }
    }
  }
`;

const CREATE_PRODUCT = gql`
  mutation CreateProduct($name : String! ,$quantityPerUnit : String! ){
record(name: $name ,quantityPerUnit: $quantityPerUnit ){
    name
    quantityPerUnit
}
  }
`;

export const useProduct = () => {
  const { loading, error, data } = useQuery(PRODUCT_LIST);
  console.log(" loading, error, data", { loading, error, data });
  return {
    data,
    loading,
    error,
  };
};

export const CreateProduct = () => {
    const { loading, error, data } = useMutation(CREATE_PRODUCT,{
        variables : { name : "Pasta" , quantityPerUnit : 5 }
    });
    console.log(" loading, error, data", { loading, error, data });
    return {
      data,
      loading,
      error,
    };
  };
