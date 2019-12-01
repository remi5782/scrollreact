import {createMuiTheme} from '@material-ui/core/styles';
import MonsterTwenty from './fonts/Monster Twenty.otf';
import tryOut from './fonts/biryani-v5-latin-regular.woff2';
const Biryani = {
  fontFamily: 'Biryani',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `local('Biryani Regular'), local('Biryani-Regular'),
       url('../fonts/biryani-v5-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/biryani-v5-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/biryani-v5-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/biryani-v5-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/biryani-v5-latin-regular.svg#Biryani') format('svg'); /* Legacy iOS */`
}
const Monster20 = {
    fontFamily: 'Monster20',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      url(${tryOut}) format('woff2')
    `,
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
  };
export default createMuiTheme({
    typography:{
        fontFamily: 'Monster20'
    },
    props: {
      MuiTypography: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
    overrides: {
        MuiCssBaseline: {
          '@global': {
            '@font-face': [Monster20, Biryani],
          },
        },
      },
  });