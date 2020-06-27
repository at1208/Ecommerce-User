
//CREATE ORDER
export const createOrder = product => {
    return fetch(`${process.env.NEXT_PUBLIC_API}/order/create`, {
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

//ORDER VERIFICATION
export const orderVerify = (fuck) => {
    return fetch(`${process.env.NEXT_PUBLIC_API}/order/verify`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(fuck)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

//GET ALL ORDERS OF A USER
export const allOrdersOfUser = (userId) => {
    return fetch(`${process.env.NEXT_PUBLIC_API}/order/user/${userId}`, {
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
