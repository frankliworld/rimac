export const Breakpoints = {
  mobile: "767px",
  tablet: "1024px",
  desktop: "1025px",
  desktopL: "1280px",
  desktopXL: "1440px",
};

export const Media = {
  mobile: "only screen and (max-width: 767px)",
  tablet: "only screen and (min-width: 768px) and (max-width: 1024px)",
  desktop: "only screen and (min-width: 1025px)",
  desktopL: "only screen and (min-width: 1280px)",
  desktopXL: "only screen and (min-width: 1440px)",
};

export const isMedia = {
  mobile: window.matchMedia("(max-width: 767px)").matches,
};