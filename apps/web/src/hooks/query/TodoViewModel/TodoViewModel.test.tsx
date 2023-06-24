import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import TodoViewModel from './TodoViewModel';
import TodoRepository from '@/repository/TodoRepository';
import { type IHttp } from '@/infrastructures/client';

const mockedData = {
  todoList: [
    { id: 1, title: 'Todo 1', contents: 'Todo 1 contents' },
    { id: 2, title: 'Todo 2', contents: 'Todo 2 contents' },
  ],
};

const http: IHttp = {
  async get<T>(url: string) {
    const data: T = mockedData as any;
    return { data };
  },
};

const todoRepository = TodoRepository(http);

const queryClient = new QueryClient();

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('TodoViewModel', () => {
  test('returns the mocked data from useGetTodoQuery', async () => {
    const { result } = renderHook(
      () => TodoViewModel(todoRepository).useGetTodoQuery(),
      {
        wrapper,
      },
    );

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toEqual(mockedData.todoList);
  });
});
