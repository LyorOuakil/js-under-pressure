import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../components/Button';

test('Button text is well displayed', () => {
  render(<Button text="Hello world" onClick={() => null} />);
  const buttonElement = screen.getByText('Hello world');
  expect(buttonElement).toBeInTheDocument();
});

test('Button is clickable', () => {
  const close = jest.fn();
  render(<Button text="Hello world" onClick={close} />);
  const closeButton = document.body.querySelector('.button_element');
  fireEvent.click(closeButton);
  expect(close.mock.calls.length).toBe(1);
});
