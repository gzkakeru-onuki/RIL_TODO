<?php

namespace App\Http\Controllers;

use App\Models\todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $todos = Todo::where("user_id", Auth::id())->get();
        //Jsコンポーネント名,propsに渡す値の配列
        return Inertia::render("Todo", ["todos" => $todos]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            "todo" => "required|max:255",
        ]);
        Todo::create([
            "todo" => $request->todo,
            "user_id" => Auth::id(),
        ]);
        return to_route("todos.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(todo $todo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(todo $todo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, todo $todo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(todo $todo)
    {
        //
        $todo->delete();
        return to_route("todos.index");
    }
}
