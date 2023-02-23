import { createSlice } from "@reduxjs/toolkit";

const updateLocalSorage = (ContactList) => {
  localStorage.setItem("contact-List", JSON.stringify(ContactList));
};

const initialState = {
  ContactList: localStorage.hasOwnProperty("contact-List")
    ? JSON.parse(localStorage.getItem("contact-List"))
    : []
};

console.log(initialState);

const ContactSlice = createSlice({
  name: "contactList",
  initialState,
  reducers: {
    createContact: (state, action) => {
      updateLocalSorage([...state.ContactList, action.payload]);
      return {
        ...state,
        ContactList: [...state.ContactList, action.payload],
      };
    },

    deleteContact :(state , action)=>{
      state.ContactList = state.ContactList.filter(item => item.id !== action.payload)
      updateLocalSorage(state.ContactList)
    }
  },
});

export const { createContact ,deleteContact } = ContactSlice.actions;
export default ContactSlice.reducer;
