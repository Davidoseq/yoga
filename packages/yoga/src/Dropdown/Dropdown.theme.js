const Dropdown = ({
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  spacing,
  borders,
}) => ({
  width: 320,
  selector: {
    background: colors.white,
    padding: {
      top: spacing.medium,
      right: spacing.medium,
      bottom: spacing.medium,
      left: spacing.medium,
    },
    border: {
      width: borders.small,
      radius: radii.rounded,
      color: colors.gray[4],
    },
  },
  arrow: {
    fill: colors.gray[7],
  },
  input: {
    font: {
      color: colors.gray[7],
      size: fontSizes.small,
      lineHeight: lineHeights.small,
    },
  },
  button: {
    padding: {
      right: spacing.medium,
    },
  },
  optionsList: {
    backgroundColor: colors.white,
    border: {
      radius: {
        topLeft: radii.sharp,
        topRight: radii.sharp,
        bottomRight: radii.rounded,
        bottomLeft: radii.rounded,
      },
      width: borders.small,
      color: colors.dark,
    },
  },
  option: {
    height: spacing.xxlarge,
    backgroundColor: colors.white,
    padding: {
      top: spacing.zero,
      right: spacing.medium,
      bottom: spacing.zero,
      left: spacing.medium,
    },
    border: {
      width: borders.small,
      color: colors.gray[1],
      radius: {
        topLeft: radii.sharp,
        topRight: radii.sharp,
        bottomRight: radii.rounded,
        bottomLeft: radii.rounded,
      },
    },
    font: {
      color: colors.gray.dark,
      size: fontSizes.small,
      lineHeight: lineHeights.small,
      weight: fontWeights.regular,
    },
  },
  backdrop: {
    content: {
      height: 320,
      backgroundColor: colors.white,
      border: {
        radius: {
          topLeft: radii.rounded,
          topRight: radii.rounded,
        },
      },
      title: {
        padding: {
          top: spacing.large,
          right: spacing.zero,
          bottom: spacing.large,
          left: spacing.zero,
        },
      },
      option: {
        padding: {
          top: spacing.large,
          right: spacing.large,
          bottom: spacing.large,
          left: spacing.large,
        },
      },
      actions: {
        padding: {
          top: spacing.zero,
          right: spacing.large,
          bottom: spacing.large,
          left: spacing.large,
        },
      },
    },
  },
  hover: {
    selector: {
      border: {
        color: colors.dark,
      },
    },
    option: {
      backgroundColor: colors.gray[1],
    },
  },
  disabled: {
    selector: {
      border: {
        color: colors.gray[3],
      },
    },
    input: {
      font: {
        color: colors.gray[3],
      },
    },
    arrow: {
      fill: colors.gray[3],
    },
  },
  selected: {
    selector: {
      border: {
        color: colors.dark,
      },
    },
    arrow: {
      fill: colors.primary[3],
    },
    input: {
      font: {
        color: colors.dark,
      },
    },
    optionsList: {
      border: {
        color: colors.dark,
      },
    },
    option: {
      font: {
        color: colors.dark,
        weight: fontWeights.bold,
      },
    },
  },
});

export default Dropdown;
