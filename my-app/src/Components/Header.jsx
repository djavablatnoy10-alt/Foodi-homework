
function Header() {
    return (
        <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
            <a href="#" className="flex items-center gap-1 text-xl font-bold">
                <span className="rounded bg-green-500 px-2 py-1 text-white">
                    F
                </span>
                <span>OOD</span>
            </a>

            <nav className="hidden items-center gap-7 text-sm md:flex">
                <a href="#" className="text-green-500">Home</a>
                <a href="#menu" className="hover:text-green-500">Menu</a>
                <a href="#about" className="hover:text-green-500">Services</a>
                <a href="#reviews" className="hover:text-green-500">About Us</a>
            </nav>

            <a
                href="#menu"
                className="rounded-full bg-green-500 px-5 py-2 text-sm text-white hover:bg-green-600"
            >
                Explore Food
            </a>
        </header>
    );
}

export default Header;
