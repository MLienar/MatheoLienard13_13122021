import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { selectUser } from '../../services/selectors'
import { AppDispatch, RootState} from '../../store'

type Error = {
    status: number,
    message: string
}

interface State {
    status: string,
    user : {
        firstName: string,
        lastName: string,
        id: string,
        email: string,
        updatedAt: string
    },
    error: Error
}

interface ApiResponse {
    body : {
        createdAt: string,
        email: string,
        firstName: string,
        id: string,
        lastName: string,
        updatedAt: string
    }, 
    message: string,
    status: number
}

const initialState:State = {
    status: "void",
    user : {
        firstName: "",
        lastName: "",
        id: "",
        email: "",
        updatedAt: ""
    },
    error: {
        status: 0,
        message: ''
    }
}

const { actions, reducer } = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetching: (draft) => {
            if (draft.status ==='void') {
                draft.status = 'pending'
                return
            }
            if (draft.status === 'rejected') {
                draft.error = initialState.error
                draft.status = 'pending'
                return
            }
            if (draft.status === 'loggedIn') {
                draft.status = 'updating'
                return
            }
        },
        resolved: (draft, action:PayloadAction<any>) => {
                if(draft.status === "pending") {
                    const state = draft.user
                    const data = action.payload.body
                    state.firstName = data.firstName
                    state.lastName = data.lastName
                    state.email = data.email
                    state.id = data.id
                    state.updatedAt = data.updatedAt
                    draft.status = "resolved"
                }
        },
        rejected: {
            prepare: (error) => ({
                payload: error
            }),
            reducer: (draft,action:PayloadAction<Error>) => {      
                if(draft.status === 'pending' || draft.status === 'updating') {
                    draft.status = 'rejected'
                    draft.error = action.payload
                    return
                }
                return
            }  
        }
    }
})

export function fetchUserProfile(token:string) {
    return async (dispatch:AppDispatch, getState: ()=> RootState) => {
        const status = selectUser(getState()).status
        if (status === 'pending' || status === "updating") {
            return
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                accept: "application/json",
                'Content-Type': 'application/json',
                authorization: 'Bearer' + token
            },

        }
        dispatch(actions.fetching())
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
            const data:ApiResponse = await response.json()
            if (data.status === 200) {
                dispatch(actions.resolved(data))
            } else {
                dispatch(actions.rejected(data))
            }
        } catch(err:any) {
            dispatch(actions.rejected(err))
        }
    }
}

export default reducer