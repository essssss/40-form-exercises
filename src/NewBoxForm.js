import { useState } from "react";
const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        backgroundColor: "",
        width: "",
        height: "",
    };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData });
        setFormData(INITIAL_STATE);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="bg">Box Color</label>
                <input
                    id="bg"
                    type="text"
                    name="backgroundColor"
                    placeholder="color"
                    value={formData.backgroundColor}
                    onChange={handleChange}
                />
                <label htmlFor="width">Width</label>
                <input
                    id="width"
                    type="text"
                    name="width"
                    placeholder="width"
                    value={formData.width}
                    onChange={handleChange}
                />
                <label htmlFor="height">Height</label>
                <input
                    id="height"
                    type="text"
                    name="height"
                    placeholder="height"
                    value={formData.height}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};
export default NewBoxForm;
