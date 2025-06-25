import styles from './message-sender.module.scss';

export interface MessageSenderProps {
  name: string;
}

export function MessageSender({ name }: MessageSenderProps) {
  return <span className={styles['name']}>{name}</span>;
}

MessageSender.displayName = 'Message.Sender';
