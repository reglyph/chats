import { Message } from '../../lib/main';
import styles from './playground.module.css';

/**
 * Playground created to ease UI components development
 *
 * @constructor
 */
function Playground() {
  return (
    <>
      <div className={styles.playground}>
        <Message type={'incoming'}>
          <Message.Sender name={'Peter Steele'} />

          <Message.Body>You’re breathtaking!</Message.Body>
        </Message>
      </div>
    </>
  );
}

export default Playground;
