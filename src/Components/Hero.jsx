function Hero() {
  return (
    <div
      className="hero min-h-[60vh] "
      style={{
        backgroundImage:
          "url(https://assets.codepen.io/2585/sean-pollock-PhYq704ffdA-unsplash.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="hero-content text-white text-center">
        <div className=" bg-gray-900 bg-opacity-60 p-10 lg:p-20 rounded-lg">
          <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
            We deliver parcels <br /> in your city on time, with <br /> no
            hassle.
          </h1>
          <p className="mb-5 text-xl lg:text-3xl">
            Easy Tracking, fast Payment, and safe Delivery across country.
          </p>
          <a
            target="-blank"
            href="https://steadfast.com.bd/"
            className="btn bg-[#00b795] hover:bg-white  text-white hover:text-black border-none"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
