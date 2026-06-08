import { motion } from 'framer-motion';

export const WordsPullUp = ({ text, className, asterisk = false }: { text: string, className?: string, asterisk?: boolean }) => {
  const words = text.split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="inline-block mr-[0.25em]">
          {word}
          {asterisk && index === words.length - 1 && <span className="text-primary">*</span>}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export const WordsPullUpMultiStyle = ({ segments, className }: { segments: { text: string, style: string }[], className?: string }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {segments.map((segment, sIdx) => (
        <span key={sIdx} className={segment.style}>
          {segment.text.split(" ").map((word, wIdx) => (
            <motion.span variants={child} key={wIdx} className="inline-block mr-[0.25em]">
              {word}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};
