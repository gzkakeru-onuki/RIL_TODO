import React from 'react';
import { router } from '@inertiajs/react';

const TodoList = ({ todos }) => {
    const handelDelete = (id) => { 
        if (confirm("本当に削除しますか？")) {
            router.delete(`/todos/${id}`);
          //
        }
    }
    return (
        <ul className="space-y-2">
            {todos.map((item) => (
                <li key={item.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow">
                    <span className="text-gray-700">{item.todo}</span>
                    <button 
                        className="bg-red-500 text-white p-1 w-12 rounded hover:bg-red-600 transition duration-200"
                        onClick={() => handelDelete(item.id)}
                    >
                        削除
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
