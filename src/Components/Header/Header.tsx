import React from 'react';
import s from './Header.module.css';

export const Header = () => {
  return (
    <header className={s.header}>
      <img src={'https://res.cloudinary.com/moteefe/image/upload/v1555093947/store/logo_image/31d7f5bb-82de-43b4-bc3a-c55b5451315d.jpg'}/>
    </header>
  );
};
