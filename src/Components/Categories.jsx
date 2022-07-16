import styled from "styled-components";
import { Categories } from "../Pages/data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categorie = () => {
  return (
    <Container>
      {Categories.map((items) => (
        <CategoryItem item={items} key={items.id} />
      ))}
    </Container>
  );
};
export default Categorie;
