import { create } from 'zustand';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
interface TodoState {
  todos: Todo[];
  addTodo: (title: string) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (title) => set((state) => ({ todos: [...state.todos, { id: Date.now(), title, completed: false }] })),
  deleteTodo: (id) => set((state) => ({ todos: state.todos.filter((todos) => todos.id !== id) })),
  toggleTodo: (id) => set((state) => ({ todos: state.todos.map((todos) => (todos.id === id ? { ...todos, completed: !todos.completed } : todos)) })),
}));
