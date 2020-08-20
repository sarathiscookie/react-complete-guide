import React from 'react';
import './App.css';
import Person from './Test/Person';
import Vehicle from './Test/Vehicle';
import Company from './Test/Company';

class App extends React.Component {

  state = {
    companies: [
      { name: 'BMW', sector: 'Car' },
      { name: 'GOOGLE', sector: 'IT' },
      { name: 'VENTURE', sector: 'Investment' },
    ]
  }

  switchCompanyHandler = () => {
    console.log('Clicked!!!');
  }

  render() {
    return (
      <div className="App">
        <div>

          <h3> Props: Example based on function component. </h3>
          <Person name="Peter Bradely" age="28" />
          <Person name="Declan Oconner" age="58" />
          <Person name="Maria Oconner" age="29" />

          <h3> Props: Example based on class component. </h3>
          <Vehicle name="BMW" year="2021" />
          <Vehicle name="Benz" year="2021" />
          <Vehicle name="Audi" year="2021" />

          <h3> State: Example. </h3>
          <button onClick = {this.switchCompanyHandler}>Click Me!</button>
          <Company name = {this.state.companies[0].name} sector = {this.state.companies[0].sector}/>
          <Company name = {this.state.companies[1].name} sector = {this.state.companies[1].sector}/>
          <Company name = {this.state.companies[2].name} sector = {this.state.companies[2].sector}/>

        </div>
      </div>
    );
  }

}

export default App;
