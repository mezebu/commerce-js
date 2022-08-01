import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import commerce from "../lib/commerce";

const ProductsContext = createContext();

export function useCommerce() {
  return useContext(ProductsContext);
}

export function CommerceContext({ children }) {
  const [queryData, setQueryData] = useState({});
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  console.log(categories);

  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();

      setProducts(data);
    } catch (error) {
      console.log("There was an error fetching the products", error);
    }
  };

  const searchProduct = (e) => {
    e.preventDefault();

    commerce.products
      .list({ query: query })
      .then(({ data }) => {
        setQueryData(data);
        navigate("/search");
        setQuery("");
      })
      .catch((error) =>
        console.log("There was an error fetching a product", error)
      );
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const fetchCategory = async () => {
    try {
      const response = await commerce.categories.list();
      setCategories(response);
    } catch (error) {
      console.log(error);
    }
  };

  const sortByPrice = (sortOrder) => {
    commerce.products
      .list({ sortBy: "price", sortDirection: sortOrder })
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => console.log("Error filtering sort order", error));
  };

  const sortByName = (sortOrder) => {
    commerce.products
      .list({ sortBy: "name", sortDirection: sortOrder })
      .then(({ data }) => setProducts(data))
      .catch((error) => console.log(error));
  };

  const fetchCart = () => {
    commerce.cart
      .retrieve()
      .then((cart) => setCart(cart))
      .catch((error) =>
        console.log("There was an error fetching the cart", error)
      );
  };

  const handleCartUpdate = async (lineItemId, quantity) => {
    try {
      const { cart } = await commerce.cart.update(lineItemId, { quantity });
      setCart(cart);
    } catch (error) {
      console.log("error updating cart", error);
    }
  };

  const handleAddToCart = (productId, quantity) => {
    commerce.cart
      .add(productId, quantity)
      .then((item) => {
        setCart(item.cart);
      })
      .catch((error) => {
        console.error("There was an error adding the item to the cart", error);
      });
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

  const refreshCart = async () => {
    try {
      const newCart = commerce.cart.refresh();
      setCart(newCart);
    } catch (error) {
      console.log("There was an error refreshing your cart", error);
    }
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const response = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(response);
      refreshCart();
    } catch (error) {
      console.log("There was an error confirming your order", error);
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchCart();
    fetchProducts();

    fetchCategory();
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
        handleCaptureCheckout,
        order,
        errorMessage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
