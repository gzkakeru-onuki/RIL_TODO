import React, { useState } from "react";
import { router, usePage } from "@inertiajs/react";

const TodoForm = () => {
    const [todo, setTodo] = useState("");
    const { errors } = usePage().props;

    const addTodo = (e) => {
        e.preventDefault();
        router.post(route("todos.store"), {
            todo,
        });
        setTodo("");
    };

    return (
        <form onSubmit={addTodo}>
            <div className="flex mb-2">
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className="border border-gray-300 p-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="新しいTodoを追加"
                    required
                />
                <button className="bg-blue-500 text-white p-2 w-20 rounded-r-md hover:bg-blue-600 transition duration-200">
                    追加
                </button>
            </div>
            {errors.todo && (
                <p className="text-red-500 text-sm mb-2">{errors.todo}</p>
            )}
        </form>
    );
};

export default TodoForm;