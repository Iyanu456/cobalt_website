import GradientBorderButton from "@/components/GradientBorderButton";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import TiltCard from "@/components/HoverTiltCard";
import TiltImage from "@/components/TiltImage";

const cards = [
  {
    url: "/card 1.png",
    title: "Insights at your fingertips",
    caption:
      "All your data and finances in one place to provide quick answers and make decisions instantly.",
  },
  {
    url: "/card 2.png",
    title: "Manage in real time",
    caption:
      "Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023.",
  },
  {
    url: "/card 3.png",
    title: "Important business alerts",
    caption:
      "Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click.",
  },
];

export default function Home() {
  return (
    <>
      <div className="text-center relative max-sm:min-h-[75vh] min-h-[100vh] md:min-h-[70vh] md:max-w-[77vw] sm:px-[1em] max-sm:px-[1em] mx-auto flex flex-col justify-center  md:mt-[7em] mt-[10em]">
        <div className="gradient-text">
          <h1 className="text-[2.8em] max-sm:text-[2.2em] md:text-[3.4em] lg:text-[4.4em] leading-[1.2em] text-center  font-bold">
            Unleash the power of {<br></br>}intuitive finance
          </h1>
        </div>
        <p className="md:text-[1.2em] md:max-w-[60%] mx-auto text-center mt-3">
          Say goodbye to the outdated financial tools. Every small business
          owner, regardless of the background, can now manage their business
          like a pro. Simple. Intuitive. And never boring.
        </p>

        <GradientBorderButton
          className="mt-8 hover-btn "
          label="Joint the waitlist"
        />
        <p className="mt-4">Learn more</p>
        <Link href="#screenshot" className="mt-[3em] floating-arrow mx-auto">
          <ArrowDown
            color="#ccd6f6"
            className="max-w-[27px]  mx-auto"
            size={27}
          />
        </Link>
      </div>

      <section id="screenshot" className="grid place-items-center mt-[2em]">

        <TiltImage 
        imageUrl="screenshot.png"
        imageClass="mx-auto max-w-[85vw] md:max-w-[72vw] shadow-2xl"
        imageHeight={10000}
        imageWidth={10000}
        />
      </section>

      <section className="grid place-items-center my-[5em] md:max-w-[78%] px-[1em] md:min-h-[40vh] mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="gradient-text">
            <h2 className="text-4xl md:text-5xl font-bold md:max-w-[85%] leading-[1.2em]">
              Who said finance has to be boring
            </h2>
          </div>

          <div className="grid place-items-center">
            With Cobalt, managing your business finances is effortless,
            empowering, and anything but boring. Our intuitive platform brings
            clarity to your cash flow, simplifies your financial
            decision-making, and puts the power of advanced financial management
            right at your fingertips. Say no to spreadsheets and tools designed
            in the 80s.{" "}
          </div>
        </div>
      </section>

      <section className="grid my-[4em] md:max-w-[78%] px-[1em] mx-auto">
        <div className="">
          <div className="gradient-text">
            <h2 className="text-4xl md:text-5xl font-bold max-w-[100%] leading-[1.2em]">
              {`Everything you need.`}
              {<br></br>} {`Nothing you don’t `}
            </h2>
          </div>
          <p className="mt-4 max-w-[30em]">
            Financial management and visibility in one place. Experience a{" "}
            <span className="text-white">flexible toolkit </span>that makes
            every task feel like a breeze.
          </p>
        </div>
      </section>

      <section className="grid md:max-w-[90%] lg:max-w-[78%] mb-[4em] px-[1em] mx-auto">
        <div className="grid md:grid-cols-3 gap-[1.5em]">
          {cards.map(({ url, title, caption }, index) => (
            <TiltCard
              key={index}
              containerClass="bg-[#18181B] flex flex-col w-[100%] rounded-xl border shadow-md border-[#333333]"
              imageUrl={url}
              imageClass="max-h-[10em] lg:max-h-[100%]  object-cover"
              imageHeight={1000}
              imageWidth={1000}
              caption={caption}
              textContainerClass="px-5 py-6"
              title={title}
              titleContainerClass="mb-3 font-semibold text-white text-[1.1em]"
            />
          ))}
        </div>
        <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-[1.5em] mt-[1.5em]">
          <TiltCard
            containerClass="bg-[#18181B] flex flex-col w-[100%] rounded-xl border shadow-md border-[#333333]"
            imageUrl="/card 4.png"
            imageClass="max-h-[8em] md:max-h-[60%] object-cover"
            imageHeight={1000}
            imageWidth={1000}
            caption="Bring your data with our built-in integrations for accounting,
                revenue tools and banking."
            textContainerClass="px-5 py-6"
            title="Connect all your apps"
            titleContainerClass="mb-3 mt-5 font-semibold text-white text-[1.1em]"
          />

          <TiltCard
            containerClass="bg-[#18181B] flex flex-col w-[100%] rounded-xl border shadow-md border-[#333333]"
            imageUrl="/card 5.png"
            imageClass="object-cover max-h-[8em] md:max-h-[16em] mt-8"
            imageHeight={500}
            imageWidth={500}
            caption="Bring your data with our built-in integrations for accounting,
                revenue tools and banking."
            textContainerClass="px-5 py-6"
            title="Connect all your apps"
            titleContainerClass="mb-3 mt-5 font-semibold text-white text-[1.1em]"
          />
        </div>
      </section>

      <section className="grid mb-[4em] mt-[7em] md:max-w-[78%] px-[1em] mx-auto">
        <div className="">
          <div className="gradient-text">
            <h2 className="text-4xl md:text-5xl font-bold max-w-[100%] leading-[1.2em]">
              Meet Genius
            </h2>
          </div>
          <p className="mt-4 max-w-[30em]">
            Our AI-driven assistant is designed to decode complex financial
            figures and illuminate key trends in your business.
          </p>
        </div>

        <div className="mt-[3.5em] grid md:grid-cols-2 gap-[1.5em]">

          <TiltCard
            containerClass="bg-[#18181B] flex gap-2 flex-col w-[100%] rounded-xl border shadow-md border-[#333333]"
            imageUrl="/card 6.png"
            imageClass="max-sm:max-h-[10em] object-cover py-2"
            imageHeight={1000}
            imageWidth={1000}
            caption="Harness the power of Cobalt's predictive analytics to map out the financial future of your business."
            textContainerClass="px-5 py-6"
            title="Smart forecasting"
            titleContainerClass="mb-3 font-semibold text-white text-[1.1em]"
          />

          <TiltCard
            containerClass="bg-[#18181B] flex gap-2 flex-col w-[100%] rounded-xl border shadow-md border-[#333333]"
            imageUrl="/card 7.png"
            imageClass="max-sm:max-h-[10em] object-cover py-2"
            imageHeight={1000}
            imageWidth={1000}
            caption="Just ask. With Genius by your side, navigating the financial
                maze becomes intuitive and effortless."
            textContainerClass="px-5 py-6"
            title="Chat with Genius"
            titleContainerClass="mb-3 font-semibold text-white text-[1.1em]"
          />
        </div>
      </section>

      <section className="relative grid min-h-[30em] mt-[8em] mb-[3em]">
        <div className="grid grid-cols-2 h-[40em]">
          <div className=" w-[120%] right-auto left-auto h-[100%] ml-[10em] inset-0 radial-gradient-green blur-3xl opacity-50"></div>
          <div className=" w-[120%] right-auto left-auto h-[100%] ml-[-15em]  inset-0 radial-gradient-blue blur-3xl opacity-50"></div>
        </div>

        <div className="absolute  w-[100%] grid">
          <div className="gradient-text">
            <h2 className="text-center text-[1.7em] md:text-[2.6em] px-4 font-bold max-w-[100%] leading-[1.2em]">
              See where financial automation {<br></br>}can take your business.
            </h2>
          </div>
          <p className="mt-[2em] text-center px-5">
            {`The first financial tool you'll love. And the last one you'll ever
            need.`}
          </p>
          <GradientBorderButton
            className="mt-[4em] hover-btn"
            label="Joint the waitlist"
          />

          <div className="flex flex-wrap gap-6 ml-[15%] mr-auto mt-[6em] text-[#71717A]">
            <p>© 2023 Cobalt Financial Technologies Inc.</p>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Use</Link>
          </div>
          <p className="ml-[15%] mr-auto mt-5 max-w-[50%] text-[#71717A]">
            Cobalt is a trademark or registered trademark of Cobalt Financial
            Technologies Inc. Any other trademarks are the property of their
            respective owners. Unless otherwise noted, use of third party logos
            does not imply endorsement of, sponsorship of, or affiliation with
            Cobalt.
          </p>

          <p className="ml-[15%] mr-auto mt-5 mb-5 max-w-[50%] text-[#71717A]">
            Cobalt is a financial technology company, not a bank. Banking
            services are provided by Celtic Bank and Evolve Bank & Trust®,
            Members FDIC.
          </p>
        </div>
      </section>
    </>
  );
}
