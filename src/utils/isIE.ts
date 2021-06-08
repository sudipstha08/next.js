// CHECK IF THE BROWSER IS INTERNET EXPLORER

// Please note this approach is unreliable since users can modify
// the browser user agent string.
// const browser = navigator.userAgent;
// const isIE = /MSIE|Trident/.test(browser);
// Instead, you should use document.documentMode property which is IE specific
const isIE = () => {
  if (window) {
    return !!window?.document?.documentMode;
  }
  return null;
};

export { isIE };

// const [isIE, setIsIE] = useState(false);
// console.log("path", path.resolve(__dirname, "/.env.example"));
