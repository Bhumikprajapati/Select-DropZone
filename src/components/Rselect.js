import React, { Component } from 'react';
import Select from 'react-select';


const optionsTech = [
    { value: 'React', label: 'React'},
    { value: 'Angular', label: 'Angular' },
    { value: 'Vue', label: 'Vue'},
    { value: 'Next', label: 'Next' },
  ];
const customStyles={
    option:  (provided,state)=>({
        ...provided,
        borderBottom:'1px solid green',
        color: state.isSelected ? 'black' : 'blue',
    }) ,
    control: styles => ({ ...styles, backgroundColor: 'lightgrey' }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        return { ...provided, opacity, transition };
      }
}

class Rselect extends Component {
    state={
        inputValue:null
    }
    handleChange = (inputValue) => {
        this.setState({ inputValue });
      };
    render() {
        return (
            <div>
               <Select
             placeholder='Select a technology'
             options={optionsTech}
             onChange={this.handleChange}
            value={this.state.inputValue}
           styles={customStyles}
            autoFocus
            isSearchable
             /> 
            </div>
        );
    }
}

export default Rselect;