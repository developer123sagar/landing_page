import "../css/home.css";
import "../css/bootstrap.min.css";
import { Link } from "react-scroll";
import { CarouselUI, Footer, PopUp } from "components";

const slideImages = [
  "https://cdn.discordapp.com/attachments/1123144974683361401/1123920848013766776/menu1.jpg",
  "https://cdn.discordapp.com/attachments/1123144974683361401/1123920974463643749/menu3.jpg",
  "https://cdn.discordapp.com/attachments/1123144974683361401/1123921092021600348/menu4.jpg",
];

export const Home = () => {
  return (
    <>
      <PopUp />
      <div className="h-full w-full font-primary">
        <section className="tm-welcome-section" id="/">
          <img
            src="https://cdn.discordapp.com/attachments/1123144974683361401/1123183163854815232/interior-lounge-architecture-entertainment-relaxation.jpg"
            alt="Table Set"
            className="relative w-full h-[650px] object-cover"
          />
          <div className="w-full h-[650px] bg-gradient-to-tr from-black absolute top-0 left-0"></div>
          <div className="absolute top-72 lg:top-56 w-full">
            <div className="w-full">
              <h2 className="white-text text-4xl">
                &nbsp;Welcome To&nbsp;&nbsp;
              </h2>
              <h2 className="text-slate-50 text-[60px] effect mt-12">
                Sasurali
              </h2>
              <p className="w-full lg:w-[500px] lg:mx-auto text-lg font-primary md:text-2xl white-text mt-20">
                Experience Nepal's culinary magic at Sasurali Restaurant.
                Located in Dibyeshwori Planning, Pepsi-Cola, we proudly showcase
                the rich tapestry of Nepalese cuisine.
              </p>
              <Link
                activeclassName="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="special"
              >
                <button className="hover:cursor-pointer mt-10 bg-primary hover:bg-violet-500 transition-all text-white rounded-lg text-xl md:text-2xl py-6 px-20">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </section>
        <div className="pt-10 light-gray-bg px-5">
          <section className="flex flex-col lg:flex-row gap-16 lg:gap-10">
            <div className="basis-full lg:basis-[65%]">
              <h2 className="text-4xl font-bold w-full mb-4">
                Sasurali's Flavors of Nepal: A Feast for the Senses
              </h2>
              <p className="text-justify text-xl lg:text-2xl w-full">
                Indulge in a sensory feast at Sasurali's Flavors of Nepal, where
                each dish tells a tale of Nepali heritage and passion. From
                vibrant spices to tantalizing textures, our culinary offerings
                awaken your taste buds and transport you to the majestic
                landscapes of Nepal. Allow our exceptional hospitality to
                accompany you on this gastronomic adventure, creating memories
                that linger long after the final bite.
              </p>

              <Link
                classNameName="hover:cursor-pointer"
                to="/"
                activeclassName="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button className="hover:cursor-pointer mt-10 bg-primary hover:bg-violet-500 transition-all text-white rounded-lg text-xl md:text-2xl py-6 px-12">
                  Read More
                </button>
              </Link>
            </div>
            <div className="basis-full lg:basis-[35%]">
              <video width={120} height={50} controls autoPlay>
                <source src="/videos/sasuralivid.mp4" type="video/mp4" />
              </video>
            </div>
          </section>

          {/* popular items */}
          <section className="tm-section tm-section-margin-bottom-0 row mt-10 px-5">
            <div className="col-lg-12 tm-section-header-container">
              <h2 className="w-full mb-2 lg:mb-12 lg:w-[200px] font-primary font-bold text-3xl">
                Popular Items
              </h2>
              <div className="tm-hr-container">
                <hr className="tm-hr" />
              </div>
            </div>

            {/* each popular item (3) */}
            <div className="flex justify-around flex-wrap w-full">
              <div className=" bg-white rounded-2xl w-full md:w-[400px] mb-[7rem]">
                <img
                  src="https://cdn.discordapp.com/attachments/1123144974683361401/1123183165922607134/plate-food-with-bowl-red-sauce-it.jpg"
                  alt="Popular"
                  className="tm-popular-item- overflow-hidden rounded-2xl w-fit mx-auto h-[200px]"
                />
                <div className="tm-popular-item-description">
                  <h3 className="tm-handwriting-font tm-popular-item-title">
                    <span className="tm-handwriting-font bigger-first-letter">
                      M
                    </span>
                    omo
                  </h3>
                  <hr className="tm-popular-item-hr" />
                  <p className="text-2xl md:mt-10 font-primary">
                    Momo lovers rejoice! Get ready to tantalize your taste buds
                    with the exquisite flavors of momos. Hailing from the
                    Himalayan regions, momos have captured the hearts and
                    palates of food enthusiasts worldwide.
                  </p>
                  <div className="order-now-container mt-10 ml-[4.5rem] lg:ml-20">
                    <a
                      href
                      className="order-now-link tm-handwriting-font hover:cursor-pointer"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl w-ful md:w-[400px] mb-[7rem]">
                <img
                  src="https://cdn.discordapp.com/attachments/1123144974683361401/1123183166677602304/burger-with-flying-elements.jpg"
                  alt="Popular"
                  className="tm-popular-item- overflow-hidden rounded-2xl w-fit h-[200px] object-contain mx-auto"
                />
                <div className="tm-popular-item-description">
                  <h3 className="tm-handwriting-font tm-popular-item-title">
                    <span className="tm-handwriting-font bigger-first-letter">
                      B
                    </span>
                    urger
                  </h3>
                  <hr className="tm-popular-item-hr" />
                  <p className="text-2xl md:mt-10 font-primary">
                    Get ready to sink your teeth into pure bliss with our
                    mouthwatering burgers. We proudly present a culinary
                    masterpiece that has stood the test of time and continues to
                    captivate taste buds everywhere
                  </p>
                  <div className="order-now-container mt-10 ml-[4.5rem] lg:ml-20">
                    <a
                      href
                      className="order-now-link tm-handwriting-font hover:cursor-pointer"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl w-full md:w-[400px] mb-[7rem]">
                <img
                  src="https://cdn.discordapp.com/attachments/1123144974683361401/1123184299340992573/red-martini-cocktail-with-splash-lime-isolated.jpg"
                  alt="Popular"
                  className="tm-popular-item- overflow-hidden rounded-2xl w-fit mx-auto h-[200px]"
                />
                <div className="tm-popular-item-description">
                  <h3 className="tm-handwriting-font tm-popular-item-title">
                    <span className="tm-handwriting-font bigger-first-letter">
                      M
                    </span>
                    ocktail
                  </h3>
                  <hr className="tm-popular-item-hr" />
                  <p className="text-2xl md:mt-10 font-primary">
                    Step into a world of delightful refreshment with our
                    exquisite mocktails. These non-alcoholic wonders are
                    carefully crafted to tantalize your taste buds and
                    invigorate, offering a vibrant and flavorful experience like
                    no other.
                  </p>
                  <div className="order-now-container mt-10 ml-[4.5rem] lg:ml-20">
                    <a
                      href
                      className="order-now-link tm-handwriting-font hover:cursor-pointer"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* special items */}
          <section
            className="tm-section tm-section-margin-bottom-0 row mt-10 px-5"
            id="special"
          >
            <div className="col-lg-12 tm-section-header-container">
              <h2 className="w-full mb-2 lg:mb-12 lg:w-[200px] font-primary font-bold text-3xl">
                Today's Special
              </h2>
              <div className="tm-hr-container">
                <hr className="tm-hr" />
              </div>
            </div>
            <div className="w-full">
              <div className="w-full grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 mb-5">
                <div className="tm-special-item">
                  <div className="tm-special-img-container">
                    <img
                      src="https://cdn.discordapp.com/attachments/1123144974683361401/1123183165171830884/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai.jpg"
                      alt="Special"
                      className="h-[300px] rounded-md"
                    />
                    <Link>
                      <div className="tm-special-description font-primary">
                        <h3 className="mb-5 text-3xl lg:text-4xl bold">
                          Chowmein
                        </h3>
                        <p className="text-xl">
                          Prepare to embark on a culinary journey that will
                          awaken your senses and leave you craving more.
                          Introducing Chowmein, a beloved dish that combines the
                          simplicity of noodles with a burst of tantalizing
                          flavors.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="tm-special-item">
                  <div className="tm-special-img-container">
                    <img
                      src="https://cdn.discordapp.com/attachments/1123144974683361401/1123183165171830884/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai.jpg"
                      alt="Special"
                      className="h-[300px] rounded-md"
                    />
                    <Link>
                      <div className="tm-special-description font-primary">
                        <h3 className="mb-5 text-3xl lg:text-4xl bold">
                          Chowmein
                        </h3>
                        <p className="text-xl">
                          Prepare to embark on a culinary journey that will
                          awaken your senses and leave you craving more.
                          Introducing Chowmein, a beloved dish that combines the
                          simplicity of noodles with a burst of tantalizing
                          flavors.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex mx-auto w-fit gap-5">
                <div className="tm-special-item rounded-md">
                  <div className="tm-special-img-container">
                    <img
                      src="https://cdn.discordapp.com/attachments/1123144974683361401/1123186476100882515/image-removebg-preview.png"
                      alt="Special"
                      className="h-[300px] rounded-md"
                    />
                    <Link>
                      <div className="tm-special-description font-primary">
                        <p className="mb-5 text-2xl lg:text-4xl bold">
                          Thali set
                        </p>
                        <p className="text-base">
                          From the moment your Thali Set arrives at your table,
                          you are transported to a world of culinary delights.
                          The platter is adorned with an array of small bowls.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="tm-special-item rounded-md">
                  <div className="tm-special-img-container">
                    <img
                      src="https://cdn.discordapp.com/attachments/1123144974683361401/1123196028393365567/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon-removebg-preview.png"
                      alt="Special"
                      className="h-[300px] rounded-md"
                    />
                    <Link>
                      <div className="tm-special-description font-primary">
                        <p className="mb-5 text-2xl lg:text-4xl bold">Burger</p>
                        <p className="text-base lg:text-xl">
                          At our restaurant, we take the art of burger-making
                          seriously. Each burger is crafted with meticulous care
                          and passion, ensuring a symphony of flavors in every
                          bite.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* menu */}
          <section
            className="tm-section tm-section-margin-bottom-0 row mt-20 px-5 py-10"
            id="menu"
          >
            <div className="col-lg-12 tm-section-header-container">
              <h2 className="w-full mb-2 lg:mb-12 lg:w-[200px] font-primary font-bold text-3xl">
                Daily Menu
              </h2>
              <div className="tm-hr-container">
                <hr className="tm-hr" />
              </div>
            </div>
            <div className="w-full px-5">
              <div className="flex flex-wrap lg:flex-nowrap lg:gap-52 w-full">
                <CarouselUI slideImages={slideImages} width={'500px'} indicator={true} status={true} />
                <div className="mt-10 lg:mt-0">
                  <p className="text-4xl font-bold">
                    Delight your Taste Buds with our Exquisite Menu!
                  </p>
                  <ol className="my-5 text-3xl font-bold">
                    <li className="my-10">Momo</li>
                    <li className="mb-10">Chowmein</li>
                    <li className="mb-10">Thali set</li>
                    <li className="mb-10">Soft and Hard Drinks</li>
                    <li className="mb-10">Hukka</li>
                    <li className="mb-10">Ice Cream</li>
                  </ol>
                  <Link
                    classNameName="hover:cursor-pointer"
                    to="/"
                    activeclassName="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <button className="hover:cursor-pointer mt-10 bg-primary hover:bg-violet-500 transition-all text-white rounded-lg text-xl md:text-2xl py-6 px-20">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};
