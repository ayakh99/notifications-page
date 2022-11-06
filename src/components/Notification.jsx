/* eslint-disable jsx-a11y/anchor-is-valid */
const Notification = ({ data }) => {
  const { unread, user, action, time, post, photo, message, other } = data;

  return (
    <li className={`notification ${unread ? `unread` : ''}`}>
      <img src={user.avatar} alt={user.name} className="display-picture" />
      <div className="content">
        <p>
          <a href="#" className="user | transition">
            {user.name}
          </a>
          {' ' + action}

          {post && (
            <a href="#" className="post | transition margin-left">
              {' ' + post.title}
            </a>
          )}

          {other && (
            <a href="#" className="external | transition margin-left">
              {' ' + other.title}
            </a>
          )}

          {unread && <span className="indicator"></span>}
        </p>
        <span className="notification-timestamp">{time} ago</span>
        {message && <p className="message">{message.body}</p>}
      </div>

      {photo && <img src={photo.path} alt="post" className="photo-post" />}
    </li>
  );
};

export default Notification;
