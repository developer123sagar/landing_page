import "../css/home.css";
import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div classNameName="font-primary">
      <section className="tm-welcome-section" id="/">
        <img
          src="https://cdn.discordapp.com/attachments/1123144974683361401/1123183163854815232/interior-lounge-architecture-entertainment-relaxation.jpg"
          alt="Table Set"
          className="relative w-full h-[700px] object-cover"
        />
        <div className="w-full h-[700px] bg-gradient-to-tr from-black absolute top-0 right-0"></div>
        <div className="absolute top-56 w-full">
          <h2 className="white-text tm-handwriting-font tm-welcome-header">
            &nbsp;Welcome To&nbsp;&nbsp;
          </h2>
          <h2 className="gold-text tm-welcome-header-2">Sasurali</h2>
          <p className="w-[600px] mx-auto text-justify text-2xl white-text mt-4">
            Experience Nepal's culinary magic at Sasurali Restaurant. Located in
            Dibyeshwori Planning, Pepsi-Cola, we proudly showcase the rich
            tapestry of Nepalese cuisine. From traditional delicacies to
            international favorites, our diverse menu will delight your taste
            buds. Reserve your table today and join the Sasurali family for an
            unforgettable culinary journey. Savor the taste of
            Nepal in every bite!
          </p>
          <Link
            activeclassName="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="special"
            className="tm-more-button tm-more-button-welcome hover:cursor-pointer bg-primary text-white rounded "
          >
            Details
          </Link>
        </div>
      </section>
      <div className="tm-main-section light-gray-bg">
        <div className="container">
          <section className="tm-section row">
            <div className="col-lg-9 col-md-9 col-sm-8 w-fit">
              <h2 className="tm-section-header gold-text tm-handwriting-font text-[30px] w-[725px] mb-2">
                Sasurali's Flavors of Nepal: A Feast for the Senses
              </h2>
              <p className="tm-welcome-description w-[725px]">
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
                <button className="bg-primary rounded py-3 px-5  mt-5">
                  Read More
                </button>
              </Link>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 tm-welcome-img-container ml-32">
              <div className="inline-block shadow-img">
                <img
                  src="https://cdn.discordapp.com/attachments/1123144974683361401/1123186476100882515/image-removebg-preview.png"
                  alt=""
                  className="img-circle img-thumbnail"
                />
              </div>
            </div>
          </section>
          <section className="tm-section tm-section-margin-bottom-0 row">
            <div className="col-lg-12 tm-section-header-container">
              <h2 className="gold-text w-[150px] mb-12 font-primary text-2xl">
                Popular Items
              </h2>
              <div className="tm-hr-container">
                <hr className="tm-hr" />
              </div>
            </div>
            <div className="col-lg-12 tm-popular-items-container">
              <div className="tm-popular-item bg-white rounded-2xl">
                <img
                  src="https://cdn.discordapp.com/attachments/1123144974683361401/1123183165922607134/plate-food-with-bowl-red-sauce-it.jpg"
                  alt="Popular"
                  className="tm-popular-item- overflow-hidden rounded-2xl w-full h-[295px]"
                />
                <div className="tm-popular-item-description">
                  <h3 className="tm-handwriting-font tm-popular-item-title">
                    <span className="tm-handwriting-font bigger-first-letter">
                      M
                    </span>
                    omo
                  </h3>
                  <hr className="tm-popular-item-hr" />
                  <p>
                    Momo lovers rejoice! Get ready to tantalize your taste buds
                    with the exquisite flavors of momos. Hailing from the
                    Himalayan regions, momos have captured the hearts and
                    palates of food enthusiasts worldwide.
                  </p>
                  <div className="order-now-container">
                    <a
                      href
                      className="order-now-link tm-handwriting-font hover:cursor-pointer"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="tm-popular-item bg-white rounded-2xl">
                <img
                  src="https://cdn.discordapp.com/attachments/1123144974683361401/1123183166677602304/burger-with-flying-elements.jpg"
                  alt="Popular"
                  className="tm-popular-item- overflow-hidden rounded-2xl w-full h-[295px] object-cover"
                />
                <div className="tm-popular-item-description">
                  <h3 className="tm-handwriting-font tm-popular-item-title">
                    <span className="tm-handwriting-font bigger-first-letter">
                      B
                    </span>
                    urger
                  </h3>
                  <hr className="tm-popular-item-hr" />
                  <p>
                    Get ready to sink your teeth into pure bliss with our
                    mouthwatering burgers. We proudly present a culinary
                    masterpiece that has stood the test of time and continues to
                    captivate taste buds everywhere: the burger.
                  </p>
                  <div className="order-now-container">
                    <a
                      href
                      className="order-now-link tm-handwriting-font hover:cursor-pointer"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="tm-popular-item bg-white rounded-2xl">
                <img
                  src="https://cdn.discordapp.com/attachments/1123144974683361401/1123184299340992573/red-martini-cocktail-with-splash-lime-isolated.jpg"
                  alt="Popular"
                  className="tm-popular-item- overflow-hidden rounded-2xl w-full h-[295px] object-cover"
                />
                <div className="tm-popular-item-description">
                  <h3 className="tm-handwriting-font tm-popular-item-title">
                    <span className="tm-handwriting-font bigger-first-letter">
                      M
                    </span>
                    ocktail
                  </h3>
                  <hr className="tm-popular-item-hr" />
                  <p>
                    Step into a world of delightful refreshment with our
                    exquisite mocktails. These non-alcoholic wonders are
                    carefully crafted to tantalize your taste buds and
                    invigorate your senses, offering a vibrant and flavorful
                    experience like no other.
                  </p>
                  <div className="order-now-container">
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
          <section
            className="tm-section tm-section-margin-bottom-0 row mb-10"
            id="special"
          >
            <div className="col-lg-12 tm-section-header-container">
              <h2 className="gold-text w-[150px] mb-12 font-primary text-2xl">
                Today's Special
              </h2>
              <div className="tm-hr-container">
                <hr className="tm-hr" />
              </div>
            </div>
            <div className="col-lg-12 tm-special-container margin-top-60 ">
              <div className="tm-special-container-right mx-auto">
                <div className="w-full flex justify-between bg-white mb-5">
                  <div className="">
                    <div className="tm-special-item">
                      <div className="tm-special-img-container">
                        <img
                          src="https://cdn.discordapp.com/attachments/1123144974683361401/1123183165171830884/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai.jpg"
                          alt="Special"
                          className="h-[300px] rounded-md"
                        />
                        <Link>
                          <div className="tm-special-description font-primary">
                            <h3 className="mb-5 text-3xl bold">Chowmein</h3>
                            <p>
                              Prepare to embark on a culinary journey that will
                              awaken your senses and leave you craving more.
                              Introducing Chowmein, a beloved dish that combines
                              the simplicity of noodles with a burst of
                              tantalizing flavors.
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="tm-special-item">
                      <div className="tm-special-img-container">
                        <img
                          src="https://cdn.discordapp.com/attachments/1123144974683361401/1123183165171830884/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai.jpg"
                          alt="Special"
                          className="h-[300px] rounded-md"
                        />
                        <Link>
                          <div className="tm-special-description font-primary">
                            <h3 className="mb-5 text-3xl bold">Chowmein</h3>
                            <p>
                              Prepare to embark on a culinary journey that will
                              awaken your senses and leave you craving more.
                              Introducing Chowmein, a beloved dish that combines
                              the simplicity of noodles with a burst of
                              tantalizing flavors.
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tm-special-container-lower flex gap-5">
                  <div className="tm-special-item rounded-md">
                    <div className="tm-special-img-container">
                      <img
                        src="https://cdn.discordapp.com/attachments/1123144974683361401/1123186476100882515/image-removebg-preview.png"
                        alt="Special"
                        className="h-[400px] w-full"
                      />
                      <Link>
                        <div className="tm-special-description font-primary">
                          <p className="mb-5 text-3xl bold">Thali set</p>
                          <p>
                            From the moment your Thali Set arrives at your
                            table, you are transported to a world of culinary
                            delights. The platter is adorned with an array of
                            small bowls, each holding a distinct delicacy.
                            Whether you're a fan of aromatic curries, fragrant
                            rice, crispy papadums, or tangy chutneys, our Thali
                            Set has something to satisfy every palate.
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
                        className="h-[400px] w-full"
                      />
                      <Link>
                        <div className="tm-special-description font-primary">
                          <p className="mb-5 text-3xl bold">Burger </p>
                          <p>
                            At our restaurant, we take the art of burger-making
                            seriously. Each burger is crafted with meticulous
                            care and passion, ensuring a symphony of flavors in
                            every bite. From the moment you sink your teeth into
                            our juicy, flame-grilled patty, you'll understand
                            why burgers have become an icon of culinary
                            perfection.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="tm-section tm-section-margin-bottom-0 mb-16 row"
            id="menu"
          >
            <div className="row">
              <div className="col-lg-12 tm-section-header-container">
                <h2 className="gold-text w-[150px] mb-12 font-primary text-2xl">
                  Daily Menu
                </h2>
                <div className="tm-hr-container">
                  <hr className="tm-hr" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="tm-daily-menu-container margin-top-60">
                <div className="col-lg-4 col-md-4">
                  <img
                    src="https://media.gettyimages.com/id/516182870/vector/menu-of-the-day.jpg?s=612x612&w=0&k=20&c=mergVXD8kTtuJVuK8qFpxpD_xOqGa2ywU5AAccAkWqo="
                    alt="Menu board"
                    className="tm-daily-menu-img"
                  />
                </div>
                <div className="col-lg-8 col-md-8">
                  <p>
                    Phasellus viverra nulla ut metus varius laoreet. Quisque
                    rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                    Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                    rhoncus.
                  </p>
                  <ol className="margin-top-30">
                    <li>Tellus eget condimentum rhoncus.</li>
                    <li>Sem quam semper libero.</li>
                    <li>Sit amet adipiscing sem neque sed ipsum.</li>
                    <li>Nam quam nunc, blandit vel, luctus pulvinar.</li>
                    <li>Maecenas nec odio et ante tincidunt tempus.</li>
                    <li>Donec vitae sapien ut libero ventenatis faucibus.</li>
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
                    <button className="bg-primary rounded py-3 px-5  mt-5">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
