import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import renderer from "react-test-renderer";

import { mount } from "enzyme";

import { LoanItem } from "./";
import { mockInitialState } from "../../mocks";

const mockStore = createStore(mockInitialState);

const mockLoan = {
  title: "title 1.",
  amount: "85,754",
  id: "1",
  available: "8,250",
  annualised_return: "1.5",
  ltv: "48.80",
  amount: "85,754",
};

const showInvestModal = jest.fn();

const renderedComponent = () => {
  return mount(
    <Provider store={mockStore}>
      <LoanItem loan={mockLoan} />
    </Provider>
  );
};

describe("LoanItem", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const component = renderedComponent();

  it("renders correctly to snapshot", () => {
    const snapshot = renderer.create(component).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it("should render component", () => {
    expect(component.length).toBe(1);
  });
});
