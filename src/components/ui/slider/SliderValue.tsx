import {FC} from "react";

import s from './slider.module.scss'

type Props = {
    value: number
}


const SliderValue: FC<Props> = ({value}) => {
    return (
        <div className={s.SliderValue}>
            {value}
        </div>
    );
};

export default SliderValue;