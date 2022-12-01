import React from 'react';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  data?: string[] | undefined;
  selected?: string | undefined;
};

const SelectGroup = (props: Props) => {
  return props.type === 'checkbox' ? (
    <>
      <h3>{props.title}</h3>
      {props.data &&
        props.data.map((itemName: string, index: number) => (
          <div key={index}>
            <input {...props} value={itemName} />
            <label> {itemName} </label>
          </div>
        ))}
    </>
  ) : (
    <>
      <h3> {props.title}</h3>
      {props.data &&
        props.data.map((itemName: string, index: number) => (
          <div key={index}>
            <input
              {...props}
              name={itemName}
              checked={itemName === props.selected}
            />
            <label> {itemName}</label>
          </div>
        ))}
    </>
  );
};

export default SelectGroup;
