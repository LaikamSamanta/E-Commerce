import ProductImg from "../../assets/images/eight.jpg";
import ProductImg1 from "../../assets/images/Mens/five.jpg";
import ProductImg2 from "../../assets/images/Mens/fivee.jpg";
import ProductImg3 from "../../assets/images/Mens/four.jpg";


const LatestProducts = () => {
  return (
    <section className="section-2 pt-5">
        <div className="container">
          <h2>New Arrivals</h2>
          <div className="row mt-4">
            <div className="col-md-3 col-6">
              <div className="product card border-0">
                <div className="card-img">
                  <img src={ProductImg} alt="Product" className="w-100" />
                </div>
                <div className="card-body pt-3">
                  <a href="">Red Check Shirt for Men</a>
                  <div className="price">$50.00<span className="text-decoration-line-through">$80.00</span>
                </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="product card border-0">
                <div className="card-img">
                  <img src={ProductImg1} alt="Product" className="w-100" />
                </div>
                <div className="card-body pt-3">
                  <a href="">Red Check Shirt for Men</a>
                  <div className="price">$50.00<span className="text-decoration-line-through">$80.00</span>
                </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="product card border-0">
                <div className="card-img">
                  <img src={ProductImg2} alt="Product" className="w-100" />
                </div>
                <div className="card-body pt-3">
                  <a href="">Red Check Shirt for Men</a>
                  <div className="price">$50.00<span className="text-decoration-line-through">$80.00</span>
                </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="product card border-0">
                <div className="card-img">
                  <img src={ProductImg3} alt="Product" className="w-100" />
                </div>
                <div className="card-body pt-3">
                  <a href="">Red Check Shirt for Men</a>
                  <div className="price">$50.00<span className="text-decoration-line-through">$80.00</span>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default LatestProducts
