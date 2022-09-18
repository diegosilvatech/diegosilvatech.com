import { styled } from 'styles/stitches.config';

export const ButtonWrapper = styled('button', {
  appearance: 'none',
  background: 'transparent',
  border: 0,
  borderRadius: '$xs',
  color: '$text-contrast-high',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '$md',
  fontWeight: 600,
  lineHeight: '$150',
  margin: '0 0 0 -10px',
  outline: '0',
  padding: '$sm',
  textDecoration: 'none',
  transition: '$default',
  '&:hover': {
    background: '$brand-primary-03',
    color: '$text-contrast-high',
    opacity: 1,
    kbd: {
      color: '$text-white',
      background: '$brand-primary-09'
    }
  }
});
