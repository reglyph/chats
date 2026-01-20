import * as React from 'react';
import { ImageProps, ImageRef } from './types/common';
import { image } from './image/image';
import { useCallback } from 'react';

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      height = '100px',
      width = '100px',
      loading = 'lazy',
      decoding = 'auto',
      className,
      priority,
      variant,
      alt,
      onError,
      ...rest
    },
    ref: ImageRef,
  ) => {
    const handleError = useCallback(
      (e: React.SyntheticEvent<HTMLImageElement>) => {
        console.error(`[Image] failed to load "${alt || 'no-alt'}"`, {
          src,
          alt,
        });

        onError?.(e);
      },
      [src, alt, onError],
    );

    /**
     * Utility for 'number | string' support
     */
    const getSize = (value: string | number) => {
      if (typeof value !== 'string') {
        return `${value}px`;
      }

      return value;
    };

    const resolvedLoading = priority ? 'eager' : (loading ?? 'lazy');

    return (
      <img
        data-testid={`rg-image-${variant ?? 'default'}`}
        className={image({ variant }, className)}
        style={{ height: getSize(height), width: getSize(width) }}
        src={src}
        loading={resolvedLoading}
        ref={ref}
        decoding={decoding}
        alt={alt}
        onError={handleError}
        {...rest}
      />
    );
  },
);

Image.displayName = 'Image';
