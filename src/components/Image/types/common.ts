import * as React from 'react';
import { ImageVariants } from '../image/image';

export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  height?: string | number;
  width?: string | number;
  src?: string;
  loading?: 'eager' | 'lazy';
  fallbackImageSrc?: string;
  alt: string;
  variant?: ImageVariants;
  className?: string;
  decoding?: 'sync' | 'async' | 'auto';
}

export type ImageRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref'];

export type ImagePropsWithTypedAttrs<T extends React.ElementType> = ImageProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ImageRef<T>>;
