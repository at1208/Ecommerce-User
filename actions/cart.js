
//ADD TO CART
export const addToCart = product => {
  console.log(product)
    return fetch(`${process.env.NEXT_PUBLIC_API}/cart/add-product`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const getCartProduct = (userId) => {
    return fetch(`${process.env.NEXT_PUBLIC_API}/cart/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


//INCREMENT COUNT
export const incrementCountCart = (cartProductId, productId) => {
    return fetch(`${process.env.NEXT_PUBLIC_API}/cart/increment/${cartProductId}/${productId}`, {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


//DECREMENT COUNT
export const decrementCountCart = (cartProductId, productId) => {
    return fetch(`${process.env.NEXT_PUBLIC_API}/cart/decrement/${cartProductId}/${productId}`, {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
