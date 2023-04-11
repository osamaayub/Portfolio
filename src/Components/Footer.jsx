import React from "react";
import { FaFacebook, FaWhatsapp, FaGithub,FaLinkedin} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import me from "../assets/me.jpg";
const Footer = () => {
  const footer = [
    {
      id: 1,
      icons: <FaFacebook size={25} />,
      link: "https://www.facebook.com/osama.ayub.7777/",
    },
    {
      id: 3,
      icons: <FaGithub size={25} />,
      link: "https://github.com/osamaayub",
    },
    {
      id: 4,
      icons: <FaWhatsapp size={25} />,
      link: "https://wa.me/92314828005",
    },
    {
      id: 5,
      icons: <AiOutlineMail size={25} />,
      link: "mailto:ayubosama416@gmail.com",
    },{
      id: 5,
      icons: <FaLinkedin size={25} />,
      link: "https://www.linkedin.com/in/osama-ayub8889993755979/",
    },
  ];
  return (
    <div className="min-h-40 bg-black w-full">
      <div className="max-w-screen-lg h-full mx-auto w-full p-4  flex flex-col justify-between  sm:flex-row pb-10 text-gray-400">
        <div className="flex flex-col items-center  my-10 md:my-0  ">
          <div className="flex flex-col gap-3  items-center">
            <img src={me} alt="" className="w-24 h-24 rounded-full" />
            <p className="text-center text-xl">Founder</p>
          </div>
          <div className="border-2 w-52 md:border-none md:w-0 mt-8 md:mt-0"></div>
        </div>

        <div className="flex  flex-col items-center  pb-3  ">
          <p className="text-2xl mb-3">Contact Us</p>
          <div>
            <a
              href="mailto:ayubosama416@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex gap-3 mb-1">
                <MdEmail color="white" size={23} />
                <p>Mail</p>
              </div>
            </a>
            <a
              href="https://wa.me/923314828005"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex gap-3">
                <AiOutlineWhatsApp color="green" size={23} />
                <p>WhatsApp</p>
              </div>
            </a>
          </div>
          <div className="border-2 w-52 md:border-none md:w-0 mt-8 md:mt-0"></div>
        </div>

        <div className="flex  flex-col items-center gap-4 mt-4 md:mt-0">
          <p className="text-2xl">Follow Us</p>
          <div className="flex gap-4 ">
            {footer.map((e) => (
              <a
                key={e.id}
                href={e.link}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                {e.icons}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
