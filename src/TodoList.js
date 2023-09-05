import { useState } from "react";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
    const INITIAL_STATE = [
        { activity: "run", id: uuid() },
        { activity: "eat dinner", id: uuid() },
    ];
    const [todos, setTodos] = useState([]);
    const addTodo = (newTodo) => {
        setTodos((todos) => [...todos, { ...newTodo, id: uuid() }]);
    };
    const removeActivity = (id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    };
    return (
        <div>
            <div>
                <h3>Todo List</h3>
                <NewTodoForm addTodo={addTodo} />

                <div>
                    {todos.map(({ activity, id }) => (
                        <Todo
                            id={id}
                            activity={activity}
                            key={id}
                            removeActivity={removeActivity}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default TodoList;
