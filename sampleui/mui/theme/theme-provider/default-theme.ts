import { blue, red } from "@mui/material/colors";

export const defaultTheme = {
  palette: {
    primary: {
      main: `${blue[500]}`,
    },
    secondary: {
      main: '#edf2ff',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application!
      },
      styleOverrides: {
        root: {
          fontWeight: 600,
        }
      },
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            textTransform: 'none',
            border: `1px dashed ${blue[500]}`,
            color: `${blue[500]}`
          },
        },
        {
          props: { variant: 'outlined', color: 'secondary' },
          style: {
            border: `4px dashed ${red[500]}`,
          },
        },
      ]
    },
  },

};
