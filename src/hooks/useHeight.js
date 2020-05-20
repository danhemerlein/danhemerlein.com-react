import { useEffect } from "react";
import debounce from "utils/debounce";

const useHeight = (header, footer, comp, arr) => {

  useEffect(() => {

    const calcCompHeight = debounce(function () {
      if (header != null && footer != null && comp != null) {
        let headerFooter = header.offsetHeight + footer.offsetHeight;

        if (
          window.matchMedia("(min-width: 374px)").matches &&
          window.matchMedia("(max-width: 500px)").matches &&
          arr.length < 3
        ) {
          let compHeight = window.innerHeight - headerFooter - 64;
          comp.style.height = compHeight + "px";
        } else {
          comp.style.height = "auto";
        }

        if (window.matchMedia("(min-width: 1024px)").matches) {
          let compHeight = window.innerHeight - headerFooter - 80;
          comp.style.height = compHeight + "px";
        }
      }

    }, 100);

    window.addEventListener("resize", calcCompHeight);
    return () => window.removeEventListener("resize", calcCompHeight);

  });

};

export default useHeight;
