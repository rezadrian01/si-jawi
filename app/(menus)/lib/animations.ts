const LEFT_CLOUD_ANIMATION = {
  hidden: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      bounce: 0,
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: {
      bounce: 0,
    },
  },
};

const RIGHT_CLOUD_ANIMATION = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      bounce: 0,
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      bounce: 0,
    },
  },
};

const DEFAULT_FADE_IN_OUT_ANIMATION = (
  delay?: number,
  duration?: number,
  typeAnimation?: string
) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: duration || 0.5,
        delay: delay || 0.2,
        ease: [0, 0.71, 0.2, 1.01],
        type: typeAnimation || "spring",
        stiffness: 100,
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.1,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
        type: typeAnimation || "spring",
        stiffness: 100,
      },
    },
  };
};

export {
  LEFT_CLOUD_ANIMATION,
  RIGHT_CLOUD_ANIMATION,
  DEFAULT_FADE_IN_OUT_ANIMATION,
};
