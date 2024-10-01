import { CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { RiFacebookCircleLine } from "react-icons/ri";

function Footer() {
  return (
    <div>
      <footer className="footer text-base-content p-10 border-t border-gray-300">
        <aside>
          <img
            src="https://steadfast.com.bd/landing-page/asset/images/logo/logo.svg"
            alt=""
            srcSet=""
          />
          <p className="text-xl">
            House# 44, Rd No. 2/A, Dhanmondi, <br />
            Dhaka 1209
            <br />
            E-mail: info@steadfast.com.bd <br />
            Hotline: 09678-045045
          </p>
        </aside>
        <nav>
          <h6 className=" text-2xl font-bold ">Company</h6>
          <a className="text-xl text-black hover:text-[#00b795]">Contact Us</a>
          <a className="text-xl text-black hover:text-[#00b795]">
            Return Policy
          </a>
          <a className="text-xl text-black hover:text-[#00b795]">
            Terms and Conditions
          </a>
        </nav>
        <nav>
          <h6 className="text-2xl font-bold">Sister Concern</h6>
          <a className="text-xl text-black hover:text-[#00b795]">Pixelaxus</a>
          <a className="text-xl text-black hover:text-[#00b795]">Biggapon</a>
        </nav>
        <nav>
          <h6 className="text-2xl font-bold">Follow Us</h6>
          <div className="flex my-5">
            <RiFacebookCircleLine className="text-4xl" />
            <IoLogoInstagram className="text-4xl" />
            <CiLinkedin className="text-4xl" />
          </div>
          <div className="flex">
            <img
              className="mr-5"
              src="https://steadfast.com.bd/landing-page/asset/images/app_store.png"
              alt=""
              srcSet=""
            />

            <img
              src="https://steadfast.com.bd/landing-page/asset/images/google_play.png"
              alt=""
              srcSet=""
            />
          </div>
        </nav>
      </footer>

      {/* //////////////////// */}
      <footer className="text-center p-5 ">
        <p>
          Copyright © 2024 - All right reserved by
          <a
            className="text-[#00b795] font-bold mx-2 underline"
            target="_blank"
            href="https://ilhan-khondaker.vercel.app/"
          >
            Ilhan Khondaker
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
