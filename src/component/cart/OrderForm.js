import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function OrderForm({ handleOrder }) {
  const username = useSelector((state) => state.user.username);
  console.log(username);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    // Add more fields as needed
  });

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: "-50%" },
    visible: { opacity: 1, y: "0%" },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    handleOrder();
  };

  const inputStyle =
    "border p-2 w-full rounded-xl text-black dark:text-slate-800 outline-double outline-gray-400 ring-4 ring-gray-400 shadow-inner shadow-gray-500";

  return (
    <div>
      <motion.div
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl"
      >
        <motion.div
          className="bg-white dark:bg-slate-600 p-8 rounded-2xl"
          variants={modalVariants}
        >
          <FontAwesomeIcon
            icon={faXmark}
            className="dark:text-slate-300 text-black text-xl fixed right-4 top-3 cursor-pointer"
            onClick={handleOrder}
          />
          <h2 className="text-2xl font-bold mb-4 text-black dark:text-slate-200">
            Order Form
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-1 text-black dark:text-slate-200"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputStyle}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-1 text-black dark:text-slate-200"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputStyle}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-semibold mb-1 text-black dark:text-slate-200"
              >
                Address:
              </label>
              <input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={inputStyle}
                required
              />
            </div>

            {/* Add more form fields as needed */}
            <div className="w-full flex justify-center items-center">
              <button
                type="submit"
                className="bg-blue-500 ring-4 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-md transition duration-300"
              >
                Submit Order
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default OrderForm;
