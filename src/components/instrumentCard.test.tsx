import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import InstrumentCard from './InstrumentCard';
import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom'

describe('<InstrumentCard />', () => {
  const defaultProps = {
    name: 'Гитара',
    description: 'Акустическая гитара',
    image: 'path/to/image.jpg',
  };

  it('renders name, description, image, and button', () => {
    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <InstrumentCard {...defaultProps} />
      </MemoryRouter>
    );

    expect(getByText(defaultProps.name)).toBeInTheDocument();
    expect(getByText(defaultProps.description!)).toBeInTheDocument();
    expect(getByAltText(defaultProps.name)).toBeInTheDocument();
    expect(getByText('Подробнее')).toBeInTheDocument();
  });

  it('renders default description if not provided', () => {
    const { getByText } = render(
      <MemoryRouter>
        <InstrumentCard name={defaultProps.name} image={defaultProps.image} />
      </MemoryRouter>
    );

    expect(getByText('Описание отсутствует')).toBeInTheDocument();
  });

  it('generates correct link to details page', () => {
    const { getByText } = render(
      <MemoryRouter>
        <InstrumentCard {...defaultProps} />
      </MemoryRouter>
    );
    let type
    const button = getByText('Подробнее');
    expect(button.closest('a')).toHaveAttribute(
      'href',
      `/list/${type}/${defaultProps.name}`
    );
  });
});