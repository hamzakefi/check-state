import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props){
        super(props)
        this.person={
            FullName:"Nael",
            Bio:"FullStackJs",
            Profession:"Engenieer",
            img:"https://www.careermatch.com/job-prep/wp-content/uploads/sites/2/2018/09/engineer.jpg",

        }
        this.state={count:0}
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState(prevState=>({
              count:prevState.count+1  
            }))
        },1000)
    }
  render() {
    return (
      <div>
          <h2>{this.person.FullName}</h2>
          <h2>{this.person.Bio}</h2>
          <h2>{this.person.Profession}</h2>
          <h2>{this.state.count}</h2>
          <img style={{width:"500px"}} src={this.person.img} alt="img"/>
      </div>
    )
  }
}
