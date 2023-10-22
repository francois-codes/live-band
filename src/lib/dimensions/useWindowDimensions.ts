import { useState, useEffect } from "react";

export const useWindowDimensions = () => {
  // Initial values are set to undefined so that they can be populated with actual values on first render
  const [windowDimensions, setWindowDimensions] = useState<ScaledSize>({
    width: 0,
    height: 0,
    scale: 1 // This assumes an initial scale of 1, you can adjust as needed
  });

  useEffect(() => {
    function handleResize() {
      // Update the window width and height
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        scale: window.devicePixelRatio || 1 // devicePixelRatio represents the scaling factor
      });
    }

    // Set initial dimensions
    handleResize();

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array means this useEffect will only run once, similar to componentDidMount

  return windowDimensions;
};
