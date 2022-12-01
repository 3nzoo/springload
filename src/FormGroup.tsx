import React, { useState } from 'react';
import InputGroup from './components/InputGroup';

type Props = {};

const FormGroup = (props: Props) => {
  const [emailLength, setEmailLength] = useState(0);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 4) {
      //? Regex email validation
      if (
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          e.target.value
        ) ||
        e.target.value.length === 0
      ) {
        setIsValidEmail(true);
      } else {
        setIsValidEmail(false);
      }
    } else {
      setIsValidEmail(false);
      if (e.target.value.length === 0) {
        setIsValidEmail(true);
      }
    }
    setEmailLength(e.target.value.length);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailLength === 0) {
      setIsValidEmail(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2> Contact Form </h2>
      <InputGroup title="Email" onChange={handleEmail} />
      {!isValidEmail && (
        <span className="error-control">Invalid email Address</span>
      )}
    </form>
  );
};

export default FormGroup;
