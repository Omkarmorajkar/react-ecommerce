import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getTotalCartQuantity } from "./cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import ClearCartConfirmation from "./ClearCartConfirmation";
import { motion, AnimatePresence } from "framer-motion";
import OrderForm from "./OrderForm";

const Footer = ({ total }) => {
  const dispatch = useDispatch();
  const itemQuantity = useSelector(getTotalCartQuantity);

  const [isIconClicked, setIconClicked] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleIconClick = () => {
    setIconClicked(!isIconClicked);
  };

  const handleOrder = () => {
    setShowOrderForm(!showOrderForm);
  };

  const handleClearCart = () => {
    setShowConfirmation(true);
  };

  const handleConfirmClearCart = () => {
    dispatch(clearCart());
    setShowConfirmation(false);
  };

  const handleCancelClearCart = () => {
    setShowConfirmation(false);
  };

  const renderToggleIcon = () => (
    <FontAwesomeIcon
      className="dark:text-slate-200 text-black font-bold text-2xl cursor-pointer"
      icon={isIconClicked ? faAngleDown : faAngleUp}
      onClick={toggleIconClick}
    />
  );

  const cartInfoVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  const renderCartInfo = () => (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cartInfoVariants}
      className="transition duration-500 container mx-auto flex flex-col items-center md:flex-row lg:flex-row gap-4 mt-16 lg:mt-0 md:mt-0"
    >
      <p className="text-lg font-bold w-full text-black dark:text-slate-200">
        Total items in Cart : {itemQuantity}
      </p>
      <div className="flex items-center justify-start flex-col md:flex-row lg:flex-row gap-4  w-full lg:w-96 md:w-96">
        <p className="w-full lg:w-full text-lg flex lg:flex-row font-bold  text-black dark:text-slate-200">
          Price : ${total.toFixed(2)}
        </p>
        {/* Add checkout or other actions here */}
        <button
          onClick={handleClearCart}
          className="bg-red-500 w-full lg:w-52  hover:bg-red-700 text-white px-4 py-2 rounded-xl"
        >
          Clear Cart
        </button>
        <button
          onClick={handleOrder}
          className="bg-gray-400 font-bold w-full lg:w-48 hover:bg-gray-500 text-white px-4 py-2 rounded-xl"
        >
          Order
        </button>
      </div>
    </motion.div>
  );

  return (
    <footer className="fixed bottom-3 left-0 right-0 p-4 rounded-xl bg-white dark:bg-slate-700 text-white">
      <div className="w-full text-center lg:hidden md:hidden">
        {renderToggleIcon()}
      </div>

      <AnimatePresence>
        {(isIconClicked || !isMobile) && renderCartInfo()}
      </AnimatePresence>

      <AnimatePresence>
        {showConfirmation && (
          <ClearCartConfirmation
            onConfirm={handleConfirmClearCart}
            onCancel={handleCancelClearCart}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showOrderForm && <OrderForm handleOrder={handleOrder} />}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
