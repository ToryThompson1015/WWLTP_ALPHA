import LinkItem from "./LinkItem";

const TopLayerNav = ({ isLoggedIn, handleLogin, handleLogout }) => {
  const topNavItems = [
    { text: "STREAMS", url: "/streams" },
    { text: "COMPETITIVE", url: "/competitive" },
    { text: "NEWS", url: "/news" },
    { text: "HIGHLIGHTS", url: "/highlights" },
  ];

  return (
    <div className='mb-5 flex justify-between items-center w-full h-14  px-8'>
      <div className='flex justify-center w-3/4 space-x-40 p-10'>
        {topNavItems.map((item) => (
          <LinkItem key={item.text} text={item.text} to={item.url} />
        ))}
      </div>
      <div className='flex space-x-4'>
        {isLoggedIn ? (
          <>
            <LinkItem text='ACCOUNT' to='/account' />
            <LinkItem text='LOGOUT' to='#' onClick={handleLogout} />
          </>
        ) : (
          <LinkItem text='Login' to='#' onClick={handleLogin} />
        )}
      </div>
    </div>
  );
};

export default TopLayerNav;
