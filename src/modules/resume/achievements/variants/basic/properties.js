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
    value: 'Achievements',
    required: true
  },
  achievements: {
    name: 'Achievements',
    type: propertyTypes.ARRAY,
    value: [
      {
        name: 'Achievement text',
        type: propertyTypes.STRING_MULTI_LINE,
        value:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        required: true
      },
      {
        name: 'Achievement text',
        type: propertyTypes.STRING_MULTI_LINE,
        value:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        required: true
      }
    ],
    required: true
  }
};

export default properties;
