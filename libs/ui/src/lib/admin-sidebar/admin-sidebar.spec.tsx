import { render } from '@testing-library/react';

import AdminSidebar from './admin-sidebar';

describe('AdminSidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminSidebar />);
    expect(baseElement).toBeTruthy();
  });
});
