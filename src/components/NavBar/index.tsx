// import useTheme from "../changeTheme/useTheme";
import ThemeSwitcher from "../changeTheme/ThemeSwitcher";

type NavBarProps = {
  id: string;
  title: string;
  className?: string;
};

function NavBar({ itemData }: { itemData: NavBarProps[] }) {
  // const { theme, setTheme } = useTheme();

  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        {itemData.map((item, i) => (
          <li key={i} className={`navbar__li ${item.className}`}>
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>

      <ThemeSwitcher></ThemeSwitcher>
    </nav>
  );
}
export default NavBar;