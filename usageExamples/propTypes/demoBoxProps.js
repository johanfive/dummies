/* eslint-disable sort-keys */
import React from 'react';

export const demoBoxProps = [
  {
    name: 'functStrings',
    types: ['string', 'array of strings'],
    notes: (
      <div>
        The DemoBox component relies on Jest's "pretty-format" to render the code string.
        <br />Unfortunately "pretty-format" will replace each function with the string "[Function]".
        <br />The funcStrings prop of DemoBox is there to cancel out this behaviour:
      </div>
    ),
    examples: (
      <pre style={{ textAlign: 'left' }}>
        {`∙ "() => console.log('Replaces [Function] with this string')"
∙ [
    "() => console.log('Replaces [Function] with this string')",
    "() => console.log('Replaces nth [Function] with nth string')"
  ]`}
      </pre>
    )
  }
];
