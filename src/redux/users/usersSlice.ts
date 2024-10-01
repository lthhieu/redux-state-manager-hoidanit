import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface IUsers {
    id?: number,
    name: string,
    email: string
}
export interface UsersState {
    listUsers: IUsers[] | [],
}

const initialState: UsersState = {
    listUsers: [],
}
export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const res = await fetch('http://localhost:8000/users')
        const data = await res.json()
        return data as IUsers[]
    },
)

export const createNewUser = createAsyncThunk(
    'users/createNewUser',
    async (payload: IUsers) => {
        const res = await fetch('http://localhost:8000/users', {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...payload }),
        })
        const data = await res.json()
        return data
    },
)
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            // Add user to the state array
            state.listUsers = action.payload
        })
    },
})

// Action creators are generated for each case reducer function
export const { } = usersSlice.actions

export default usersSlice.reducer