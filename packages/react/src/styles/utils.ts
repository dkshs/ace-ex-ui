import type * as Stitches from "@stitches/react";

export const utils = {
  // Abbreviated margin properties
  m: (value: Stitches.PropertyValue<"margin">) => ({
    margin: value,
  }),
  mt: (value: Stitches.PropertyValue<"marginTop">) => ({
    marginTop: value,
  }),
  mr: (value: Stitches.PropertyValue<"marginRight">) => ({
    marginRight: value,
  }),
  mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
    marginBottom: value,
  }),
  ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
    marginLeft: value,
  }),
  mx: (value: Stitches.PropertyValue<"margin">) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Stitches.PropertyValue<"margin">) => ({
    marginTop: value,
    marginBottom: value,
  }),

  // Abbreviated padding properties
  p: (value: Stitches.PropertyValue<"padding">) => ({
    padding: value,
  }),
  pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
    paddingTop: value,
  }),
  pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
    paddingRight: value,
  }),
  pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
    paddingBottom: value,
  }),
  pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
    paddingLeft: value,
  }),
  px: (value: Stitches.PropertyValue<"padding">) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Stitches.PropertyValue<"padding">) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  // A property for applying width/height together
  size: (value: Stitches.PropertyValue<"width">) => ({
    width: value,
    height: value,
  }),

  // An abbreviated property for background
  bg: (value: Stitches.PropertyValue<"background">) => ({
    background: value,
  }),
  bc: (value: Stitches.PropertyValue<"backgroundColor">) => ({
    backgroundColor: value,
  }),
  linearGradient: (value: Stitches.PropertyValue<"backgroundImage">) => ({
    backgroundImage: `linear-gradient(${value})`,
  }),

  // An abbreviated property for border
  bt: (value: Stitches.PropertyValue<"borderTop">) => ({
    borderTop: value,
  }),
  bR: (value: Stitches.PropertyValue<"borderRight">) => ({
    borderRight: value,
  }),
  bb: (value: Stitches.PropertyValue<"borderBottom">) => ({
    borderBottom: value,
  }),
  bl: (value: Stitches.PropertyValue<"borderLeft">) => ({
    borderLeft: value,
  }),
  bx: (value: Stitches.PropertyValue<"border">) => ({
    borderRight: value,
    borderLeft: value,
  }),
  by: (value: Stitches.PropertyValue<"border">) => ({
    borderTop: value,
    borderBottom: value,
  }),

  // An abbreviated property for border-radius
  br: (value: Stitches.PropertyValue<"borderRadius">) => ({
    borderRadius: value,
  }),
  btrr: (value: Stitches.PropertyValue<"borderRadius">) => ({
    borderTopRightRadius: value,
  }),
  bbrr: (value: Stitches.PropertyValue<"borderRadius">) => ({
    borderBottomRightRadius: value,
  }),
  bblr: (value: Stitches.PropertyValue<"borderRadius">) => ({
    borderBottomLeftRadius: value,
  }),
  btlr: (value: Stitches.PropertyValue<"borderRadius">) => ({
    borderTopLeftRadius: value,
  }),

  // An abbreviated property for Top / Right / Bottom / Left
  inset: (value: string | number) => ({
    top: value,
    right: value,
    bottom: value,
    left: value,
  }),
  insetX: (value: string | number) => ({
    right: value,
    left: value,
  }),
  insetY: (value: string | number) => ({
    top: value,
    bottom: value,
  }),

  // An abbreviated property for Ring
  ring: (color: Stitches.PropertyValue<"boxShadow">) => ({
    boxShadow: `0 0 0 0.15rem ${color}`,
  }),
  ring2: (color: Stitches.PropertyValue<"boxShadow">) => ({
    boxShadow: `0 0 0 0.18rem ${color}`,
  }),
  ringC: (color: Stitches.PropertyValue<"boxShadow">) => ({
    boxShadow: `0 0 0 ${color} $colors$blue600`,
  }),

  // Property for box shadows
  shadowMd: (color: Stitches.PropertyValue<"color">) => ({
    boxShadow: `0 4px 6px -1px ${color}, 0 2px 4px -2px ${color}`,
  }),
  shadowLg: (color: Stitches.PropertyValue<"color">) => ({
    boxShadow: `0 10px 15px -3px ${color}, 0 4px 6px -4px ${color}`,
  }),
  shadowXl: (color: Stitches.PropertyValue<"color">) => ({
    boxShadow: `0 20px 25px -5px ${color}, 0 8px 10px -6px ${color}`,
  }),
  shadow2xl: (color: Stitches.PropertyValue<"color">) => ({
    boxShadow: `0 25px 50px -12px ${color}`,
  }),
};
