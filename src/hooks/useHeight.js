import { useEffect, useState } from "react";
import throttle from "utils/throttle";

const getHeight = (head, foot) => {
  let compHeight;
  if (head != null && foot != null) {
    const headerFooter = head.offsetHeight + foot.offsetHeight;
    compHeight = window.innerHeight - headerFooter - 64;
  }
  return compHeight;
};

const getHeaderHeight = (head) => {
  if (head != null) {
    return head.offsetHeight;
  }
};

const getFooterHeight = (foot) => {
  if (foot != null) {
    return foot.offsetHeight;
  }
};

const heightTrottle = (height1, height2) => {
  const num = window.innerHeight - (height1 + height2) - 64;
  return num;
};

const useHeight = (header, footer) => {
  const [height, setHeight] = useState(() => getHeight(header, footer));
  const [headerHeight, setHeaderHeight] = useState(() =>
    getHeaderHeight(header)
  );
  const [footerHeight, setFooterHeight] = useState(() =>
    getFooterHeight(footer)
  );

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
