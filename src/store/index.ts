import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/Auth";
import ModalReducer from "./modal/index";
import SystemReducer from "./system/System";

const store = configureStore({
	reducer: {
		auth: AuthReducer,
		system: SystemReducer,
		modal: ModalReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
