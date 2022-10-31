/*import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument } from 'react-dom/test-utils';

const element= <h1>Hello World</h1>;
console.log(element);
ReactDOM.render(element,document.getElementById('root'));

*/
import * as ReactDOMClient from 'react-dom/client';
//import App from 'App';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
const element= <h1>Hello World</h1>;
root.render(element);

// During an update, there's no need to pass the container again.
//root.render(<App tab="profile" />);



