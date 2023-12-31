import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      {/* <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/about-us">About Us</Link> */}

      <Navbar />
      <>
        {/* <div class="homepage">
          <div class="the-empyrean-couple">The Empyrean Couple</div>
          <div class="an-expression-of">
            An Expression of shared lifestyle, beliefs, love & faith.
          </div>
          <div class="hero-image">
            <img
              class="hero-image-child"
              alt=""
              src="./public/rectangle-28@2x.png"
            />

            <img
              class="hero-image-item"
              alt=""
              src="./public/rectangle-31@2x.png"
            />

            <div class="pix2">
              <img
                class="pix2-child"
                alt=""
                src="./public/rectangle-32@2x.png"
              />

              <div class="ellipse-parent">
                <div class="frame-child"></div>
                <img class="frame-item" alt="" src="./public/polygon-1.svg" />
              </div>
            </div>
            <div class="pix1">
              <img
                class="pix2-child"
                alt=""
                src="./public/rectangle-30@2x.png"
              />

              <div class="ellipse-group">
                <div class="frame-child"></div>
                <img class="frame-item" alt="" src="./public/polygon-1.svg" />
              </div>
            </div>
            <div class="hero-image-inner"></div>
          </div>
          <div class="love-is-the">
            Love is the universal language that binds us all. We celebrate love
            in all its forms. We offer advice, support, and inspiration to
            foster healthy relationships and a compassionate world.
          </div>
          <div class="shop">shop</div>
          <div class="love">Love</div>
          <div class="watch">watch</div>
          <div class="watch-wrapper">
            <div class="book-a-consultation">WATCH</div>
          </div>
          <div class="book-a-consultation-parent">
            <div class="book-a-consultation">BOOK A CONSULTATION</div>
            <img class="instance-child" alt="" src="./public/arrow-1.svg" />
          </div>
          <div class="homepage-child"></div>
          <div class="homepage-item"></div>
          <div class="most-watched-episodes">Most watched Episodes</div>
          <div class="video-frame">
            <img
              class="video-frame-child"
              alt=""
              src="./public/rectangle-37@2x.png"
            />

            <div class="media-icon">
              <div class="media-icon-child"></div>
              <img
                class="media-icon-item"
                alt=""
                src="./public/polygon-12.svg"
              />

              <div class="rectangle-parent">
                <div class="rectangle-div"></div>
                <div class="rectangle-div"></div>
              </div>
            </div>
          </div>
          <div class="video-frame1">
            <img
              class="video-frame-child"
              alt=""
              src="./public/rectangle-371@2x.png"
            />

            <div class="media-icon">
              <div class="media-icon-child"></div>
              <img
                class="media-icon-item"
                alt=""
                src="./public/polygon-12.svg"
              />

              <div class="rectangle-parent">
                <div class="rectangle-div"></div>
                <div class="rectangle-div"></div>
              </div>
            </div>
          </div>
          <div class="video-frame2">
            <img
              class="video-frame-inner"
              alt=""
              src="./public/rectangle-372@2x.png"
            />

            <div class="media-icon2">
              <div class="frame-child"></div>
              <img class="frame-item" alt="" src="./public/polygon-11.svg" />

              <div class="rectangle-container">
                <div class="frame-child4"></div>
                <div class="frame-child4"></div>
              </div>
            </div>
          </div>
          <div class="watch-container">
            <div class="book-a-consultation">Watch more</div>
          </div>
          <div class="about-us-section">
            <div class="about-us">About us</div>
            <div class="about-us-section1">
              <img
                class="about-us-section-child"
                alt=""
                src="./public/rectangle-38@2x.png"
              />

              <div class="at-empyrean-we-container">
                <p class="at-empyrean-we">
                  At Empyrean, we believe that life is a beautiful tapestry
                  woven from the threads of shared lifestyle, beliefs, love, and
                  faith. Our website is a sanctuary where like-minded
                  individuals can come together to celebrate the rich tapestry
                  of life, explore their shared values, and forge lasting
                  connections with others who share their passions.
                </p>
                <p class="at-empyrean-we">&nbsp;</p>
                <p class="at-empyrean-we">
                  We recognize that our beliefs are at the heart of who we are.
                  The Empyrean provides a platform for open, respectful, and
                  enriching discussions on faith, spirituality, and
                  philosophical viewpoints. It's a place where differences are
                  respected, and understanding is cultivated.
                </p>
                <p class="at-empyrean-we">&nbsp;</p>
                <p class="at-empyrean-we">
                  Our talented writers and guest contributors explore a wide
                  range of topics, from lifestyle choices to faith-based
                  insights, relationship advice, and heartwarming stories of
                  love. There's something for everyone.
                </p>
              </div>
            </div>
            <img
              class="empyrean-logo-2"
              alt=""
              src="./public/empyrean-logo-2@2x.png"
            />
          </div>
          <div class="our-products">Our Products</div>
          <div class="product-card-design">
            <div class="product-card-design-child"></div>
            <div class="rom-hoodie-parent">
              <div class="rom-hoodie">ROM HOODIE</div>
              <div class="woolen-rapture-on">
                100% woolen Rapture on my mind hoodie with cape.
              </div>
              <div class="star-parent">
                <img class="star-icon" alt="" src="./public/star-1.svg" />

                <img class="star-icon" alt="" src="./public/star-1.svg" />

                <img class="star-icon" alt="" src="./public/star-1.svg" />

                <img class="star-icon" alt="" src="./public/star-4.svg" />

                <img class="star-icon" alt="" src="./public/star-4.svg" />
              </div>
              <div class="rom-hoodie">$ 100: 00</div>
              <div class="watch-frame">
                <div class="book-consultation">ADD TO CART</div>
              </div>
            </div>
            <div class="blank-black-male-hoodie-sweats-parent">
              <img
                class="blank-black-male-hoodie-sweats-icon"
                alt=""
                src="./public/blankblackmalehoodiesweatshirtlongsleevewithclippingpathpng-2@2x.png"
              />

              <div class="order-now-button">
                <div class="book-a-consultation">Order Now</div>
              </div>
            </div>
          </div>
          <div class="product-card-component-parent">
            <div class="product-card-component">
              <div class="product-card-design-child"></div>
              <div class="rom-hoodie-group">
                <div class="rom-hoodie">ROM HOODIE</div>
                <div class="woolen-rapture-on">
                  100% woolen Rapture on my mind hoodie with cape.
                </div>
                <div class="star-parent">
                  <img class="star-icon" alt="" src="./public/star-1.svg" />

                  <img class="star-icon" alt="" src="./public/star-1.svg" />

                  <img class="star-icon" alt="" src="./public/star-1.svg" />

                  <img class="star-icon" alt="" src="./public/star-4.svg" />

                  <img class="star-icon" alt="" src="./public/star-4.svg" />
                </div>
                <div class="rom-hoodie">$ 100: 00</div>
                <div class="watch-frame">
                  <div class="book-consultation">ADD TO CART</div>
                </div>
              </div>
              <div class="blank-black-male-hoodie-sweats-group">
                <img
                  class="blank-black-male-hoodie-sweats-icon"
                  alt=""
                  src="./public/blankblackmalehoodiesweatshirtlongsleevewithclippingpathpng-21@2x.png"
                />

                <div class="order-now-button">
                  <div class="book-a-consultation">Order Now</div>
                </div>
              </div>
            </div>
            <div class="product-card-component">
              <div class="product-card-design-child"></div>
              <div class="rom-hoodie-group">
                <div class="rom-hoodie">ROM HOODIE</div>
                <div class="woolen-rapture-on">
                  100% woolen Rapture on my mind hoodie with cape.
                </div>
                <div class="star-parent">
                  <img class="star-icon" alt="" src="./public/star-1.svg" />

                  <img class="star-icon" alt="" src="./public/star-1.svg" />

                  <img class="star-icon" alt="" src="./public/star-1.svg" />

                  <img class="star-icon" alt="" src="./public/star-4.svg" />

                  <img class="star-icon" alt="" src="./public/star-4.svg" />
                </div>
                <div class="rom-hoodie">$ 100: 00</div>
                <div class="watch-frame">
                  <div class="book-consultation">ADD TO CART</div>
                </div>
              </div>
              <div class="blank-black-male-hoodie-sweats-group">
                <img
                  class="blank-black-male-hoodie-sweats-icon"
                  alt=""
                  src="./public/blankblackmalehoodiesweatshirtlongsleevewithclippingpathpng-22@2x.png"
                />

                <div class="order-now-button">
                  <div class="book-a-consultation">Order Now</div>
                </div>
              </div>
            </div>
            <div class="product-card-component">
              <div class="product-card-design-child"></div>
              <div class="rom-hoodie-group">
                <div class="rom-hoodie">ROM HOODIE</div>
                <div class="woolen-rapture-on">
                  100% woolen Rapture on my mind hoodie with cape.
                </div>
                <div class="star-parent">
                  <img class="star-icon" alt="" src="./public/star-1.svg" />

                  <img class="star-icon" alt="" src="./public/star-1.svg" />

                  <img class="star-icon" alt="" src="./public/star-1.svg" />

                  <img class="star-icon" alt="" src="./public/star-4.svg" />

                  <img class="star-icon" alt="" src="./public/star-4.svg" />
                </div>
                <div class="rom-hoodie">$ 100: 00</div>
                <div class="watch-frame">
                  <div class="book-consultation">ADD TO CART</div>
                </div>
              </div>
              <div class="blank-black-male-hoodie-sweats-group">
                <img
                  class="blank-black-male-hoodie-sweats-icon"
                  alt=""
                  src="./public/blankblackmalehoodiesweatshirtlongsleevewithclippingpathpng-23@2x.png"
                />

                <div class="order-now-button">
                  <div class="book-a-consultation">Order Now</div>
                </div>
              </div>
            </div>
            <div class="product-card-component">
              <div class="product-card-design-child"></div>
              <div class="rom-hoodie-group">
                <div class="rom-hoodie">ROM HOODIE</div>
                <div class="woolen-rapture-on">
                  100% woolen Rapture on my mind hoodie with cape.
                </div>
                <div class="star-parent">
                  <img class="star-icon" alt="" src="./public/star-1.svg" />

                  <img class="star-icon" alt="" src="./public/star-1.svg" />

                  <img class="star-icon" alt="" src="./public/star-1.svg" />

                  <img class="star-icon" alt="" src="./public/star-4.svg" />

                  <img class="star-icon" alt="" src="./public/star-4.svg" />
                </div>
                <div class="rom-hoodie">$ 100: 00</div>
                <div class="watch-frame">
                  <div class="book-consultation">ADD TO CART</div>
                </div>
              </div>
              <div class="blank-black-male-hoodie-sweats-group">
                <img
                  class="blank-black-male-hoodie-sweats-icon"
                  alt=""
                  src="./public/blankblackmalehoodiesweatshirtlongsleevewithclippingpathpng-24@2x.png"
                />

                <div class="order-now-button">
                  <div class="book-a-consultation">Order Now</div>
                </div>
              </div>
            </div>
            <div class="product-card-component">
              <div class="product-card-design-child"></div>
              <div class="rom-hoodie-group">
                <div class="rom-hoodie">ROM HOODIE</div>
                <div class="woolen-rapture-on">
                  100% woolen Rapture on my mind hoodie with cape.
                </div>
                <div class="star-parent">
                  <img class="star-icon" alt="" src="./public/star-1.svg" />

                  <img class="star-icon" alt="" src="./public/star-1.svg" />

                  <img class="star-icon" alt="" src="./public/star-1.svg" />

                  <img class="star-icon" alt="" src="./public/star-4.svg" />

                  <img class="star-icon" alt="" src="./public/star-4.svg" />
                </div>
                <div class="rom-hoodie">$ 100: 00</div>
                <div class="watch-frame">
                  <div class="book-consultation">ADD TO CART</div>
                </div>
              </div>
              <div class="blank-black-male-hoodie-sweats-group">
                <img
                  class="blank-black-male-hoodie-sweats-icon"
                  alt=""
                  src="./public/blankblackmalehoodiesweatshirtlongsleevewithclippingpathpng-25@2x.png"
                />

                <div class="order-now-button">
                  <div class="book-a-consultation">Order Now</div>
                </div>
              </div>
            </div>
            <div class="product-card-component">
              <div class="product-card-design-child"></div>
              <div class="rom-hoodie-group">
                <div class="rom-hoodie">ROM HOODIE</div>
                <div class="woolen-rapture-on6">
                  100% woolen Rapture on my mind hoodie with cape.
                </div>
                <div class="star-parent">
                  <img class="star-icon" alt="" src="./public/star-1.svg" />

                  <img class="star-icon" alt="" src="./public/star-1.svg" />

                  <img class="star-icon" alt="" src="./public/star-1.svg" />

                  <img class="star-icon" alt="" src="./public/star-4.svg" />

                  <img class="star-icon" alt="" src="./public/star-4.svg" />
                </div>
                <div class="rom-hoodie">$ 100: 00</div>
                <div class="watch-frame">
                  <div class="book-consultation">ADD TO CART</div>
                </div>
              </div>
              <div class="blank-black-male-hoodie-sweats-group">
                <img
                  class="blank-black-male-hoodie-sweats-icon"
                  alt=""
                  src="./public/blankblackmalehoodiesweatshirtlongsleevewithclippingpathpng-26@2x.png"
                />
                <div class="order-now-button">
                  <div class="book-a-consultation">Order Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="testiomnial-section-card">
          <div class="testiomnial-section-card-child"></div>
          <div class="vector-background">
            <img class="vector-icon" alt="" src="./public/vector.svg" />
          </div>
          <div class="testiomnial-section-card-item"></div>
          <div class="reviews-cards">
            <img
              class="reviews-cards-child"
              alt=""
              src="./public/rectangle-17@2x.png"
            />

            <div class="reviews-cards-item"></div>
            <img class="slide-bar-icon" alt="" src="./public/slide-bar.svg" />

            <div class="star-rating">
              <img
                class="star-rating-child"
                alt=""
                src="./public/star-11.svg"
              />

              <img
                class="star-rating-child"
                alt=""
                src="./public/star-11.svg"
              />

              <img
                class="star-rating-child"
                alt=""
                src="./public/star-11.svg"
              />

              <img
                class="star-rating-child"
                alt=""
                src="./public/star-11.svg"
              />

              <img class="star-rating-child" alt="" src="./public/star-5.svg" />
            </div>
            <div class="using-this-platform-container">
              <span class="using">Using </span>
              <span class="this-platform-has">
                this platform has inspired my faith, built my spirituality and
                changed my love life. It was indeed the best decision i made
                this year.
              </span>
            </div>
            <b class="zoe-brendan">Zoe Brendan</b>
            <i class="christ-embassy-mca">Australia</i>
          </div>
          <div class="right-arrow-key">
            <div class="right-arrow-key-child"></div>
            <img
              class="chevron-right-icon"
              alt=""
              src="./public/chevronright.svg"
            />
          </div>
          <div class="left-arrow-key">
            <div class="right-arrow-key-child"></div>
            <img
              class="chevron-right-icon"
              alt=""
              src="./public/chevronleft.svg"
            />
          </div>
          <b class="testimonials">Testimonials</b>
          <div class="vector-background1">
            <img class="vector-icon1" alt="" src="./public/vector1.svg" />
          </div>
          <div class="rectangle-parent1">
            <div class="frame-child40"></div>
            <div class="frame-child41"></div>
            <div class="frame-child42"></div>
          </div>
          <div class="what-people-say-about-our-amaz-parent">
            <div class="what-people-say">
              What people say about our amazing platform.
            </div>
            <div class="over-1000-purchases">
              Over 1000+ purchases, 100 videos watched, 3000 subscribers and 50
              stories shared.
            </div>
            <div class="cta-button-2">
              <div class="read-the-success">read the success stories</div>
            </div>
            <div class="cta-button-2-non-anime">
              <div class="read-the-success">read the success stories</div>
            </div>
          </div>
        </div>
        <div class="share-your-amazing-container">
          <p class="at-empyrean-we">
            <span class="share">Share</span>
            <span> your amazing</span>
          </p>
          <p class="at-empyrean-we">
            <span class="couple">couple</span>
            <span> journey with us.</span>
          </p>
          <p class="at-empyrean-we">
            <span class="memoirs">memoirs</span>
            <span> can inspire others </span>
          </p>
        </div>
        <div class="form-block">
          <div class="form-block-child"></div>
          <div class="form-element">
            <div class="rectangle-parent2">
              <input class="instance-item"></input>
              <div class="type-name-here">Type name here</div>
              <div class="instance-inner"></div>
              <div class="firstname">Firstname:</div>
            </div>
            <div class="rectangle-parent3">
              <input class="instance-item"></input>
              <div class="type-name-here">Type name here</div>
              <div class="instance-inner"></div>
              <div class="firstname">Lastname:</div>
            </div>
            <div class="rectangle-parent4">
              <input class="instance-item"></input>
              <div class="type-name-here">Type name here</div>
              <div class="instance-inner"></div>
              <div class="firstname">Email:</div>
            </div>
            <div class="rectangle-parent5">
              <input class="instance-item"></input>
              <div class="type-name-here">Type name here</div>
              <div class="instance-inner"></div>
              <div class="firstname">Country:</div>
            </div>
            <input class="form-element-child"></input>
            <div class="rectangle-parent6">
              <div class="instance-child7"></div>
              <div class="type-name-here">Type name here</div>
              <div class="instance-inner"></div>
              <div class="firstname">Your Story:</div>
            </div>
          </div>
          <div class="watch-wrapper6">
            <div class="watch10">SEND</div>
          </div>
        </div>
        <div class="homepage-inner"></div>
        <div class="newsletter-subscription-bar">
          <input inputmode="" class="newsletter-subscription-bar-child"></input>
          <div class="newsletter-subscription-bar-item"></div>
          <div class="subscribe-to-our">Subscribe to our newsletter</div>
          <div class="youremailcom">your@email.com</div>
        </div>
        <div class="footer-section">
          <div class="footer-section-child"></div>
          <div class="love-is-the-container">
            <p class="at-empyrean-we">
              Love is the universal language that binds us all.
            </p>
            <p class="at-empyrean-we">
              We celebrate love in all its forms. We offer advice, support, and
              inspiration to foster healthy relationships and a compassionate
              world.
            </p>
          </div>
          <div class="footer-icons">
            <div class="home-parent">
              <div class="home">Home</div>
              <div class="home">About us</div>
              <div class="home">Testimonials</div>
            </div>
            <div class="home-parent">
              <div class="home">Shop</div>
              <div class="home">Premium Services</div>
              <div class="home">Newsletter</div>
            </div>
            <div class="kingschat-1-parent">
              <div class="kingschat-1"></div>
              <img class="envelope-icon" alt="" src="./public/envelope.svg" />

              <div class="empyrean2023">@Empyrean2023</div>
            </div>
          </div>
          <img
            class="empyrean-logo-1"
            alt=""
            src="./public/empyrean-logo-1@2x.png"
          />
        </div>
        <div class="product-pagination">
          <div class="product-pagination-inner">
            <div class="ellipse-container">
              <div class="frame-child43"></div>
              <img
                class="chevrons-left-icon"
                alt=""
                src="./public/chevronsleft.svg"
              />
            </div>
          </div>
          <div class="ellipse-container">
            <div class="frame-child44"></div>
            <div class="div7">1</div>
          </div>
          <div class="ellipse-container">
            <div class="frame-child43"></div>
            <div class="div7">2</div>
          </div>
          <div class="ellipse-container">
            <div class="frame-child43"></div>
            <div class="div7">3</div>
          </div>
          <div class="ellipse-container">
            <div class="frame-child43"></div>
            <div class="div7">4</div>
          </div>
          <div class="ellipse-container">
            <div class="frame-child43"></div>
            <div class="div7">5</div>
          </div>
          <div class="product-pagination-inner">
            <div class="product-pagination-inner">
              <div class="ellipse-container">
                <div class="frame-child43"></div>
                <img
                  class="chevrons-left-icon1"
                  alt=""
                  src="./public/chevronsleft1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="nav-bar">
          <img class="nav-bar-child" alt="" src="./public/rectangle-27.svg" />

          <div class="navbar-parent">
            <div class="navbar">
              <div class="washryte-200px-x100-1-avifmi-1-wrapper">
                <img
                  class="washryte-200px-x100-1-avifmi-1-icon"
                  alt=""
                  src="./public/washryte-200px-x100-1-avifmi-1@2x.png"
                />
              </div>
              <div class="nav-item-parent">
                <div class="nav-item">
                  <div class="features">Home</div>
                  <div class="nav-item-child"></div>
                </div>
                <div class="nav-item">
                  <div class="features">
                    <a href="./about/">About us</a>
                  </div>
                  <img class="nav-item-item" alt="" src="./public/line-1.svg" />
                </div>
                <div class="nav-item">
                  <div class="features">Premium services</div>
                  <img class="nav-item-item" alt="" src="./public/line-1.svg" />
                </div>
                <div class="nav-item">
                  <div class="features">
                    <a href="./login/">shop</a>
                  </div>
                  <img class="nav-item-item" alt="" src="./public/line-1.svg" />
                </div>
              </div>
            </div>
            <img
              class="empyrean-logo-11"
              alt=""
              src="./public/empyrean-logo-11@2x.png"
            />

            <img class="cart-icon" alt="" src="./public/cart.svg" />

            <div class="nav-item4">
              <div class="features">Login</div>
              <img class="nav-item-item" alt="" src="./public/line-1.svg" />
            </div>
          </div>
        </div>
        <div class="testiomnial-section-card1">
          <div class="testiomnial-section-card-child"></div>
          <div class="vector-background">
            <img class="vector-icon" alt="" src="./public/vector.svg" />
          </div>
          <div class="testiomnial-section-card-item"></div>
          <div class="reviews-cards1">
            <img
              class="reviews-cards-child"
              alt=""
              src="./public/rectangle-17@2x.png"
            />

            <div class="reviews-cards-item"></div>
            <img class="slide-bar-icon" alt="" src="./public/slide-bar.svg" />

            <div class="star-rating">
              <img
                class="star-rating-child"
                alt=""
                src="./public/star-11.svg"
              />

              <img
                class="star-rating-child"
                alt=""
                src="./public/star-11.svg"
              />

              <img
                class="star-rating-child"
                alt=""
                src="./public/star-11.svg"
              />

              <img
                class="star-rating-child"
                alt=""
                src="./public/star-11.svg"
              />

              <img class="star-rating-child" alt="" src="./public/star-5.svg" />
            </div>
            <div class="using-this-platform-container">
              <span class="using">Using </span>
              <span class="this-platform-has">
                this platform has inspired my faith, built my spirituality and
                changed my love life. It was indeed the best decision i made
                this year.
              </span>
            </div>
            <b class="zoe-brendan">Zoe Brendan</b>
            <i class="christ-embassy-mca">Australia</i>
          </div>
          <div class="right-arrow-key">
            <div class="right-arrow-key-child"></div>
            <img
              class="chevron-right-icon"
              alt=""
              src="./public/chevronright.svg"
            />
          </div>
          <div class="left-arrow-key">
            <div class="right-arrow-key-child"></div>
            <img
              class="chevron-right-icon"
              alt=""
              src="./public/chevronleft.svg"
            />
          </div>
          <b class="testimonials">Testimonials</b>
          <div class="vector-background1">
            <img class="vector-icon1" alt="" src="./public/vector1.svg" />
          </div>
          <div class="rectangle-parent1">
            <div class="frame-child40"></div>
            <div class="frame-child41"></div>
            <div class="frame-child42"></div>
          </div>
          <div class="what-people-say-about-our-amaz-parent">
            <div class="what-people-say">
              What people say about our amazing platform.
            </div>
            <div class="over-1000-purchases">
              Over 1000+ purchases, 100 videos watched, 3000 subscribers and 50
              stories shared.
            </div>
            <div class="cta-button-2">
              <div class="read-the-success">read the success stories</div>
            </div>
            <div class="cta-button-2-non-anime">
              <div class="read-the-success">read the success stories</div>
            </div>
          </div>
          <div class="reviews-cards2">
            <img
              class="reviews-cards-child"
              alt=""
              src="./public/rectangle-17@2x.png"
            />

            <div class="reviews-cards-item"></div>
            <img class="slide-bar-icon2" alt="" src="./public/slide-bar.svg" />

            <div class="star-rating">
              <img
                class="star-rating-child"
                alt=""
                src="./public/star-11.svg"
              />

              <img
                class="star-rating-child"
                alt=""
                src="./public/star-11.svg"
              />

              <img
                class="star-rating-child"
                alt=""
                src="./public/star-11.svg"
              />

              <img class="star-rating-child" alt="" src="./public/star-5.svg" />

              <img class="star-rating-child" alt="" src="./public/star-5.svg" />
            </div>
            <div class="using-this-platform-container">
              <span class="using">Using </span>
              <span class="this-platform-has">
                this platform has inspired my faith, built my spirituality and
                changed my love life. It was indeed the best decision i made
                this year.
              </span>
            </div>
            <b class="zoe-brendan">Zoe Brendan</b>
            <i class="christ-embassy-mca">Canada</i>
          </div>
        </div>
        <div class="socials">
          <div class="socials-child"></div>
          <div class="social-icons-parent">
            <img class="social-icons" alt="" src="./public/social-icons.svg" />

            <img class="social-icons" alt="" src="./public/social-icons1.svg" />

            <img class="social-icons" alt="" src="./public/social-icons2.svg" />
          </div>
        </div> */}
      </>
      {/* <Footer /> */}
    </>
  );
}
