import React from "react";
import { motion } from "framer-motion";

const ClearCartConfirmation = ({ onConfirm, onCancel }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: "-50%" },
    visible: { opacity: 1, y: "0%" },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bottom-3 bg-black  bg-opacity-50 flex items-center justify-center rounded-xl"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="bg-white dark:bg-slate-600 p-8 rounded-2xl"
        variants={modalVariants}
      >
        <p className="text-xl font-bold mb-4 text-gray-800 dark:text-slate-200">
          Are you sure you want to clear the cart?
        </p>
        <div className="flex justify-between">
          <motion.button
            onClick={onConfirm}
            className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Yes
          </motion.button>
          <motion.button
            onClick={onCancel}
            className="bg-gray-400 hover:bg-gray-500 text-black dark:text-white px-4 py-2 rounded-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            No
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ClearCartConfirmation;
