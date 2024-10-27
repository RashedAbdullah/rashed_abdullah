export const getEngToAr = (num) => {
  let surahNumbers = parseInt(num, 10);
  // English to Arabic:
  const numbers = `٠١٢٣٤٥٦٧٨٩`;
  const convert = (surahNumbers) => {
    let res = "";
    const str = surahNumbers.toString();
    for (let c of str) {
      res += numbers.charAt(c);
    }
    return res;
  };
  const converted = convert(surahNumbers);
  return converted;
};
