import React from "react";
import TodoForm from "../Components/TodoForm";
import TodoList from "../Components/TodoList";
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Todo = ({ todos }) => {

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-green-800 leading-tight">
                    Todo List
                </h2>
            }
        >
            <Head title="Todo List" />
            <div className="flex flex-col items-center justify-center min-h-screen -mt-40">
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                    <h3 className="text-3xl font-bold text-center mb-4">
                        Todo List
                    </h3>
                    <TodoForm/>
                    <TodoList todos={todos} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Todo;