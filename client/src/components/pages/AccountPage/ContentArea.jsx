const ContentArea = ({ selectedOption, userData }) => {
  const styles = {
    userDetail: "mb-2",
  };

  if (selectedOption === "settings") {
    return (
      <div>
        <h2 className='text-2xl font-semibold mb-4'>Account Settings</h2>
        <p className={styles.userDetail}>Email: {userData?.email}</p>
      </div>
    );
  }

  if (selectedOption === "preferences") {
    return (
      <div>
        <h2 className='text-2xl font-semibold mb-4'>Preferences</h2>
        {userData?.preferences.map((preference, index) => (
          <p key={index} className={styles.userDetail}>
            {preference}
          </p>
        ))}
      </div>
    );
  }

  // ... (other options)

  return null;
};

export default ContentArea;
