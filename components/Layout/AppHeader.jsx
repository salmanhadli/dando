import classes from './Header.module.css';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const navItems = [
    {
      text: 'Home',
      href: '/home'
    },
    {
      text: 'About Us'
    },
    {
      text: 'Login/Logout'
    }
  ];

  const openRoute = (href) => {
    if (!href) return;
    router.push(href);
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <small>logo here</small>
      </div>
      <nav className={classes.navigation}>
        <ul className="flex">
          {navItems.map((navItem, i) => (
            <li
              style={{ marginInline: 6, cursor: 'pointer' }}
              key={i}
              onClick={() => openRoute(navItem.href)}>
              {navItem.text}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
