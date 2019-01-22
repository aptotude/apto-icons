import React from 'react';
export const task = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <defs>
        <path id="task_svg__a" d="M0 0h24v24H0V0z" />
      </defs>
      <clipPath id="task_svg__b">
        <use xlinkHref="#task_svg__a" overflow="visible" />
      </clipPath>
      <path
        clipPath="url(#task_svg__b)"
        d="M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z"
      />
    </svg>
  );
};
