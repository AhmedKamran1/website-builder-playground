import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getComponents = createAsyncThunk(
  "getComponents",
  async (pageName, { rejectWithValue }) => {
    try {
      console.log("getting page components", pageName);
      const components = [];
      //   const response = await axios.get("http://localhost:8000/auth/me", { withCredentials: true });
      //   if (response.status !== 200) throw new Error(response.message);
      //   const { username, name, avatar } = response.data;
      return { components, pageName };
    } catch (e) {
      //   return rejectWithValue(e.response?.data?.message);
    }
  }
);

export const addComponent = createAsyncThunk(
  "addComponent",
  async (component, { rejectWithValue }) => {
    try {
      console.log("adding page component", component);
      //   const response = await axios.get("http://localhost:8000/auth/me", { withCredentials: true });
      //   if (response.status !== 200) throw new Error(response.message);
      //   const { username, name, avatar } = response.data;
      return component;
    } catch (e) {
      //   return rejectWithValue(e.response?.data?.message);
    }
  }
);

export const addNavbarComponent = createAsyncThunk(
  "addNavbarComponent",
  async (navbarComponent, { rejectWithValue }) => {
    try {
      console.log("adding navbar component", navbarComponent);
      //   const response = await axios.get("http://localhost:8000/auth/me", { withCredentials: true });
      //   if (response.status !== 200) throw new Error(response.message);
      //   const { username, name, avatar } = response.data;
      return navbarComponent;
    } catch (e) {
      //   return rejectWithValue(e.response?.data?.message);
    }
  }
);

export const updateNavbarComponent = createAsyncThunk(
  "updateNavbarComponent",
  async (updatedNavbarComponent, { rejectWithValue }) => {
    try {
      console.log("updating navbar component", updatedNavbarComponent);
      //   const response = await axios.get("http://localhost:8000/auth/me", { withCredentials: true });
      //   if (response.status !== 200) throw new Error(response.message);
      //   const { username, name, avatar } = response.data;
      return updatedNavbarComponent;
    } catch (e) {
      //   return rejectWithValue(e.response?.data?.message);
    }
  }
);

export const updateComponent = createAsyncThunk(
  "updateComponent",
  async (updatedComponent, { rejectWithValue }) => {
    try {
      console.log("updating page component", updatedComponent);
      //   const response = await axios.get("http://localhost:8000/auth/me", { withCredentials: true });
      //   if (response.status !== 200) throw new Error(response.message);
      //   const { username, name, avatar } = response.data;
      return updatedComponent;
    } catch (e) {
      //   return rejectWithValue(e.response?.data?.message);
    }
  }
);
