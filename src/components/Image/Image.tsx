import * as React from 'react';
import { ImageProps, ImageRef } from './types/common';
import { image } from './image/image';

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      height = '100px',
      width = '100px',
      loading = 'eager',
      decoding = 'auto',
      className,
      variant,
      alt,
      onError,
      ...rest
    },
    ref: ImageRef,
  ) => {
    /**
     * Utility for 'number | string' support
     */
    const getSize = (value: string | number) => {
      if (typeof value !== 'string') {
        return `${value}px`;
      }

      return value;
    };

    return (
      <img
        className={image({ variant }, className)}
        style={{ height: getSize(height), width: getSize(width) }}
        src={src}
        loading={loading}
        ref={ref}
        decoding={decoding}
        alt={alt}
        onError={(e) => {
          console.error(e);

          if (onError) {
            onError(e);
          }
        }}
        {...rest}
      />
    );
  },
);

Image.displayName = 'Image';
