import React from "react";
import SearchForm from "../components/searchForm";
import toJSON from "enzyme-to-json";
import { render, mount } from "enzyme";


describe("Search input component", () => {

  it("should match snapshot", () => {
    const wrapper = render(<SearchForm />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("should render search input and search for sweater", () => {
    const searchForm = mount(<SearchForm />);
    const input = searchForm.find("input");
    input.simulate("change", { target: { value: "sweater" } });
    
    expect(input).toHaveLength(1);
    expect(input.prop("type")).toEqual("search");
  });
});
