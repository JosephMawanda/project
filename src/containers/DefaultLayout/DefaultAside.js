import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Progress, TabContent, TabPane, ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppSwitch } from '@coreui/react'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultAside extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '1' })}
                     onClick={() => {
                       this.toggle('1');
                     }}>
              <i className="icon-list"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '2' })}
                     onClick={() => {
                       this.toggle('2');
                     }}>
              <i className="icon-speech"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '3' })}
                     onClick={() => {
                       this.toggle('3');
                     }}>
              <i className="icon-settings"></i>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <ListGroup className="list-group-accent" tag={'div'}>
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Today</ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-warning list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="assets/img/avatars/2.jpg" alt="Profile avarter"></img>
                </div>
                <div>Meeting with <strong>Andrew</strong> </div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar"></i>&nbsp; 1 - 3pm
                </small>
                <small className="text-muted">
                  <i className="icon-location-pin"></i>  Boulevard kampala
                </small>
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-info list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="assets/img/avatars/4.jpg" alt="Profile avarter"></img>
                </div>
                <div>Skype with <strong>Fred Byamu</strong></div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar"></i>&nbsp; 4 - 5pm
                </small>
                <small className="text-muted">
                  <i className="icon-social-skype"></i> On-line
                </small>
              </ListGroupItem>
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Tomorrow</ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-danger list-group-item-divider">
                <div>New Property Project - <strong>deadline</strong></div>
                <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 10 - 11pm</small>
                <small className="text-muted"><i className="icon-home"></i>&nbsp; Rentpay HQ</small>
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-success list-group-item-divider">
                <div><strong>Real Estate Startups</strong> Meetup</div>
                <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 1 - 3pm</small>
                <small className="text-muted"><i className="icon-location-pin"></i>&nbsp; Hotel Africana</small>
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-primary list-group-item-divider">
                <div><strong>Team meeting</strong></div>
                <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 4 - 6pm</small>
                <small className="text-muted"><i className="icon-home"></i>&nbsp; Joseph Estates Ltd HQ</small>             
              </ListGroupItem>
            </ListGroup>
          </TabPane>
          <TabPane tabId="2" className="p-3">
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="Profile avarter" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Joseph Balikuddembe</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Add Units</div>
              <small className="text-muted">Add Units, to Mabiriizi complex, the latest property acquision
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="Profile avarter" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Joseph Balikuddembe</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Add Units</div>
              <small className="text-muted">Add Units, to Mabiriizi complex, the latest property acquision
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="Profile avarter" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Joseph Balikuddembe</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Add Units</div>
              <small className="text-muted"> Add Units, to Mabiriizi complex, the latest property acquision
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="Profile avarter" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Joseph Balikuddembe</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Add Units</div>
              <small className="text-muted">Add Units, to Mabiriizi complex, the latest property acquision
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="Profile avarter" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Joseph Balikuddembe</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Add Units</div>
              <small className="text-muted">Add Units, to Mabiriizi complex, the latest property acquision
              </small>
            </div>
          </TabPane>
          <TabPane tabId="3" className="p-3">
            <h6>Settings</h6>

            <div className="aside-options">
              <div className="clearfix mt-4">
                <small><b>Notifications</b></small>
                <AppSwitch className={'float-right'} variant={'pill'} label color={'success'} defaultChecked size={'sm'}/>
              </div>
              <div>
                <small className="text-muted"> Be notified when a new Notification arrives.
                </small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small><b>Password Protection</b></small>
                <AppSwitch className={'float-right'} variant={'pill'} label color={'success'} size={'sm'}/>
              </div>
              <div>
                <small className="text-muted">Protect your privacy
                </small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small><b>Backup Data</b></small>
                <AppSwitch className={'float-right'} variant={'pill'} label color={'success'} defaultChecked size={'sm'} disabled/>
                <div>
                  <small className="text-muted">Option disabled.</small>
                </div>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small><b>Automatic Warning</b></small>
                <AppSwitch className={'float-right'} variant={'pill'} label color={'success'} defaultChecked size={'sm'} />
              </div>
              <div>
                <small className="text-muted">Automatically send your Tenants warning messages
                </small>
              </div>
            </div>

            <hr />
            <h6>Account Utilization</h6>

            <div className="text-uppercase mb-1 mt-4">
              <small><b>Tenants</b></small>
            </div>
            <Progress className="progress-xs" color="info" value="25" />
            <small className="text-muted">100 Tenants/400 Purchased</small>

            <div className="text-uppercase mb-1 mt-2">
              <small><b>Properties</b></small>
            </div>
            <Progress className="progress-xs" color="warning" value="70" />
            <small className="text-muted">10</small>

            <div className="text-uppercase mb-1 mt-2">
              <small><b>total units Available</b></small>
            </div>
            <Progress className="progress-xs" color="danger" value="95" />
            <small className="text-muted">35/180</small>

            <div className="text-uppercase mb-1 mt-2">
              <small><b>administrators</b></small>
            </div>
            <Progress className="progress-xs" color="success" value="10" />
            <small className="text-muted">1/10</small>
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;
