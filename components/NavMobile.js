import Link from 'next/link'

const NavMobile = ({navData}) => {
  return (
      <nav className = "bg-accent w-full p-6">
        <ul className = "flex flex-col gap-y-6 pl-20 py-3">
          {navData.map((item, index) => {
            return (
                <li key = {index}>
                  <Link href = {item.href}>
                    <a className = "text-black hover:text-accent-hover">{item.name}</a>
                  </Link>
                </li>
            );
          })}
        </ul>
      </nav>
  );
};

export default NavMobile;
