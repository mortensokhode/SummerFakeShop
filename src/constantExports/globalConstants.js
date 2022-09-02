/*  Text/String constants / props  */
export const FENDP_PRODUCTS = 'https://fakestoreapi.com/products'
export const FENDP_SPECIFIC_CAT = '/category/'
export const FENDP_CATEGORIES = '/categories'

export const EMPTYSTRING = ''
export const EMPTYOBJECT = {}
export const EMPTYARRAY = []

/*  Object constants  */
export const MYDATA = {id:0,
                       title:EMPTYSTRING,
                       price:0,
                       description:EMPTYSTRING,
                       category:EMPTYSTRING,
                       image:EMPTYSTRING,
                       rating:{rate:0,
                               count:0}}

export const INITIALSTATE = {cleanOut: false,
                             display: EMPTYSTRING,
                             displayLine: EMPTYSTRING,
                             record: EMPTYARRAY }

export const CATEGORYOBJECT = {iconURL: EMPTYSTRING,
                               iconImg: EMPTYOBJECT,
                               name: EMPTYSTRING,
                               details: EMPTYARRAY }         

export const TOPLINE_TEXT_OBJ = {
                                  textHeading: 'Welcome to Fakeshop',
                                  iconHeading: 'A subdivision of Blood Suckers Inc.',
                                  subText: 'SandBoxDivision'
                                }

export const SIGNATURE_TEXT_OBJ = {
                                    mailSignature: 'Mail: mortenso.kodehode@gmail.com',
                                    phoneSignature: 'Tlf: 1234 5678'
                                  }
                                          
export const TEXTOBJECT = { headline: 'Lorem ipsum dolor sit amet', 
                            ingressText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry/'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." };

export const LOREMIPSUM = { headline: 'Lorem ipsum dolor sit amet', 
                            ingressText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.' };

/* Number constants */
export const SUMROUNDFACTOR = 100  // Faktor for avrunding til 2 desimaler
export const IROUNDFACTOR = 100000  // Faktor for avrunding til 5 desimaler

/*  Array constants */
export const PRODUCT_CATEGORIES = ["electronics",
                                   "jewelery",
                                   "men's clothing",
                                   "women's clothing"
                                  ]

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
  