import propertyTypes from 'msk-property-types';
import themes from 'msk-themes';

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.dark.midnightBlue,
    required: true
  },
  headlineText: {
    name: 'Headline text',
    type: propertyTypes.STRING,
    value: 'Skill Set',
    required: true
  },
  skills: {
    name: 'Skills',
    type: propertyTypes.ARRAY,
    value: [
      {
        name: 'Skill',
        type: propertyTypes.STRING,
        value: 'Skill 1',
        required: true
      },
      {
        name: 'Skill',
        type: propertyTypes.STRING,
        value: 'Skill 2',
        required: true
      },
      {
        name: 'Skill',
        type: propertyTypes.STRING,
        value: 'Skill 3',
        required: true
      }
    ],
    required: true
  }
};

export default properties;
