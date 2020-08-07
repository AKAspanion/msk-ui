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
    name: 'Skill Set',
    type: propertyTypes.ARRAY,
    value: [
      {
        name: 'Skill-1',
        type: propertyTypes.ARRAY,
        value: ['SKill 1', 4],
        required: true
      },
      {
        name: 'Skill-2',
        type: propertyTypes.ARRAY,
        value: ['SKill 2', 2],
        required: true
      },
      {
        name: 'Skill-3',
        type: propertyTypes.ARRAY,
        value: ['SKill 3', 3],
        required: true
      },
      {
        name: 'Skill-4',
        type: propertyTypes.ARRAY,
        value: ['SKill 4', 1],
        required: true
      }
    ]
  }
};

export default properties;
