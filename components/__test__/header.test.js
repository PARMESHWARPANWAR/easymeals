const { render,screen } = require("@testing-library/react")
const { default: Header } = require("../Header/Header")
const { FilterContextProvider } = require("../../context/FilterContext")
// import { categories } from "@/pages/api/filters";
import "@testing-library/jest-dom";

test("Header component test",()=>{
    render(<FilterContextProvider><Header/></FilterContextProvider>)
    const btn =  screen.getByRole('button')

    expect(btn).toBeInTheDocument();
})