import React from 'react';
import ReactDOM from 'react-dom';
import MemoryApp from './MemoryApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
