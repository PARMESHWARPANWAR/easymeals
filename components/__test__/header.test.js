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

test("Should add a Cake in cart",()=>{
    render(
        <FilterContextProvider>
            <Header/>
            <Products/>
            <ToastContainer />
        </FilterContextProvider>
    )

    const textBox = screen.getByRole('textbox');
    fireEvent.change(textBox, {target:{value:'Cake Slab'}})

    const favoriteBtn = screen.getByTestId('favoriteBtn')
    
    const favoriteTextCount1 = screen.getByText('Favorites(0)')

    fireEvent.click(favoriteBtn)

    const favoriteTextCount2 = screen.getByText('Favorites(1)')

    expect(favoriteTextCount1).toBeInTheDocument();  
    expect(favoriteTextCount2).toBeInTheDocument();    
})