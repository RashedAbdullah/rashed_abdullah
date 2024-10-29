export const getQuranByJuz = async (
  juz = 1,
  translation = "bn.bengali",
  translation2 = "ar"
) => {
  const response = await fetch(
    `https://api.alquran.cloud/v1/juz/${juz}/${translation2}`
  );

  const response2 = await fetch(
    `https://api.alquran.cloud/v1/juz/${juz}/${translation}`
  );
  const data = await response.json();
  const data2 = await response2.json();
  return {
    juz: data.data.ayahs,
    translation: data2.data.ayahs,
  };
};
