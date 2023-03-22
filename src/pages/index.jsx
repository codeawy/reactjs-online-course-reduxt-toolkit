import { useSelector } from "react-redux";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
  useUserLoginMutation,
} from "../app/services/products";

const HomePage = () => {
  const { data, isLoading, error, isSuccess } = useGetProductsQuery();
  const [updateProduct, { isLoading: isUpdating, data: updatedData }] = useUpdateProductMutation();
  const [deleteProduct, { isLoading: isDeleting, data: deletedData }] = useDeleteProductMutation();
  const [login, { isLoading: isLogging, data: loginData }] = useUserLoginMutation();
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjc4OTk3ODIwLCJleHAiOjE2ODE1ODk4MjB9.PbkJJV4t1L98t5nA3FQjzEM-1HtDmzQtbjfVLo8pEvEww`;

  console.log(loginData);
  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div>
      <button onClick={() => updateProduct({ id: 1, body: { title: "HELLO!!" } })}>
        {isUpdating ? "Updating..." : "Update"}
      </button>

      <br />
      <br />
      {/* 
      
      */}
      <button onClick={() => deleteProduct({ id: 15, token })}>
        {isDeleting ? "Deleting..." : "Delete"}
      </button>

      <br />
      <br />
      <button
        onClick={() => {
          login({ identifier: "test@test.com", password: "12345678" });
        }}
      >
        Login
      </button>

      {data.data.map(product => (
        <h3 key={product.id}>{product.attributes.title}</h3>
      ))}
    </div>
  );
};

export default HomePage;
