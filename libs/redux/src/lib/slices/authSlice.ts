import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthResponse, Manager } from "@mono-redux-starter/shared/types";
import { login } from "../apis/authService";
import { logOut } from "../apis/userService";

const initialState: AuthResponse = {
	access_token: "",
	isLoggedIn: false,
	managerInfo: undefined
};

export const authSlice = createSlice({
	name: "authSlice",
	initialState,
	reducers: {
		updateManager(
			state, action: PayloadAction<Manager | undefined>
		) {
			state.managerInfo = action.payload;
		},
		updateAccessToken(
			state, action: PayloadAction<string>
		) {
			state.access_token = action.payload;
			state.isLoggedIn = true;
		},
		updateIsLoggedIn(
			state, action: PayloadAction<boolean>
		) {
			state.isLoggedIn = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			logOut.matchFulfilled,
			(state) => {
				state.access_token = "";
				state.isLoggedIn = false;
			}
		);
		builder.addMatcher(
			login.matchFulfilled,
			(
				state, { payload }
			) => {
				state.isLoggedIn = true;
				state.access_token = payload;
			}
		);
	},
});

export const getManagerInfo = (state: AuthResponse) => state.managerInfo;

export const authReducer = authSlice.reducer;
export const { updateAccessToken, updateIsLoggedIn, updateManager } = authSlice.actions;
