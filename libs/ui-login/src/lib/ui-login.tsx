import styles from './ui-login.module.scss';

/* eslint-disable-next-line */
export interface UiLoginProps {}

export function UiLogin(props: UiLoginProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiLogin!</h1>
    </div>
  );
}

export default UiLogin;
