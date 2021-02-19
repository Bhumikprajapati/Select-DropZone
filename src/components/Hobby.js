import React, { Component } from 'react';
import Select,{components} from 'react-select';
import CreatableSelect from 'react-select/creatable'
import makeAnimated from 'react-select/animated';

const animatedComponent=makeAnimated()
const options=[
    {value:'Cricket',label:' 🏏Cricket'},
    {value:'Dancing',label:'🕺Dancing'},
    {value:'Singing',label:'🎤Singing'},
    {value:'Books',label:'📚Reading Books'}
]
const controlStyles = {
    borderRadius: '1px solid black',
    padding: '5px',
    background: 'lightgreen',
    color: 'white',
  };
const ControlComponent = props => (
    <div style={controlStyles}>
      {<p>Select Hobbies</p>}
      <components.Control {...props} />
    </div>
  );
class Hobby extends Component {
    state={
        inputValue:[],
     
    }
    handleChange = (inputValue) => {
        this.setState({ inputValue });
      };
    render() {
        return (
            <div>
             <CreatableSelect
              options={options}
              placeholder='You can add more hobbies by typing also'
             onChange={this.handleChange}
             value={this.state.inputValue}
             isClearable
             isSearchable
             isMulti
             components={{animation:animatedComponent},{ Control: ControlComponent }}
             />
            </div>
        );
    }
}

export default Hobby;