import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the text 'Tima'", () => {
  render(<App />);
  expect(screen.getByText(/Tima/i)).toBeInTheDocument();
});
