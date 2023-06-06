import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const navigators = [
  { name: 'Home' },
  { name: 'Marketplace' },
  { name: 'Collection' },
  { name: 'Creator' },
  { name: 'Docs' },
];

const Navbar = () => {
  return (
    <>
      <div className="navbar flex justify-between rounded-bl-2xl rounded-br-2xl shadow-xl bg-violet-800 text-white">
        <div className="gap-2">
          <div className="dropdown">
            <label tabIndex={0} className="md:hidden">
              <FaBars size={20} />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow-xl bg-violet-800 rounded-bo w-56 font-bold rounded-bl-xl rounded-br-xl"
            >
              {navigators.map((navitem, index) => (
                <li key={index}>{navitem?.name}</li>
              ))}
            </ul>
          </div>

          <Link>
            <span className="normal-case font-bold text-3xl tracking-widest">
              GENX
            </span>
          </Link>
        </div>

        <div className="hidden md:flex">
          <ul
            className="menu menu-horizontal font-bold px-1 text-lg uppercase gap-3
          "
          >
            {navigators.map((navitem, index) => (
              <li key={index}>{navitem?.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
