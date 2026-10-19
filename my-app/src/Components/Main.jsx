
import Girl from "../assets/Intersect.png";
import Chef from "../assets/Mask group.png";
import Fattoush from "../assets/Fattoush salad.png";
import Vegetable from "../assets/Vegetable salad.png";
import Egg from "../assets/Egg salad.png";
import Burger from "../assets/pngwing 4.png";
import Sandwich from "../assets/pngwing 6.png";
import Juice from "../assets/pngwing 7.png";
import IceCream from "../assets/pngwing 3.png";

function Main() {
    return (
        <main>
            {/* Главный экран */}
            <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-20">
                <div>
                    <p className="mb-4 text-sm font-semibold text-green-500">
                        Fresh and Delicious
                    </p>

                    <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                        Dive into Delights
                        <br />
                        Of Delectable Food
                    </h1>

                    <p className="mt-5 max-w-md text-sm leading-6 text-gray-500">
                        Where Fresh Flavors Meet Culinary Excellence.
                        Discover delicious food made with love.
                    </p>

                    <div className="mt-7 flex items-center gap-5">
                        <a
                            href="#menu"
                            className="rounded-full bg-green-500 px-6 py-3 text-sm text-white hover:bg-green-600"
                        >
                            Order Now
                        </a>

                        <a href="#about" className="text-sm font-semibold">
                            Watch Video ▶
                        </a>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-md">
                    <div className="absolute right-2 top-8 h-64 w-64 rounded-full bg-green-400 md:h-80 md:w-80" />

                    <img
                        src={Girl}
                        alt="Girl enjoying delicious food"
                        className="relative z-10 mx-auto w-full"
                    />

                    <div className="absolute left-0 top-5 z-20 rounded-full bg-white px-4 py-3 text-sm text-red-500 shadow-lg">
                        Hot spicy Food 🌶️
                    </div>
                </div>
            </section>

            {/* Категории */}
            <section className="mx-auto max-w-6xl px-5 py-12">
                <p className="text-center text-xs font-bold uppercase tracking-widest text-red-400">
                    Customer Favorites
                </p>

                <h2 className="mt-3 text-center text-3xl font-bold">
                    Popular Categories
                </h2>

                <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="rounded-2xl bg-white p-5 text-center shadow-md">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                            <img src={Burger} alt="Burger" className="h-12 w-12 object-contain" />
                        </div>
                        <h3 className="mt-3 font-bold">Main Dish</h3>
                        <p className="mt-1 text-xs text-gray-500">(86 dishes)</p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 text-center shadow-md">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                            <img src={Sandwich} alt="Sandwich" className="h-12 w-12 object-contain" />
                        </div>
                        <h3 className="mt-3 font-bold">Breakfast</h3>
                        <p className="mt-1 text-xs text-gray-500">(12 dishes)</p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 text-center shadow-md">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                            <img src={IceCream} alt="Ice cream" className="h-12 w-12 object-contain" />
                        </div>
                        <h3 className="mt-3 font-bold">Dessert</h3>
                        <p className="mt-1 text-xs text-gray-500">(48 desserts)</p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 text-center shadow-md">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                            <img src={Juice} alt="Fresh juice" className="h-12 w-12 object-contain" />
                        </div>
                        <h3 className="mt-3 font-bold">Browse All</h3>
                        <p className="mt-1 text-xs text-gray-500">(255 items)</p>
                    </div>
                </div>
            </section>

            {/* Меню */}
            <section id="menu" className="mx-auto max-w-6xl px-5 py-16">
                <p className="text-xs font-bold uppercase tracking-widest text-red-400">
                    Special Dishes
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                    Standout Dishes
                    <br />
                    From Our Menu
                </h2>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    <div className="rounded-3xl bg-white p-5 shadow-lg">
                        <img src={Fattoush} alt="Fattoush salad" className="mx-auto h-44 w-full object-contain" />
                        <h3 className="mt-4 text-lg font-bold">Fattoush Salad</h3>
                        <p className="mt-2 text-sm text-gray-500">
                            Fresh vegetables and delicious dressing.
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                            <p className="font-bold">$12.00</p>
                            <span className="text-sm text-yellow-500">★ 4.8</span>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-white p-5 shadow-lg">
                        <img src={Vegetable} alt="Vegetable salad" className="mx-auto h-44 w-full object-contain" />
                        <h3 className="mt-4 text-lg font-bold">Vegetable Salad</h3>
                        <p className="mt-2 text-sm text-gray-500">
                            Healthy greens with a fresh taste.
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                            <p className="font-bold">$10.00</p>
                            <span className="text-sm text-yellow-500">★ 4.6</span>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-white p-5 shadow-lg">
                        <img src={Egg} alt="Egg salad" className="mx-auto h-44 w-full object-contain" />
                        <h3 className="mt-4 text-lg font-bold">Egg Salad</h3>
                        <p className="mt-2 text-sm text-gray-500">
                            A tasty salad with eggs and fresh greens.
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                            <p className="font-bold">$15.00</p>
                            <span className="text-sm text-yellow-500">★ 4.9</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Отзывы */}
            <section id="reviews" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
                <div className="mx-auto max-w-sm">
                    <img src={Chef} alt="Our chef" className="w-full" />
                </div>

                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-red-400">
                        Testimonials
                    </p>

                    <h2 className="mt-3 text-3xl font-bold">
                        What Our Customers
                        <br />
                        Say About Us
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-gray-500">
                        Our customers love our fresh ingredients, delicious meals
                        and friendly service. We always try to make every visit special.
                    </p>

                    <div className="mt-6">
                        <p className="font-bold">Customer Feedback</p>
                        <p className="mt-2 text-sm text-yellow-500">★★★★★</p>
                        <p className="mt-2 text-sm text-gray-500">
                            "The food is delicious and the service is great!"
                        </p>
                    </div>
                </div>
            </section>

            {/* Услуги */}
            <section id="about" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-red-400">
                        Our Story & Services
                    </p>

                    <h2 className="mt-3 text-3xl font-bold">
                        Our Culinary Journey
                        <br />
                        And Services
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-gray-500">
                        We create tasty meals with fresh ingredients.
                        Enjoy our food at home, with friends or at your next event.
                    </p>

                    <a
                        href="#menu"
                        className="mt-6 inline-block rounded-full bg-green-500 px-6 py-3 text-sm text-white hover:bg-green-600"
                    >
                        Explore
                    </a>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl p-5 text-center shadow-md">
                        <div className="text-3xl">🍽️</div>
                        <h3 className="mt-3 font-bold text-green-500">Catering</h3>
                        <p className="mt-2 text-xs text-gray-500">Food for your events</p>
                    </div>

                    <div className="rounded-2xl p-5 text-center shadow-md">
                        <div className="text-3xl">🚚</div>
                        <h3 className="mt-3 font-bold text-green-500">Fast Delivery</h3>
                        <p className="mt-2 text-xs text-gray-500">Fresh food at home</p>
                    </div>

                    <div className="rounded-2xl p-5 text-center shadow-md">
                        <div className="text-3xl">🛍️</div>
                        <h3 className="mt-3 font-bold text-green-500">Online Ordering</h3>
                        <p className="mt-2 text-xs text-gray-500">Order your favorite food</p>
                    </div>

                    <div className="rounded-2xl p-5 text-center shadow-md">
                        <div className="text-3xl">🎁</div>
                        <h3 className="mt-3 font-bold text-green-500">Gift Cards</h3>
                        <p className="mt-2 text-xs text-gray-500">A gift for your friends</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main;
