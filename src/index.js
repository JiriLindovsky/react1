import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument } from 'react-dom/test-utils';

const element= <h1>Hello World</h1>;
console.log(element);
ReactDOM.render(element,document.getElementById('root'));



