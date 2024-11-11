import { useQuery } from '@tanstack/react-query';
import './App.css';
import Check from './assets/check.png';
import Cross from './assets/cross.png';
import { Link } from 'react-router-dom';

type TodoItem = {
    'userId': number;
    'id': number;
    'title': string;
    'completed': boolean;
};

const fetchTodos = async (): Promise<TodoItem[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
};

function App() {
    const { data: todos, isPending: isTodosLoading } = useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodos,
        gcTime: 10000,
    });

    return (
        <>
            {isTodosLoading && <p>Loading...</p>}
            {todos && (
                <div>
                    <Link to={'/dummy'}>Go to a dummy route</Link>
                    <br />
                    {todos.map((todo) => (
                        <div
                            key={todo.id}
                            className="todoItem">
                            <div className="todoItem-text">
                                <span>#{todo.id}</span>
                                <p>{todo.title}</p>
                            </div>
                            <img
                                src={todo.completed ? Check : Cross}
                                alt={todo.completed ? 'Complete' : 'Incomplete'}
                            />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default App;
