import React from 'react';
export const arrowForward = props => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
    </svg>
  );
};
