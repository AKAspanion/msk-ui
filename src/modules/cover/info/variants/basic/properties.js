import propertyTypes from 'msk-property-types';
import themes from 'msk-themes';

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.light.skyBlue,
    required: true
  },
  address: {
    name: 'Address',
    type: propertyTypes.ARRAY,
    required: false,
    value: [
      {
        name: 'Address title',
        type: propertyTypes.STRING,
        value: 'Address',
        required: false
      },
      {
        name: 'Address value',
        type: propertyTypes.STRING,
        value: 'Delhi, India',
        required: false
      }
    ]
  },
  phone: {
    name: 'Phone',
    type: propertyTypes.ARRAY,
    required: true,
    value: [
      {
        name: 'Phone title',
        type: propertyTypes.STRING,
        value: 'Phone',
        required: false
      },
      {
        name: 'Phone value',
        type: propertyTypes.NUMBER,
        value: '1234567890',
        required: true
      }
    ]
  },
  email: {
    name: 'E-mail',
    type: propertyTypes.ARRAY,
    required: true,
    value: [
      {
        name: 'E-mail title',
        type: propertyTypes.STRING,
        value: 'E-mail',
        required: false
      },
      {
        name: 'E-mail value',
        type: propertyTypes.EMAIL,
        value: 'samriddhijain2000@gmail.com',
        required: true
      }
    ]
  },
  linkedin: {
    name: 'LinkedIn',
    type: propertyTypes.ARRAY,
    required: false,
    value: [
      {
        name: 'LinkedIn title',
        type: propertyTypes.STRING,
        required: false,
        value: 'LinkedIn'
      },
      {
        name: 'LinkedIn value',
        type: propertyTypes.URL,
        required: false,
        value: 'linkedin.com/in/samjain123/'
      }
    ]
  },
  github: {
    name: 'GitHub',
    type: propertyTypes.ARRAY,
    required: false,
    value: [
      {
        name: 'GitHub title',
        type: propertyTypes.STRING,
        required: false,
        value: 'GitHub'
      },
      {
        name: 'GitHub value',
        type: propertyTypes.URL,
        required: false,
        value: 'github.com/sammjainn'
      }
    ]
  }
};

export default properties;
