import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Row, Col, Card, CardHeader,  CardBody, Table, Button } from 'reactstrap';

class AddPayment extends Component {
  render() {
    return (
      <Row>
      
        <Card>
          <CardHeader style={{backgroundColor:'rgb(102,140,169)'}}>
            <Button>Cancel</Button>
            <a className="float-right" href="#"><Button className="btn d-inline-block btn-primary">Done</Button></a>
          </CardHeader>         
          <Card-body >
            <Table-responsive>
              <CardHeader style={{backgroundColor:'rgb(139,178,199)'}}>
                 
              <div className="avatar float-left">
                    <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="tenant-avarter" style={{Width:'100px',Height:'100px', borderRadius:'2px'}} />
                    <span className="avatar-status badge-success"></span>
                  </div> 
                  <span>    
                    <h5><b>&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Payment From </b></h5>
                    <h5>&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Joseph Balikuddembe </h5>
                  </span>
              </CardHeader>
              <thead class="bg-light">
                                             
              </thead>
              <tbody>
                <tr>
                  <td className="text-center"> Payment Amount: </td>
                  <td ><input class="input-group-text text-left form-control form-control-lg" id="username" type="text" placeholder="Amount" autocomplete="on"/> </td>
                </tr>
                <tr>
                  <td className="text-center"> Late/Other Fee:</td>
                  <td ><input class="input-group-text text-left form-control form-control-lg" id="username" type="text" placeholder="Late/Other Fee" autocomplete="on"/> </td>
                </tr>
                <tr>
                  <td className="text-center">Payment Date:</td>
                  <td><input class="input-group-text text-left form-control form-control-lg" id="username" type="text" placeholder="Date" autocomplete="on"/> </td>
                </tr>
                <tr>
                  <td className="text-center"> Payment Period:</td>
                  <td><input class=" input-group-text text-left form-control form-control-lg" id="username" type="text" placeholder="Period" autocomplete="on"/> </td>
                </tr>
                <tr>
                  <td className="text-center">Payment for Year:</td>
                  <td><input class="input-group-text text-left form-control form-control-lg" id="username" type="text" placeholder="Year" autocomplete="on"/> </td>
                </tr>
                <th className="text-center">Note:</th>
                <td><input class="input-group-text text-left form-control form-control-lg " id="username" type="text" placeholder="Enter Note Details" autocomplete="on" /> </td>
                <tr>
                  <td ><a href="#" class="btn btn-outline-light "><button class="btn d-inline-block btn-primary" action="submit">Save Expense</button></a></td>
                  <td> <a href="#" class="btn btn-outline-light float-right"><button class="btn d-inline-block btn-primary"> Add Payment</button></a></td>
                </tr>
              </tbody>
            </Table-responsive>
          </Card-body>
        </Card>
      
        <Card>
              <CardHeader>
               <div className="text-left ">Payment History</div>
               <div className="text-right "><Button>Add Payment</Button></div>
              </CardHeader>
              <CardBody>                 
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th className="text-center"><i className="icon-people"></i></th>
                    <th>Tenant Name/Details</th>
                    <th>Payment Amount</th>
                    <th>Payment Date</th>
                    <th>Late/Other Fee</th>
                    <th>Payment Method</th>
                    <th>Payment Period</th>
                    <th>Year</th>
                    <th>Notes</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/1.png'} className="img-avatar" alt="avarter" />
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Esau Lwanga</div>
                      <div className="small text-muted">
                        Registered: Jan 1, 2018
                      </div>
                    </td>
                    <td className="payment-amount">200000</td>
                    <td>Jan 1, 2019</td>
                    <td>0.0</td>
                    <td className="text-center">
                      <i className="fa fa-cc-mastercard" style={{ fontSize: 24 + 'px' }}></i>
                    </td>
                    <td>12 Months</td>
                    <td>2019</td>
                    <td>Rent Due on March 1</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="tenant-avarter" />
                        <span className="avatar-status badge-danger"></span>
                      </div>
                    </td>
                    <td>
                      <div>Judith Ahura</div>
                      <div className="small text-muted">
                        Registered: Jan 1, 2019
                      </div>
                    </td>
                    <td className="payment-amount">200000</td>
                    <td>Jan 1, 2019</td>
                    <td>0.0</td>
                    <td className="text-center">
                      <i className="fa fa-cc-visa" style={{ fontSize: 24 + 'px' }}></i>
                    </td>
                    <td>12 Months</td>
                    <td>2019</td>
                    <td>Rent Due on March 1</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="tenant-avarter" />
                        <span className="avatar-status badge-warning"></span>
                      </div>
                    </td>
                    <td>
                      <div>Judith Ahura</div>
                      <div className="small text-muted">
                        Registered: Jan 1, 2019
                      </div>
                    </td>
                    <td className="payment-amount">200000</td>
                    <td>Jan 1, 2019</td>
                    <td>0.0</td>
                    <td className="text-center">
                      <i className="fa fa-cc-stripe" style={{ fontSize: 24 + 'px' }}></i>
                    </td>
                    <td>12 Months</td>
                    <td>2019</td>
                    <td>Rent Due on March 1</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="tenant-avarter" />
                        <span className="avatar-status badge-secondary"></span>
                      </div>
                    </td>
                    <td>
                      <div>Fred Byamugisha</div>
                      <div className="small text-muted">
                         Registered: Jan 1, 2019
                      </div>
                    </td>
                    <td className="payment-amount">200000</td>
                    <td>Jan 1, 2019</td>
                    <td>0.0</td>
                    <td className="text-center">
                      <i className="fa fa-paypal" style={{ fontSize: 24 + 'px' }}></i>
                    </td>
                    <td>12 Months</td>
                    <td>2019</td>
                    <td>Rent Due on March 1</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/5.png'} className="img-avatar" alt="tenant-avarter" />
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Joseph Baliks</div>
                      <div className="small text-muted">
                       Registered: Jan 1, 2019
                      </div>
                    </td>
                    <td className="payment-amount">200000</td>
                    <td>Jan 1, 2019</td>
                    <td>0.0</td>
                    <td className="text-center">
                      <i className="fa fa-google-wallet" style={{ fontSize: 24 + 'px' }}></i>
                    </td>
                    <td>12 Months</td>
                    <td>2019</td>
                    <td>Rent Due on March 1</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/6.png'} className="img-avatar" alt="tenant-avarter" />
                        <span className="avatar-status badge-danger"></span>
                      </div>
                    </td>
                    <td>
                      <div>Joseph Baliks</div>
                      <div className="small text-muted">
                        Registered: Jan 1, 2019
                      </div>
                    </td>
                    <td className="payment-amount">200000</td>
                    <td>Jan 1, 2019</td>
                    <td>0.0</td>
                    <td className="text-center">
                      <i className="fa fa-cc-amex" style={{ fontSize: 24 + 'px' }}></i>
                    </td>
                    <td>12 Months</td>
                    <td>2019</td>
                    <td>Rent Due on March 1</td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
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

export default AddPayment;
