import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Row, Col, Card, CardHeader,  CardBody, Table, Button } from 'reactstrap';
import '../../../App.scss'

class AddExpense extends Component {
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
                  <div className="details float-right" >    
                    <h5><b>Expense For </b></h5>
                    <h5 style={{marginRight:'5px'}}>Kyaliwajjala Apartments, Unit 3   </h5>
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

export default AddExpense;
//  </td>
//                 <td><span className="h1">h1. Bootstrap heading</span></td>
//               </tr>
//               <tr>
//                 <td>
//                   <p><code className="highlighter-rouge">&lt;h2&gt;&lt;/h2&gt;</code></p>
//                 </td>
//                 <td><span className="h2">h2. Bootstrap heading</span></td>
//               </tr>
//               <tr>
//                 <td>
//                   <p><code className="highlighter-rouge">&lt;h3&gt;&lt;/h3&gt;</code></p>
//                 </td>
//                 <td><span className="h3">h3. Bootstrap heading</span></td>
//               </tr>
//               <tr>
//                 <td>
//                   <p><code className="highlighter-rouge">&lt;h4&gt;&lt;/h4&gt;</code></p>
//                 </td>
//                 <td><span className="h4">h4. Bootstrap heading</span></td>
//               </tr>
//               <tr>
//                 <td>
//                   <p><code className="highlighter-rouge">&lt;h5&gt;&lt;/h5&gt;</code></p>
//                 </td>
//                 <td><span className="h5">h5. Bootstrap heading</span></td>
//               </tr>
//               <tr>
//                 <td>
//                   <p><code className="highlighter-rouge">&lt;h6&gt;&lt;/h6&gt;</code></p>
//                 </td>
//                 <td><span className="h6">h6. Bootstrap heading</span></td>
//               </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-header">
//             Headings
//           </div>
//           <div className="card-body">
//             <p><code className="highlighter-rouge">.h1</code> through <code className="highlighter-rouge">.h6</code> classes are also available, for when you
//               want to match the font styling of a heading but cannot use the associated HTML element.</p>
//             <div className="bd-example">
//               <p className="h1">h1. Bootstrap heading</p>
//               <p className="h2">h2. Bootstrap heading</p>
//               <p className="h3">h3. Bootstrap heading</p>
//               <p className="h4">h4. Bootstrap heading</p>
//               <p className="h5">h5. Bootstrap heading</p>
//               <p className="h6">h6. Bootstrap heading</p>
//             </div>
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-header">
//             Display headings
//           </div>
//           <div className="card-body">
//             <p>Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using
//               a <strong>display heading</strong>—a larger, slightly more opinionated heading style.</p>
//             <div className="bd-example bd-example-type">
//               <table className="table">
//                 <tbody>
//                 <tr>
//                   <td><span className="display-1">Display 1</span></td>
//                 </tr>
//                 <tr>
//                   <td><span className="display-2">Display 2</span></td>
//                 </tr>
//                 <tr>
//                   <td><span className="display-3">Display 3</span></td>
//                 </tr>
//                 <tr>
//                   <td><span className="display-4">Display 4</span></td>
//                 </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-header">
//             Inline text elements
//           </div>
//           <div className="card-body">
//             <p>Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using
//               a <strong>display heading</strong>—a larger, slightly more opinionated heading style.</p>
//             <div className="bd-example">
//               <p>You can use the mark tag to <mark>highlight</mark> text.</p>
//               <p>
//                 <del>This line of text is meant to be treated as deleted text.</del>
//               </p>
//               <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
//               <p>
//                 <ins>This line of text is meant to be treated as an addition to the document.</ins>
//               </p>
//               <p><u>This line of text will render as underlined</u></p>
//               <p>
//                 <small>This line of text is meant to be treated as fine print.</small>
//               </p>
//               <p><strong>This line rendered as bold text.</strong></p>
//               <p><em>This line rendered as italicized text.</em></p>
//             </div>
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-header">
//             Description list alignment
//           </div>
//           <div className="card-body">
//             <p>Align terms and descriptions horizontally by using our grid system’s predefined classes (or semantic mixins). For longer terms, you can
//               optionally add a <code className="highlighter-rouge">.text-truncate</code> class to truncate the text with an ellipsis.</p>
//             <div className="bd-example">
//               <dl className="row">
//                 <dt className="col-sm-3">Description lists</dt>
//                 <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

//                 <dt className="col-sm-3">Euismod</dt>
//                 <dd className="col-sm-9">
//                   <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
//                   <p>Donec id elit non mi porta gravida at eget metus.</p>
//                 </dd>

//                 <dt className="col-sm-3">Malesuada porta</dt>
//                 <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

//                 <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
//                 <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

//                 <dt className="col-sm-3">Nesting</dt>
//                 <dd className="col-sm-9">
//                   <dl className="row">
//                     <dt className="col-sm-4">Nested definition list</dt>
//                     <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
//                   </dl>
//                 </dd>
//               </dl>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Typography;
