import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    menus: ["Existing Inventory" ,"Used Inventory" ,"Trade In" ,"Test Drive" ,"Cybertruck" ,"Roadster" ,"Semi", "Charging"]
}

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers:{}
})

export const selectMenus = state => state.menu.menus; 

export default menuSlice.reducer;