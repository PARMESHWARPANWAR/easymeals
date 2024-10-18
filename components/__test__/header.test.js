const { render,screen, fireEvent } = require("@testing-library/react")
const { default: Header } = require("../Header/Header")
const { FilterContextProvider } = require("../../context/FilterContext")
import "@testing-library/jest-dom";
import Products from "../Products/products";
import { ToastContainer } from "react-toastify";

test("Header component test",()=>{
    render(<FilterContextProvider><Header/></FilterContextProvider>)
    const btn =  screen.getByRole('button')

    expect(btn).toBeInTheDocument();
})


test("Should render cart with 0 item text",()=>{
    render(
        <FilterContextProvider>
            <Header/>
        </FilterContextProvider>
    )
    const text = screen.getByText('cart (0)')

    expect(text).toBeInTheDocument();
})

test("Should render cart with 0 item text",()=>{
    render(
        <FilterContextProvider>
            <Header/>
            <Products/>
            <ToastContainer />
        </FilterContextProvider>
    )
    const text = screen.getByRole('textbox')

    const allCardsBeforeSearch = screen.getAllByTestId('ProductItem')
    const count1 = allCardsBeforeSearch.length;
    fireEvent.change(text, {target:{value:'Cake'}})
    const allCardsAfterSearch = screen.getAllByTestId('ProductItem')
    const count2 = allCardsAfterSearch.length;
    expect(count1).toBe(400);
    expect(count2).toBe(3);
})