import React from 'react';
import s from './Title.module.css'

const Title = (props) => {
    return (
      <>
          <h4 className={s.title}>{props.text}</h4>
      </>
    );
};

export default Title;