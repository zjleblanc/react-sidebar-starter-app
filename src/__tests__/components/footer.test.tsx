import React from "react";
import renderer from "react-test-renderer";
import { Footer } from "components";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { users } from "../../redux/modules/users/users"

describe("Footer component tests", () => {
    it("Check Footer Component Render", () => {
        const store = createStore(users, applyMiddleware(thunk));
        const component = renderer.create(<Footer />).toJSON();
        expect(component).toMatchSnapshot();
    });
});