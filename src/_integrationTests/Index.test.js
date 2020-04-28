import moxios from "moxios";
import { testStore } from "./../../Utils/Index";
import { fetchPosts } from "./../actions/Index";

describe("fetchPosts action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Store updated correctly", () => {
    const expectedState = [
      {
        title: "Eg title 1",
        body: "Some text",
      },
      {
        title: "Eg title 1",
        body: "Some text",
      },
      {
        title: "Eg title 1",
        body: "Some text",
      },
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
