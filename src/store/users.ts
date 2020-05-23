import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "./index";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
}

interface UsersState {
  allUsers: User[];
  filteredUsers: User[];
  currentUser?: User;
  loading: boolean;
}

const initialState: UsersState = {
  allUsers: [],
  filteredUsers: [],
  currentUser: undefined,
  loading: true,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setAllUsers: (state, action: PayloadAction<User[]>) => {
      state.allUsers = action.payload;
    },
    setFilteredUsers: (state, action: PayloadAction<User[]>) => {
      state.filteredUsers = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<User | undefined>) => {
      state.currentUser = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

const {
  setAllUsers,
  setFilteredUsers,
  setCurrentUser,
  setLoading,
} = usersSlice.actions;

export const filterUsers = (): AppThunk => (dispatch, getState) => {
  const {
    users: { allUsers },
    search: { keyword },
  } = getState();
  const results = allUsers.filter((user) =>
    user.name.toLowerCase().includes(keyword.toLowerCase())
  );
  dispatch(setFilteredUsers(results));
};

export const fetchUsers = (): AppThunk => async (dispatch) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    console.error(res.statusText);
    alert("Failed to fetch data!");
  } else {
    const users = await res.json();
    dispatch(setAllUsers(users.slice(0, 5)));
    dispatch(setFilteredUsers(users.slice(0, 5)));
    dispatch(setLoading(false));
  }
};

export const updateCurrentUser = (id: number): AppThunk => (
  dispatch,
  getState
) => {
  const {
    users: { filteredUsers },
  } = getState();
  const user = filteredUsers.find((user: User) => user.id === id);
  dispatch(setCurrentUser(user));
};

export const selectUsers = (state: RootState) => state.users;
export default usersSlice.reducer;
