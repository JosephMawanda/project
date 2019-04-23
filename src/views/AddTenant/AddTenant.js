import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Row, Col, Card, CardHeader,  CardBody, Table, Button } from 'reactstrap';
import Draggable, {DraggableCore} from 'react-draggable'; 
import '../../../App.css';
class AddTenant extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          nameError: '',
          emailError: ''
        };
      }
    
      handleNameChange = event => {
        this.setState({ name: event.target.value }, () => {
          this.validateName();
        });
      };
    
      handleEmailChange = event => {
        this.setState({ email: event.target.value }, () => {
          this.validateEmail();
        });
      };
    
      validateName = () => {
        const { name } = this.state;
        this.setState({
          nameError:
            name.length > 3 ? null : 'Name must be longer than 3 characters'
        });
      }
    
      validateEmail = () => {
        const { email } = this.state;
        this.setState({
          emailError:
            email.length > 3 ? null : 'Email must be longer than 3 characters'
        });
      }
    
      handleSubmit = event => {
        event.preventDefault();
        const { name, email } = this.state;
        alert(`Your state values: \n 
                name: ${name} \n 
                email: ${email}`);
      };
      
  render() {
    return (
        <Row>
            <form onSubmit={this.handleSubmit}>
            <Card>
                
                <CardHeader style={{backgroundColor:'rgb(135,148,174)'}}>
                    <Button>Cancel</Button>
                    <a className="float-right" href="#"><Button className="btn d-inline-block btn-primary">Done</Button></a>
                </CardHeader>         
                <Card-body >
                    <Table-responsive>
                        <CardHeader style={{backgroundColor:'rgb(139,178,199)'}}>
                        
                            <div class="drag-drop-image"></div>
                            <div class="tenant-status-section">
                                <a className="tenant-in" href="# " >In </a>
                                <a className="tenant-out" href="# ">Out</a>  
                            </div>
                            <div class="float-right input-section color-set">
                                <ul>
                                    <li><input class="form-control " id="first-name" type="text" placeholder="First Name*" autocomplete="on"/> </li>
                    
                                    <li><input class="form-control " id="lastname" type="text" placeholder="Last Name*" autocomplete="on"/> </li>
                                    
                                    <li><input class="form-control " id="building" type="text" placeholder="Building-Unit*" autocomplete="on"/> </li>
                                </ul>
                            </div>
                            </CardHeader>
                                
                            <thead class="bg-light">

                                                            
                            </thead>
                            <tbody>
                                <tr>
                                <div class=" lower-tenant float-right"> 
                                    <div class="li add-tenant-left-section  " >
                                            <span><i className="fa-building bigger"></i><i class="fa-building smaller"></i></span>
                                    </div> 
                                    <br></br>                                                      

                                    <div class="li input-section  ">
                                        <ul>
                                            <li><input class="form-control " id="first-name" type="text" placeholder="Discription*" autocomplete="on"/> </li>
                                            <li><input class="form-control " id="first-name" type="text" placeholder="Address*" autocomplete="on"/> </li>
                                            <li><input class="form-control " id="first-name" type="text" placeholder="City*" autocomplete="on"/> </li>
                                            <li><input class="form-control " id="lastname" type="text" placeholder="State*" autocomplete="on"/> </li>
                                            <li><input class="form-control " id="building" type="text" placeholder="Building-Unit*" autocomplete="on"/> </li>
                                        </ul>
                                    </div>
                                    <br></br> 

                                </div> 
                              
                                </tr>

                                <tr>
                                    <td className="text-right">Home Phone:&nbsp; &nbsp;&nbsp;</td>
                                    <td><input class="form-control f" id="home-phone" type="text" placeholder="Home Phone" autocomplete="on"/></td>
                                </tr>

                                <tr>
                                    <td className="text-right"> Work Phone:&nbsp; &nbsp;&nbsp;</td>
                                    <td><input class="form-control " id="work-phone" type="text" placeholder="Work Phone" autocomplete="on"/> </td>
                                </tr>

                                <tr>
                                    <td className="text-right">Mobile Phone:&nbsp; &nbsp;&nbsp;</td>
                                    <td><input class="form-control " id="mobile-phone" type="text" placeholder="Mobile Phone" autocomplete="on"/> </td>
                                </tr>

                                <tr>
                                    <td className="text-right">Tenant Email:&nbsp; &nbsp;&nbsp;</td>
                                    <td><input class="form-control " id="tenant-email" type="text" placeholder="Tenant Email" autocomplete="on"/> </td>
                                </tr>
                                
                                <tr>
                                    <td className="text-right">Primary Contact:&nbsp; &nbsp;&nbsp;</td>
                                    <td><input class="form-control " id="primary-contact" type="text" placeholder="Primary Contact" autocomplete="on"/> </td>
                                </tr>

                                <tr>
                                    <td className="text-right"> Rent Amount:&nbsp; &nbsp;&nbsp;</td>
                                    <td><input class="form-control " id=" rent-amount" type="text" placeholder=" Rent Amount" autocomplete="on"/> </td>
                                </tr>

                                <tr>
                                    <td className="text-right">Security Deposit:&nbsp; &nbsp;&nbsp;</td>
                                    <td><input class="form-control " id="security-deposit" type="text" placeholder="Security Deposit" autocomplete="on"/> </td>

                                </tr>

                                <tr>
                                    <td className="text-right">Deposit Paid:&nbsp; &nbsp;&nbsp;</td>
                                    <td><input class="form-control " id="deposit-paid" type="text" placeholder="Deposit Paid" autocomplete="on"/> </td>
                                </tr>
                                
                                <tr>
                                    <td className="text-right">Move In Date:&nbsp; &nbsp;&nbsp;</td>
                                    <td><input class="form-control " id="move-in-date" type="text" placeholder="Move In Date" autocomplete="on"/> </td>
                                </tr>

                                <tr>
                                    <td className="text-right"> Rent Due Date:&nbsp; &nbsp;&nbsp;</td>
                                    <td><input class="form-control " id="rent-due-date" type="text" placeholder="Rent Due Date" autocomplete="on"/> </td>
                                </tr>

                                <tr>
                                    <td className="text-right">Mobile Phone:&nbsp; &nbsp;&nbsp;</td>
                                    <td><input class="form-control " id="Mobile Phone" type="text" placeholder="Mobile Phone" autocomplete="on"/> </td>
                                </tr>

                                <tr>
                                    <td className="text-right"><b>Note/remark:&nbsp; &nbsp;&nbsp;</b></td>
                                    <td><input class="form-control " id="note-remark" type="text" placeholder="Enter Note/Remark" autocomplete="on"/> </td>
                                </tr>

                                <tr>
                                <td ><a href="#" class="btn btn-outline-light "><button class="btn d-inline-block btn-primary" action="submit">Save Tenant Details</button></a></td>
                                <td> <a href="#" class="btn btn-outline-light float-right"><button class="btn d-inline-block btn-primary"> Add Tenant</button></a></td>
                                </tr>
                            </tbody>
                    </Table-responsive>
                </Card-body>
            </Card>
        
                
                
                    
                    <div class="col-xl-9 col-lg-12 col-md-6 col-sm-12 col-12">
                        <Card>
                            <Card-body class=" tenant-shortcuts">                 
                                <ul>
                                    <li class="btn d-inline-block btn-primary" type="send"><i className="icon-file-pdf"></i> Export as pdf</li>
                                    <li  class="btn d-inline-block btn-primary" type="send"><i className="fas fa-download"></i> Download</li>
                                    <li class="btn d-inline-block btn-primary" type="send"><i className="fab fa-google-drive"></i> Save to Google Drive</li>
                                    
                                    <li class="btn d-inline-block btn-primary" type="send"><i class="icon-dropbox"></i> Save to Dropbox</li>
                                </ul>                                               
                            </Card-body>                                                               
                        </Card>
                    </div>
        </form>   
         </Row>
     );
  }
}

export default AddTenant;

