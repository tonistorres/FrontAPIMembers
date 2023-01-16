
export const handleKeyUpCEP = ((evt) => {

  evt.currentTarget.maxLenght = 9;
  let value = evt.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  evt.currentTarget.value = value;
  return evt;
}, []);
