import figma from "@figma/code-connect";
import { Button, ButtonDanger, ButtonGroup } from "primitives";

const sharedProps = {
  label: figma.string("Label"),
  iconStart: figma.boolean("Has Icon Start", {
    true: figma.instance("Icon Start"),
    false: undefined,
  }),
  iconEnd: figma.boolean("Has Icon End", {
    true: figma.instance("Icon End"),
    false: undefined,
  }),
  size: figma.enum("Size", {
    Small: "small",
  }),
  isDisabled: figma.enum("State", {
    Disabled: true,
  }),
};

figma.connect(
  Button,
  "https://www.figma.com/design/Ki6ZyS01gy2W46wkWXZ5do/Simple-Design-System--Community-?node-id=4185-3778",
  {
  props: {
    ...sharedProps,
    variant: figma.enum("Variant", {
      Primary: "primary",
      Neutral: "neutral",
      Subtle: "subtle",
    }),
  },
  example: ({ label, iconEnd, iconStart, ...props }) => (
    <Button onPress={() => {}} {...props}>
      {iconStart}
      {label}
      {iconEnd}
    </Button>
  ),
},
);
figma.connect(
  Button,
  "https://www.figma.com/design/Ki6ZyS01gy2W46wkWXZ5do/Simple-Design-System--Community-?node-id=4185-3778",
  {
  props: {
    ...sharedProps,
    variant: figma.enum("Variant", {
      Subtle: "danger-subtle",
    }),
  },
  example: ({ label, iconEnd, iconStart, ...props }) => (
    <ButtonDanger onPress={() => {}} {...props}>
      {iconStart}
      {label}
      {iconEnd}
    </ButtonDanger>
  ),
},
);

figma.connect(ButtonGroup, "<FIGMA_BUTTONS_BUTTON_GROUP>", {
  props: {
    align: figma.enum("Align", {
      Center: "center",
      End: "end",
      Justify: "justify",
      Stack: "stack",
    }),
    children: figma.children(["Button"]),
  },
  example: ({ children, ...props }) => (
    <ButtonGroup {...props}>{children}</ButtonGroup>
  ),
});
