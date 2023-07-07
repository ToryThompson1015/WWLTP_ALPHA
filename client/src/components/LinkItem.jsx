const LinkItem = ({ text, to, onClick }) => {
  return (
    <a href={to} onClick={onClick}>
      {text}
    </a>
  );
};

export default LinkItem;
