import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-gradient-to-l from-stone-950 to-transparent fixed left-0 right-0 z-50 pt-4 pb-2 top-0">
      <div className="container px-4 mx-auto py-2">
        <div className="flex flex-col gap-y-2 font-medium items-end">
          <Link to="/#projects">Projects</Link>
          <Link to="/#about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
