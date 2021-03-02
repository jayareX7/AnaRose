import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "../navigation/menuitem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const CollasibleMenu = () => (
  <div className="collasibleul">
  <motion.ul variants={variants}>
    {itemIds.map(i => (
      <MenuItem i={i} key={i} />
    ))} 
  </motion.ul>
  </div>
);

const itemIds = [0, 1, 2, 3, 4];
