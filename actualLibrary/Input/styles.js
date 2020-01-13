const boxSizing = 'border-box';
const borderRadius = '5px';
const padding = '.2rem';

export const wrapperStyle = (overrides = {}, labelBlockOnTop) => ({
  alignItems: labelBlockOnTop ? 'stretch' : 'center',
  boxSizing,
  display: 'flex',
  flexDirection: labelBlockOnTop ? 'column' : 'row',
  justifyContent: 'space-between',
  ...overrides // keep at the bottom to allow overrides
  // for example wrapperStyle({ alignItems: 'felx-start' })
  // which really would be <Input style={{ alignItems: 'flex-start' }} />
});

export const inputBlockStyle = (width, labelBlockOnLeft, labelBlockOnTop) => ({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: width ? 0 : 1, // if users override width, it's because they want full control
  marginLeft: labelBlockOnLeft ? '1rem' : undefined,
  marginTop: labelBlockOnTop ? '.2rem' : undefined,
  position: 'relative',
  width: width || '100%'
});

export const inputStyle = (iconLeft, disabled, error) => ({
  background: disabled ? '#f5f5f5' : undefined,
  borderColor: error ? 'red' : undefined,
  borderRadius,
  boxSizing,
  fontFamily: 'inherit',
  fontSize: 'inherit',
  outline: error ? 0 : undefined,
  padding,
  paddingLeft: iconLeft ? '2rem' : padding,
  paddingRight: iconLeft ? padding : '2rem',
  width: '100%'
});

export const requiredStyle = () => ({
  color: 'red'
});

export const helpTextStyle = () => ({
  color: 'grey',
  fontSize: '.8rem'
});

export const errorStyle = () => ({
  background: 'white',
  border: '1px solid red',
  borderRadius,
  color: 'red',
  padding,
  position: 'absolute',
  top: '1.8rem',
  zIndex: '99998'
});

export const iconStyle = (iconLeft) => {
  const styleObj = {
    position: 'absolute',
    right: '.5rem',
    top: '.4rem'
  };
  if (iconLeft) {
    delete styleObj.right;
    styleObj.left = '.5rem';
  }
  return styleObj;
};
