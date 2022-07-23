import React, { createContext, useContext, useState, useEffect } from "react";
import { commerce } from "../lib/commerce";

const ProductsContext = createContext();

export function useCommerce() {
  return useContext(ProductsContext);
}

export function CommerceContext({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [query, setQuery] = useState("");
  const [queryData, setQueryData] = useState({});

  const searchProduct = (e) => {
    e.preventDefault();

    commerce.products
      .list({ query: query })
      .then(({ data }) => {
        setQueryData(data);
        setQuery("");
      })
      .catch((error) =>
        console.log("There was an error fetching a product", error)
      );
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const fetchProducts = () => {
    commerce.products
      .list()
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };

  const fetchCart = () => {
    commerce.cart
      .retrieve()
      .then((cart) => setCart(cart))
      .catch((error) =>
        console.log("There was an error fetching the cart", error)
      );
  };

  const handleAddToCart = (productId, quantity) => {
    commerce.cart
      .add(productId, quantity)
      .then((item) => setCart(item.cart))
      .catch((error) =>
        console.log("There was an error adding item to cart", error)
      );
  };

  const handleCartUpdate = async (lineItemId, quantity) => {
    try {
      const data = await commerce.cart.update(lineItemId, { quantity });
      setCart(data.cart);
    } catch (error) {
      console.log("error updating cart", error);
    }
  };

  const handleRemoveFromCart = async (itemId) => {
    try {
      const response = await commerce.cart.remove(itemId);
      setCart(response.cart);
    } catch (error) {
      console.log("Error deleting cart", error);
    }
  };

  const handleEmptyCart = async () => {
    try {
      const response = await commerce.cart.empty();
      setCart(response.cart);
    } catch (error) {
      console.log("There was an error emptying the cart", error);
    }
  };

  const sortByPrice = (sortOrder) => {
    commerce.products
      .list({ sortBy: "price", sortDirection: sortOrder })
      .then(({ data }) => setProducts(data))
      .catch((error) => console.log("Error filtering sort order", error));
  };

  const sortByName = (sortOrder) => {
    commerce.products
      .list({ sortBy: "name", sortDirection: sortOrder })
      .then(({ data }) => setProducts(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        sortByName,
        sortByPrice,
        handleChange,
        searchProduct,
        query,
        queryData,
        handleAddToCart,
        cart,
        handleCartUpdate,
        handleRemoveFromCart,
        handleEmptyCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
