import React, { Component } from 'react';
import * as DateUtils from './DateUtils';

export default class DateValidation extends Component {
  
  constructor () {
    super();
      this.state = {
        dateFrom: '',
        dateTo: '',
        isValideDates: true,
        timestamp: ''
      }
      this.submitHandler = this.submitHandler.bind(this);
    }

  submitHandler = event => {
    event.preventDefault();
    var result = DateUtils.CalculateDateDiff(this.state.dateFrom, this.state.dateTo);
    this.setState({
      timestamp: result,
    })
  }

  changeHandler = event => {      
      const name = event.target.name;
      const value = event.target.value;
    
      this.setState({
            [name]: value
      }); 
  }

   render() {
      return (
        <div>
          <span> {this.state.timestamp} </span>
          <form className="form-inline" onSubmit={this.submitHandler}>
        <div className="form-group mb-2">
        <label htmlFor="dateFrom" className="sr-only">
          Date From :
          </label>
            <input type="text" 
                  className="form-control"
                  name="dateFrom"
                  placeholder="Date From" 
                  value={this.state.dateFrom.value}
                  onChange={this.changeHandler} 
            />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="dateTo" className="sr-only">
          Date To :
          </label>
            <input type="text"                       
                className="form-control"
                name="dateTo"                  
                placeholder="Date To"
                value={this.state.dateTo.value} 
                onChange={this.changeHandler} 
            />
          </div>
          <input type="submit" className="btn btn-primary mb-2" value="Submit" />
      </form>      
        </div>
        
      );
  }
}