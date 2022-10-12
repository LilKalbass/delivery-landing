import Link from 'next/link';

const Nav = ({ navData, header }) => {
  return (
      <nav className = "flex items-center">
        <ul className = "flex gap-24">
          {navData.map((item, index) => {
            return (
                <li key = {index}>
                  <Link href = {item.href}>
                    <a className = {`${header ? "text-accent" : "text-black"} text-lg cursor-pointer hover:text-accent-hover transition`}>{item.name}</a>
                  </Link>
                </li>
            );
          })}
        </ul>
      </nav>
  );
};

export default Nav;