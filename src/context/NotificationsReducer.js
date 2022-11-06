const NotificationsReducer = (state, action) => {
  switch (action.type) {
    case 'READ':
      const update = state.content.map((n) => ({ ...n, unread: false }));
      return {
        unread: 0,
        content: update,
      };
    default:
      return state;
  }
};

export default NotificationsReducer;
