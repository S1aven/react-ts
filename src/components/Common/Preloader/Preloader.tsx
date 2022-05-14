import React from 'react';

export const Preloader = () => {

  const preloader = 'https://i.pinimg.com/originals/26/af/26/26af26707d7d0da6d5bc930788cfc868.gif'

  return (
    <div>
      <img alt={'preloader'} src={preloader}/>
    </div>
  );
};