import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      alert("Welcome!");
      return data;
    } catch (error) {
      alert.error("Registration error, please try again");
    }
  }
);
export const logIn = createAsyncThunk("auth/login", async (credential) => {
  try {
    const { data } = await axios.post("/users/login", credential);
    token.set(data.token);
    alert("Welcome!");
    return data;
  } catch (error) {
    alert.error("Incorrect password or login, try again");
  }
});

export const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    axios.post("users/logout");
    token.unset();
    alert("goodbye");
  } catch (error) {
    alert("not logout");
  }
});
