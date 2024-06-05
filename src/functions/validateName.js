
const validateName = (nameStr) => {
  const notValidName = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]|[0-9]|\s/g.test(nameStr);
  if (nameStr.length < 3 || notValidName) return false;
  return true;
};

export default validateName;