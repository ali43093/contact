import { motion } from "framer-motion";
import { ReactNode } from "react";
import { staggerContainer } from "../../../lib/motion";

const SectionWrapper = ({
  children,
  idName,
  className,
}: {
  children: ReactNode;
  idName: string;
  className?: string;
}) => {
  return (
    <motion.section
      className={`flex flex-col ${className}`}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
