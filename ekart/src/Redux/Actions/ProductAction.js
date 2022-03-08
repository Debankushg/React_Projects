



//for Add Item to cart

export const addCart = (product) => { 
    return{
        type:'ADDITEM',
        payload:product,
    }
}


// For DELETE Item From Cart

export const delCart = (product) => { 
    return{
        type:'DELITEM',
        payload:product,
    }
}
