import { block } from '../../utils/cn';

const b = block('image');

export type ImageVariants = 'rounded' | 'circle' | 'square' | 'inherit';

export interface ImageBaseProps {
  /*
   * - rounded (border-radius: 4px)
   * - circle (border-radius: 100%)
   * - square (border-radius: 0)
   * - inherit (border-radius: inherit)
   */
  variant?: ImageVariants;
}

export const image = (
  { variant = 'rounded' }: ImageBaseProps,
  className?: string,
) =>
  b(
    {
      variant,
    },
    className,
  );
