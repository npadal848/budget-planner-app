import {LoginActionTypes} from '../../constant/actionTypes'

const initialState = {
  userData: [
    { name: "Rajesh", email: "rajesh@gmail.com", password: "rajesh", id: 1 },
    { name: "nagesh", email: "nagesh@gmail.com", password: "nagesh", id: 2 },
    {
      name: "santhosh",
      email: "santhosh@gmail.com",
      password: "rsanthoshajesh",
      id: 3,
    },
  ],
  isUserLoggedin: false,
};

export const loginOrSignUpReducer = (state = initialState, {type, payload}) => {
   
    switch(type){
       default :
         return state
    }
};
