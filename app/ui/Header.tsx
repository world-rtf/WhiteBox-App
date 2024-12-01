import Link from "next/link";

const Header = () => (
    <header className="p-4">
        <Link href="/" className="flex items-center">
            <img src="/favicon.ico" alt="Logo" className="h-8 w-8 mr-2" />
            <h1 style={{ fontSize: "26px" }} className="font-bold">WhiteBox News</h1>
        </Link>
    </header>
);

export default Header;