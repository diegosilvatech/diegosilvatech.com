import { tokens } from 'styles';

export type TextElementTypes =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'strong'
  | 'span';
export type TextSpacingsTypes = keyof typeof tokens.spacing;
