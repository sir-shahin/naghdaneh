export const ROUTES = {
  INDEX: `/`,
  FILTER: (cat: string) => `/${cat}/filter`,
  LIST: (cat: string) => `/${cat}`,
  SHOW: (cat: string, id: number) => `/${cat}/show/${id}`,
  LOGIN: `/panel/login`,
};
