import propertyTypes from 'msk-property-types';
import themes from 'msk-themes';

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.light.iceWhite,
    required: true
  },
  headlineText: {
    name: 'Headline text',
    type: propertyTypes.STRING,
    value: 'Education',
    required: true
  },
  education: {
    name: 'Education',
    type: propertyTypes.ARRAY,
    value: [
      {
        name: 'Education',
        type: propertyTypes.OBJECT,
        required: true,
        value: {
          type: propertyTypes.OBJECT,
          degree: {
            name: 'Degree',
            type: propertyTypes.STRING,
            value: 'Degree',
            required: true
          },
          university: {
            name: 'College/University',
            type: propertyTypes.STRING,
            value: 'College/University',
            required: true
          },
          datesFrom: {
            name: 'Dates From',
            type: propertyTypes.STRING,
            value: 'Dates From',
            required: true
          },
          datesTo: {
            name: 'Dates To',
            type: propertyTypes.STRING,
            value: 'Dates To',
            required: true
          },
          description: {
            name: 'Description',
            type: propertyTypes.STRING_MULTI_LINE,
            value:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            required: false
          }
        }
      }
    ]
  }
};

export default properties;
