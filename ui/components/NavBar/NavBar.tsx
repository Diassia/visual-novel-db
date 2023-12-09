import React, { useState } from "react";
import Link from "next/link";
import styles from '../../styles/Home.module.css'
import { IoAddCircleOutline, IoHomeOutline, IoLogInOutline, IoListCircleOutline, IoPersonCircleOutline } from "react-icons/io5";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: 'Home',
      href: '/',
      icon: <IoHomeOutline size={14} />
    },
    {
      id: 2,
      name: 'Add VN',
      href: '/add',
      icon: <IoAddCircleOutline size={14} />
    },
    {
      id: 3,
      name: 'Database',
      href: '/database',
      icon: <IoListCircleOutline size={14} />
    },
    {
      id: 4,
      name: 'Profile',
      href: '/profile',
      icon: <IoPersonCircleOutline size={14} />
    },
    {
      id: 5,
      name: 'Login',
      href: '/login',
      icon: <IoLogInOutline size={14} />
    },
  ]

  return (
    <div className={styles.navBar}>
      {links.map((link, id)=> {
        return (
            <Link href={link.href} className={styles.navLink}>
                {link.icon}  {link.name}
            </Link>
        )
      })}
    </div>
  )
}

export default NavBar;