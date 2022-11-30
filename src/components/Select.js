import React, { useEffect } from 'react';
import {
  Wrapper,
  FieldExtensionType,
  FieldExtensionFeature,
  useFieldExtension,
} from '@graphcms/uix-react-sdk';
import CreatableSelect from 'react-select/creatable';

const components = {
  DropdownIndicator: null,
};

const createOption = (label) => ({
  label,
  value: label,
});

const SelectField = () => {
  const { value, onChange } = useFieldExtension();
  const [inputValue, setInputValue] = React.useState('');
  const [items, setItems] = React.useState([]);

  useEffect(() => {
    if (value) {
      setItems(JSON.parse(value));
    }
  }, []);

  const handleOnChange = (newItems) => {
    setItems(newItems);
    onChange(JSON.stringify(newItems));
  };

  const handleKeyDown = (event) => {
    if (!inputValue) return;
    if (event.key === 'Enter' || event.key === 'Tab') {
      const newItems = [];
      if (value !== null) {
        items.forEach((item) => newItems.push(item));
      }
      newItems.push(createOption(inputValue));
      setItems(newItems);
      onChange(JSON.stringify(newItems));
      setInputValue('');
      event.preventDefault();
    }
  };

  return (
    <CreatableSelect
      components={components}
      inputValue={inputValue}
      isClearable
      isMulti
      menuIsOpen={false}
      onChange={(newItems) => handleOnChange(newItems)}
      onInputChange={(newValue) => setInputValue(newValue)}
      onKeyDown={handleKeyDown}
      placeholder="Type something and press enter..."
      value={JSON.parse(value)}
    />
  );
};

const declaration = {
  extensionType: 'field',
  fieldType: FieldExtensionType.JSON,
  name: 'React Select Field',
  description: 'Add dynamic Tagging',
  features: [FieldExtensionFeature.FieldRenderer],
};

const SelectComponent = () => (
  <Wrapper declaration={declaration}>
    <SelectField />
  </Wrapper>
);

export default SelectComponent;
