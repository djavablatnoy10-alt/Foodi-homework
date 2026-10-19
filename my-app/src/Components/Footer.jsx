
function Footer() {
    return (
        <footer className="mt-10 border-t border-gray-100">
            <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 md:grid-cols-4">
                <div>
                    <a href="#" className="flex items-center gap-1 text-xl font-bold">
                        <span className="rounded bg-green-500 px-2 py-1 text-white">
                            F
                        </span>
                        OOD
                    </a>

                    <p className="mt-4 text-sm leading-6 text-gray-500">
                        Fresh food and delicious meals
                        made with love.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold">Useful Links</h3>
                    <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
                        <a href="#">About Us</a>
                        <a href="#menu">Menu</a>
                        <a href="#about">Services</a>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold">Main Menu</h3>
                    <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
                        <a href="#menu">Special Dishes</a>
                        <a href="#menu">Salads</a>
                        <a href="#menu">Popular Food</a>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold">Contact Us</h3>
                    <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
                        <p>Email: info@example.com</p>
                        <p>Phone: +998 90 000 00 00</p>
                        <p>Location: Uzbekistan</p>
                    </div>
                </div>
            </div>

            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
                <p>© 2026 Food. All rights reserved.</p>

                <div className="flex gap-4">
                    <a href="#">Instagram</a>
                    <a href="#">Telegram</a>
                    <a href="#">Facebook</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
