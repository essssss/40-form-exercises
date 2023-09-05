import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

const BoxList = () => {
    const initialBoxes = [];
    const [boxes, setBoxes] = useState(initialBoxes);

    const addBox = (newBox) => {
        setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
    };
    const removeBox = (id) => {
        setBoxes((boxes) => boxes.filter((box) => box.id !== id));
    };

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxes.map(({ id, backgroundColor, width, height }) => (
                <Box
                    removeBox={removeBox}
                    id={id}
                    key={id}
                    backgroundColor={backgroundColor}
                    width={width}
                    height={height}
                />
            ))}
        </div>
    );
};

export default BoxList;
