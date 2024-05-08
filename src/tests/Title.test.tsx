import React from "react";
import { render, screen } from "@testing-library/react";
import { Title } from "../components/titles/Title";

describe("Title", () => {
  test("renders the Title component", () => {
    render(<Title>Title Test Here</Title>);

    expect(screen.getByText("Title Test Here")).toBeInTheDocument();
  });

  /*test("click the 5 star rating", async () => {
    const stars = [0, 1, 2, 3, 4];
    render(<SmartRating title="default" theme="primary" testIdPrefix="rating" />);

    stars.forEach(async (star) => {
      const element = screen.getByTestId("rating-" + star);
      userEvent.click(element);
      await waitFor(() => expect(element.className).toBe("starActive"));
    });
  });*/
});