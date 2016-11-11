import React from 'react'
import {Grid} from 'react-bootstrap';


export  default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    onMouseOver(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }
    render(){
        let options = {
            email: {
                label: "Email ddress",
                placeholder: "Email"
            },
            password: {
                label: "Password",
                placeholder: "Password"
            },
            checkbox: {
                text: "Check me out"
            },
            submitButton: {
                text: "Submit"
            }
        };
        return(
          <div>

              <Grid>
                  <h3>LogIn</h3>
                  <form onSubmit={this.onMouseOver}>
                      Pick your favorite La Croix flavor:
                      <select value={this.state.value} onChange={this.handleChange}>
                          <option value="grapefruit">Grapefruit</option>
                          <option value="lime">Lime</option>
                          <option value="coconut">Coconut</option>
                          <option value="mango">Mango</option>
                      </select>
                      <input type="submit" value="Submit" />
                  </form>
              <form>
                  <div className="form-group">
                      <label>{options.email.label}</label>
                      <input type="email" onChange={this.onChange} className="form-control" placeholder={options.email.placeholder} />
                  </div>
                  <div className="form-group">
                      <label>{options.password.label}</label>
                      <input type="password" onChange={this.onChange}  className="form-control" placeholder={options.password.placeholder} />
                  </div>
                  <div className="checkbox">
                      <label>
                          <input type="checkbox" onChange={this.onChange}  /> {options.checkbox.text}
                      </label>
                  </div>
                  <button type="submit" onClick={this.onSubmit} className="btn btn-default">{options.submitButton.text}</button>
              </form>

              </Grid>

          </div>
        );
    }
}