const isMobile = () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    )
  ) {
    // FOR MOBILE DEVICES
    return true;
  }
  return false;
};

export { isMobile };
