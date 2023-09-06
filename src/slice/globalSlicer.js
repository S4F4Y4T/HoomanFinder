import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: {
        siteName : 'HoomanFinder',
        footerText: 'All Copyright @2023 HoomanFinder',
        themeColor: '#3E3D3C'
    }
  }

export const globalSlicer = createSlice({
    name: 'global',
    initialState,
    reducers : {
        updateSiteName: (state, action) => {
            state.value.siteName = action.payload
        }, 

        updateFooterText: (state, action) => {
            state.value.footerText = action.payload
        }, 

        updateThemeColor: (state, action) => {
            state.value.themeColor = action.payload
        }, 

        reset: (state) => {
            state.value = initialState.value
        }
    }
})

export const { updateSiteName, updateFooterText, updateThemeColor, reset } = globalSlicer.actions


export default globalSlicer.reducer