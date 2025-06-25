import type { Meta, StoryObj } from '@storybook/react-vite';
import { Message } from '../../lib/components';

const meta = {
  title: 'Components/Message',
  component: Message,
  tags: ['autodocs'],
  args: {
    type: 'incoming',
    children: 'Sample message text',
  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Incoming: Story = {
  args: {
    type: 'incoming',
    children: 'This is an incoming message',
  },
};

export const Outgoing: Story = {
  args: {
    type: 'outgoing',
    children: 'This is an outgoing message',
  },
};

export const System: Story = {
  args: {
    type: 'system',
    children: 'System notification message',
  },
};

export const WithSenderBody: Story = {
  render: (args) => (
    <Message type={args.type}>
      <Message.Sender name="Peter Steele" />
      <Message.Body>{args.children}</Message.Body>
    </Message>
  ),
  args: {
    type: 'incoming',
    children: "You're breathtaking!",
  },
};
