import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

import { shallow } from "enzyme";

import store from "../../redux/store";
import { CurrentLoans } from "./";

const renderedComponent = () => {
  return shallow(
    <Provider store={store}>
      <CurrentLoans />
    </Provider>
  );
};

describe("CurrentLoans", () => {
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
});
