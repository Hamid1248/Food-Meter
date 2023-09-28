import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    _id: "",
    email: "",
    name:"",
    auth: false,
  };
  
  export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      setUser: (state, action) => {
        const { _id, email,name, auth } = action.payload;
  
        state._id = _id;
        state.email = email;
        state.name = name;
        state.auth = auth;
      },
      resetUser: (state) => {
        state._id = "";
        state.email = "";
        state.name = "";
        state.auth = false;
      },
    },
  });
  
  export const { setUser, resetUser } = userSlice.actions;
  
  export default userSlice.reducer;