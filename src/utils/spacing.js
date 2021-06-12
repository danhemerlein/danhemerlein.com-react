import { SPACING } from "../constants/spacing";

let spacingValues = SPACING;

spacingValues = Object.values(spacingValues).reduce(
  (acc, curr) => ((acc[curr] = curr), acc),
  spacingValues
);

spacingValues.override = (value) => `${value}rem`;

/*
Usage:
const StyledComponent = styled.div`
  margin-top: ${spacing[24]};
`;
OR
const StyledComponent = styled.div`
  margin-top: ${spacing.override(23)};
`;
*/
export const spacing = new Proxy(spacingValues, {
  get: function Get(target, name) {
    const value = target[name];
    if (typeof value === "function") {
      return value;
    }
    if (!value) {
      console.warn(`Using non-standard value (${name})`);
      return `${name}rem`;
    }

    return `${value}rem`;
  },
});
