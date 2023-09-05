import { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
    const [formData, setFormData] = useState({
        action: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({ ...formData });
        setFormData("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="activity">Activity</label>
            <input
                id="activity"
                type="text"
                name="activity"
                placeholder="Activity"
                value={formData.name}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    );
};
export default NewTodoForm;
