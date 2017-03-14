/*
  This is straight from the JSON-schema-form docs.
  Go here for more info: https://github.com/mozilla-services/react-jsonschema-form#usage
*/

import React from 'react';
import { render } from 'react-dom';

import Form from 'react-jsonschema-form';

const schema = {
  title: 'Sample JSON-schema-form',
  type: 'object',
  required: ['title'],
  properties: {
    title: { type: 'string', title: 'Title', default: 'A new task' },
    done: { type: 'boolean', title: 'Done?', default: false },
  },
};

const log = (type) => console.log.bind(console, type);

render((
  <Form
    schema = { schema }
    onChange = { log('changed') }
    onSubmit = { log('submitted') }
    onError = { log('errors') }
  />
), document.getElementById('root'));
