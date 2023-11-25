import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddin} py-5 flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[350px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] flex flex-row w-full flex-wrap justify-between md:mt-0 mt-10">
          {footerLinks.map((footerLink) => {
            return (
              <div
                key={footerLink.key}
                className="flex flex-col ss:my-0 my-4 min-w-[150px]"
              >
                <h4 className="font-poppins font-medium text-[18px] leading-[24px] text-white mb-2">
                  {footerLink.title}
                </h4>
                <ul>
                  {footerLink.links.map((link, index) => {
                    return (
                      <li
                        key={link.name}
                        className="text-poppins font-normal text-[17px] leading-[32px] text-dimWhite hover:text-secondary cursor-pointer"
                      >
                        {link.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex items-center justify-between md:flow-row pt-6 border-t-[2px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-[18px] leading-[24px] text-dimWhite mb-2">
          2021 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => {
            return (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className="w-[21px] h-[21px] object-contain cursor-pointer mr-6"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
