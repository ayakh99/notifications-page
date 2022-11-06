/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from 'react';
import { NotificationsContext } from '../context/NotificationsContext';
import NotificationsList from './NotificationsList';

const Notifications = () => {
  const { unread, dispatch } = useContext(NotificationsContext);

  return (
    <div className="container">
      <header className="header">
        <h1 className="heading">Notifications</h1>
        <span className="badge" aria-label="unread notifications count">
          {unread}
        </span>
        <a
          href="#"
          className="option | transition"
          id="toggle"
          onClick={() => dispatch({ type: 'READ' })}
        >
          Mark all as read
        </a>
      </header>
      <main>
        <NotificationsList />
      </main>
    </div>
  );
};

export default Notifications;
