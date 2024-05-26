import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectContactsLoading = state => state.contacts.loading;

export const selectContactsError = state => state.contacts.error;

export const selectContactsEdit = state => state.contacts.editingContact;

export const selectNameFilter = state => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (items, filterName) =>
    items.filter(
      item =>
        item.name.toLowerCase().includes(filterName.toLowerCase().trim()) ||
        item.number.includes(filterName.toLowerCase().trim())
    )
);
