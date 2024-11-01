import { socials } from "../constants/index.jsx";

const Footer = () => {
  return (
    <footer>
        <div className="container py-10">
            <div className="flex w-full max-md:flex-col">
            <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
                <p className="opacity-70 text-p2">Copyright, Feast.inc</p>
            </div>
            </div>
        </div>
        </footer>
    );
};
export default Footer;