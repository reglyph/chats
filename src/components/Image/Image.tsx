import * as React from 'react';
import { ImagePropsWithTypedAttrs, ImageRef } from './types/common';
import { image } from './image/image';

export const Image = React.forwardRef(function Image<
  C extends React.ElementType = 'img',
>(
  {
    src,
    height = '100px',
    width = '100px',
    loading = 'lazy',
    decoding = 'auto',
    className,
    variant,
    fallbackImageSrc,
    alt,
    ...rest
  }: ImagePropsWithTypedAttrs<C>,
  ref: ImageRef<C>,
) {
  /**
   * Utility for 'number | string' support
   */
  const getSize = (value: string | number) => {
    if (value !== typeof 'string') {
      return `${value}px`;
    }

    return value;
  };

  return (
    <img
      className={image({ variant }, className)}
      style={{ height: getSize(height), width: getSize(width) }}
      src={src ?? fallbackImageSrc}
      height={height}
      width={width}
      loading={loading}
      ref={ref}
      decoding={decoding}
      alt={alt}
      {...rest}
    />
  );
});

Image.displayName = 'Image';
