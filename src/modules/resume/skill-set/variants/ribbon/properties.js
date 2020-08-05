import propertyTypes from 'msk-property-types';
import themes from 'msk-themes';

const getSkillValue = (title, percent) => ({
  name: 'Skill',
  type: propertyTypes.OBJECT,
  required: true,
  value: {
    type: propertyTypes.OBJECT,
    percent: {
      name: 'Skill Percent',
      type: propertyTypes.NUMBER,
      value: percent,
      required: true
    },
    title: {
      name: 'Skill Title',
      type: propertyTypes.STRING,
      value: title,
      required: true
    }
  }
});

const properties = {
  theme: {
    name: 'Theme',
    required: true,
    type: propertyTypes.THEME,
    value: themes.dark.mintGreen
  },
  headlineText: {
    required: true,
    value: 'Web Skills',
    name: 'Headline text',
    type: propertyTypes.STRING
  },
  skills: {
    name: 'Skills',
    required: true,
    type: propertyTypes.ARRAY,
    value: [
      getSkillValue('HTML', 50),
      getSkillValue('CSS', 70),
      getSkillValue('Vue.JS', 100),
      getSkillValue('React.JS', 90),
      getSkillValue('Angular', 25)
    ]
  }
};

export default properties;
