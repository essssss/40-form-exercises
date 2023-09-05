import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, height = "2", width = "2", color = "peachpuff") {
    const heightInput = boxList.getByLabelText("Height");
    const widthInput = boxList.getByLabelText("Width");
    const backgroundInput = boxList.getByLabelText("Box Color");
    fireEvent.change(backgroundInput, { target: { value: color } });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });
    const button = boxList.getByText("Submit");
    fireEvent.click(button);
}

it("should render", function () {
    render(<BoxList />);
});
it("matches snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", function () {
    const boxList = render(<BoxList />);

    // no boxes yet
    expect(boxList.queryByText("REMOVE BOX")).not.toBeInTheDocument();

    addBox(boxList);

    // expect to see a box
    const removeButton = boxList.getByText("REMOVE BOX");
    expect(removeButton).toBeInTheDocument();
    console.log(removeButton.previousSibling);
    expect(removeButton.previousSibling).toHaveStyle(`
	  width: 2em;
	  height: 2em;
	  background-color: peachpuff;
	`);
    // expect form to be empty
    expect(boxList.getAllByDisplayValue("")).toHaveLength(3);

    // expect(asFragment()).toMatchSnapshot();
});
