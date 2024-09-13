import "server-only";

const languages = {
  ar: () => import("./ar.json").then((module) => module.default),
  bn: () => import("./bn.json").then((module) => module.default),
};

export const getManageLangs = async (locale) => languages[locale]();
