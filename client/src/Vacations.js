import React, {Component} from "react";
import {connect} from "react-redux";
import {getVacations, removeVacation} from "./redux/vacations";
import ViewVacations from "./ViewVacations";
import Navbar from "./Navbar";
import Slide from 'react-reveal/Slide';

class Vacations extends Component {
    constructor(){
        super();
    }

    componentDidMount(){
        this.props.getVacations();
    }

    render(){
        console.log(this.props.vacations.vacations);
 

        const showVaca = this.props.vacations.vacations.map(vacation => {
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
      
        return(
            <div>
                <div id="vacationsGrid">
                    <Slide right>
                    <h1 id="vacaPlans">Your Vacation Plans</h1>
                    </Slide>
                    <div id="viewVaca">
                        {showVaca}
                    </div>
                    
                </div>
               
            </div>   
        )
    }
}

export default connect(state => ({vacations: state}), {getVacations, removeVacation})(Vacations);


                // this.state = {
        //     currentPage: 1,
        //     vacationsPerPage: 4
        // }


        // handleClick = event => {
        //     this.setState({currentPage: Number(event.target.id)})
        // }


       // const lastVacation = this.state.currentPage * this.state.vacationsPerPage;
        // const firstVacation = lastVacation - this.state.vacationsPerPage;
        // const currentVacations = this.props.vacations.slice(firstVacation, lastVacation);
        // const showVacations = currentVacations.map(vacation => {
        //     return <ViewVacations 
        //     key={vacation._id} 
        //     id={vacation._id}
        //     name={vacation.fullName} 
        //     email={vacation.email} 
        //     location={vacation.location} 
        //     date={vacation.targetDate} 
        //     cost={vacation.costOfVacation} 
        //     currentFunds={vacation.currentMoney} 
        //     priority={vacation.priority}
        //     purpose={vacation.purpose}/>
        // })


            // const pageNumbers = [];
        // for(let i = 1; i <= Math.ceil(this.props.vacations.length / this.state.vacationsPerPage); i++){
        //     pageNumbers.push(i);
        // }

        // const renderNumbers = pageNumbers.map(number => {
        //     return (
        //         <div id="pageNumbers" key={number}>
        //             <p id={number} onClick={this.handleClick}>{number}</p>
        //         </div>
        //     )
        // })