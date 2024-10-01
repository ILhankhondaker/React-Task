import { LiaCertificateSolid } from "react-icons/lia";
import { MdCardMembership } from "react-icons/md";
function BeMarchant() {
  return (
    <div className="p-5">
      <div className="bg-[#00b795] my-10 p-10 max-w-[1200px] mx-auto rounded-xl ">
        <h1 className="text-center text-4xl text-white font-bold">
          Grow Your Business with SteadFast
        </h1>
        <p className="text-center text-xl text-white my-5">
          Start Your first step with SteadFast
        </p>
        <div className="flex justify-center my-10">
          <button className="p-3 mx-auto  tex-black hover:text-[#00b795] font-bold bg-white rounded-lg">
            Become a Marchant
          </button>
        </div>
      </div>

      <div className=" flex flex-col  lg:flex-row lg:justify-between max-w-[1200px] mx-auto mb-20">
        <div className="mb-10 ">
          <h1 className="text-[#00b795]  font-bold">
            <LiaCertificateSolid className="inline text-2xl" />
            Licensed
          </h1>
          <h1 className="text-2xl my-5 font-bold">
            A licensed courier service of GPO
          </h1>
          <img
            src="https://steadfast.com.bd/landing-page/asset/images/dak_v.png"
            alt=""
            srcSet=""
          />
        </div>
        <div className="divider divider-horizontal divider-start"></div>
        <div>
          <h1 className="text-[#00b795] font-bold">
            {" "}
            <MdCardMembership className="inline text-xl" />
            Licensed
          </h1>
          <h1 className="text-2xl my-5 font-bold">
            A licensed courier service of GPO
          </h1>
          <div className="flex ">
            <img
              src="https://steadfast.com.bd/landing-page/asset/images/csab.png"
              alt=""
              srcSet=""
            />
            <img
              src="https://steadfast.com.bd/landing-page/asset/images/partner_img/sm_ecab.png"
              alt=""
              srcSet=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeMarchant;
