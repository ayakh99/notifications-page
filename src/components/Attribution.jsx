const Attribution = ({ data }) => {
  const { path, name } = data;

  return (
    <div className="attribution">
      Challenge by{' '}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
        Frontend Mentor
      </a>
      . Coded by <a href={path}>{name}</a>.
    </div>
  );
};

export default Attribution;
