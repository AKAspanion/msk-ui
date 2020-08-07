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
    value: 'Interests',
    required: true
  },
  interestList: {
    name: 'Interest list',
    type: propertyTypes.ARRAY,
    value: [
      {
        name: 'interest-1',
        type: propertyTypes.STRING,
        value: 'Traveling',
        required: true
      },
      {
        name: 'interest-2',
        type: propertyTypes.STRING,
        value: 'Gaming',
        required: true
      },
      {
        name: 'interest-3',
        type: propertyTypes.STRING,
        value: 'Cooking',
        required: true
      },
      {
        name: 'interest-4',
        type: propertyTypes.STRING,
        value: 'Reading',
        required: true
      },
      {
        name: 'interest-5',
        type: propertyTypes.STRING,
        value: 'Robotics',
        required: true
      },
      {
        name: 'interest-6',
        type: propertyTypes.STRING,
        value: 'Painting',
        required: true
      }
    ]
  }
};

export default properties;
