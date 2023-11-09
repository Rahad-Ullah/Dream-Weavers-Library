import Categories from "./Categories/Categories";
import Footer from "./Footer";
import Newsletter from "./Newsletter/Newsletter";
import PopularBooks from "./PopularBooks/PopularBooks";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className='absolute bottom-[68px] md:-bottom-20 lg:-bottom-20 z-10 h-72 md:h-screen w-full bg-zinc-800 bg-opacity-70 flex flex-col justify-center items-center'>
                <div className="text-center text-white max-w-xs md:max-w-3xl">
                    <h1 className='text-2xl lg:text-5xl font-semibold font-poppins text-center leading-tight'>More Than 243,836 Book Over Here</h1>
                    <p className="text-sm lg:text-xl mt-2">Borrow books online and return them easily with our user-friendly system. No need to visit the library in person, just log in to your account and select the books you want to read.</p>
                </div>
            </div>
            <Categories></Categories>
            <PopularBooks></PopularBooks>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;