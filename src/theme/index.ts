import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    largeSquare: true;
    smallRound: true;
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    containedSecondary: true;
  }
}
declare module '@mui/material/ButtonGroup' {
  interface ButtonGroupPropsSizeOverrides {
    smallRound: true;
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    containedReversed: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#009F6B', 
    },
    secondary: {
      main: 'rgba(0, 159, 107, 0.10)',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#FDFEFE", // Light background color
    },
  },
  typography: {
    fontFamily: 'Manrope, sans-serif',

    h1: {
      fontFamily: 'Nunito, sans-serif',
      fontSize: "60px",
      lineHeight: "68px",
      fontWeight: 700,
      "@media (max-width: 600px)": {
        fontSize: "34px",
        lineHeight: "44px",
      },
    },
    h2: {
      fontFamily: 'Nunito, sans-serif',
      fontSize: "32px",
      lineHeight: "40px",
      fontWeight: 700,
      "@media (max-width: 600px)": {
        fontSize: "24px",
        lineHeight: "32px",
      },
    },
    h3: {
      fontFamily: 'Nunito, sans-serif',
    },
    h4: {
      fontFamily: 'Nunito, sans-serif',
    },
    h5: {
      fontFamily: 'Nunito, sans-serif',
    },
    h6: {
      fontFamily: 'Nunito, sans-serif',
    },
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButtonGroup: {
      styleOverrides: {
        root: ({ownerState}) => {
          let sizeStyles = {};

          if (ownerState.size === 'smallRound') {
            sizeStyles = {
              padding: '8px 12px',
              "@media (max-width: 600px)": {
                padding: "4px 8px",
              }

              // minWidth: 40,
              // height: 40,
              // borderRadius: 20,
            };
          }
          return ({
            borderRadius: 8,
            '& .MuiButton-root': {
              borderRadius: 40,
              border: "none",
              padding: "10px 16px",
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: "normal",
              "@media (max-width: 600px)": {
                fontSize: "12px",
                lineHeight: "normal",
              },
              ...sizeStyles,
              "&:hover": {
                backgroundColor: '#F8F8F8',
              },
            }
          })
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FDFEFE',
          boxShadow: 'none',
          borderBottom: 'none',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthXs: {
          maxWidth: '100%', // custom for xs
        },
        maxWidthSm: {
          maxWidth: '640px', // custom for sm
        },
        maxWidthMd: {
          maxWidth: '860px', // custom for md
        },
        maxWidthLg: {
          maxWidth: '1080px', // custom for lg
        },
        maxWidthXl: {
          maxWidth: '1280px', // custom for xl
        },
      },
      defaultProps: {
        maxWidth: 'lg', // default maxWidth
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
        size: 'medium', // default size
      },
      styleOverrides: {
        root: ({ ownerState }) => {
          let sizeStyles = {};

          if (ownerState.size === 'largeSquare') {
            sizeStyles = {
              padding: "8px 24px",
              fontSize: "18px",
              fontWeight: 700,
              // [theme.breakpoints.up('xs')]: {
              // },

              '& .MuiButton-endIcon': {
                marginLeft: '12px', 
                marginRight: '0px', 
                "& svg": {
                  width: '32px',
                  height: '32px',
                }
              },
              "@media (max-width: 600px)": {
                maxHeight: '44px',
                padding: "6px 16px",
                fontSize: "14px",
                fontWeight: 600,
              }
            };
          }


          if (ownerState.size === 'smallRound') {
            sizeStyles = {
              padding: '8px 12px',

              // minWidth: 40,
              // height: 40,
              // borderRadius: 20,
            };
          }
          return ({
            // paddingLeft: theme.spacing(2),
            // paddingRight: theme.spacing(2),
            // [theme.breakpoints.up('sm')]: {
            //   paddingLeft: theme.spacing(3),
            //   paddingRight: theme.spacing(3),
            // },
            padding: '10px 16px',
            textTransform: 'none',
            borderRadius: "40px",

            border: 'none',
            fontWeight: 600,
            lineHeight: '128.571%',
            '& .MuiButton-endIcon': {
              marginLeft: '12px', // pushes icon to far right (optional)
              marginRight: '0px', 
            },
            ...sizeStyles
          })
        },
        containedPrimary: {
          backgroundColor: '#009F6B',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#007c52ff',
          },
        },
        containedSecondary: {
          backgroundColor: 'rgba(0, 159, 107, 0.10)',
          color: '#009F6B',
          '&:hover': {
            backgroundColor: 'rgba(0, 159, 107, 0.10)',
          },
        },
        outlined: {
          borderColor: '#1976d2',
          color: '#1976d2',
          '&:hover': {
            backgroundColor: '#e3f2fd',
          },
        },
      },
      variants: [
        {
          props: { variant: 'containedReversed' },
          style: {
            backgroundColor: '#fff',
            color: '#009F6B',
            '&:hover': {
              backgroundColor: '#f5f5f5',
            },
          },
        },
      ],
    },
  }
});

export default theme;
