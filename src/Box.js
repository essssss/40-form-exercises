const Box = ({ id, backgroundColor, width, height, removeBox }) => {
    const remove = () => removeBox(id);
    return (
        <div>
            <div
                style={{
                    display: "inline-block",
                    backgroundColor: backgroundColor,
                    width: `${width}em`,
                    height: `${height}em`,
                }}
            ></div>
            <button onClick={remove}>REMOVE BOX</button>
        </div>
    );
};

export default Box;
