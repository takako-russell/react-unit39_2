function Tweet({ username, name, date, message }) {
  return (
    <div className="tweetWrapper">
      <span className="username">Username:{username}</span>
      <span>Name:{name}</span>
      <span className="date">Date:{date}</span>
      <p>{message}</p>
    </div>
  );
}
