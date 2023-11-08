import { useId } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Props, RadioGroup } from '@/components'
import { RadioGroupProps } from '@radix-ui/react-radio-group'

export type ControlledRadioGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<RadioGroupProps, 'onValueChange' | 'value'> &
  Pick<Props, 'options'>

export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  options,
  rules,
  shouldUnregister,
  ...rest
}: ControlledRadioGroupProps<T>) => {
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
    <RadioGroup
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
