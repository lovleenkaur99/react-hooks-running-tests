import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

test("displays the text 'Hello from the Header!'", () => {
  render(<Article />);

  expect(screen.queryByText("Hello from the Header!")).toBeInTheDocument();
});
