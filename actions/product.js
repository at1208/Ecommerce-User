import fetch from 'isomorphic-fetch';

export const homepageProducts = () => {
    return fetch(`${process.env.NEXT_PUBLIC_API}/get-prod-by-cat`, {
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

export const getProductBySlug = (slug) => {
    return fetch(`${process.env.NEXT_PUBLIC_API}/product/searchBySlug/${slug}`, {
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
