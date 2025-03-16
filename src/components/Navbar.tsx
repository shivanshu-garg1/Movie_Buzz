import { NavLink } from "react-router-dom";

type NavLinks = {
  name: string;
  path: string;
};

type NavbarProps = {
  name: string;
  links: NavLinks[];
};

export default function Navbar(props: NavbarProps) {

  return (
    <nav className="flex flex-wrap justify-between px-30 py-3 bg-black">
      <div className="font-black text-lg text-red-600">{props.name}</div>
      <div className="flex flex-wrap gap-5 font-semibold ">
        {props.links.map((link) => (
          <span key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => (isActive ? " border-b-3 rounded text-red-600" : "text-red-600")}>
              {link.name}
            </NavLink>
          </span>
        ))}
      </div>
    </nav>
  );
}
