import Image from "next/image";
import Link from "next/link";
import React from "react";

const Branding = () => {
  return (
    <div className="mt-24 md:mt-[10vh]">
        <div className="w-full md:h-[90vh] h-full flex md:flex-row flex-col items-start border-t-[1px] border-black">

          <div className="w-full h-full flex flex-col justify-between items-start  border-r-[1px] border-black">
            <div className="w-full h-full">
              <Link 
              href="/BrandIdentity/Branding/NirmalaCreation"
              className="flex flex-col gap-2 md:px-10 px-5 md:pt-[14vh] pt-10 justify-center min-h-[350px] max-w-[800px] ml-auto">
                <h2 className={`font-lovelace md:text-[3.8vw] text-[2rem]`}>
                  New
                </h2>
                <h1 className="md:text-[5.5rem] text-[3.2rem] leading-[100%] md font-medium">
                  RELOFLOW
                </h1>
                <h4 className="md:text-2xl text-xl md:w-2/3 w-full uppercase font-medium py-4">
                  Branding + mascot design + website
                </h4>
              </Link>
            </div>
            
            <div className="w-full h-fit border-t-[1px] border-black">
              <Link href="/BrandIdentity/Branding/NirmalaCreation" className=" w-full h-fit md:px-10 px-5 flex items-center justify-between py-3 max-w-[800px] ml-auto">
                <p className="md:text-lg text-sm">By @404creative.co.in </p>
                <Image
                  src="/Branding/reloflow/logo.jpg"
                  width={500}
                  height={500}
                  alt="nirmala_logo"
                  className="w-fit h-12"
                />
              </Link>
            </div>
          </div>
          <Link
            href="/BrandIdentity/Branding/Reloflow"
            className="w-full h-full"
          >
            <Image
              width={1000}
              height={1000}
              alt="img"
              className="w-full h-full object-cover"
              src="/Branding/reloflow/5.png"
            />
          </Link>
        </div>

        <div className="w-full md:h-[80vh] h-full flex md:flex-row flex-col items-start border-t-[1px] border-black">
          <div className="w-full h-full flex flex-col justify-between items-start border-r-[1px] border-black">
          <div className="w-full h-full border-b-[1px] border-black">
            <main className="flex flex-col gap-2 md:px-10 px-5 pt-0 justify-center min-h-[350px] max-w-[800px] ml-auto">
              <h1 className="md:text-[5vw] text-[3.2rem] leading-[100%] md font-medium">
                NIRMALA CREATION
              </h1>
              <h4 className="md:text-2xl text-xl md:w-2/3 w-full font-medium py-4">
              BRANDING + PACKAGING + WEBSITE + EXTRAS
              </h4>
            </main>
          </div>
            <span className="md:px-10 px-5 py-10 w-full min-h-[350px] md:min-h-[40vh] md:h-[40vh] h-full flex flex-col items-start justify-center md:gap-6 gap-2 basis-1/2  max-w-[800px] ml-auto">
              <h3 className="text-2xl font-medium">OVERVIEW</h3>
              <p className="text-lg md:w-[90%] w-full">
              For Nirmala, we developed branding, packaging, and a website that is vibrant, engaging, and tailored to the right audience. The identity balances consistency with a colourful aesthetic, ensuring the brand stands out while staying true to its values.
              </p>
            </span>
          </div>
          <Link
            href="/BrandIdentity/Branding/NirmalaCreation"
            className="w-full h-full"
          >
            <Image
              width={1000}
              height={1000}
              alt="img"
              className="w-full h-full object-cover"
              src="/Branding/Header.png"
            />
          </Link>
        </div>

        <div className="w-full md:h-[80vh] h-full flex md:flex-row-reverse flex-col items-start">
          <div className="w-full h-full flex flex-col justify-between items-start  border-t-[1px] border-black">
            <div className="w-full min-h-[350px] h-[40vh] border-b-[1px] border-black">
              <Link
              href="/BrandIdentity/Branding/TrustConsultGroup" 
              className="flex flex-col md:px-10 px-5 gap-2 h-full w-full items-start  py-10 justify-center  max-w-[800px] mx-auto">
                <h1 className="md:text-[5rem] text-[3.2rem] leading-[100%] md font-medium">
                  TRUST CONSULT GROUP
                </h1>
                <h4 className="md:text-2xl text-xl  md:w-2/3 w-full font-medium py-4">
                  BRANDING + PPT TEMPLATE + MARKETING MATERIAL
                </h4>
              </Link>
            </div>
            <span className="md:px-10 px-5 w-full min-h-[350px] h-[40vh] flex flex-col items-start justify-center md:gap-6 gap-2 md:pt-0 py-10 max-w-[800px] mx-auto">
              <h3 className="text-2xl font-medium">OVERVIEW</h3>
              <p className="text-lg">
                A complete brand identity for Trust Consultant Group, including
                brand guidelines, stationery and PowerPoint templates. The
                design focuses on professionalism and consistency, reflecting
                the company&apos;s core values of trust and expertise.
              </p>
            </span>
          </div>
          <Link
            href="/BrandIdentity/Branding/TrustConsultGroup"
            className="w-full h-full md:border-t-[1px] md:border-r-[1px] md:border-black overflow-hidden"
          >
            <Image
              width={3000}
              height={3000}
              alt="img"
              className="w-full h-full min-h-[350px] md:min-h-0 scale-[130%] object-cover object-center"
              src="/Branding/trustConsultGroup.jpeg"
            />
          </Link>
        </div>

        <div className="w-full md:h-[80vh] h-full flex md:flex-row flex-col items-start border-t-[1px] border-black">
          <div className="w-full h-full flex flex-col justify-between items-start border-r-[1px] border-black">
          <div className="w-full h-full border-b-[1px] border-black">
            <main className="flex flex-col gap-2 md:px-10 px-5 pt-0 justify-center min-h-[350px] max-w-[800px] ml-auto">
              <h1 className="md:text-[5vw] text-[3.2rem] leading-[100%] md font-medium">
                BAKE&quot;n&quot;CAKE
              </h1>
              <h4 className="md:text-2xl text-xl md:w-2/3 w-full font-medium py-4">
                BRANDING + WEBSITE + PACKAGING + STATIONARY
              </h4>
            </main>
          </div>
            <span className="md:px-10 px-5 py-10 w-full min-h-[350px] md:min-h-[40vh] md:h-[40vh] h-full flex flex-col items-start justify-center md:gap-6 gap-2 basis-1/2  max-w-[800px] ml-auto">
              <h3 className="text-2xl font-medium">OVERVIEW</h3>
              <p className="text-lg md:w-[90%] w-full">
                We created the website, menu, logo, and brand guidelines for
                BAKE &quot;n&quot; CAKE, along with packaging designs that
                reflect their unique identity and passion for quality baked
                goods.
              </p>
            </span>
          </div>
          <Link
            href="/BrandIdentity/Branding/BakenCake"
            className="w-full h-full flex flex-row border-l-[1px] border-black"
          >
            <span className="flex flex-col h-full w-full basis-1/2">
              <Image
                width={1000}
                height={1000}
                alt="img"
                className="w-full md:h-[40vh] h-[200px] object-cover object-center border-b-[1px] border-black"
                src="/Branding/bakencake1.png"
              />
              <Image
                width={1000}
                height={1000}
                alt="img"
                className="w-full md:h-[40vh] h-[200px] object-cover object-center md:border-b-[1px] border-none border-black"
                src="/Branding/bakencake2.png"
              />
            </span>
            <span className="border-l-[1px] border-black flex h-full w-full basis-1/2">
              <Image
                width={1000}
                height={1000}
                alt="img"
                className="w-full md:h-full h-[400px] object-[25%] object-cover"
                src="/Branding/bakencake3.png"
              />
            </span>
          </Link>
        </div>

        <div className="w-full md:h-[80vh] h-full flex md:flex-row-reverse flex-col items-start border-t-[1px] border-black">
          <div className="w-full h-[80vh] flex flex-col items-start">
          <div className="w-full min-h-[350px] h-[40vh] border-b-[1px] border-black">
          <Link href="/BrandIdentity/Branding/AlNumuu" className="flex flex-col md:px-10 px-5 gap-2 h-full w-full items-start  py-10 justify-center  max-w-[800px] mx-auto">
                <h1 className="md:text-[5vw] text-[3.2rem] leading-[100%] font-medium">
                  AL NUMUU
                </h1>
                <h4 className="md:text-2xl text-xl md:w-2/3 w-full font-medium">
                  BRANDING + MARKETING + STATIONARY
                </h4>
              </Link>
            </div>
            <span className="md:px-10 px-5 w-full min-h-[350px] h-[40vh] flex flex-col items-start justify-center md:gap-6 gap-2 md:pt-0 py-10 max-w-[800px] mx-auto">
              <h3 className="text-2xl font-medium">OVERVIEW</h3>
              <p className="text-lg md:w-[95%] w-full">
                A full brand identity for AL Numuu, incorporating logo design,
                brand guidelines, marketing materials, and stationery, focused
                on clarity, professionalism and visual impact.
              </p>
            </span>
          </div>
          <Link 
          href="/BrandIdentity/Branding/AlNumuu"
          className="w-full h-full flex flex-row border-l-[1px] border-black">
            <span className="flex flex-col h-full w-full basis-1/2">
              <Image
                width={1000}
                height={1000}
                alt="img"
                className="w-full md:h-[40vh] h-[200px] object-cover object-center border-b-[1px] border-black"
                src="/Branding/al_nummu1.png"
              />
              <Image
                width={1000}
                height={1000}
                alt="img"
                className="w-full md:h-[40vh] h-[200px] object-cover object-center md:border-b-[1px] border-none border-black"
                src="/Branding/al_nummu2.png"
              />
            </span>
            <span className="border-l-[1px] border-black flex h-full w-full basis-1/2">
              <Image
                width={1000}
                height={1000}
                alt="img"
                className="w-full md:h-full h-[400px] object-center object-cover"
                src="/Branding/al_nummu3.png"
              />
            </span>
          </Link>
        </div>
    </div>
  );
};

export default Branding;
