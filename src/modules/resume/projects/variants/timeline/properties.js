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
    value: 'Projects',
    required: true
  },
  projects: {
    name: 'Projects',
    type: propertyTypes.ARRAY,
    value: [
      {
        name: 'Project',
        type: propertyTypes.OBJECT,
        required: true,
        value: {
          type: propertyTypes.OBJECT,
          name: {
            name: 'Project name',
            type: propertyTypes.STRING,
            value: 'Project name',
            required: true
          },
          company: {
            name: 'Company',
            type: propertyTypes.STRING,
            value: 'Company',
            required: true
          },
          designation: {
            name: 'Designation',
            type: propertyTypes.STRING,
            value: 'Designation',
            required: true
          },
          url: {
            name: 'Project URL',
            type: propertyTypes.URL,
            value: 'https://your-project-url.com',
            required: false
          },
          description: {
            name: 'Description',
            type: propertyTypes.STRING_MULTI_LINE,
            value:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            required: false
          },
          duration: {
            name: 'Duration',
            type: propertyTypes.STRING,
            value: 'Now',
            required: false
          }
        }
      },
      {
        name: 'Project',
        type: propertyTypes.OBJECT,
        required: true,
        value: {
          type: propertyTypes.OBJECT,
          name: {
            name: 'Project name',
            type: propertyTypes.STRING,
            value: 'Sic Mundus Creates Est.',
            required: true
          },
          company: {
            name: 'Company',
            type: propertyTypes.STRING,
            value: 'Sic Mundus',
            required: true
          },
          designation: {
            name: 'Designation',
            type: propertyTypes.STRING,
            value: 'Adam',
            required: true
          },
          url: {
            name: 'Project URL',
            type: propertyTypes.URL,
            value: 'https://dark.netflix.io/en',
            required: false
          },
          description: {
            name: 'Description',
            type: propertyTypes.STRING_MULTI_LINE,
            value:
              'Visiting the third world to stop Tannhause to create time machine.',
            required: false
          },
          duration: {
            name: 'Duration',
            type: propertyTypes.STRING,
            value: '2017-2020',
            required: false
          }
        }
      }
    ]
  }
};

export default properties;
