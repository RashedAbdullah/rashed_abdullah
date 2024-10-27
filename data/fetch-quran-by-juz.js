export const getQuranByJuz = async (juz = 1, translation = "ar") => {
  const response = await fetch(
    `https://api.alquran.cloud/v1/juz/${juz}/${translation}`
  );
  const data = await response.json();
  return data;
};
