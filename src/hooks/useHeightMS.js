import { useEffect } from "react";
import debounce from "utils/debounce";

const useHeight = (header, footer, comp, arr) => {
  if (header != null && footer != null && comp != null) {
    const headerFooter = header.offsetHeight + footer.offsetHeight;

    if (
      window.matchMedia("(min-width: 374px)").matches &&
      window.matchMedia("(max-width: 500px)").matches &&
      arr.length < 3
    ) {
      const compHeight = window.innerHeight - headerFooter - 64;
      comp.style.height = `${compHeight}px`;
    } else {
      comp.style.height = "auto";
    }

    if (window.matchMedia("(min-width: 1024px)").matches) {
      const compHeight = window.innerHeight - headerFooter - 80;
      comp.style.height = `${compHeight}px`;
    }
  }

  useEffect(() => {
    const calcCompHeight = debounce(function () {
      if (header != null && footer != null && comp != null) {
        const headerFooter = header.offsetHeight + footer.offsetHeight;

        if (
          window.matchMedia("(min-width: 374px)").matches &&
          window.matchMedia("(max-width: 500px)").matches &&
          arr.length < 3
        ) {
          const compHeight = window.innerHeight - headerFooter - 64;
          comp.style.height = `${compHeight}px`;
        } else {
          comp.style.height = "auto";
        }

        if (window.matchMedia("(min-width: 1024px)").matches) {
          const compHeight = window.innerHeight - headerFooter - 80;
          comp.style.height = `${compHeight}px`;
        }
      }
    }, 100);

    window.addEventListener("resize", calcCompHeight);
    return () => window.removeEventListener("resize", calcCompHeight);
  });
};

export default useHeight;
