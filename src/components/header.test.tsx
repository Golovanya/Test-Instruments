import Header from "./header";
import { render,screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("CorrectMenuVisible", () => {
    it("The title is visible", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
      const mainButton = screen.getByText("Главная");
      const menuButton = screen.getByText("Инструменты тестирования")
      expect(mainButton).toBeInTheDocument();
      expect(menuButton).toBeInTheDocument();
    });
  

  });   
  