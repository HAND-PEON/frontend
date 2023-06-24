import { type ITodo } from '@/types/TodoType';
import { type IHttp } from '@/infrastructures/client';

const TodoRepository = (client: IHttp) => {
  const getList = async () => {
    return await client.get<{ todoList: ITodo[] }>('/todo').then((res) => {
      return res.data.todoList;
    });
  };
  const addList = async ({ title, contents }: Omit<ITodo, 'id'>) => {
    return await client
      .post<boolean>('/todo', { title, contents })
      .then((res) => res.data);
  };
  return { getList, addList };
};

export default TodoRepository;
