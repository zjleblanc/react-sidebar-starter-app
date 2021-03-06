import React from "react";
import renderer from "react-test-renderer";
import { Header } from "components";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { users } from "../../redux/modules/users/users"

describe("Header component tests", () => {
    it("Check Header Component Render", () => {
        const store = createStore(users, applyMiddleware(thunk));
        const component = renderer.create(<Provider store={store}><Router><Header history={[]} /></Router></Provider>).toJSON();
        expect(component).toMatchSnapshot();
    });
});