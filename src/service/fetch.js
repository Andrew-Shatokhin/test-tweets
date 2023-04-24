import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// const url = new URL(
//   'https://642c84a3bf8cbecdb4f282f8.mockapi.io/users/page=1/limit=3'
// );
// url.searchParams.append('page', 1);
// url.searchParams.append('limit', 3);
axios.defaults.baseURL = 'https://642c84a3bf8cbecdb4f282f8.mockapi.io';

// export const fetchUsers = createAsyncThunk(
//   'users/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/users');

//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const fetchUsers = async () => {
//   const response = await axios.get('/users?page=1&limit=3');
//   return response.data;
// }
export const fetchUsers = async page => {
  try {
    const response = await axios.get(`/users?page=${page}&limit=3`);
    return response.data;
  } catch (e) {
console.log(e.message)
  }
}

export const updateUsers = async (id, isFollowing, followers) => {
  try {
    const response = await axios.put(`/users/${id}`, {
      following: isFollowing,
      followers: followers,
    });
    return response.data;
  } catch (e) {
    console.log(e.message);
  }


};




















// const parsedUsers = () => {
//   fetchUsers().then(data => { return console.log(data) }).catch(e => {
//     console.log(e)
//   }
// }
// console.log(fetchUsers());

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (text, thunkAPI) => {
//     try {
//       const response = await axios.post('/contacts', text);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${id}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
