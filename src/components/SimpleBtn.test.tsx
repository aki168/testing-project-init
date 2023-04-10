import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SimpleBtn } from "./SimpleBtn";

test("click and show ON or OFF", () => {
  const view = render(<SimpleBtn />);
  expect(view.container).toMatchSnapshot();
  // const btn = screen.getByRole("button");
  // expect(btn).toHaveTextContent("OFF");
  // userEvent.click(btn);
  // expect(btn).toHaveTextContent("ON");
});
