export const getEngToAr = (num) => {
  let surahNumbers = parseInt(num, 10);

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

export const getEngToBn = (num) => {
  let surahNumbers = parseInt(num, 10);

  const numbers = `০১২৩৪৫৬৭৮৯`;
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
