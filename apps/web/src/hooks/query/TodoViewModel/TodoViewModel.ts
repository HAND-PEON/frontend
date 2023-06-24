import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ITodo } from '@/types/TodoType';
import TodoRepository from '@/repository/TodoRepository';

export const extractKey = { all: ['todo'] };

function TodoViewModel(todoRepository: ReturnType<typeof TodoRepository>) {
  const useGetTodoQuery = () => {
    return useQuery({
      queryKey: extractKey.all,
      queryFn: () => todoRepository.getList(),
      suspense: true,
    });
  };

  const usePostTodoQuery = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: ({ title, contents }: Omit<ITodo, 'id'>) =>
        todoRepository.addList({ title, contents }),
      onSettled: () =>
        queryClient.invalidateQueries({ queryKey: extractKey.all }),
    });
  };
  return { useGetTodoQuery, usePostTodoQuery };
}
export default TodoViewModel;
