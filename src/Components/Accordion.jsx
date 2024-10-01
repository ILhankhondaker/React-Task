function Accordion() {
  return (
    <div className="mb-10">
      <h1 className="text-3xl lg:text-5xl text-center my-10 font-bold">
        Frequently asked Questions
      </h1>

      <div className="max-w-[1000px] mx-auto p-5">
        <div className="collapse collapse-plus  border my-5 ">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Wht SteadFast Courier?
          </div>
          <div className="collapse-content ">
            <p>
              SteadFast Courier stands out for its commitment to delivering
              parcels nationwide on time and without any hassle. We pride
              ourselves on offering fast payment, easy tracking, a dedicated
              customer service team, and ensuring the safe delivery of your
              parcels.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border my-5">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What is the coverage area of steadfast courier?
          </div>
          <div className="collapse-content">
            <p>
              SteadFast Courier extends its services across 8 divisions, 495
              Upazilas, and 330 Municipal Corporations. Click here for a
              comprehensive list of detailed service locations.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border my-5">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What services does steadfast courier provide?
          </div>
          <div className="collapse-content">
            <p>
              Revel in the excellence of E-commerce delivery, pick-and-drop ,
              cutting-edge warehousing, entrust your goods to our
              state-of-the-art warehousing, and witness perfection in packaging
              solutions.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border my-5">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What services does steadfast courier provide?
          </div>
          <div className="collapse-content">
            <p>
              Revel in the excellence of E-commerce delivery, pick-and-drop ,
              cutting-edge warehousing, entrust your goods to our
              state-of-the-art warehousing, and witness perfection in packaging
              solutions.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border my-5">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            want to know about your delivery charges ?
          </div>
          <div className="collapse-content">
            <p>
              Discover our delivery charges, which are determined by the weight{" "}
              of a 1 kg parcel:
              <br /> <br />
              nside Dhaka: 70 <br /> <br />
              Dhaka Suburban: 100 <br /> <br />
              Outside Dhaka: 130
              <br /> <br />
              For a more detailed breakdown, utilize our Price Calculation
              Option by
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
