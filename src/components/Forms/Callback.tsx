import React, { useState, useEffect } from 'react';
import Field from './element/Field';
import { FormType } from '../../constants/types';
import Button from './element/Button';
import Textarea from './element/Textarea';
import useWindowSize from '../../hooks/useWindowSize';

export type FormPropsType = {
  mix?: string
} & FormType;

const CallbackForm = (props: FormPropsType): JSX.Element => {
  const {
    mix,
    messange, buttonLabel, title,
    emailLabel, placeholderEmail,
    nameLabel, placeholderName,
    numberLabel, placeholderNumber,
    commentLabel, placeholderComment,
  } = props;
  const [isMobile, setIsMobile] = useState<boolean>();
  const commonMixField = 'form__group ';
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width < 950) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [windowSize]);

  return (
    <div className={`callback-form form ${mix}`}>
      <div className="form__title">
        <h1>{title}</h1>
      </div>
      <div className="form__message">
        {messange}
      </div>
      <form className="form__body" action="mail.php" method="POST">
        <Field
          isRequired
          label={numberLabel}
          placeholder={placeholderNumber}
          mix={`${commonMixField}${!isMobile ? 'colum_mobile' : ''}`}
        />
        <Field
          isRequired
          label={emailLabel}
          placeholder={placeholderEmail}
          mix={`${commonMixField}${!isMobile ? 'colum_mobile' : ''}`}
        />
        <Field
          isRequired
          label={nameLabel}
          placeholder={placeholderName}
          mix={commonMixField}
        />
        <Textarea
          label={commentLabel}
          placeholder={placeholderComment}
          mix={commonMixField}
        />
        <Button
          label={buttonLabel}
          mix={commonMixField}
        />
      </form>
    </div>
  );
};

export default CallbackForm;
