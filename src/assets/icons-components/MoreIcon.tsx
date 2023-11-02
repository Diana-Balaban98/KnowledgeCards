import { forwardRef } from 'react'

import { IconProps } from '@/assets/types'

const MoreIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'white', size = '24px', ...props }, forwardedRef) => {
    return (
      <svg
        {...props}
        fill={'none'}
        height={size}
        ref={forwardedRef}
        viewBox={'0 0 18 18'}
        width={size}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <circle cx={'9'} cy={'9'} r={'8.5'} stroke={color} />
        <circle cx={'9'} cy={'9'} fill={color} r={'1'} />
        <circle cx={'9'} cy={'6'} fill={color} r={'1'} />
        <circle cx={'9'} cy={'12'} fill={color} r={'1'} />
      </svg>
    )
  }
)

export default MoreIcon
