import React from 'react';

type HeightType = 'higher' | 'high' | 'tiny' | number;
type WidthType = 'wider' | 'wide' | 'tiny';

interface Props {
  height: HeightType;
  width?: WidthType;
  radius?: string | boolean;
  color?: string;
  useColor?: boolean;
}

const PlaceholderStyles: ((props: Props) => object) = ({
  useColor = false,
  ...props
}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'inherit',
  backgroundColor: props.color,
  borderRadius: () => {
    if (typeof(props.radius) === 'string') {
      return props.radius + '%';
    } else {
      return '50%';
    }
  },
  border: `1px solid ${useColor ? 'currentColor' : props.color}`,
  height: () => {
    if (props.height === 'tiny') {
      return '75%';
    } else if (props.height === 'high') {
      return '50%';
    } else if (props.height === 'higher') {
      return '25%';
    } else {
      return '100%';
    }
  },
  width: () => {
    if (props?.width === 'tiny') {
      return '75%';
    } else if (props?.width === 'wide') {
      return '50%';
    } else if (props?.width === 'wider') {
      return '25%';
    } else {
      return '100%';
    }
  },
})

export const PlaceholderComponent: React.FC<Props> = ({
  height,
  width,
  radius,
  color,
  children
  }) => {
    return (
      <div 
        className={`${height} ${width} ${color} ${radius}`} 
        style={PlaceholderStyles({height, width})}
      >{children}</div>
    );
};