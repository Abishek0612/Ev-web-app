import React from "react";
import { FaRegLightbulb, FaUsers } from "react-icons/fa";
import { MdElectricCar } from "react-icons/md";

const aboutPageStyle = "max-w-4xl mx-auto text-center p-4";
const iconStyle = "text-4xl mx-auto mb-4";
const sectionStyle = "mb-8";

const AboutUS = () => {
  return (
    <div className={aboutPageStyle}>
      <h1 className="text-3xl font-bold my-4">About Us</h1>
      <p className="mb-4">
        Discover the journey and vision that drive our commitment to
        revolutionize the electric vehicle industry.
      </p>

      <div className={sectionStyle}>
        <MdElectricCar className={iconStyle} />
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p>
          To accelerate the world's transition to sustainable energy with
          cutting-edge electric vehicles that blend performance, reliability,
          and eco-friendliness.
        </p>
      </div>

      <div className={sectionStyle}>
        <FaRegLightbulb className={iconStyle} />
        <h2 className="text-2xl font-semibold">Innovation at Core</h2>
        <p>
          We are constantly innovating to provide the most advanced EV
          technologies, from battery performance to autonomous driving features.
        </p>
      </div>

      <div className={sectionStyle}>
        <FaUsers className={iconStyle} />
        <h2 className="text-2xl font-semibold">Our Team</h2>
        <p>
          Our team of experts in technology, engineering, and sustainability
          work tirelessly to bring our vision for a cleaner planet to life.
        </p>
      </div>
    </div>
  );
};

export default AboutUS;
