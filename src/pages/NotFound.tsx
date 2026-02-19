import { PrimaryButton, SecondaryButton } from "../components/Button";

const NotFound = () => {
  return (
    <div className="min-h-screen  text-white flex items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-125 h-125 bg-blue-500/20 blur-[120px] rounded-full -top-25 -left-25" />
      <div className="absolute w-100 h-100 bg-purple-500/20 blur-[120px] rounded-full -bottom-25 -right-25" />

      <div className="text-center z-10 px-6">
        {/* 404 Animated Text */}
        <h1 className="text-8xl md:text-9xl font-extrabold bg-linear-to-r from-gray-500 to-black text-transparent bg-clip-text animate-pulse">
          404
        </h1>

        <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-black">
          Page Not Found
        </h2>

        <p className="mt-4 max-w-md mx-auto text-black">
          The page you're looking for doesn’t exist or has been moved. Let’s get
          you back on track.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a href="/">
            <PrimaryButton title="Go Home" classname="rounded-[25px]" />
          </a>

          {/* <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl border border-gray-600 hover:border-white transition-all duration-300"
          >
            Go Back
          </button> */}
          <div onClick={() => window.history.back()}>
            <SecondaryButton title="Go Back" classname="rounded-[25px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
