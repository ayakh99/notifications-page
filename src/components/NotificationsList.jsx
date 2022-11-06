import Notification from './Notification';
import { NotificationsContext } from '../context/NotificationsContext';
import { useContext } from 'react';

const NotificationsList = () => {
  const { content } = useContext(NotificationsContext);

  return (
    <ul className="notifications" aria-label="notifications">
      {content.map((notification, i) => (
        <Notification key={i} data={notification} />
      ))}
    </ul>
  );
};

export default NotificationsList;
