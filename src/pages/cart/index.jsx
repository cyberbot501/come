import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import axios from "axios";
import { useUser } from "../../store";

export default function Cart() {
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const userData = localStorage.getItem("userData");
  const parsedUserData = JSON.parse(userData);

  function getCartItem() {
    return axios
      .get("https://empyrean.washrytelaundry.com.ng/api/v1/cart", {
        headers: {
          Authorization: `Bearer ${parsedUserData?.api_token}`,
        },
      })
      .then((res) => {
        console.log(res?.data);
        setCartData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
        setError(err?.response?.data?.message || "An error occured");
      });
  }
  useEffect(() => {
    getCartItem();
  }, []);
  // console.log(user)
  console.log(cartData.gross_total_price)

  return (
    <>
      <Navbar />

      <div className="shopping-cart">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="product-details">
              <div className="list-items">
                {cartData.length !==0  && cartData.data?.map((product,idx)=>(
                  <div className="item" key={idx}>
                   <div className="frame">
                     <div className="div">
                       <div className="frame-2">
                         <div className="rectangle"></div>
                         <i className="bx bx-minus" id="icons"></i>
                       </div>
                       <div className="text-wrapper">{product.quantity}</div>
                       <div className="frame-2">
                         <div className="rectangle"></div>
                         <i className="bx bx-plus" id="icons"></i>
                       </div>
                     </div>
                     <img className="line" src="img/line-4.svg" />
                     <p className="p">
                       <span className="span">
                         {product.product_name}
                         <br />
                       </span>{" "}
                       <span className="text-wrapper-2">Size : Large</span>
                     </p>
                     <div className="text-wrapper-3">$ 102</div>
                     <div className="text-wrapper-4">$ 51</div>
                     <img className="rectangle-2" src="img/image.png" />
                   </div>
                   <i className="bx bx-trash"></i>
                 </div>
                ))}
               
                {/* <div className="item-2">
                  <div className="frame">
                    <div className="div">
                      <div className="frame-2">
                        <div className="rectangle"></div>
                        <i className="bx bx-minus" id="icons"></i>
                      </div>
                      <div className="text-wrapper">2</div>
                      <div className="frame-2">
                        <div className="rectangle"></div>
                        <i className="bx bx-plus" id="icons"></i>
                      </div>
                    </div>
                    <img className="line" src="img/line-4-4.svg" />
                    <p className="p">
                      <span className="span">
                        Red T-Shirt
                        <br />
                      </span>{" "}
                      <span className="text-wrapper-2">Size :Medium</span>
                    </p>
                    <div className="text-wrapper-3">$ 60</div>
                    <div className="text-wrapper-4">$ 30</div>
                    <img className="rectangle-2" src="img/rectangle-67-3.png" />
                  </div>
                  <i className="bx bx-trash"></i>
                </div>
                <div className="item-3">
                  <div className="frame">
                    <div className="div">
                      <div className="frame-2">
                        <div className="rectangle"></div>
                        <i className="bx bx-minus" id="icons"></i>
                      </div>
                      <div className="text-wrapper">2</div>
                      <div className="frame-2">
                        <div className="rectangle"></div>
                        <i className="bx bx-plus" id="icons"></i>
                      </div>
                    </div>
                    <img className="line" src="img/line-4-7.svg" />
                    <p className="p">
                      <span className="span">
                        Brown Sweater
                        <br />
                      </span>{" "}
                      <span className="text-wrapper-2">Size : Large</span>
                    </p>
                    <div className="text-wrapper-3">$ 90</div>
                    <div className="text-wrapper-4">$ 45</div>
                    <img className="rectangle-2" src="img/rectangle-67.png" />
                  </div>
                  <i className="bx bx-trash"></i>
                </div>
                <div className="item-4">
                  <div className="frame">
                    <div className="div">
                      <div className="frame-2">
                        <div className="rectangle"></div>
                        <i className="bx bx-minus" id="icons"></i>
                      </div>
                      <div className="text-wrapper">1</div>
                      <div className="frame-2">
                        <div className="rectangle"></div>
                        <i className="bx bx-plus" id="icons"></i>
                      </div>
                    </div>
                    <img className="line" src="img/line-4-5.svg" />
                    <p className="p">
                      <span className="span">
                        Base Ball Cap
                        <br />
                      </span>{" "}
                      <span className="text-wrapper-2">Size : Large</span>
                    </p>
                    <div className="text-wrapper-3">$ 10</div>
                    <div className="text-wrapper-4">$ 10</div>
                    <img className="rectangle-2" src="img/rectangle-67-5.png" />
                  </div>
                  <i className="bx bx-trash"></i>
                </div>
                <div className="item-5">
                  <div className="frame">
                    <div className="div">
                      <div className="frame-2">
                        <div className="rectangle"></div>
                        <i className="bx bx-minus" id="icons"></i>
                      </div>
                      <div className="text-wrapper">1</div>
                      <div className="frame-2">
                        <div className="rectangle"></div>
                        <i className="bx bx-plus" id="icons"></i>
                      </div>
                    </div>
                    <img className="line" src="img/line-4-3.svg" />
                    <p className="p">
                      <span className="span">
                        Black Collar T-Shirt
                        <br />
                      </span>
                      <span className="text-wrapper-2">Size : Extra Large</span>
                    </p>
                    <div className="text-wrapper-3">$ 49</div>
                    <div className="text-wrapper-4">$ 49</div>
                    <img className="rectangle-2" src="img/rectangle-67-4.png" />
                  </div>
                  <i className="bx bx-trash"></i>
                </div>
                <div className="item-6">
                  <div className="frame">
                    <div className="div">
                      <div className="frame-2">
                        <div className="rectangle"></div>
                        <i className="bx bx-minus" id="icons"></i>
                      </div>
                      <div className="text-wrapper">2</div>
                      <div className="frame-2">
                        <div className="rectangle"></div>
                        <i className="bx bx-plus" id="icons"></i>
                      </div>
                    </div>
                    <img className="line" src="img/image.svg" />
                    <p className="p">
                      <span className="span">
                        Black Color Hoodie
                        <br />
                      </span>{" "}
                      <span className="text-wrapper-2">Size : Large</span>
                    </p>
                    <div className="text-wrapper-3">$ 102</div>
                    <div className="text-wrapper-4">$ 51</div>
                    <img className="rectangle-2" src="img/rectangle-67-2.png" />
                  </div>
                  <i className="bx bx-trash"></i>
                </div>
              </div>
              <div className="navbar">
                <div className="frame-3"></div>
                <div className="rectangle-3"></div>
                <img className="line-2" src="img/line-4-9.svg" />
                <div className="text-wrapper-5">Product</div>
                <div className="text-wrapper-6">Product Description</div>
                <div className="text-wrapper-7">Price</div>
                <div className="text-wrapper-8">Total</div>
                <div className="text-wrapper-9">Quantity</div> */}
              </div>
            </div>
            <div className="order-summary">
              <div className="div-2">
                <div className="frame-4"></div>
                <div className="rectangle-4"></div>
                <img className="line-3" src="/line-4-8.svg" />
                <div className="text-wrapper-10">Order Summary</div>
              </div>
              <div className="div-2">
                <div className="frame-5"></div>
                <div className="rectangle-5"></div>
                <img className="line-3" src="img/line-4-12.svg" />
                <div className="text-wrapper-10">Grand Total :</div>
                <div className="text-wrapper-11">$0</div>
              </div>
              <div className="div-2">
                <div className="frame-4"></div>
                <div className="rectangle-5"></div>
                <img className="line-3" src="img/line-4-10.svg" />
                <div className="text-wrapper-10">Discount :</div>
                <div className="text-wrapper-11">$00</div>
              </div>
              <div className="div-2">
                <div className="frame-4"></div>
                <div className="rectangle-5"></div>
                <img className="line-3" src="img/line-4-2.svg" />
                <div className="text-wrapper-10">Shipping Charge :</div>
                <div className="text-wrapper-11">$00</div>
              </div>
              <div className="div-2">
                <div className="frame-4"></div>
                <div className="rectangle-5"></div>
                <img className="line-3" src="img/line-4-11.svg" />
                <div className="text-wrapper-10">Estimated Tax :</div>
                <div className="text-wrapper-11">$00</div>
              </div>
              <div className="div-2">
                <div className="frame-4"></div>
                <div className="rectangle-5"></div>
                <img className="line-3" src="img/line-4-6.svg" />
                <div className="text-wrapper-12">Total :</div>
                <div className="text-wrapper-13" >{cartData.gross_total_price}</div>
              </div>
            </div>
            <div className="coupon-display-bar">
              <p className="text-wrapper-14">
                Use coupon code MNTF25 and get 25% discount !
              </p>
            </div>
            <div className="coupon-input-bar">
              <div className="rectangle-6"></div>
              <div className="rectangle-7"></div>
              <input
                type="text"
                className="text-wrapper-15"
                placeholder="coupon code"
              />
              <button className="text-wrapper-16">APPLY</button>
            </div>
            <div className="frame-6">
              <div className="text-wrapper-14">Add a Note (Optional):</div>
              <div className="rectangle-8"></div>
              <input
                type="textarea"
                name=""
                className="you-can-add-more"
                rows="4"
                cols="50"
                placeholder=" You can add more description or details about what you want here."
              />
              <div className="edit-edit-pencil">
                <i className="bx bxs-message-square-edit " id="icons"></i>
              </div>
            </div>
            <div className="frame-7">
              {/* <i className="bx bx-arrow-back arrow"></i> */}
              <div className="text-wrapper-17">Continue to shopping</div>
            </div>
            <div className="div-wrapper">
              <button className="text-wrapper-18">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
