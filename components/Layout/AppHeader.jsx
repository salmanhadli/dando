import classes from './Header.module.css';
import Link from 'next/link';
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
    // router.push(href);
    console.log(router);
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <small>logo here</small>
      </div>
      <nav className={classes.navigation}>
        <ul style={{ display: 'flex' }}>
          {navItems.map((navItem, i) => (
            <li style={{ marginInline: 6 }} key={i}>
              <Link href={navItem.href || '/'}>{navItem.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
