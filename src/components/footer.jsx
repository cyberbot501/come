export default function Footer() {
  return (
    <>
      <div className="subscribe">
        <h2>Subscribe To Our Newsletter</h2>
        <div className="email-box">
          <input type="email" placeholder="name@gmail.com" />
          <p>We love to hear from you</p>
        </div>
      </div>

      <div className="footer">
        <div className="footer-u">
          <img src="/asset/imges/empyrean logo 2.svg" alt="" />
          <p>
            Love is the universal language that binds us all. We celebrate love
            in all its forms. We offer advice, support, and inspiration to
            foster healthy relationships and a compassionate world.
          </p>
          <div className="nav">
            <div className="nav-list">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Premium Services</a>
                </li>
                <li>
                  <a href="#">Newsletter</a>
                </li>
              </ul>
            </div>

            <div className="email">
              <i className="bx bx-envelope bx-lg"></i>
              <p>@Empyrean2023</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
