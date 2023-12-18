import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const NavLink = ({ children, activeClassName, className, href, ...props }) => {
  const { pathname } = useRouter();
  const [active, setActive] = useState(pathname === href);

  useEffect(() => {
    setActive(pathname === href);
  }, [pathname, href]);

  return (
    <Link href={href}>
      <a
        className={active ? `${activeClassName} ${className}` : `${className}`}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
