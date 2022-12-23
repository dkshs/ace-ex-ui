export const resetStyles = {
  "*, *::before, *::after": {
    m: 0,
    p: 0,
    border: 0,
    boxSizing: "border-box",
    transitionProperty:
      "border, background-color, color, opacity, outline, box-shadow",
    transitionDuration: "200ms",
  },
  "ul[role='list'], ol[role='list']": { listStyle: "none" },
  "html:focus-within": { scrollBehavior: "smooth" },
  "html, body": { scrollBehavior: "smooth" },
};
