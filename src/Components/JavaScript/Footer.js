import { MdOutlineMail } from "react-icons/md";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className="bg-[#1e2024] text-white">
        <div className="container mx-auto p-3 py-8 flex flex-col justify-around items-baseline gap-8 lg:flex-row lg:p-12">
          <div className="lg:w-[35%]">
            <span className="text-blue-500 font-semibold text-3xl">BIG</span>
            <span className="text-3xl font-semibold">COMMERCE</span>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              libero corrupti laudantium illum architecto accusamus minus ab
              esse neque unde. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Id, facere!
            </p>
          </div>
          <div className="flex flex-col items-baseline gap-3 lg:w-[30%]">
            <h3 className="uppercase text-3xl font-bold">Get In Touch</h3>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hassanjavaid159@gmail.com"
              target="_blank"
              className="mt-4 text-lg font-semibold text-gray-500"
            >
              <div className="flex items-center gap-1 text-lg hover:underline">
                {" "}
                <MdOutlineMail />
                hassanjavaid159@gmail.com
              </div>
            </a>

            <div className="mt-4">
              <h4 className="text-lg uppercase font-semibold">Follow Me</h4>
              <div className="flex gap-2 mt-4">
                <a
                  href="https://www.linkedin.com/in/hassan-javaid-aa7610290/"
                  className="bg-gray-600 p-3 px-4 text-2xl text-white duration-300 hover:bg-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://github.com/hassanjavaid1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 p-3 px-4 text-2xl text-white duration-300 hover:bg-blue-500"
                >
                  <LuGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="about_me lg:w-[35%]">
            <h3 className="uppercase text-3xl font-bold">Know Me</h3>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              libero corrupti laudantium illum architecto accusamus minus ab
              esse neque unde. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Id, facere! esse neque unde. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Id, facere!
            </p>
          </div>
        </div>
        <p className="text-lg text-center border-t-[1px] border-gray-800 p-4">
          <span>Copyright {new Date().getFullYear()} &copy;</span> - All Rights
          Reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;
