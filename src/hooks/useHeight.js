const useHeight = (header, footer) => {
  if (header != null && footer != null) {
    let headerFooter = header.offsetHeight + footer.offsetHeight;
    let compHeight = window.innerHeight - headerFooter - 64;
    return compHeight;
  }
};

export default useHeight;
