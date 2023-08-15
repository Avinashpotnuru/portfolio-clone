import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerPopup: { status: false, helperData: null },
  contactPopup: { status: false, helperData: null },
  detailsPopup: { status: false, helperData: null },
};

const popSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openHeaderPopup: (state, action) => {
      state.headerPopup.status = true;
      state.headerPopup.helperData = action.payload;
    },

    closeHeaderPopup: (state, action) => {
      state.headerPopup.status = false;
      state.headerPopup.helperData = null;
    },
    openContactPopup: (state, action) => {
      state.contactPopup.status = true;
      state.contactPopup.helperData = action.payload;
    },

    closeContactPopup: (state, action) => {
      state.contactPopup.status = false;
      state.contactPopup.helperData = null;
    },

    openDetailsPopup: (state, action) => {
      console.log("action", action.payload);
      state.detailsPopup.status = true;
      state.detailsPopup.helperData = action.payload;
    },

    closeDetailsPopup: (state, action) => {
      state.detailsPopup.status = false;
      state.detailsPopup.helperData = null;
    },
  },
});

export const {
  openHeaderPopup,
  closeHeaderPopup,
  openContactPopup,
  closeContactPopup,
  openDetailsPopup,
  closeDetailsPopup,
} = popSlice.actions;
export default popSlice.reducer;
