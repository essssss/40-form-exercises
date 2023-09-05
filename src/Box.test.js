import { render, fireEvent } from "@testing-library/react";
import Box from "./Box";
it("should render", function () {
    render(<Box />);
});
it("matches snapshot", function () {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
});
