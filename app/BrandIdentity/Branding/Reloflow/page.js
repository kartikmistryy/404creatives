import Image from "next/image";
import Link from "next/link";

const Reloflow = () => {
  return (
    <div className="mt-24 md:mt-[10vh]">
      <div className="w-full h-full max-w-[1600px] mx-auto md:px-10 px-5">
        <div className="flex flex-row items-center w-full justify-start gap-4 my-4 py-2">
          <span className="w-fit">
            <Image
              src="/Branding/reloflow/logo.jpg"
              width={500}
              height={500}
              alt="nirmala_logo"
              className="w-fit md:h-12 h-10 min-w-[60px] min-h-[60px]"
            />
          </span>
          <span>
            <h1 className="md:text-base text-sm font-medium">
              Reloflow
            </h1>
            <Link
              className="md:text-base text-sm font-normal"
              href="https://www.instagram.com/404creative.co.in"
            >
              @404creative.co.in
            </Link>
          </span>
        </div>

        <main>
          <Image
            quality={100}
            unoptimized
            layout="intrinsic"
            priority
            src="/Branding/reloflow/1.png"
            width={4000}
            height={4000}
            alt="bakencake"
            className="w-full h-auto"
          />
          <Image
            quality={100}
            unoptimized
            layout="intrinsic"
            priority
            src="/Branding/reloflow/2.png"
            width={4000}
            height={4000}
            alt="bakencake"
            className="w-full h-auto"
          />
          <video
            src="/Branding/reloflow/3.mp4"
            playsInline
            autoPlay
            loop
            muted
            controls={false}
            className="w-full h-auto"
          ></video>
          <Image
            quality={100}
            unoptimized
            layout="intrinsic"
            priority
            src="/Branding/reloflow/4.png"
            width={4000}
            height={4000}
            alt="bakencake"
            className="w-full h-auto"
          />
        </main>
      </div>
    </div>
  );
};

export default Reloflow;
