// eslint-disable-next-line no-unused-vars
import type * as Stitches from "@stitches/react";

import type { ComponentProps } from "react";

import { transparentize } from "polished";
import { colors } from "@ace-ex/tokens";
import { darkTheme, styled } from "../../styles";

import {
  CaretRight,
  CaretDown,
  CaretUp,
  ArrowRight as ArrowRightIcon,
  Check,
  X,
  FilePlus,
  EnvelopeSimple,
  UserCircle,
  List,
  Spinner as ImSpinner10,
  Circle as CircleIcon,
  Sun as SunIcon,
  Moon as MoonIcon,
} from "phosphor-react";

const UserIcon = styled(UserCircle, {
  color: `${transparentize(0.2, colors.gray900)}`,
  bc: "$loContrast",
  br: "$full",

  [`.${darkTheme} &`]: {
    color: `${transparentize(0.2, colors.gray100)}`,
  },
});
UserIcon.displayName = "Icons.User";

const Email = styled(EnvelopeSimple, {
  color: "$primary",
});

const Spinner = styled(ImSpinner10, { color: "$primary" });
const Menu = styled(List, { color: "$primary" });
const FileAdd = styled(FilePlus, { color: "$primary" });
const Close = styled(X, { color: "$primary" });
const CheckIcon = styled(Check, { color: "$primary" });
const Circle = styled(CircleIcon, { color: "$primary" });
const Sun = styled(SunIcon, { color: "$primary" });
const Moon = styled(MoonIcon, { color: "$primary" });

// Arrows
const ArrowRight = styled(ArrowRightIcon, { color: "$primary" });
const ChevronUp = styled(CaretUp, { color: "$primary" });
const ChevronDown = styled(CaretDown, {});
const ChevronRight = styled(CaretRight, {});
ChevronRight.displayName = "Icons.ChevronRight";
ArrowRight.displayName = "Icons.ArrowRight";

Spinner.displayName = "Icons.Spinner0";

FileAdd.displayName = "Icons.FillFileAdd";
Menu.displayName = "Icons.Menu";
Close.displayName = "Icons.Close";
CheckIcon.displayName = "Icons.Check";
Circle.displayName = "Icons.Filled";

Email.displayName = "Icons.Email";

export const Icons = {
  User: UserIcon,
  Check: CheckIcon,
  ChevronUp,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Circle,
  Close,
  Menu,
  FileAdd,
  Spinner,
  Email,
  Sun,
  Moon,
};

export interface IconProps extends ComponentProps<typeof UserIcon> {
  iconName: keyof typeof Icons;
}

export const Icon = ({ iconName, ...props }: IconProps) => {
  const Comp = Icons[iconName];

  return <Comp {...props} />;
};
