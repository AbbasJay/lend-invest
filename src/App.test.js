import { Provider } from "react-redux";
import renderer from "react-test-renderer";

import { mount } from "enzyme";

import { setCurrentLoans } from "./redux/actions";

import { mockInitialState } from "./mocks";

import store from "./redux/store";
import App from "./App";

const mockDispatch = jest.spyOn(store, "dispatch");

const mockCurrentLoans = mockInitialState.currentLoans.loans;

const renderedComponent = () => {
  return mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

describe("App", () => {
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

  it("should dispatch correct action", () => {
    store.dispatch(setCurrentLoans(mockCurrentLoans));

    expect(mockDispatch).toHaveBeenCalledWith(
      setCurrentLoans(mockCurrentLoans)
    );
  });
});
