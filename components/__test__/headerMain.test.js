import { render, screen} from "@testing-library/react";
import HeaderMain from "../Header/HeaderMain";
import "@testing-library/jest-dom";

describe("HeaderMain Component", ()=>{
    test("renders all navigation links", ()=>{
        render(<HeaderMain/>)

        expect(screen.getByText("HOME")).toBeInTheDocument();
        expect(screen.getByText("CATEGORIES")).toBeInTheDocument();
        expect(screen.getByText("RECIPES")).toBeInTheDocument();
        expect(screen.getByText("CONTACT")).toBeInTheDocument();
        expect(screen.getByText("ABOUT")).toBeInTheDocument();
    })

    test("renders all social media icons",()=>{
        render(<HeaderMain/>)

        expect(screen.getByTestId("InstagramIcon")).toBeInTheDocument()
        expect(screen.getByTestId("TwitterIcon")).toBeInTheDocument();
        expect(screen.getByTestId("FacebookIcon")).toBeInTheDocument();
        expect(screen.getByTestId("PinterestIcon")).toBeInTheDocument();
        expect(screen.getByTestId("WifiIcon")).toBeInTheDocument();
        expect(screen.getByTestId("YouTubeIcon")).toBeInTheDocument();
    })
})