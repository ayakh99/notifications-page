const notifications = {
  unread: 3,
  content: [
    {
      unread: true,
      user: {
        name: 'Mark Webber',
        avatar: 'assets/avatar-mark-webber.webp',
      },
      action: 'reacted to your recent post',
      post: {
        title: 'My first tournament today!',
      },
      time: '1m',
    },
    {
      unread: true,
      user: {
        name: 'Angela Gray',
        avatar: 'assets/avatar-angela-gray.webp',
      },
      action: 'followed you',
      time: '5m',
    },
    {
      unread: true,
      user: {
        name: 'Jacob Thompson',
        avatar: 'assets/avatar-jacob-thompson.webp',
      },
      action: 'has joined your group',
      other: {
        title: 'Chess Club',
      },
      time: '1 day',
    },
    {
      unread: false,
      user: {
        name: 'Rizky Hasanuddin',
        avatar: 'assets/avatar-rizky-hasanuddin.webp',
      },
      action: 'sent you a private message',
      message: {
        body: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
  I'm already having lots of fun and improving my game.`,
      },
      time: '5 days',
    },
    {
      unread: false,
      user: {
        name: 'Kimberly Smith',
        avatar: 'assets/avatar-kimberly-smith.webp',
      },
      action: 'commented on your picture',
      photo: {
        path: 'assets/image-chess.webp',
      },
      time: '1 week',
    },
    {
      unread: false,
      user: {
        name: 'Nathan Peterson',
        avatar: 'assets/avatar-nathan-peterson.webp',
      },
      action: 'reacted to your recent post',
      post: {
        title: '5 end-game strategies to increase your win rate',
      },
      time: '2 weeks',
    },
    {
      unread: false,
      user: {
        name: 'Anna Kim',
        avatar: 'assets/avatar-anna-kim.webp',
      },
      action: 'left the group',
      other: {
        title: 'Chess Club',
      },
      time: '2 weeks',
    },
  ],
};

export default notifications;
