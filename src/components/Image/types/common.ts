import * as React from 'react';
import { ImageVariants } from '../image/image';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  height?: string | number;
  width?: string | number;
  src?: string;
  alt: string;
  variant?: ImageVariants;
  className?: string;
}

export type ImageRef = React.Ref<HTMLImageElement>;
