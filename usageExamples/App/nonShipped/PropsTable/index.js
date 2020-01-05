/* eslint-disable react/prop-types */
import React from 'react';

const Cell = ({ children }) => <td style={{ padding: '.5rem 2rem' }}>{children}</td>;

const PropRow = ({ index, name, types, required, notes, examples }) => {
  const bgColor = {
    background: index % 2 === 0 ? '#f5f5f5' : ''
  };
  return (
    <tr style={bgColor}>
      <Cell>{name}</Cell>
      <Cell>{types.join(', ')}</Cell>
      <Cell>{required ? 'Required' : 'Optional'}</Cell>
      <Cell>{notes}</Cell>
      <Cell>{examples}</Cell>
    </tr>
  );
};

export const PropsTable = ({ props }) => (
  <table style={{ borderBottom: '1px solid #eee', textAlign: 'center', width: '100%' }}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Types</th>
        <th>Required</th>
        <th>Notes</th>
        <th>Examples</th>
      </tr>
    </thead>
    <tbody>
      {props.map(
        ({name, types, required, notes, examples}, i) =>
          <PropRow
            key={i}
            index={i}
            name={name}
            types={types}
            required={required}
            notes={notes}
            examples={examples}
          />
      )}
    </tbody>
  </table>
);
