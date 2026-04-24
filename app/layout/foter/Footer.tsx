import { BiLayer } from "react-icons/bi";

const Footer = () => {
    return (
        <footer className="my-10 flex justify-between p-5">
            <div className="flex flex-col">
                <h1 className="text-lg font-bold flex m-1">
                    <BiLayer className="mr-2 h-6 w-6" />
                    TeamFlow
                </h1>
                <p>© {new Date().getFullYear()} TeamFlow Management. Optimized for high-performance teams.</p>
            </div>

            <div className="flex justify-between gap-10">
                <p className="text-sm font-sans ">Privacy Policy</p>
                <p className="text-sm font-sans ">Terms of Service</p>
                <p className="text-sm font-sans ">API Documentation</p>
                <p className="text-sm font-sans ">Support</p>
            </div>
        </footer>
    );
};
export default Footer;
