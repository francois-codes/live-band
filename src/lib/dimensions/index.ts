export const Dimensions = {
  get: (key: "window"): ScaledSize => {
    if (key === "window") {
      return {
        width:
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth,
        height:
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight,
        scale: window.devicePixelRatio || 1
      };
    }
    return {
      width:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
      height:
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight,
      scale: window.devicePixelRatio || 1
    };
  }
};
