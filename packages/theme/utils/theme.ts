import { Theme } from "@barcode/types/enum/Theme";
import { darkStyles } from "@barcode/theme/styles/darkStyles";
import { lightStyles } from "@barcode/theme/styles/lightStyles";
import { useAppSelector } from "@barcode/state/hooks";
import { selectTheme } from "@barcode/state/reducer/ThemeReducer";

export const getTheme = () => {
  const theme = useAppSelector(selectTheme);

  if (theme === Theme.DARK_MODE) {
    return darkStyles;
  }

  // default to LIGHT_MODE
  return lightStyles;
};
