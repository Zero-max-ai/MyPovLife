import { atom, selector, DefaultValue } from "recoil";

export const detectSystemTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-schema: dark)").matches
  )
    return "dark";
  return "light";
};

export const themeStyle = atom({
  key: "themeStyle",
  default: detectSystemTheme(),
});

export const themeStyleSelector = selector({
  key: "themeStyleSelector",
  get: ({ get }) => {
    const currentTheme = get(themeStyle);
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      return storedTheme;
    } else {
      localStorage.setItem("theme", currentTheme);
      return currentTheme;
    }
  },
  set: ({ set }, newThemeStyle) => {
    if (!(newThemeStyle instanceof DefaultValue)) {
      localStorage.setItem("theme", newThemeStyle);
    }
    set(themeStyle, newThemeStyle);
  },
});
