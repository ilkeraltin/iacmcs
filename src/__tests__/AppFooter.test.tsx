import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AppFooter from '../components/AppFooter';

describe('<AppFooter />', () => {
  test('should display a github link and sign at the footer', async () => {
    const { findByTestId } = render(<AppFooter />);
    const footerLink = await findByTestId('app-footer__link');
    const footerSign = await findByTestId('app-footer__sign');
    expect(footerLink).toBeInTheDocument();
    expect(footerSign).toBeInTheDocument();
  });
});
