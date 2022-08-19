import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, AddButton, toggleButton }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={toggleButton ? "tomato" : "#230ee2"}
        text={toggleButton ? "Close" : "New Task"}
        onClick={AddButton}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
  AddButton: PropTypes.func,
  toggleButton: PropTypes.bool,
};

export default Header;
