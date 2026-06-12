import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  children: ReactNode;
  href?: string;
  appearance: 'primary' | 'ghost';
  arrow?: 'right' | 'down' | 'none';
}
