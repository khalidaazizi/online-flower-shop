import { IoMdHome } from "react-icons/io";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

function NotFoundPage() {
  return (
    <>
      <Breadcrumb
        paths={[
          { label: <IoMdHome className="text-lg" />, link: "/" },
          { label: "404" },
        ]}
      />
      <div className="flex flex-col items-center justify-center h-screen bg-white text-center">
        {/* Main content */}
        <div className="flex flex-col items-center justify-center flex-1 -mt-16 px-4">
          {/* Gradient Text 404 */}
          <h1
            className="text-[10rem] font-bold text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(#33c160 0%, white 75%)",
            }}
          >
            404
          </h1>

          <p className="mt-4 text-2xl font-semibold text-gray-700">
            How did you get here?!
          </p>
          <p className="mt-2 text-gray-500">It’s cool. We’ll help you out.</p>

          <a
            href="/"
            className="mt-6 px-6 py-2 bg-green-900 text-white rounded-md shadow hover:bg-green-800 transition"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
