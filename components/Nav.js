import Link from 'next/link';

const Nav = ({ navData, header }) => {
  return (
      <nav className = "flex items-center">
        <ul className = "flex gap-24">
          {navData.map((item, index) => {
            return (
                <li key = {index}>
                  <Link href = {item.href}>
                    <a className = {`${header ? "text-accent hover:text-accent-hover/70" : "text-black  hover:text-black/70"} text-lg cursor-pointer transition`}>{item.name}</a>
                  </Link>
                </li>
            );
          })}
        </ul>
      </nav>
  );
};

export default Nav;