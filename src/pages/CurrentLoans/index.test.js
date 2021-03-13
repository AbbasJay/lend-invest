import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import renderer from "react-test-renderer";

import { shallow } from "enzyme";

import { CurrentLoans } from "./";
import { mockInitialState } from "../../mocks";

const mockStore = createStore(mockInitialState);

const renderedComponent = () => {
  return shallow(
    <Provider store={mockStore}>
      <CurrentLoans />
    </Provider>
  );
};

describe("CurrentLoans", () => {
  const component = renderedComponent();
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("renders correctly to snapshot", () => {
    const snapshot = renderer.create(component).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it("should render component", () => {
    expect(component.length).toBe(1);
  });
});
