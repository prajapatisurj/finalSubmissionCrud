import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "student",
  initialState: {
    students: [
      {
        id: 1,
        firstName: "abc",
        lastName: "abc",
        email: "abc@gmail.com",
        phone: "+91-79999999",
        address: "967 -Burgs",
      },
      {
        id: 2,
        firstName: "abc",
        lastName: "abc",
        email: "abc@gmail.com",
        phone: "+91-79999999",
        address: "967 -Burgs",
      },
      {
        id: 3,
        firstName: "abc",
        lastName: "abc",
        email: "abc@gmail.com",
        phone: "+91-79999999",
        address: "967 -Burgs",
      },
      {
        id: 4,
        firstName: "abc",
        lastName: "abc",
        email: "abc@gmail.com",
        phone: "+91-79999999",
        address: "967 -Burgs",
      },
    ],
    student: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
    },
  },
  reducers: {
    getStudent: (state, action) => {
      state.student = state.students.find((el) => el.id == action.payload);
    },
    clearStudent: (state) => {
      state.student = {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phone: "",
      };
    },
    addStudent: (state, action) => {
      state.students = [action.payload, ...state.students];
    },
    updateStudent: (state, action) => {
      state.students = state.students.map((el) =>
        el.id == action.payload.id ? action.payload : el
      );
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter((el) => el.id != action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getStudent,
  clearStudent,
  addStudent,
  updateStudent,
  deleteStudent,
} = studentSlice.actions;

export default studentSlice.reducer;
