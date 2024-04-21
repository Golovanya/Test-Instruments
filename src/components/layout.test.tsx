import { render,screen } from '@testing-library/react';
import Layout from './layout';
import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";

describe('<Layout />', () => {
  it('renders Header and Outlet', () => {
    const { getByTestId } = render(
    <BrowserRouter>  <Layout />
    </BrowserRouter>
  );
  // Наличие Header
  const mainButton = screen.getByText("Главная");
      const menuButton = screen.getByText("Инструменты тестирования")
      expect(mainButton).toBeInTheDocument();
      expect(menuButton).toBeInTheDocument();

    // Проверяем наличие компонента Outlet
    const outlet = getByTestId('outlet-component');
    expect(outlet).toBeInTheDocument();
  });


});