import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from '../App';
import * as api from '../services/api';
import mockedCategoriesResult from '../__mocks__/categories';
import mockedQueryResult from '../__mocks__/query';

jest.mock('../services/api');
api.getCategories.mockImplementation(
  () => Promise.resolve(mockedCategoriesResult)
);
api.getProductsFromCategoryAndQuery.mockImplementation(
  () => Promise.resolve(mockedQueryResult)
);

describe('Buscar por termos e receber uma listagem de produtos, com dados resumidos, associados a esses termos', () => {
  it('should search products and show them in the page', async () => {
    render(<App />);
    fireEvent.change(screen.getByTestId('query-input'), { target: { value: 'livro' }});
    fireEvent.click(screen.getByTestId('query-button'));
    await waitFor(() => expect(api.getProductsFromCategoryAndQuery).toHaveBeenCalled());
    expect(screen.getAllByTestId('product').length).toEqual(mockedQueryResult.results.length);
  });
});
