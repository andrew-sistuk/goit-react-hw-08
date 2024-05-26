import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, editContact } from './contactsOps';
import { EDITING_CONTACT } from './constants';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
    editingContact: EDITING_CONTACT,
  },
  reducers: {
    isEditContact(state, action) {
      state.editingContact = {
        id: action.payload.id,
        name: action.payload.name,
        number: action.payload.number,
      };
    },

    editName(state, action) {
      state.editingContact.name = action.payload;
    },
    editNumber(state, action) {
      state.editingContact.number = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        console.log(action.payload);
        state.items.splice(
          state.items.findIndex(item => item.id === action.payload.id),
          1
        );
      })
      .addCase(deleteContact.rejected, handleRejected)

      .addCase(editContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items[state.items.findIndex(item => item.id === action.payload.id)] = action.payload;
        state.editingContact = EDITING_CONTACT;
      })
      .addCase(editContact.rejected, (state, action) => {
        state.editingContact = EDITING_CONTACT;
        state.error = action.payload;
      });
  },
});

export const { isEditContact, editName, editNumber } = contactsSlice.actions;

export default contactsSlice.reducer;
