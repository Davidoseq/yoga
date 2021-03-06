import { css } from 'styled-components';

const textStyle = type => () => css`
  ${({
    variant,
    inverted,
    theme: {
      yoga: {
        baseFont,
        colors: { [variant]: color = {}, dark, white },
        components: {
          text: { [type]: heading },
        },
      },
    },
  }) => `
    margin: 0;
    padding: 0;
  
    font-size: ${heading.fontsize}px;
    line-height: ${heading.lineHeight}px;
    font-weight: ${heading.fontWeight};

    font-family: ${baseFont.family};
    color: ${variant ? color[3] : dark};
    ${inverted ? `color: ${white};` : ''}
  `}
`;

export default textStyle;
