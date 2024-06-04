
const validateName = (nameStr) => {
  if (nameStr.length < 3 || /\^\s|s+/.test(nameStr)) return false;
  return true;
};

export default validateName;