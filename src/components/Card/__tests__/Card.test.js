import React from 'react';
import { render, screen } from '@testing-library/react';
 
import Card from '../Card';
 
describe('Card', () => {
  test('renders Card component', () => {
    render(<Card title={"some_cool_title"} location={"new_location"} imageSource={"image_url"}/>);

    expect(screen.getAllByRole("img")[0].src).toContain("image_url");

    expect(screen.getByText('some_cool_title')).toBeInTheDocument();
  });
});