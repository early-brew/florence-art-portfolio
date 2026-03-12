export const isPrerender = () => {
  if (typeof navigator === "undefined") return false;
  return navigator.userAgent.includes("Prerender");
};
