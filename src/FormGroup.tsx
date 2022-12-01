import React, { useState } from 'react';
import InputGroup from './components/InputGroup';
import SelectGroup from './components/SelectGroup';
import { Animals, Colours } from './constants';

type Props = {};

const FormGroup = (props: Props) => {
  const [emailLength, setEmailLength] = useState(0);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isLengthValid, setIsLengthValid] = useState(true);
  const [passwordLength, setPasswordLength] = useState(0);
  const [selectedRadio, setSeclectedRadio] = useState('');
  const [tigerSelected, setTigerSelected] = useState(false);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === 'Tiger') {
      setTigerSelected(!tigerSelected);
    }
  };

  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeclectedRadio(e.target.name);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 8 && e.target.value.length !== 0) {
      setIsLengthValid(false);
    } else {
      setIsLengthValid(true);
    }
    setPasswordLength(e.target.value.length);
  };

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
    if (passwordLength === 0) {
      setIsLengthValid(false);
    }
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

      <InputGroup
        title="Password"
        type={'password'}
        onChange={handlePassword}
      />
      {!isLengthValid && (
        <span className="error-control">
          Password must be longer than 8 characters
        </span>
      )}

      <SelectGroup
        title="Colour"
        type="radio"
        selected={selectedRadio}
        data={Object.values(Colours)}
        onChange={handleRadio}
      />

      <SelectGroup
        title="Animals"
        type="checkbox"
        data={Object.values(Animals)}
        onChange={handleCheckbox}
      />
      {tigerSelected && (
        <InputGroup
          data-testid="typeof-tiger"
          title="Type of Tiger"
          type="text"
          required
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      )}

      <button type="submit"> submit</button>
    </form>
  );
};

export default FormGroup;
