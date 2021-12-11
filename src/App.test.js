import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";



describe("Cabecalho component", () => {
    test("Cabelho renderiza", () => {
        render(<App />);
        const headerTitle = screen.getByText("Anthor Flix")
        expect(headerTitle).toBeInTheDocument

    });
});