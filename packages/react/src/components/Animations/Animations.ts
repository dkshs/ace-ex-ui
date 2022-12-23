import { keyframes } from "../../styles";

const spin = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

const ping = keyframes({
  "75%, 100%": {
    transform: "scale(2)",
    opacity: 0,
  },
});

const pulse = keyframes({
  "0%, 100%": {
    opacity: 1,
  },
  "50%": {
    opacity: 0.5,
  },
});

const bounce = keyframes({
  "0%, 100%": {
    transform: "translateY(-25%)",
    animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
  },
  "50%": {
    transform: "translateY(0)",
    animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
  },
});

const slideIn = keyframes({
  from: {
    transform: "translateY(-100%)",
  },
  to: {
    transform: "translateY(0)",
  },
});

const slideOut = keyframes({
  from: {
    transform: "translateY(0)",
  },
  to: {
    transform: "translateY(-100%)",
  },
});

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(3px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-3px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-3px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(3px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const fadeOut = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});

export const Animations = {
  pulse,
  slideIn,
  slideOut,
  slideUpAndFade,
  slideRightAndFade,
  slideDownAndFade,
  slideLeftAndFade,
  fadeIn,
  fadeOut,
  spin,
  ping,
  bounce,
};
