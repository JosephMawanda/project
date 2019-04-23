import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Row, Col, Card, CardHeader,  CardBody, Table, Button } from 'reactstrap';
import '../../../App.css';
class AddProperty extends Component {
    // handleClick(count){
    //     this.setState({count: count});
    //   }
    // handleChange = e => {
    //     this.setState({ value: e.target.value })
    //   }
      
      
  render() {
    return (
        <Row>
      
            <Card>
                <CardHeader style={{backgroundColor:'rgb(135,148,174)'}}>
                    <Button>Cancel</Button>
                    <span className="text-center" style={{ fontWeight: 'bold', color:'white', marginLeft:'10%' }}> New Property</span>
                    <a className="float-right" href="#"><Button className="btn d-inline-block btn-primary">Done</Button></a>
                </CardHeader>         
                <Card-body style={{height:'500px',backgroundColor:'rgb(238,238,238)'}}>
                  <CardHeader style={{backgroundColor:'rgb(139,178,199)', height:'160px'}}>
                  
                      <div class="drag-drop-image" style={{height:'155px', width:'120px', marginLeft:'-18px' , marginTop: '-10px',color:'white'}}><br></br><br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;select image</div>
                      
                      <div class="float-right input-section color-set" >
                          <ul style={{width:'85%',  marginLeft:'65px', marginTop:'-40px'}}>
                              <li><input class="form-control sm" id="Discription" type="text" placeholder="Discription*" autocomplete="on"/> </li>
              
                              <li><input class="form-control " id="Address/Location" type="text" placeholder="Address/Location*" autocomplete="on"/> </li>
                              
                              <li><input class="form-control " id="Village" type="text" placeholder="Village*" autocomplete="on"/> </li>

                              <li><input class="form-control " id="District/TC" type="text" placeholder="District/TC*" autocomplete="on"/> </li>
                          </ul>
                          
                        </div>
                      
                        </CardHeader>
                        <div class="number-of-units-section" style={{backgroundColor:'white', marginTop:'20px', border:'1px solid rgb(187,187,187)'}}>
                            
                            <div className="units-selection-box">   
                            
                            <div > 
                                {/*onChange={this.handleChange} value={this.state.value}*/} 
                                <div className="select"><Button  style={{backgroundColor:'white'}}><i className="icon-plus" ></i></Button></div>
                                <div className="select"><Button  style={{backgroundColor:'white'}}><i className="icon-minus" ></i></Button></div>
                            </div>
                             <input id="count" placeholder="No. of Units" className="form-controller" style={{width:'80px'}} ></input>
                             {/* {this.state.inputs.map(node =>)} */}
                    
                            <span style={{fontSize:'20px', marginLeft:'20px'}}>Unit(s)</span> 
                      </div>
                    </div>
                </Card-body>
            </Card>
        </Row>
     );
  }
}

export default AddProperty;
// ReactDOM.render(<AddProperty/>, document.getElementById('root'))

