/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-p5-wrapper');

describe('App', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      todo: {
        recentDeleted: [],
        selectedTaskId: 0,
        tasks: {
          0: { title: 'root', subTasks: [1] },
          1: { title: 'task1', subTasks: [] },
        },
      },
    }));
  });

  it('renders', () => {
    render(<App />);
  });
});
