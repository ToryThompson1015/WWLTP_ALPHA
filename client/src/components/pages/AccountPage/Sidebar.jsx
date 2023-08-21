import Avatar from "../../common/Avatar";
import Button from "../../common/Button";
const Sidebar = ({ theme, onOptionSelect, onThemeChange, userName }) => {
  const styles = {
    sidebar: `w-1/4 p-8 flex flex-col items-center ${
      theme === "dark" ? "bg-gray-800" : "bg-white"
    }`,
    option: "mb-4 cursor-pointer hover:text-gray-500 font-semibold",
  };

  const options = ["settings", "preferences", "logout", "delete account"];

  return (
    <div className={styles.sidebar}>
      <Avatar name={userName || "User"} />
      {options.map((option) => (
        <div
          key={option}
          className={styles.option}
          onClick={() => onOptionSelect(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </div>
      ))}
      <Button onClick={onThemeChange}>
        Switch to {theme === "dark" ? "Light" : "Dark"} Mode
      </Button>
    </div>
  );
};
export default Sidebar;
