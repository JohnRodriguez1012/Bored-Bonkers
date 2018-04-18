import React from 'react';
import ReactDOM from 'react-dom';
import HangmanApp from './HangmanApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HangmanApp />, document.getElementById('root'));
registerServiceWorker();
