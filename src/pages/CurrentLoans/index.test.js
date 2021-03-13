import React from "react";

import { shallow } from "enzyme";
import { CurrentLoans } from "./";

import renderer from "react-test-renderer";

jest.mock("react-redux", () => ({ useSelector: () => loans }));

const loans = [
  {
    id: "1",
    available: "8,250",
  },
  {
    id: "2",
    available: "14,250",
  },
  {
    id: "3",
    available: "2,250",
  },
];

const renderedComponent = () => {
  return shallow(<CurrentLoans />);
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe("CurrentLoans", () => {
  const component = renderedComponent();

  it("renders correctly to snapshot", () => {
    const snapshot = renderer.create(component).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it("should render component", () => {
    expect(component.length).toBe(1);
  });
});
