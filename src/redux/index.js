import { createStore } from 'redux';

const initialState = {
   additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export const addFeature = feature => {
   return {
      type: 'ADD_FEATURE',
      payload: feature
   }
 };

 export const removeFeature = feature => {
   return {
      type: 'REMOVE_FEATURE',
      payload: feature,
   }
 };

 const reducer = (state = initialState, action) => {
   switch(action.type) {
      case 'ADD_FEATURE' : 
         const updatedArr = state.additionalFeatures.filter(item => item !== action.payload)
         return {
            ...state,
            additionalPrice: state.additionalPrice + action.payload.price,
            additionalFeatures: updatedArr,
            car: {
               ...state.car,
               features: [
                  ...state.car.features,
                  action.payload
               ]
            },
         }
      case 'REMOVE_FEATURE' :
         const updatedFeatArr = state.car.features.filter(item => item !== action.payload)
         return {
            ...state,
            additionalPrice: state.additionalPrice - action.payload.price,
            car: {
               ...state.car,
               features: updatedFeatArr
            },
            additionalFeatures: [
               ...state.additionalFeatures,
               action.payload
            ]
         }
      default: return state
   }
}

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()))
export default store;