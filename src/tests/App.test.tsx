import React from 'react';
import { render, screen } from '@testing-library/react';
import App, { addNums, updateToAllCaps, subtractNums } from '../components/App';

describe('App', () => {
  describe('component', () => {
    test('renders `Enter your task and deadline to complete`', () => {
      render(<App />);
      const linkElement = screen.getByText('Enter your task and deadline to complete');
      expect(linkElement).toBeInTheDocument();
    });
  });

  describe('helpers', () => {
    describe('addNums', () => {
      test('adds two numbers together and returns the result', () => {
        expect(addNums(5, 6)).toBe(11);
        expect(addNums(1, 2)).toBe(3);
      });
    });

    describe('updateToAllCaps', () => {
      test('updates passed-in word to ALL-CAPS', () => {
        expect(updateToAllCaps('cat')).toBe('CAT');
        expect(updateToAllCaps('dog')).toBe('DOG');
      });
    });

    describe('subtractNums', () => {
      test('adds two numbers together and returns the result', () => {
        expect(subtractNums(5, 6)).toBe(-1);
        expect(subtractNums(1, 2)).toBe(-1);
      });
    });
  });
});

