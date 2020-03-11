import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export class CreateExercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            username: '',
            description: '',
            duration: null,
            date: new Date()
        }
    }
    componentDidMount() {
        axios.get("http://localhost:4444/user")
        .then(result => {
            if(result.data.length >0){
            this.setState({
                users: result.data.map(e => e.username),
                username: result.data[0].username,
            })}
            // console.log(result.data,"hello iam ket qua");
            // this.setState({
            //     users:['hahahah'],
            //     username:'gi dau'
            // })
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            date: this.state.date,
            description: this.state.description,
            duration: this.state.duration
        }
        axios.post('http://localhost:4444/exercise/add',exercise)
        .then(res => console.log(res.data))
        console.log('this is exercise', exercise);


    }
    onChangeUsersname = (e) => {
        this.setState({ username: e.target.value })
    }
    onChangeDescription = (e) => {
        this.setState({ description: e.target.value })
    }
    onChangeDuration = (e) => {
        this.setState({ duration: e.target.value })
    }
    onChangeDate = (date) => {
        this.setState({ date: date })
    }
    render() {
        return (
            <div className="container">
                <form className="form-block" onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Username</label>
                        <select value={this.state.username} onChange={this.onChangeUsersname} className="form-control form-control-md">
                            {
                                this.state.users.map(e => {
                                    return <option key={e} value={e}>{e}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="description" className="form-control form-control-md" onChange={this.onChangeDescription} />
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="duration" className="form-control form-control-md" onChange={this.onChangeDuration} />
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <div>

                        <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate} 
                            />
                        </div>

                    </div>
                    <div className="form-group">
                        <input type="submit" className="form-control form-control-md" />
                    </div>
                </form>
            </div>

        )
    }
}

export default CreateExercise
