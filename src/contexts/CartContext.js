import React, { useState, createContext } from 'react'

export const CartContext = createContext({});

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [checkout, setCheckout] = useState(0)

    function addItemCart(newItem) {
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if (indexItem !== -1) {
            // console.log("This item is already in the cart")
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount + 1;

            cartList[indexItem].checkout = cartList[indexItem].amount * cartList[indexItem].price;
            
            setCart(cartList)
            checkoutResultCart(cartList);

            return;
        }

        let data = {
            ...newItem,
            amount: 1,
            checkout: newItem.price  
        }

        setCart(products => [...products, data])
        checkoutResultCart([...cart, data])
        
    }

    function removeItemCart(product){
        const indexItem = cart.findIndex(item => item.id === product.id)

        if(cart[indexItem]?.amount > 1){
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount - 1;

            cartList[indexItem].checkout = cartList[indexItem].checkout  - cartList[indexItem].price;

            setCart(cartList);
            checkoutResultCart(cartList)
            
            return;
        }

        const removeItem = cart.filter(item => item.id !== product.id);
        setCart(removeItem);
        checkoutResultCart(removeItem)
    
    }

    function checkoutResultCart(items){
        let myCart = items;
        let result = myCart.reduce((acc, obj) => { return acc + obj.checkout }, 0)

        setCheckout(result);
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addItemCart,
                removeItemCart,
                checkout,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
