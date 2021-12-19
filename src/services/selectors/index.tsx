import { RootState } from "../../store"

export const selectLogin = (state:RootState) => state.login
export const selectUser = (state:RootState) => state.user

