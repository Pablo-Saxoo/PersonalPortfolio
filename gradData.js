import FinisherHeader from "./finisher-header.es5.min.js";

new FinisherHeader({
  count: 4,
  size: {
    min: 1391,
    max: 1500,
    pulse: 1.7,
  },
  speed: {
    x: {
      min: 0.6,
      max: 3,
    },
    y: {
      min: 1.7,
      max: 3,
    },
  },
  colors: {
    background: "#000000",
    particles: ["#fee2b4", "#f8b953", "#ad7417"],
  },
  blending: "none",
  opacity: {
    center: 0.15,
    edge: 0,
  },
  skew: 0,
  shapes: ["c"],
});
