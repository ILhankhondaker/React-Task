import { useEffect, useState } from "react";

function FeatureCard() {
  const [featureData, setFeatureData] = useState([]);
  useEffect(() => {
    fetch("feature.json")
      .then((res) => res.json())
      .then((data) => setFeatureData(data));
  }, []);
  return (
    <div className="my-10">
      <h1 className="text-center text-3xl lg:text-4xl font-bold my-10 ">
        Why you should choose <br /> Steadfast?
      </h1>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-[1300px] mx-auto">
        {featureData.map((feature) => (
          <div
            className="border border-slate-300 border-sm rounded-lg m-5  p-5 lg:p-10 duration-500 hover:scale-95"
            key={feature.id}
          >
            <img className=" w-28 mb-5" src={feature.img} alt="" srcSet="" />
            <h3 className=" font-bold text-2xl mb-5">{feature.title}</h3>
            <p className="text-justify text-xl ">{feature.discription}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default FeatureCard;
