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
        type: propertyTypes.OBJECT,
        required: true,
        subname: {
          name: 'Skill',
          type: propertyTypes.STRING,
          value: 'Skill 1',
          required: true
        },
        rating: {
          name: 'rating',
          type: propertyTypes.NUMBER,
          value: 1.5,
          required: true
        }
      },
      {
        name: 'Skill',
        type: propertyTypes.OBJECT,
        required: true,
        subname: {
          name: 'Skill',
          type: propertyTypes.STRING,
          value: 'Skill 2',
          required: true
        },
        rating: {
          name: 'rating',
          type: propertyTypes.NUMBER,
          value: 4,
          required: true
        }
      },
      {
        name: 'Skill',
        type: propertyTypes.OBJECT,
        required: true,
        subname: {
          name: 'Skill',
          type: propertyTypes.STRING,
          value: 'Skill 3',
          required: true
        },
        rating: {
          name: 'rating',
          type: propertyTypes.NUMBER,
          value: 5,
          required: true
        }
      }
    ],
    required: true
  }
};

export default properties;
