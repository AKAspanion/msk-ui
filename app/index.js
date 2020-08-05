import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@material-ui/core';

import modules from '../src/modules'
import ModulesList from './components/modules-list'
import LayoutArea from './components/layout-area'
import LayoutToolbar from './components/layout-toolbar'
import ComponentsList from './components/components-list'
import VariantsList from './components/variants-list'
import ContributorsList from './components/contributors-list';
import useMediaQuery from '@material-ui/core/useMediaQuery';



const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true
  });

  const {
    selectedModule,
    selectedComponent,
    selectedVariant
  } = useSelector((state) => {
    return {
      selectedModule: state.selectedModule,
      selectedComponent: state.selectedComponent,
      selectedVariant: state.selectedVariant
    };
  });



  function getContributorsList() {
    let contributors = [];

    Object.keys(modules).map((moduleKey) => {
      const module = modules[moduleKey];

      Object.keys(module.components).map((componentKey) => {
        const component = module.components[componentKey];

        Object.keys(component.variants).map((variantKey) => {
          const variant = component.variants[variantKey];
          contributors = contributors.concat(variant.contributors)
        })

      })

    })

    contributors = contributors.filter((contributor, index, self) =>
      index === self.findIndex((t) => (
        t.email === contributor.email
      ))
    )

    return contributors;

  }

  return (
    <div>

      {!isMobile && <div>
        <ModulesList modules={modules} />
        {selectedVariant && <LayoutToolbar />}
        {selectedModule && <ComponentsList components={modules[selectedModule].components} />}
        {selectedComponent && <VariantsList selectedComponent={modules[selectedModule].components[selectedComponent]} />}
        {selectedVariant && <LayoutArea
          Variant={modules[selectedModule].components[selectedComponent].variants[selectedVariant]} />}
      </div>}
      {!selectedVariant && <div style={{
        marginLeft: !isMobile && 300,
      }}>
        <ContributorsList contributors={getContributorsList()} />
      </div>}
    </div>
  )
}

export default App;