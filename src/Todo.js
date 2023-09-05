const Todo = ({ activity, id, removeActivity }) => {
    const remove = () => removeActivity(id);
    return (
        <li>
            {activity}
            <button onClick={remove}>x</button>
        </li>
    );
};
export default Todo;
