import React, { createContext, useContext, useState, useEffect } from "react";
import commerce from "../lib/commerce";

const ProductsContext = createContext();

export function useCommerce() {
  return useContext(ProductsContext);
}

export function CommerceContext({ children }) {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch products from the API
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data } = await commerce.products.list();
      setProducts(data);
    } catch (error) {
      console.log("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Search for a product by query
  const searchProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await commerce.products.list({ query: query });
      setProducts(data);
    } catch (error) {
      console.log("Error fetching a product:", error);
    } finally {
      setLoading(false);
      setQuery("");
    }
  };

  // Handle input change for search query
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  // Fetch filtered products based on sort order
  const fetchFilteredProducts = async (sortBy, sortDirection) => {
    setLoading(true);
    try {
      const { data } = await commerce.products.list({
        sortBy: sortBy,
        sortDirection: sortDirection,
      });
      setProducts(data);
    } catch (error) {
      console.log("Error filtering products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Sort products by price
  const sortByPrice = (sortOrder) => {
    fetchFilteredProducts("price", sortOrder);
  };

  // Sort products by name
  const sortByName = (sortOrder) => {
    fetchFilteredProducts("name", sortOrder);
  };

  // Fetch the cart from the API
  const fetchCart = async () => {
    try {
      const cart = await commerce.cart.retrieve();
      setCart(cart);
    } catch (error) {
      console.log("Error fetching the cart:", error);
    }
  };

  // Update the quantity of an item in the cart
  const handleCartUpdate = async (lineItemId, quantity) => {
    try {
      const { cart } = await commerce.cart.update(lineItemId, { quantity });
      setCart(cart);
    } catch (error) {
      console.log("Error updating the cart:", error);
    }
  };

  // Add an item to the cart
  const handleAddToCart = async (productId, quantity) => {
    try {
      const item = await commerce.cart.add(productId, quantity);
      setCart(item.cart);
    } catch (error) {
      console.error("Error adding the item to the cart:", error);
    }
  };

  // Remove an item from the cart
  const handleRemoveFromCart = async (itemId) => {
    try {
      const response = await commerce.cart.remove(itemId);
      setCart(response.cart);
    } catch (error) {
      console.log("Error deleting the cart:", error);
    }
  };

  // Empty the cart
  const handleEmptyCart = async () => {
    try {
      const { cart } = await commerce.cart.empty();
      setCart(cart);
    } catch (error) {
      console.log("Error emptying the cart:", error);
    }
  };

  // Refresh the cart
  const refreshCart = async () => {
    try {
      const newCart = await commerce.cart.refresh();
      setCart(newCart);
    } catch (error) {
      console.log("Error refreshing the cart:", error);
    }
  };

  // Capture the checkout and place an order
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const order = await commerce.checkout.capture(checkoutTokenId, newOrder);
      setOrder(order);
      refreshCart();
    } catch (error) {
      console.log("Error confirming your order:", error);
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchCart();
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        fetchProducts,
        products,
        setProducts,
        sortByName,
        sortByPrice,
        handleChange,
        searchProduct,
        query,
        handleAddToCart,
        cart,
        handleCartUpdate,
        handleRemoveFromCart,
        handleEmptyCart,
        handleCaptureCheckout,
        order,
        errorMessage,
        loading,
        setLoading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
