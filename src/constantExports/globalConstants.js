/*  Text/String constants / props  */
export const APP_HEADING = 'Welcome to Fakeshop'
export const APP_SUBHEADING= 'A subdivision of Blood Suckers Inc.'
export const MAIL_SIGNATURE = 'Mail: mortenso.kodehode@gmail.com';
export const PHONE_SIGNATURE = 'Tlf: 1234 5678';

export const FAKESHOP_ENDPOINT = 'https://fakestoreapi.com/'
export const FENDP_PRODUCTS = '/products'
export const FENDP_LIST_CATEGORIES = '/products/categories'
export const FENDP_LIST_SPEC_CAT = '/products/category/'

export const EMPTYSTRING = ''
export const EMPTYOBJECT = {}
export const EMPTYARRAY = []
export const LINKCLOSE = '</Link>'

/*  Object constants  */
export const INITIALSTATE = {cleanOut: false,
                             display: EMPTYSTRING,
                             displayLine: EMPTYSTRING,
                             record: EMPTYARRAY }

export const CATEGORYOBJECT = {iconURL: EMPTYSTRING,
                               iconImg: EMPTYOBJECT,
                               name: EMPTYSTRING,
                               details: EMPTYARRAY }                             

export const TEXTOBJECT = { headline: 'Lorem ipsum dolor sit amet', 
                            ingressParagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry/'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." };

export const LOREMIPSUM = { headline: 'Lorem ipsum dolor sit amet', 
                            ingressParagraph: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.' };

/* Number constants */
export const SUMROUNDFACTOR = 100  // Faktor for avrunding til 2 desimaler
export const IROUNDFACTOR = 100000  // Faktor for avrunding til 5 desimaler

/*  Array constants */
// cards - array of objects is more like a list of card types handled rather than in direct use. However, the object structure is in use as such, hence the decision to
// keep the array definition below
export const cards = [
    {
      id: "1",
      variant: "hover",
      front: "Hover",
      back: "Back"
    },
    {
      id: "2",
      variant: "click",
      front: "Click",
      back: "Back"
    },
    {
      id: "3",
      variant: "focus",
      front: "Focus",
      back: "Back"
    }
  ];
  