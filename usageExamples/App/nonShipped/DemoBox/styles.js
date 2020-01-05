const border = '1px solid #eee';
const padding = '1rem';

export const wrapperStyle = (overrides = {}) => ({ border, ...overrides });

export const componentBlockStyle = () => ({ padding });

export const codeStringStyle = () => ({
  background: '#f5f5f5',
  border,
  margin: 0,
  padding
});
