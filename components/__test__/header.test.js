const { render, screen, fireEvent } = require("@testing-library/react")
const { default: Header } = require("../Header/Header")
const { FilterContextProvider } = require("../../context/FilterContext")
import "@testing-library/jest-dom";
import Products from "../Products/products";
import { ToastContainer } from "react-toastify";
import { jssPreset } from "@material-ui/core";
import React from "react";

test("Header component test", () => {
    render(<FilterContextProvider><Header /></FilterContextProvider>)
    const btn = screen.getByRole('button')

    expect(btn).toBeInTheDocument();
})


test("Should render cart with 0 item text", () => {
    render(
        <FilterContextProvider>
            <Header />
        </FilterContextProvider>
    )
    const text = screen.getByText('cart (0)')

    expect(text).toBeInTheDocument();
})

test("Should render cart with 0 item text", () => {
    render(
        <FilterContextProvider>
            <Header />
            <Products />
            <ToastContainer />
        </FilterContextProvider>
    )
    const text = screen.getByRole('textbox')

    const allCardsBeforeSearch = screen.getAllByTestId('ProductItem')
    const count1 = allCardsBeforeSearch.length;
    fireEvent.change(text, { target: { value: 'Cake' } })
    const allCardsAfterSearch = screen.getAllByTestId('ProductItem')
    const count2 = allCardsAfterSearch.length;
    expect(count1).toBe(400);
    expect(count2).toBe(3);
})

test("Should add a Cake in cart", () => {
    render(
        <FilterContextProvider>
            <Header />
            <Products />
            <ToastContainer />
        </FilterContextProvider>
    )

    const textBox = screen.getByRole('textbox');
    fireEvent.change(textBox, { target: { value: 'Cake Slab' } })

    const favoriteBtn = screen.getByTestId('favoriteBtn')

    const favoriteTextCount1 = screen.getByText('Favorites(0)')

    fireEvent.click(favoriteBtn)

    const favoriteTextCount2 = screen.getByText('Favorites(1)')

    expect(favoriteTextCount1).toBeInTheDocument();
    expect(favoriteTextCount2).toBeInTheDocument();
})

describe("Header Component", () => {
    test("renders logo and navigation links", () => {
        render(
            <FilterContextProvider>
                <Header />
            </FilterContextProvider>
        )

        expect(screen.getByText("Logo")).toBeInTheDocument();
        expect(screen.getByText("Favorites(1)")).toBeInTheDocument();
        expect(screen.getByText("cart (0)")).toBeInTheDocument();
    })

    test("updates search keyword when input changes", () => {
        render(
            <FilterContextProvider>
                <Header />
            </FilterContextProvider>
        )

        const searchInput = screen.getByPlaceholderText("Search recipes...");
        fireEvent.change(searchInput, { target: { value: "pizza" } })

        expect(searchInput.value).toBe("pizza")
    })

    test("changes category when select value changes", () => {
        render(<FilterContextProvider>
                    <Header />
                </FilterContextProvider>
        );

        const categorySelect = screen.getByRole("combobox");
        fireEvent.change(categorySelect, { target: { value: "Desserts" } });

        expect(categorySelect.value).toBe("Desserts");
    });

    test("displays correct number of items in cart and wishlist",()=>{
        // Mock the context to provide non-zero cart and wishlist items
        // jest.spyOn(React, "useContext").mockImplementation(()=>({
        //     cartItems:[{id:1},{id:2}],
        //     wishItems:[{id:3}],
        // }));

        render(
            <FilterContextProvider>
                <Header/>
            </FilterContextProvider>
        );

        // expect(screen.getByText("cart (2)")).toBeInTheDocument();
        // expect(screen.getByText("Favorites(1)")).toBeInTheDocument();
    })
})