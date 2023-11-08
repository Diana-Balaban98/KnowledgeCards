import { useId } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Props, Select } from '@/components'
import { SelectProps } from '@radix-ui/react-select'

export type ControlledSelectProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<SelectProps, 'id' | 'onValueChange' | 'value'> &
  Pick<Props, 'options'>

export const ControlledSelect = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  options,
  rules,
  shouldUnregister,
  ...rest
}: ControlledSelectProps<T>) => {
  const {
    field: { onChange, ref, value },
  } = useController({
    control,
    defaultValue,
    disabled,
    name,
    rules,
    shouldUnregister,
  })

  const uniqKey = useId()

  return (
    <Select
      options={options}
      {...rest}
      disabled={disabled}
      id={uniqKey}
      name={name}
      onValueChange={onChange}
      ref={ref}
      value={value}
    />
  )
}
