import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

import { mount } from "enzyme";

import { LoanItem } from "./";

import store from "../../redux/store";

import { showInvestModal, setSelectedLoan } from "../../redux/actions";

const mockLoan = {
  title: "title 1.",
  amount: "85,754",
  id: "1",
  available: "8,250",
  annualised_return: "1.5",
  ltv: "48.80",
  amount: "85,754",
};

const mockDispatch = jest.spyOn(store, "dispatch");

const renderedComponent = () => {
  return mount(
    <Provider store={store}>
      <LoanItem loan={mockLoan} />
    </Provider>
  );
};

describe("LoanItem", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("renders correctly to snapshot", () => {
    const component = renderedComponent();
    const snapshot = renderer.create(component).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it("should render component", () => {
    const component = renderedComponent();

    expect(component.length).toBe(1);
  });

  it("should call correct actions", () => {
    const component = renderedComponent();
    component.find("button").simulate("click");

    expect(mockDispatch).toHaveBeenCalledWith(showInvestModal());
    expect(mockDispatch).toHaveBeenCalledWith(setSelectedLoan(mockLoan));
  });
});
