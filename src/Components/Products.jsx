import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const Container = styled.div `
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = ({cat, filters, sort}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `https://server-emart1.herokuapp.com/products?category=${cat}` : "https://server-emart1.herokuapp.com/products/");
                setProducts(res.data);
            } catch (err) {}
        };
        getProducts();
    }, [cat]);

    useEffect(() => {
        cat && setFilteredProducts(products.filter((item) => Object.entries(filters).every(([key, value]) => item[key].includes(value))));
    }, [products, cat, filters]);

    // SORTING
    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
        } else if (sort === "asc") {
            setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
        } else {
            setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
        }
    }, [sort]);

    console.log(products, "PRODUCTS");
    return (<Container> {
        cat ? filteredProducts.map((item) => <Product item={item}
            key={
                item.id
            }/>) : products.slice(0, 10).map((item) => <Product item={item}
            key={
                item.id
            }/>)
    } </Container>);
};

export default Products;
