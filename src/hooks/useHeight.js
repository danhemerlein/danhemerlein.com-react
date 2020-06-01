import { useState, useEffect } from "react";
import throttle from "utils/throttle";

const getHeight = (head, foot) => {
  let compHeight;
  if (head != null && foot != null) {
    let headerFooter = head.offsetHeight + foot.offsetHeight;
    compHeight = window.innerHeight - headerFooter - 64;
  }
  return compHeight;
};

const getHeaderHeight = (head) => {
  if (head != null) {
    return head.offsetHeight;
  }
}

const getFooterHeight = (foot) => {
  if (foot != null) {
    return foot.offsetHeight;
  }
};

const heightTrottle = (height1, height2) => {
  let num = ( window.innerHeight - (height1 + height2) - 64);
  return num;
}

const useHeight = (header, footer) => {

  let [height, setHeight] = useState(() => getHeight(header, footer));
  let [headerHeight, setHeaderHeight] = useState(() => getHeaderHeight(header));
  let [footerHeight, setFooterHeight] = useState(() => getFooterHeight(footer));

  useEffect(() => {
    const calcHeight = throttle(function () {
      setHeight(heightTrottle(headerHeight, footerHeight));
    }, 100);

    window.addEventListener("resize", calcHeight);
    return () => window.removeEventListener("resize", calcHeight);
  }, []);


  return height;
};

export default useHeight;


// const useHeight = (header, footer) => {
//   if (header != null && footer != null) {
//     let headerFooter = header.offsetHeight + footer.offsetHeight;
//     let compHeight = window.innerHeight - headerFooter - 64;
//     return compHeight;
//   }

// };

// export default useHeight;
