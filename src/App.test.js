import { Provider } from "react-redux";
import { createStore } from "redux";
import renderer from "react-test-renderer";

import { mount } from "enzyme";

import { mockInitialState } from "./mocks";

import App from "./App";

const mockStore = createStore(mockInitialState);
const setCurrentLoans = jest.fn();

const renderedComponent = () => {
  return mount(
    <Provider store={mockStore}>
      <App setCurrentLoans={setCurrentLoans} />
    </Provider>
  );
};

const component = renderedComponent();

describe("App", () => {
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
