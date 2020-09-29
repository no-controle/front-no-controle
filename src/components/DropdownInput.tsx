import React from 'react';
import { Dropdown } from 'semantic-ui-react'

interface DropdownInputProps {
  options: any;
  defaultValue: string;
  onChange: any;
}

const mapPeriods = (periods: string[]) => periods.map((period) => { return { key: period, text: period, value: period } });

const DropdownInput = (props: DropdownInputProps) => {
  const onPeriodSelect = (_e: any, { value }: any) => props.onChange(value);

  return <>
    <Dropdown
      selection
      search
      scrolling
      closeOnBlur
      options={mapPeriods(props.options)}
      defaultValue={props.defaultValue}
      onChange={onPeriodSelect}
    />
  </>
}

export default DropdownInput;