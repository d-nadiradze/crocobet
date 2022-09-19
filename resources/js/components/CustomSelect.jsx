import React from 'react';
import Select from "react-select";

const customStyles = {
    control: (styles, { isFocused }) => {
        return {
            ...styles,
            border:"none",
            backgroundColor: 'white',
            boxShadow: 'none',
            "&:hover": {
                border: '1px solid customBlue'
            },
            padding: '2px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '400'
        }
    },
    option: (styles, {  isDisabled, isFocused, isSelected }) => {
        return {
            ...styles,
            backgroundColor: isFocused ? '#2A84FF5F' : 'transparent',
            color: isFocused ? 'blue' : 'gray',
            padding: '10px 0',
            textAlign: 'center',
        };
    },
}

const CustomSelect = ({options,onChange,defaultValue,disabled}) => {

    return (
        <div className={"relative my-4 w-full border border-gray-200 rounded-xl"}>
            <div className="absolute top-[50%] translate-y-[-50%] left-4">
                <img className={'w-full'} src={'../images/key.svg'} alt=""/>
            </div>
            <Select
                className={'ml-8'}
                styles={customStyles}
                value={defaultValue}
                options={options}
                onChange={onChange}
                isSearchable={false}
                isClearable={true}
                isDisabled={disabled}
                placeholder={"Role"}
            />
        </div>
    );
};

export default CustomSelect;
