import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Row, Col, Card, CardHeader,  CardBody, Table, Button } from 'reactstrap';
import '../../../App.css'

class Tenants extends Component {
  render() {
    return (
        <Row>
      
        <Card>
          <CardHeader  style={{backgroundColor:'rgb(102,140,169)'}} >
            <Button>Cancel</Button>
            <a className="float-right" href="#"><Button className="btn d-inline-block btn-primary">Done</Button></a>
          </CardHeader>         
          <Card-body >
            <Table-responsive>
            < div  className=" CardHeader expenses" style={{backgroundColor:'rgb(139,178,199)'}}>
                 
              <div className="mm-2 float-left text-center">
              <br></br>
              &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
              <i className="icon-people " style={{tex:'center'}}></i>
                  </div> 
                  <div className="details float-right">    
                    <h5><b>Expense For </b></h5>
                    <h5>Kyaliwajjala Apartments, Unit 3 </h5>
                  </div>
              </div>
              <thead class="bg-light">
                                             
              </thead>
              <tbody>
                <tr>
                  <td className="text-right"> Description:&nbsp; &nbsp;&nbsp; </td>
                  <td ><input class="input-group-text text-left form-control form-control-lg" id="description" type="text" placeholder="Description*" autocomplete="on"/> </td>
                </tr>
                <tr>
                  <td className="text-right"> Expense Amount:&nbsp; &nbsp;&nbsp;</td>
                  <td ><input class="input-group-text text-left form-control form-control-lg" id="ExpenseAmount" type="text" placeholder="Expense Amount*" autocomplete="on"/> </td>
                </tr>
                <tr>
                  <td className="text-right">Expense Date:&nbsp; &nbsp;&nbsp;</td>
                  <td><input class="input-group-text text-left form-control form-control-lg" id="ExpenseDate:" type="text" placeholder="Expense Date*" autocomplete="on"/> </td>
                </tr>
                <tr>
                  <td className="text-right"> Category:&nbsp; &nbsp;&nbsp;</td>
                  <td><input class=" input-group-text text-left form-control form-control-lg" id="Category" type="text" placeholder="Category*" autocomplete="on"/> </td>
                </tr>
                <tr>
                  <td className="text-right">Reference ID:&nbsp; &nbsp;&nbsp;</td>
                  <td><input class="input-group-text text-left form-control form-control-lg" id="ReferenceID" type="text" placeholder="Reference ID*" autocomplete="on"/> </td>
                </tr>
                <th className="text-right">Note:&nbsp; &nbsp;&nbsp;</th>
                <td><input class="input-group-text text-left form-control form-control-lg " id="username" type="text" placeholder="Enter Note Details*" autocomplete="on" /> </td>
                <tr>
                  <td ><a href="#" class="btn btn-outline-light "><button class="btn d-inline-block btn-primary" action="submit">By Owner</button></a></td>
                  <td> <a href="#" class="btn btn-outline-light float-right"><button class="btn d-inline-block btn-primary"> By Tenant</button></a></td>
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
          
      </Row>
      
    );
  }
}

export default Tenants;
