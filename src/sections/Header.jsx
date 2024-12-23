import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const NavLink = ({ title }) => (
  //   <LinkScroll
  //     onClick={() => setIsOpen(false)}
  //     to={title}
  //     offset={-100}
  //     spy
  //     smooth
  //     activeClass="nav-active"
  //     className="base-bold text-black uppercase transition-colors duration-500 cursor-pointer hover:text-p2 max-lg:my-4 max-lg:h5 max-lg:text-p8"
  //   >
  //     {title}
  //   </LinkScroll>
  // );

  // updated
  const NavLink = ({ title, to}) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={to}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold text-black uppercase transition-colors duration-500 cursor-pointer hover:text-p2 max-lg:my-4 max-lg:h5 max-lg:text-p8"
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-8",
        hasScrolled && "py-2 bg-white backdrop-blur-[8px]",
      )}
    >
      <div className="container flex h-10 py-8 items-center max-lg:px-5 max-lg:py-1">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/feastLogo.svg" width={80} height={55} alt="logo" />
        </a>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-white max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden  max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink to="features" title="features" />
                  <NavLink to="joinus" title="Join Us" />
                </li>

                <li className="nav-logo">
                  <LinkScroll
                    // to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer",
                    )}
                  >
                    <img
                      src="/images/feastLogo.svg"
                      width={72}
                      height={72}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <NavLink to="reviews" title="reviews" />
                  <NavLink to="contactus" title="contact us" />
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <button
          className="lg:hidden z-2 size-10  rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            src={`/images/${isOpen ? "feast-header-close" : "feast-header-hamburger"}.svg`}
            alt="magic"
            className="size-4/6 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;