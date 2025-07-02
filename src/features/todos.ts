/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.splice(0, state.length, ...action.payload);
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);

      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todoItem = state.find(todo => todo.id === action.payload);

      if (todoItem) {
        todoItem.completed = !todoItem.completed;
      }
    },
  },
});

export const { setTodos, addTodo, updateTodo, deleteTodo, toggleTodo } =
  todosSlice.actions;
