import React from "react";
import SearchForm from "../components/searchForm";
import toJSON from "enzyme-to-json";
import { render } from "enzyme";

describe("Search input component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<SearchForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
