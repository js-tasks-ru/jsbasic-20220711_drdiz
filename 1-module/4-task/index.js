function checkSpam(str) {
  if (str.toUpperCase().includes('XXX') || str.toUpperCase().includes('1XBET')) {
    return true;
  }
  return false;
}
