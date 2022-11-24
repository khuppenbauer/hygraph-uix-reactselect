import React from 'react';
import {
  Wrapper,
  FieldExtensionType,
  FieldExtensionFeature,
} from '@graphcms/uix-react-sdk';

const UixField = () => (<div>Hello World</div>);

const declaration = {
  extensionType: 'field',
  fieldType: FieldExtensionType.STRING,
  features: [FieldExtensionFeature.FieldRenderer],
  name: 'Hello UIX Field',
};

const Uix = () => (
  <Wrapper declaration={declaration}>
    <UixField />
  </Wrapper>
);

export default Uix;
