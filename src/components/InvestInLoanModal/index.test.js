import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

import { mount } from "enzyme";

import { InvestInModal } from "./";

import store from "../../redux/store";

import { showInvestModal, setSelectedLoan } from "../../redux/actions";

const selectedLoan = {
  title: "title 1.",
  amount: "85,754",
  id: "1",
  available: "8,250",
  annualised_return: "1.5",
  ltv: "48.80",
  amount: "85,754",
};

const renderedComponent = () => {
  return mount(
    <Provider store={store}>
      <InvestInModal />
    </Provider>
  );
};

describe("InvestInModal", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("renders correctly to snapshot", () => {
    store.dispatch(setSelectedLoan(selectedLoan));
    store.dispatch(showInvestModal());

    const component = renderedComponent();
    const snapshot = renderer.create(component).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it("should render component", () => {
    const component = renderedComponent();

    expect(component.length).toBe(1);
  });
});
