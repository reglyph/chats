import styles from './message.module.scss';
import * as React from 'react';
import { MessageSender } from '..';
import { MessageBody } from '..';

export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  type: 'outgoing' | 'incoming' | 'system';
  children?: React.ReactNode;
}

export function Message({ type, children, ...rest }: MessageProps) {
  return (
    <div
      className={`${type === 'incoming' ? styles['message-incoming'] : styles['message-outgoing']} ${styles['message-base']}`}
      {...rest}
    >
      {children}
    </div>
  );
}

Message.displayName = 'Message';

Message.Sender = MessageSender;
Message.Body = MessageBody;
