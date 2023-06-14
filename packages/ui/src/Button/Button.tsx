import * as React from 'react';

interface Props {
  primary?: boolean;
  size?: 'small' | 'large';
  label?: string;
}

export const Button = ({
  primary = false,
  label = 'Boop',
  size = 'small',
}: Props) => {
  return (
    <div className="bg-brandblue">
      {/* custom className 적용되는지 확인용 */}
      커스텀 버튼이에요
      <button
        style={{
          backgroundColor: primary ? 'red' : 'blue',
          fontSize: size === 'large' ? '24px' : '14px',
        }}
      >
        {label}
      </button>
    </div>
  );
};
