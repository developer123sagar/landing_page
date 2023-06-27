import { Navitems } from "constant/Navbar/text";
import { Link } from "react-scroll";
import '../css/footer.css'
import '../css/bootstrap.min.css'

export const Footer = () => {
  return (
    <footer id="footer">
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
            <div className="col-lg-5 col-md-5 tm-footer-div">
              <h3 className="tm-footer-div-title mb-2">Contact Us</h3>
              <iframe className="w-full h-full lg:w-[400px] lg:h-[200px]" title="contact" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8700786149457!2d85.37132407440663!3d27.690410126240184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b4677f70b01%3A0xa8f25b94bc35b5b2!2zU2FzdXJhbGkgUmVzdHJvIOCkuOCkuOClgeCksOCkvuCksuClgA!5e0!3m2!1sen!2snp!4v1687850446842!5m2!1sen!2snp" loading="lazy"></iframe>
             
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
