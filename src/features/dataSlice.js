import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false,
    managerComment: '',
    introduction: '',
};

const DataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setLogin: (state) => {
            state.isLogin = !state.isLogin;
        },
        setIntroduction: (state, action) => {
            state.introduction = action.payload;
        },
        setManagerComment: (state, action) => {
            state.managerComment = action.payload;
        },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    },
})

export const { setLogin, setIntroduction, setManagerComment, setResults, setSchedules } = DataSlice.actions;
export default DataSlice.reducer;