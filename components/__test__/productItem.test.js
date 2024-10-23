const { render, screen, fireEvent } = require("@testing-library/react")
const { FilterContextProvider } = require("../../context/FilterContext")
import "@testing-library/jest-dom";
import { ToastContainer } from "react-toastify";
import ProductItem from "../Products/productItem";

describe("ProductItem Component", () => {
    const mockProduct = {
        id: 1,
        name: "Test Product",
        image: "test-image.jpg",
        price: 10,
    };

    test("renders product details correctly", () => {
        render(
            <FilterContextProvider>
                <ProductItem product={mockProduct} />
            </FilterContextProvider>
        )

        expect(screen.getByText("Test Product")).toBeInTheDocument();
        expect(screen.getByAltText("Test Product")).toHaveAttribute("src", "test-image.jpg");
    });

    test("toggle wishlist status when favorite button is clicked", () => {
        render(
            <FilterContextProvider>
                <ProductItem product={mockProduct} />
            </FilterContextProvider>
        )

        const favoriteButton = screen.getByTestId("favoriteBtn");
        fireEvent.click(favoriteButton);

        // Check if the toast is displayed (you might need to mock react-toastify)
        // expect(screen.getByText("Product added in wish list successfully!")).toBeInTheDocument();

        // Check if the button color changes
        expect(favoriteButton.querySelector("svg")).toHaveStyle("color: red");
    })

    test("remove product from wishlist when clicked again", () => {
        render(<FilterContextProvider>
            <ProductItem product={mockProduct} />
        </FilterContextProvider>)

        const favoriteButton = screen.getByTestId("favoriteBtn");
        fireEvent.click(favoriteButton);

        expect(favoriteButton.querySelector('svg')).toHaveStyle('color: white')
    })

    test("displays correct preparation time", () => {
        render(
        <FilterContextProvider>
            <ProductItem product={mockProduct} />
        </FilterContextProvider>
        );

        expect(screen.getByText("Preparation Time: 15 mins")).toBeInTheDocument();

    })

    test("", ()=>{
        
    })
})