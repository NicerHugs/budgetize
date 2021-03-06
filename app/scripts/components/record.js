import React from 'react';
import {getDollars, getCents} from './../util/moneyFormat.js';

export default React.createClass({
  getInitialState() {
    return {
      amt: '0'
    }
  },
  handleClear() {
    this.setState({
      amt: this.state.amt.substr(0, this.state.amt.length-1)
    });
  },
  handleNumberClick(e) {
    this.setState({
      amt: this.state.amt + e.target.value
    });
  },
  handleAdd() {
    let val = this.state.amt;
    console.log('you want to add ' + val + ' dollars.');
    this.setState({amt: '0'})
  },
  handleSubtract() {
    let val = this.state.amt;
    console.log('you want to expense ' + val + ' dollars.');
    this.setState({amt: '0'})
  },
  render() {
    return (
      <main className="record">
        <h2>
          <span className="sign">$</span>
          <span className="d">{getDollars(this.state.amt)}</span>
          <span className="c">{getCents(this.state.amt)}</span>
        </h2>
        <div className="calculator">
          <div className="calc-row">
            <input type="button" onClick={this.handleNumberClick} value="7"/>
            <input type="button" onClick={this.handleNumberClick} value="8"/>
            <input type="button" onClick={this.handleNumberClick} value="9"/>
          </div>
          <div className="calc-row">
            <input type="button" onClick={this.handleNumberClick} value="4"/>
            <input type="button" onClick={this.handleNumberClick} value="5"/>
            <input type="button" onClick={this.handleNumberClick} value="6"/>
          </div>
          <div className="calc-row">
            <input type="button" onClick={this.handleNumberClick} value="1"/>
            <input type="button" onClick={this.handleNumberClick} value="2"/>
            <input type="button" onClick={this.handleNumberClick} value="3"/>
          </div>
          <div className="calc-row">
            <input type="button" onClick={this.handleNumberClick} value="0"/>
            <input type="button" onClick={this.handleClear} value="C"/>
          </div>
        </div>
        <footer className="record-btns">
          <input type="button" onClick={this.handleAdd} value="+"/>
          <input type="button" onClick={this.handleSubtract} value="-"/>
        </footer>
      </main>
    )
  }
});
