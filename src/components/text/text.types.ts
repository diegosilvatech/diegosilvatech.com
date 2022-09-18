import { tokens } from 'styles';

export type TextElementTypes =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h5'
  | 'h6'
  | 'p'
  | 'a'
  | 'small'
  | 'strong'
  | 'span'
  | 'blockquote'
  | 'kbd';

export type TextSpacingsTypes = keyof typeof tokens.spacing;
