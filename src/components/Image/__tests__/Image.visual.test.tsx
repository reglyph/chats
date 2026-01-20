import { expect, test } from '@playwright/experimental-ct-react';
import { Image } from '../Image';
import { ImageVariants } from '../image/image';

test.describe('Image', () => {
  test('default', async ({ mount }) => {
    const component = await mount(
      <Image
        src={
          'data:image/svg+xml;utf8,' +
          encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">' +
              '<rect width="100" height="100" fill="tomato"/></svg>',
          )
        }
        alt="test image"
        width={100}
        height={100}
        loading="eager"
        decoding="sync"
      />,
    );

    await expect(component).toHaveScreenshot();
  });

  ['rounded', 'circle', 'square', 'inherit'].map((variant) => {
    test(':variant-' + variant, async ({ mount }) => {
      const component = await mount(
        <Image
          src={
            'data:image/svg+xml;utf8,' +
            encodeURIComponent(
              '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">' +
                '<rect width="100" height="100" fill="tomato"/></svg>',
            )
          }
          alt="test image"
          width={100}
          height={100}
          variant={variant as ImageVariants}
          loading="eager"
          decoding="sync"
        />,
      );

      await expect(component).toHaveScreenshot();
    });
  });
});
