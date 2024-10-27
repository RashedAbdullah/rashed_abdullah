export const getSingleSurah = async (
  surahNo = 1,
  translation = "bn.bengali"
) => {
  // const response = await fetch(
  //   "https://api.alquran.cloud/v1/edition?format=text&type=translation"
  // );
  // const result = await response.json();

  const surahResponse = await fetch(
    `https://api.alquran.cloud/v1/surah/${surahNo}`
  );
  const surahResult = await surahResponse.json();

  const translationResponse = await fetch(
    `https://api.alquran.cloud/v1/surah/${surahNo}/${translation}`
  );
  const translationResult = await translationResponse.json();

  return {
    surah: surahResult.data,
    transition: translationResult.data,
  };
};
