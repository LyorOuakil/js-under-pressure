import { render, screen } from '@testing-library/react';
import { Wording } from '../components/Wording';

test('render the text passed as props', () => {
  render(<Wording text={'Hello Masteos'} />);
  const linkElement = screen.getByText(/Hello Masteos/i);
  expect(linkElement).toBeInTheDocument();
});
