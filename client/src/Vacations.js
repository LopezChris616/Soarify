import React, {Component} from "react";
import {connect} from "react-redux";
import {getVacations, removeVacation} from "./redux";
import ViewVacations from "./ViewVacations";
import Navbar from "./Navbar";
import Slide from 'react-reveal/Slide';

class Vacations extends Component {
    constructor(){
        super();

        this.state = {
            currentPage: 1,
            vacationsPerPage: 4
        }
    }

    componentDidMount(){
        this.props.getVacations();
    }

    handleClick = event => {
        this.setState({currentPage: Number(event.target.id)})
    }

    

    render(){
        const lastVacation = this.state.currentPage * this.state.vacationsPerPage;
        const firstVacation = lastVacation - this.state.vacationsPerPage;
        const currentVacations = this.props.vacations.slice(firstVacation, lastVacation);
        const showVacations = currentVacations.map(vacation => {
            return <ViewVacations 
            key={vacation._id} 
            id={vacation._id}
            name={vacation.fullName} 
            email={vacation.email} 
            location={vacation.location} 
            date={vacation.targetDate} 
            cost={vacation.costOfVacation} 
            currentFunds={vacation.currentMoney} 
            priority={vacation.priority}
            purpose={vacation.purpose}/>
        })
       
        const pageNumbers = [];
        for(let i = 1; i <= Math.ceil(this.props.vacations.length / this.state.vacationsPerPage); i++){
            pageNumbers.push(i);
        }

        const renderNumbers = pageNumbers.map(number => {
            return (
                <div id="pageNumbers" key={number}>
                    <p id={number} onClick={this.handleClick}>{number}</p>
                </div>
            )
        })
      
        return(
            <div>
                
                <div id="vacationsGrid">
                    <Navbar/>
                    <Slide right>
                    <h1>Your Vacation Plans</h1>
                    {showVacations}
                    <div id="pageNumbersContainer">
                    {renderNumbers}   
                    </div> 
                    </Slide>
                </div>
               
            </div>   
        )
    }
}

export default connect(state => ({vacations: state}), {getVacations, removeVacation})(Vacations);