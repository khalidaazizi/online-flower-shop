import { IoMdHome } from "react-icons/io";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import img from "../../assets/img/user.png";
import ButtonMotion from "../../components/Button/Button";
import { IoImageOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const posts = [
  {
    id: 1,
    title: "A Place of Silence",
    author: "Elmet",
    date: "10 June 2024",
    excerpt: "Quisque velit nisi, pretium ut lacinia in, elementum id enim...",
    image: "https://via.placeholder.com/150x150/22c55e/ffffff?text=IMG",
  },
  {
    id: 2,
    title: "How to design an office like a pro",
    author: "Elmet",
    date: "10 June 2024",
    excerpt: "Donec sollicitudin molestie malesuada. Pellentesque...",
    image: "https://via.placeholder.com/150x150/22c55e/ffffff?text=IMG",
  },
  {
    id: 3,
    title: "Bed Selection Guide",
    author: "Elmet",
    date: "10 June 2024",
    excerpt: "Donec sollicitudin molestie malesuada. Pellentesque...",
    image: "https://via.placeholder.com/150x150/22c55e/ffffff?text=IMG",
  },
  {
    id: 4,
    title: "Much Space in World",
    author: "Elmet",
    date: "10 June 2024",
    excerpt: "Donec sollicitudin molestie malesuada. Pellentesque...",
    image: "https://via.placeholder.com/150x150/22c55e/ffffff?text=IMG",
  },
];

export default function Blog() {
  return (
    <>
      <Breadcrumb
        paths={[
          { label: <IoMdHome className="text-lg" />, link: "/" },
          { label: "Blog" },
        ]}
      />

      {/* Main content */}
      <div className="container mx-auto flex flex-col md:flex-row px-4 md:px-6 py-8 gap-6">
        {/* Blog List */}
        <div className="w-full md:w-2/3 space-y-6">
          {posts.map((post) => (
            <div key={post.id} className=" shadow  mb-20 overflow-hidden">
              <h3 className="font-bold  relative    bg-gray-100 py-3 px-4 text-gray-900">
                <span className="w-2 h-full bg-green-600 absolute top-0 left-0 "></span>
                {post.title}
              </h3>
              {/* Text */}
              <div className="flex flex-col sm:flex-row">

  <div className="p-6 sm:p-10 relative flex-1">
    <div className="flex gap-4 items-center mb-5">
      <img src={img} alt="" className="w-14 rounded-full" />
      <div>
        <h2>{post.author}</h2>
        <p className="text-xs sm:text-sm text-gray-500">{post.date}</p>
      </div>
    </div>
    <p className="text-gray-600 mb-3 text-sm sm:text-base">
      {post.excerpt}
    </p>
    <ButtonMotion
      text="Read More"
      className="px-3 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-500"
    />
  </div>


  <div className="w-full sm:w-1/3 h-40 m-3 sm:h-auto bg-green-600 border-t sm:border-t-0 sm:border-l-8 border-white flex justify-center items-center">
    <IoImageOutline className="text-6xl text-gray-300" />
  </div>
</div>

            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center space-x-2 mt-6">
            <button className="px-5 py-2 border  bg-green-500 text-white">
              1
            </button>
            <button className="px-5 py-2 border bg-gray-200 border-gray-200">
              2{" "}
            </button>
            <button className="px-5 py-2 border bg-gray-200 border-gray-200">
              <MdKeyboardDoubleArrowRight />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full md:w-1/3 space-y-6  px-5 bg-gray-100  ">
          <div className=" mt-14 mb-16 flex gap-1.5">
            <input
              type="text"
              placeholder="Search..."
              className="w-full focus:outline-none shadow bg-white px-3 py-2 "
            />
            <button className="bg-black text-white px-3 ">Search</button>
          </div>

          {/* Tags */}

          <h3 className="font-bold mb-10 relative bg-green-500 py-3 text-center text-gray-900">
            <span className="w-2 h-full bg-black absolute top-0 left-0 "></span>
            Tags Cloud
          </h3>
          <div>
            <div className="flex flex-wrap gap-2">
              {[
                "article",
                "computer",
                "developer",
                "seo",
                "wordpress",
                "money",
                "article",
                "computer",
                "developer",
                "seo",
                "wordpress",
                "money",
                "article",
                "computer",
                "developer",
                "seo",
                "wordpress",
                "money",
                "article",
                "computer",
                "developer",
                "seo",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-2 bg-white text-gray-500 text-sm border border-gray-300 hover:bg-green-500 hover:text-white hover:border-green-500 transation duration-300 ease-in-out"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Ads */}
          <h3 className="font-bold mb-10 relative bg-green-500 py-3 text-center text-gray-900">
            <span className="w-2 h-full bg-black absolute top-0 left-0 "></span>
            Ads
          </h3>
          <div className="  flex items-center ">
            <img alt="Ads" />
          </div>
        </aside>
      </div>
    </>
  );
}
