import { createContext, useReducer } from 'react';
import notifications from '../data/notifications';
import NotificationsReducer from './NotificationsReducer';

const INITIAL_STATE = {
  unread: notifications.unread,
  content: notifications.content,
};

export const NotificationsContext = createContext(INITIAL_STATE);

export const NotificationsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NotificationsReducer, INITIAL_STATE);

  return (
    <NotificationsContext.Provider
      value={{
        unread: state.unread,
        content: state.content,
        dispatch,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};
