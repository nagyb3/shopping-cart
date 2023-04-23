import React from "react";
import {fireEvent, getByTestId, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Card from "./Card";
import App from "../App";

describe("Card", () => {
    it("renders correctly", () => {
        render(<Card />)
    });
});

test('increment state correct amount of times (4)', async () => {
    const user = userEvent.setup();
    render(<Card />)
    const incrementButton = screen.getByTestId('button-increment')
    for (let i = 0; i < 4; i++) {
        await user.click(incrementButton)
    }
    expect(screen.getByTestId('state').value).toMatch("4");
})

test('decrement state correct amount of times (7)', async () => {
    const user = userEvent.setup();
    render(<Card />)
    const decrementButton = screen.getByTestId('button-decrement')
    for (let i = 0; i < 7; i++) {
        await user.click(decrementButton)
    }
    expect(screen.getByTestId('state').value).toMatch("7");
})
