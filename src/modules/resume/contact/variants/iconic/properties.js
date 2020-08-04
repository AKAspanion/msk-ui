import propertyTypes from 'msk-property-types';
import themes from 'msk-themes';

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.dark.shadowPurple,
    required: true
  },
  phoneNo: {
    name: 'Phone No',
    type: propertyTypes.NUMBER,
    value: 9999999999,
    required: true
  },
  emailId: {
    name: 'Email ID',
    type: propertyTypes.EMAIL,
    value: 'user@example.com',
    required: true
  },
  city: {
    name: 'Current City',
    type: propertyTypes.STRING,
    value: 'City',
    required: true
  },
  website: {
    name: 'Website',
    type: propertyTypes.URL,
    value: 'www.myownwebsite.com',
    required: false
  }
};

export default properties;
