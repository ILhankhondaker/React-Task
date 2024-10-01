function Service() {
  return (
    <div className="p-5">
      <h1 className="text-3xl lg:text-4xl text-center font-bold my-10">
        Our Service{" "}
      </h1>
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-40 max-w-[1200px] mx-auto">
        <div>
          <img
            className="mx-auto"
            src="https://steadfast.com.bd/landing-page/asset/images/ecom_delivry.svg"
            alt=""
            srcSet=""
          />
          <p className="text-xl font-bold text-center">Ecommerce Delivery</p>
        </div>
        <div>
          <img
            className="mx-auto"
            src="https://steadfast.com.bd/landing-page/asset/images/pick_n_drop.svg"
            alt=""
            srcSet=""
          />
          <p className="text-xl font-bold text-center">Pick and Drop</p>
        </div>
        <div>
          <img
            className="mx-auto"
            src="https://steadfast.com.bd/landing-page/asset/images/packeging.svg"
            alt=""
            srcSet=""
          />
          <p className="text-xl font-bold text-center">Packging</p>
        </div>
        <div>
          <img
            className="mx-auto"
            src="https://steadfast.com.bd/landing-page/asset/images/warehouse.svg"
            alt=""
            srcSet=""
          />
          <p className="text-xl font-bold text-center">Warehousing</p>
        </div>
      </section>
    </div>
  );
}

export default Service;
