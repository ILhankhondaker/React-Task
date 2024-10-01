function Navbar() {
  const NavMenu = (
    <>
      <li>
        <a className=" text-xl text-black hover:text-[#00b795] " href="/">
          Pricing
        </a>
      </li>

      <li>
        {" "}
        <a
          className=" text-xl text-black hover:text-[#00b795]  "
          href="/contact"
        >
          Coverage
        </a>
      </li>
      <li>
        <a className=" text-xl text-black hover:text-[#00b795]  " href="/blogs">
          About Us
        </a>
      </li>
      <li>
        <a className=" text-xl text-black hover:text-[#00b795]  " href="/blogs">
          Contact
        </a>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 ">
      {/* ================================= */}
      <div className="navbar max-w-[1300px] mx-auto bg-base-100  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {NavMenu}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            {" "}
            <img
              className="w-40"
              src=" https://steadfast.com.bd/landing-page/asset/images/logo/logo.svg"
              alt=""
              srcSet=""
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavMenu}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#00b795] hover:bg-white   text-white hover:text-black">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
