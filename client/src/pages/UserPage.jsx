// Dummy user data
const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  favorites: [
    { id: 1, title: "Favorite 1" },
    { id: 2, title: "Favorite 2" },
    { id: 3, title: "Favorite 3" },
    // add more favorites here
  ],
};

export default () => {
  return (
    <div className='userpage'>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <h2>Favorites</h2>
      <ul>
        {user.favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.title}</li>
        ))}
      </ul>
    </div>
  );
};
