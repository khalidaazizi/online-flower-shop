import { IoMail, IoCall, IoLocationSharp } from "react-icons/io5";

import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { IoMdHome } from "react-icons/io";

const contactInfo = [
  {
    id: 1,
    icon: <IoMail className="w-8 h-8 text-green-600" />,
    title: "Email",
    value: "info@xtrafurniture.com",
  },
  {
    id: 2,
    icon: <IoCall className="w-8 h-8 text-green-600" />,
    title: "Phone",
    value: "+1 (800) 333 44 55",
  },
  {
    id: 3,
    icon: <IoLocationSharp className="w-8 h-8 text-green-600" />,
    title: "Address",
    value: "121 King Street, New York - USA",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    alert("Your message has been sent!");
  };

  return (
    <>
      <Breadcrumb
        paths={[{ label: <IoMdHome className="text-lg" />, link: "/" }, { label: "Contact" }]}
      />

      <div className="w-full">
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12 text-center">
          {contactInfo.map((item) => (
            <div key={item.id} className="flex flex-col items-center space-y-2">
              {item.icon}
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="w-full h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.776138803138!2d-74.00601518459462!3d40.71277597933064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3168b1c0c1%3A0x70d4f8e9dbbf6c9a!2sNew%20York!5e0!3m2!1sen!2sus!4v1632564761519!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="px-6 py-12 flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg  p-6 w-full max-w-2xl space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                className="border border-gray-300 p-3 w-full outline-0 focus:border-green-600"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                className="border p-3 border-gray-300 w-full outline-0 focus:border-green-600"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="border p-3 border-gray-300 w-full outline-0 focus:border-green-600"
                value={form.phone}
                onChange={handleChange}
              />
              <select
                name="department"
                className="border p-3 border-gray-300 w-full outline-0 focus:border-green-600"
                value={form.department}
                onChange={handleChange}
              >
                <option value="">Business Department</option>
                <option value="sales">Sales</option>
                <option value="support">Support</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>

            <textarea
              name="message"
              rows={4}
              placeholder="Your Question"
              className="border p-3 border-gray-300 w-full outline-0 focus:border-green-600"
              value={form.message}
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 border-gray-300  hover:bg-green-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
