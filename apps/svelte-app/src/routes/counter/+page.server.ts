import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return { counter: 42 };
};
