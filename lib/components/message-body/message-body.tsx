import styles from './message-body.module.scss';
import * as React from 'react';

export interface MessageBodyProps {
  children?: React.ReactNode;
}

export function MessageBody({ children }: MessageBodyProps) {
  return <div className={styles['body']}>{children}</div>;
}

MessageBody.displayName = 'Message.Body';
