import {ElementRef, forwardRef, useState} from 'react'

import * as RadixSlider from '@radix-ui/react-slider';
import s from './slider.module.scss'
import SliderValue from "@/components/ui/slider/SliderValue.tsx";

export type SliderProps = Partial<{
    className: string,
    defaultValue: number[],
    max: number,
    step: number,
    minStepsBetweenThumbs: number,


}>

export const Slider = forwardRef<ElementRef<typeof RadixSlider.Root>, SliderProps>((
        {className, defaultValue = [0, 10], max, step = 1, minStepsBetweenThumbs , ...restProps}, _ref
    ) => {

        const [currentValue, setCurrentValue] = useState<number[]>(defaultValue)


        const onValueChange = (value: number[]) => {
            setCurrentValue(value)
        }

        return (

            <span className={s.SliderContainer}>
                <SliderValue value={currentValue[0]}/>

                <RadixSlider.Root value={currentValue} onValueChange={onValueChange} className={`${s.SliderRoot}`}
                                  defaultValue={defaultValue}
                                  max={max} step={step} minStepsBetweenThumbs={1} {...restProps}>
                    <RadixSlider.Track className={s.SliderTrack}>
                        <RadixSlider.Range className={s.SliderRange}/>
                    </RadixSlider.Track>
                    <RadixSlider.Thumb className={s.SliderThumb} aria-label="Volume"/>
                    <RadixSlider.Thumb className={s.SliderThumb} aria-label="Volume"/>

                </RadixSlider.Root>

            <SliderValue value={currentValue[1]}/>
        </span>


        )
    }
)


