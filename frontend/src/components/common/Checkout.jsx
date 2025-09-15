import Layout from "./Layout"
import { Link } from "react-router-dom"
import { useState } from "react"
import ProductImg from "../../assets/images/Mens/seven.jpg"

const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState("cashOnDelivery");

    const handlePaymentMethod = (e) => {
        setPaymentMethod(e.target.value);
    }
  return (
    <Layout>
        <div className="container pb-5">
        <div className="row">
          <div className="col-md-12">
            <nav aria-label="breadcrumb" className="py-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Checkout
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row">
            <div className="col-md-7">
                <h3 className="border-bottom pb-3"><strong>Billing Details</strong></h3>
                <form action="" className="row pt-3">
                    <div className="col-md-6">
                        <div className="mb-3">
                        <input type="text" className="form-control" placeholder="First and Last Name *" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Email Address *" />
                        </div>
                    
                    </div>

                        <div className="mb-3">
                            <textarea className="form-control" rows={3} placeholder="Address *"></textarea>
                        </div>

                    <div className="col-md-6">
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="City *" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="State *" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Zip Code *" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Phone Number *" />
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-md-5">
                <h3 className="border-bottom pb-3"><strong>Your Orders</strong></h3>
                <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <img src={ProductImg} alt="Product" width={80} />
                                  </td>
                                  <td>
                                    <h4>Title</h4>
                                    <div className="d-flex align-items-center pt-3">
                                      <span>$10.00</span>
                                      <div className="ps-3">
                                        <button className="btn btn-size">S</button>
                                      </div>
                                      <div className="ps-5">X 1</div>
                                    </div>
                                  </td>
                                </tr>
                
                                <tr>
                                  <td>
                                    <img src={ProductImg} alt="Product" width={80} />
                                  </td>
                                  <td>
                                    <h4>Title</h4>
                                    <div className="d-flex align-items-center pt-3">
                                      <span>$10.00</span>
                                      <div className="ps-3">
                                        <button className="btn btn-size">S</button>
                                      </div>
                                        <div className="ps-5">X 1</div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                 </table>
                 <div className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-between border-bottom pb-2">
                <div>Subtotal</div>
                <div>$20.00</div>
              </div>
              <div className="d-flex justify-content-between border-bottom pb-2">
                <div>Shipping</div>
                <div>$5.00</div>
              </div>
              <div className="d-flex justify-content-between border-bottom pb-2">
                <div>
                  <strong>Grand Total</strong>
                </div>
                <div>$25.00</div>
              </div>
            </div>
          </div>

          <h3 className="border-bottom pt-4 pb-3"><strong>Payment Method</strong></h3>

            <div>
                <input type="radio"
                onClick={handlePaymentMethod}
                checked={paymentMethod === "bankTransfer"} value={"bankTransfer"} />
                <label htmlFor="" className="form-label ps-2">Direct Bank Transfer</label>

                <input type="radio"
                onClick={handlePaymentMethod}
                checked={paymentMethod === "cashOnDelivery"} value={"cashOnDelivery"} className="ms-3" />
                <label htmlFor="" className="form-label ps-2">Cash on Delivery</label>
            </div>
            
            <div className="d-flex py-3">
                <button className="btn btn-primary">Proceed to Checkout</button>
            </div>

        </div>

        </div>
      </div>
    </Layout>
  )
}

export default Checkout