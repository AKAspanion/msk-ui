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
    type: propertyTypes.STRING,
    value: 'Delhi, India',
    required: false
  },
  phone: {
    name: 'Phone',
    type: propertyTypes.NUMBER,
    value: '1234567890',
    required: true
  },
  email: {
    name: 'E-mail',
    type: propertyTypes.EMAIL,
    value: 'samriddhijain2000@gmail.com',
    required: true
  },
  linkedin: {
    name: 'LinkedIn',
    type: propertyTypes.URL,
    value: 'linkedin.com/in/samjain123/',
    required: false
  },
  github: {
    name: 'GitHub',
    type: propertyTypes.URL,
    value: 'github.com/sammjainn',
    required: false
  }
};

export default properties;
