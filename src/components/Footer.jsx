import { Navitems } from "constant/Navbar/text";
import { Link } from "react-scroll";
import '../css/footer.css'
import '../css/bootstrap.min.css'

export const Footer = () => {
  return (
    <footer>
      <div className="tm-black-bg font-primary">
        <div className="container">
          <div className="row margin-bottom-60">
            <nav className="col-lg-3 col-md-3 tm-footer-nav tm-footer-div">
              <h3 className="tm-footer-div-title">Main Menu</h3>
              <ul className="quick-links">
                {Navitems.map((item, id) => (
                  <Link
                    key={`${item.name}.${id}`}
                    to={item.to}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <button className="nav">{item.name}</button>
                  </Link>
                ))}
              </ul>
            </nav>
            <div className="col-lg-5 col-md-5 tm-footer-div">
              <h3 className="tm-footer-div-title">About Us</h3>
              <p className="margin-top-15">
              Experience Nepal's culinary magic at Sasurali Restaurant. Located in Dibyeshwori Planning, Pepsi-Cola, we proudly showcase the rich tapestry of Nepalese cuisine. From traditional delicacies to international favorites, our diverse menu will delight your taste buds. Reserve your table today and join the Sasurali family for an unforgettable culinary journey. Savor the taste of Nepal in every bite!
              </p>
              {/* <p className="margin-top-15">
                Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                sapien ut libero venenatis faucibus.
              </p> */}
            </div>
            <div className="col-lg-4 col-md-4 tm-footer-div">
              <h3 className="tm-footer-div-title">Get Social</h3>
              <p>
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante.
              </p>
              <div class="tm-social-icons-container">
                <a href class="tm-social-icon"><i class="fa-brands fa-facebook"></i></a>
                <a href class="tm-social-icon"><i class="fa-brands fa-twitter"></i></a>
                <a href class="tm-social-icon"><i class="fa-brands fa-linkedin"></i></a>
                <a href class="tm-social-icon"><i class="fa-brands fa-youtube"></i></a>
                <a href class="tm-social-icon"><i class="fa-brands fa-behance"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row tm-copyright">
            <p className="col-lg-12 small copyright-text text-center">
              Copyright &copy; 2084 Your Cafe House
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
