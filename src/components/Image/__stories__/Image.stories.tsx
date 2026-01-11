import { Image } from '../Image';

import { Meta, StoryObj } from '@storybook/react-vite';
import '../image/image.scss';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    a11y: {
      context: '#storybook-root',
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg',
  },
};

export const AllVariants: Story = {
  render: () => {
    const url =
      'https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg';

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Image alt={'image-rounded'} variant={'rounded'} src={url} />
          <span>Rounded</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Image alt={'image-circle'} variant={'circle'} src={url} />
          <span>Circle</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Image alt={'image-square'} variant={'square'} src={url} />
          <span>Square</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Image alt={'image-inherit'} variant={'inherit'} src={url} />
          <span className={'text-red'}>Inherit</span>
        </div>
      </div>
    );
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
};
