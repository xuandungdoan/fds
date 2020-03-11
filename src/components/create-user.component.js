import React, { Component } from 'react'
import axios from 'axios'
export class CreateUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : "",
        }
    }
    onChange = (e) =>{
        this.setState({username: e.target.value})
    }
    onSubmit = (e)=>{
        e.preventDefault(); 
        const user = {username : this.state.username}

        console.log(user, "sdfawerwerhgello");
        axios.post('http://localhost:4444/user/add', user)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.message))
        this.setState({
            username:''
        })

    }
    render() {
        return (
            <div>
                <form className="form-inline" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label >User</label>
                        <input type="text" className="form-control" placeholder="inoyut user" value={this.state.username} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="form-control" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateUser;
