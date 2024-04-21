import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import ContextMenuz from "./contextMenu";

describe("CorrectMenuVisible", () => {
  it("The title is visible", () => {
    render(
      <BrowserRouter>
        <ContextMenuz />
      </BrowserRouter>
    );

    expect(screen.getByText("Инструменты тестирования")).toBeInTheDocument();
  });

  it("Menu shows onClick", async () => {
    await render(
      <BrowserRouter>
        <ContextMenuz />
      </BrowserRouter>
    );

    const button = screen.getByText("Инструменты тестирования");
    await fireEvent.click(button);
 
    const menu = screen.getByRole("menu");
    expect(menu).toHaveTextContent('МодульноеИнтеграционноеСквозноеПрочие');
    
    // expect(menu).not.toBeInTheDocument();
  });
});   
