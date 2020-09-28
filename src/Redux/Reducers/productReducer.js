const { applyMiddleware } = require("redux");

const intialState = {
    projects :[{
        name: "apple",
        description: "thisis an apple",
        price: 50,
        quantity: 20 
    }]
}

const productReducer = (state= intialState ,action) => {
    switch(action.type){
        case "ADD_PRODUCT" :
            console.log(action.payload);
            return {...state,projects:[action.payload,...state.projects]}
        case "ADD_PRODUCT_FAILED" :
             console.log("failed")    
        default :
            return state   
    }
}

export default productReducer