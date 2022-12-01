import React from 'react';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {};

const InputGroup = (props: Props) => {
  return (
    <div className="inputGroup">
      <h3>
        {props.title}
        {props.required && <span>*</span>}
      </h3>
      <input {...props} />
    </div>
  );
};

export default InputGroup;
