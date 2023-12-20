import { useEffect, useRef, useState } from "react";
import { useUser } from "../../store";
import axios from "axios";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Shop() {
  const { user } = useUser();
  const [selected, setSelected] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const closePopup = () => {
    setSelected(null);
  };

  // console.log(products);

  useEffect(() => {
    axios
      .get("https://empyrean.washrytelaundry.com.ng/api/v1/products")
      .then((res) => {
        // console.log(res?.data);
        setProducts(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
        setError(err?.response?.data?.message || "An error occured");
      });
  }, []);
  // console.log(user)

  return (
    <>
      {/* <h1>Shop</h1> */}

      {selected && (
        <AddProductToCartPopup
          close={closePopup}
          item={products.find((item) => item.id === selected)}
        />
      )}

      <Navbar />

      <div className="welcome">
        <div className="top-content">
          <h1>
            Welcome To The Empyrean Store.
            <br /> Shop From Our Vast Collections Of Premium Wears
          </h1>
          <p>
            Celebrate love in all its forms with beautiful customized clothing's
            both for individuals and couples. With over <b>2000</b> purchases on
            our <b>Online Store</b>, we offer options to customize your choice
            inscriptions/words/images.
          </p>

          <div className="order-button">
            <button>Bulk Order</button>
            <div className="contact">
              <a href="#">Contact us</a>
              <i className="bx bx-right-arrow-alt bx-bi"></i>
            </div>
          </div>
        </div>

        <div className="top-image">
          <img src="/asset/imges/hero image for product page.svg" alt="" />
        </div>
      </div>

      {/* Featured Product */}
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="search-box">
          <div className="filter-box">
            <select>
              <option value="none">filter</option>
              <option value="all">All</option>
              <option value="cheap">Cheap</option>
              <option value="xl">xtra large</option>
              <option value="large">large</option>
            </select>
          </div>

          <div className="search">
            <input type="text" name="" id="" placeholder="search" />
            <button>
              <i className="bx bx-search bx-sm"></i>
            </button>
          </div>
        </div>

        <div className="product-contain">
          <div className="slide-left">
            <button>
              <i
                className="bx bx-chevrons-left bx-sm"
                style={{ color: "#D8D8D8" }}
              ></i>
            </button>
          </div>

          <div className="product-container">
            <div className="product">
              <div className="product-grid">
                <img
                  src="/asset/imges/blank-black-male-hoodie-sweatshirt-long-sleeve-with-clipping-path-png 2.svg"
                  alt=""
                />
                <h3 className="product-name">ROM HOODIE</h3>
                <p>100% woolen Rapture on my mind hoodie with cape.</p>
                <div className="star">
                  <img src="/asset/imges/Star 1.svg" alt="" />
                  <img src="/asset/imges/Star 1.svg" alt="" />
                  <img src="/asset/imges/Star 1.svg" alt="" />
                  <img src="/asset/imges/Star 1.svg" alt="" />
                  <img src="/asset/imges/Star 5.svg" alt="" />
                  <img src="/asset/imges/Star 5.svg" alt="" />
                </div>
                <h3>$100:00</h3>
                <button>ADD TO CART</button>
              </div>
            </div>

            <div className="product">
              <div className="product-grid">
                <img src="/asset/imges/Frame 21 (3).svg" alt="" />
                <h3 className="product-name">ROM HOODIE</h3>
                <p className="discription">
                  100% woolen Rapture on my mind hoodie with cape.
                </p>
                <div className="star">
                  <img src="/asset/imges/Star 1.svg" alt="" />
                  <img src="/asset/imges/Star 1.svg" alt="" />
                  <img src="/asset/imges/Star 1.svg" alt="" />
                  <img src="/asset/imges/Star 1.svg" alt="" />
                  <img src="/asset/imges/Star 5.svg" alt="" />
                  <img src="/asset/imges/Star 5.svg" alt="" />
                </div>
                <h3>$100:00</h3>
                <button>ADD TO CART</button>
              </div>
            </div>

            <div className="product">
              <div className="product-grid">
                <img src="/asset/imges/Frame 21.svg" alt="" />
                <h3 className="product-name">ROM HOODIE</h3>
                <p className="discription">
                  100% woolen Rapture on my mind hoodie with cape.
                </p>
                <div className="star">
                  <img src="/asset/imges/Star 1.svg" alt="" />
                  <img src="/asset/imges/Star 1.svg" alt="" />
                  <img src="/asset/imges/Star 1.svg" alt="" />
                  <img src="/asset/imges/Star 1.svg" alt="" />
                  <img src="/asset/imges/Star 5.svg" alt="" />
                  <img src="/asset/imges/Star 5.svg" alt="" />
                </div>
                <h3>$100:00</h3>
                <button>ADD TO CART</button>
              </div>
            </div>
          </div>

          <div className="slide-left">
            <button>
              <i
                className="bx bx-chevrons-right bx-sm"
                style={{ color: "#D8D8D8" }}
              ></i>
            </button>
          </div>
        </div>
      </div>

      <div className="customzed-container">
        <h2>Fully Customized</h2>

        <div className="product-containers" id="product-containers">
          {loading && "loading..."}

          {products.length !== 0 &&
            products.map((item, idx) => (
              <div className="products" key={idx}>
                <div className="product-grid">
                  <img src={item.media[0].url} alt="" name="product-image" />
                  <h3 className="product-name" name="productName">
                    {item.name}
                  </h3>
                  <p name="productDescription">{item.description}</p>
                  <div className="star">
                    <img src="/asset/imges/Star 1.svg" alt="" />
                    <img src="/asset/imges/Star 1.svg" alt="" />
                    <img src="/asset/imges/Star 1.svg" alt="" />
                    <img src="/asset/imges/Star 1.svg" alt="" />
                    <img src="/asset/imges/Star 5.svg" alt="" />
                    <img src="/asset/imges/Star 5.svg" alt="" />
                  </div>
                  <h3 name="productPrice">{item.price}</h3>
                  <button onClick={() => setSelected(item.id)}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="next">
        <button>
          <i
            className="bx bx-chevrons-left bx-sm"
            style={{ color: "#D8D8D8" }}
          ></i>
        </button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>
          <i
            className="bx bx-chevrons-right bx-sm"
            style={{ color: "#D8D8D8" }}
          ></i>
        </button>
      </div>

      <Footer />
    </>
  );
}

const AddProductToCartPopup = ({ item, close }) => {
  const quantityRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useUser();
  // console.log(user);

  const addItemToCart = () => {
    setLoading(true);
    setError("");
    const requestData = {
      product_id: item.id,
      quantity: quantityRef.current.value || 1,
      attributes: [],
    };

    // console.log("add item to cart");

    axios
      .post(
        "https://empyrean.washrytelaundry.com.ng/api/v1/cart",
        requestData,
        {
          headers: {
            Authorization: `Bearer ${user.api_token}`,
          },
        }
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        let message = err?.response?.data?.message || "An error occured";
        setError(message);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="popup-container">
        {/* <div className="popup-background" id="popup-background"></div> */}

        <div id="popup" className="popup">
          <span className="close" id="close-popup" onClick={close}>
            &times;
          </span>
          <div className="cart-container">
            <div className="cart-img">
              <div className="slide-left">
                <button>
                  <i
                    className="bx bx-chevrons-left bx-sm"
                    style={{ color: "#D8D8D8" }}
                  ></i>
                </button>
              </div>

              <img src={item.media[0].url} alt="" />

              <div className="slide-left">
                <button>
                  <i
                    className="bx bx-chevrons-right bx-sm"
                    style={{ color: "#D8D8D8" }}
                  ></i>
                </button>
              </div>
            </div>

            <div className="details">
              <h2>{item.name}</h2>
              <p>{item.description}</p>

              {item?.attribute && (
                <>
                  <div className="sizes">
                    <button>2XL</button>
                    <button>XL</button>
                    <button>L</button>
                    <button>M</button>
                    <button>S</button>
                  </div>

                  <div className="type">
                    <p>Color:</p>
                    <select name="" id="">
                      <option value="Color">Colo</option>
                      <option value="Red">RED</option>
                      <option value="White">BLUE</option>
                      <option value="Blue">YELLOW</option>
                    </select>
                  </div>
                </>
              )}
              <div className="quntity">
                <p>Quantity:</p>
                <input type="text" name="" id="" ref={quantityRef} />
              </div>

              <div className="add">
                <button onClick={addItemToCart}>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>

              {success && (
                <p>
                  Product Added to cart successfully.{" "}
                  <span onClick={close} style={{ textDecoration: "underline" }}>
                    Continue Shopping
                  </span>
                </p>
              )}

              {loading && <p>loading...</p>}

              {error && <p>{error}</p>}
            </div>
          </div>
          <div className="last-part">
            <div className="select-img">
              <div className="box1">
                <img
                  src={item.media[0].url}
                  alt=""
                />
              </div>
              <div className="box1">
                <img
                  src={item.media[0].url}
                  alt=""
                />
              </div>
              <div className="box1">
                <img
                  src={item.media[0].url}
                  alt=""
                />
              </div>
            </div>

            <p>visit Our Site</p>
          </div>
        </div>
      </div>
    </>
  );
};
