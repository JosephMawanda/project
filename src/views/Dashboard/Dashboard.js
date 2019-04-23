import React, { Component, lazy, Suspense } from 'react';
import {Doughnut } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

//const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};



// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3,
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0"> 
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card4' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>View Details</DropdownItem>
                      <DropdownItem>View History</DropdownItem>
                      <DropdownItem> send</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>                  
                <h3 className="text-bold">Cash Flow</h3>
                  <div className="metric-value d-inline-block">
                    <p className="text-bold earned">Earned: <span className=" cash-flow-earned" style={{fontSize: 16}}>       UGShs0</span></p>
                    <p className="text-bold spent">Spent:<span className=" cash-flow-spent"style={{fontSize: 16}}>       UGShs0</span></p>
                  </div>
                  <div className="metric-label d-inline-block float-right  font-weight-bold">
                    <span><i className="fa fa-fw fa-arrow-up"></i></span><span>5.86%</span>
                  </div>
                </CardBody>             
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0"> 
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card2' isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>View Details</DropdownItem>
                      <DropdownItem>View History</DropdownItem>
                      <DropdownItem>Send</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>                  
                <h3 className="text-bold">YTD Cash Flow</h3>
                  <div className="metric-value d-inline-block">
                    <p className="text-bold earned">Earned: <span className=" cash-flow-earned" style={{fontSize: 16}}>       UGShs0</span></p>
                    <p className="text-bold spent">Spent:<span className=" cash-flow-spent"style={{fontSize: 16}}>       UGShs0</span></p>
                  </div>
                  <div class="metric-label d-inline-block float-right  font-weight-bold">
                      <span><i className="fa fa-fw fa-arrow-up"></i></span><span>5.86%</span>
                  </div>
              </CardBody>                  
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                    <ButtonDropdown id='card3' isOpen={this.state.card3} toggle={() => { this.setState({ card3: !this.state.card3 }); }}>
                      <DropdownToggle caret className="p-0" color="transparent">
                        <i className="icon-settings"></i>
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>Send Notices</DropdownItem>
                        <DropdownItem>View Details</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </ButtonGroup>                
                    <p className="text-bold section-title" style={{fontSize: 20}}>Payments Due:<span class="month" style={{fontSize: 12}}> December</span></p>
                    <p >No. of Tenants:...<i className="icon-people"></i>... <span className="number-of-tenants" style={{fontSize: 16}}>0</span><span>...</span><span className="payment-due" style={{fontSize: 16}}>UGShs0</span></p>
                    <p >Paid:....<i className="icon-people"></i>... <span className="number-of-tenants-cleared" style={{fontSize: 16}}>0</span>...<span className="paid-amount" style={{fontSize: 16}}>Ushs0</span></p>
                    <p >Due:..<i className="icon-people"></i>... <span className="number-of-tenants-due" style={{fontSize: 16}}>0</span>...<span className="-due-amount" style={{fontSize: 16}}>Ushs0</span></p>    
                    <div className="metric-label d-inline-block float-right  font-weight-bold">
                      <span><i className="fa fa-fw fa-arrow-down"></i></span><span>5.86%</span>
                    </div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
            <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                    <ButtonDropdown id='card4' isOpen={this.state.card4} toggle={() => { this.setState({ card4: !this.state.card4 }); }}>
                      <DropdownToggle caret className="p-0" color="transparent">
                        <i className="icon-settings"></i>
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>View All</DropdownItem>
                        <DropdownItem>Send Warning</DropdownItem>
                        <DropdownItem>Save</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </ButtonGroup>                
                    <p className="text-bold section-title" style={{fontSize: 20}}>Payments Past Due:</p>
                    {/* <span class="month" style={{fontSize: 12}}> December</span> */}
                    <p className="month">October:.......<i className="icon-people"></i>... <span className="number-of-tenants" style={{fontSize: 16}}>0</span><span>...</span><span className="payment-past-due" style={{fontSize: 16}}>UGShs0</span></p>
                    <p className="month">September:...<i className="icon-people"></i>... <span className="number-of-tenants" style={{fontSize: 16}}>0</span><span>...</span><span className="payment-past-due" style={{fontSize: 16}}>UGShs0</span></p>
                    <p className="all-previous-months">All Previous:..<i className="icon-people"></i>... <span className="number-of-tenants" style={{fontSize: 16}}>0</span><span>...</span><span className="payment-past-due" style={{fontSize: 16}}>UGShs0</span></p>
                    <div className="metric-label d-inline-block float-right font-weight-bold  ">
                      <span ><i className="fa fa-fw fa-arrow-down "></i></span><span>5.86%</span>
                    </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>      
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="card border-3 border-top border-top-primary">
                  <div className="card-body">
                      <h5 className="text-muted">Net Income</h5>
                      <div className="metric-value d-inline-block">
                          <h3 className="mb-1">$1,000</h3>
                      </div>
                      <div class="metric-label d-inline-block float-right text-success font-weight-bold">
                          <span class="icon-circle-small icon-box-xs text-success bg-success-light"><i className="fa fa-fw fa-arrow-up"></i></span><span className="ml-1">5.86%</span>
                      </div>
                  </div>
              </div>
          </div>
          
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="card border-3 border-top border-top-primary">
                  <div className="card-body">
                      <h5 className="text-muted">Tenants</h5>
                      <div className="metric-value d-inline-block">
                          <h3 className="mb-1">145</h3>
                      </div>
                      <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                          <span className="icon-circle-small icon-box-xs text-success bg-success-light"><i className="fa fa-fw fa-arrow-up"></i></span><span class="ml-1">10%</span>
                      </div>
                  </div>
              </div>
          </div>
          
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="card border-3 border-top border-top-primary">
                  <div className="card-body">
                      <h5 className="text-muted">Properties</h5>
                      <div className="metric-value d-inline-block">
                          <h3 className="mb-1">30</h3>
                      </div>
                      <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                          <span class="icon-circle-small icon-box-xs text-success bg-success-light"><i className="fa fa-fw fa-arrow-up"></i></span><span className="ml-1">5%</span>
                      </div>
                  </div>
              </div>
          </div>
          
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="card border-3 border-top border-top-primary">
                  <div className="card-body">
                      <h5 className="text-muted">Total Requests</h5>
                      <div className="metric-value d-inline-block">
                          <h3 className="mb-1">340</h3>
                      </div>
                      <div className="metric-label d-inline-block float-right text-danger font-weight-bold">
                          <span className="icon-circle-small icon-box-xs text-danger bg-danger-light bg-danger-light "><i className="fa fa-fw fa-arrow-down"></i></span><span className="ml-1">4%</span>
                      </div>
                  </div>
              </div>
          </div>
        </Row>

        {/* 
        <Row>        
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
              <Card>
                  <h5 className="card-header">Revenue by Property</h5>
                  <div className="card-body">
                      <div id="Chart-Doughnut" style="height: 420px;"></div> 
                  </div>
              //</Card>
         // </div>
        

          //<div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="card">
                  <h5 className="card-header"> Total Revenue</h5>
                  <div className="card-body">
                      <div id="morris_totalrevenue"></div>
                  </div>
                  <div className="card-footer">
                      <p className="display-7 font-weight-bold"><span className="text-primary d-inline-block">UGShs56,000,000</span><span className="text-success float-right">+9.45%</span></p>
                  </div>
              </div>
          </div>
       // </Row>  
       */}

        
        <Row>
          <Col>
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
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
