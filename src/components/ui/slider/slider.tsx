import { ElementRef, forwardRef, useState } from 'react'

import SliderValue from '@/components/ui/slider/sliderValue'
import * as RadixSlider from '@radix-ui/react-slider'

import s from './slider.module.scss'

export type SliderProps = Partial<{
  className: string
  defaultValue: number[]
  max: number
  minStepsBetweenThumbs: number
  step: number
}>

export const Slider = forwardRef<ElementRef<typeof RadixSlider.Root>, SliderProps>(
  (
    { className, defaultValue = [0, 10], max, minStepsBetweenThumbs, step = 1, ...restProps },
    _ref
  ) => {
    const [currentValue, setCurrentValue] = useState<number[]>(defaultValue)

    const onValueChange = (value: number[]) => {
      setCurrentValue(value)
    }

    return (
      <span className={s.sliderContainer}>
        <SliderValue value={currentValue[0]} />

        <RadixSlider.Root
          className={`${s.sliderRoot}`}
          defaultValue={defaultValue}
          max={max}
          minStepsBetweenThumbs={1}
          onValueChange={onValueChange}
          step={step}
          value={currentValue}
          {...restProps}
        >
          <RadixSlider.Track className={s.sliderTrack}>
            <RadixSlider.Range className={s.SliderRange} />
          </RadixSlider.Track>
          <RadixSlider.Thumb aria-label={'Volume'} className={s.sliderThumb} />
          <RadixSlider.Thumb aria-label={'Volume'} className={s.sliderThumb} />
        </RadixSlider.Root>

        <SliderValue value={currentValue[1]} />
      </span>
    )
  }
)
