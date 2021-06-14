import { createReducer, createAction } from "@reduxjs/toolkit";

// Action

export const ADD_TODO = createAction("ADD_TODO");

// Initial State

const initialState = [];

// Reducer

const todoReducer = createReducer(initialState, {
  ADD_TODO: (tasks, task) => {
    tasks.push(task.payload);
  },
});

export default todoReducer;
