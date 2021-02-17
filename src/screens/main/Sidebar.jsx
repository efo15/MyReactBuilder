import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, faArrowLeft, faShareAlt, faChalkboardTeacher, faThList, faTimes, faSave, faTags } from '@fortawesome/free-solid-svg-icons';

const NewCourse = <FontAwesomeIcon icon={faFolderPlus} size="lg" />;
const ArrowLeft = <FontAwesomeIcon icon={faArrowLeft} size="lg" />;
const MyCourses = <FontAwesomeIcon icon={faChalkboardTeacher} size="lg" />;
const Shared = <FontAwesomeIcon icon={faShareAlt} size="lg" />;
const Catalogue = <FontAwesomeIcon icon={faThList} size="lg" />;
const Cancel = <FontAwesomeIcon icon={faTimes} size="lg" />;
const Save = <FontAwesomeIcon icon={faSave} size="lg" />;
const Tags = <FontAwesomeIcon icon={faTags} size="lg" />;

function DashboardOptions(props) {
  return (
    <div className="dashboard-options">
      <div>
        <button className={props.className}> <i className="icon-btn">{props.icon}</i> {props.name}</button>
      </div>
    </div>
  );
}

function DashboardFilter(props) {
  return (
    <div className="dashboard-filter">
      <div>
        <h3>Search</h3>
        <input type="text" className="sidebar-search" placeholder="Search"/>
        <h3>Filter</h3>
        <button className={props.className}> <i className="icon-btn">{props.icon}</i> {props.name}</button>
      </div>
    </div>
  );
}

function Siderbar() {
  return (
    <div className="siderbar">
      <div classname="siderbar-inner">
        <div className="sidebar-item-title">
          <h2>Dashboard</h2>
          <DashboardOptions name="Add new course" icon={NewCourse} className="dashboard-btn" />
          <DashboardOptions name="My courses" icon={MyCourses} className="dashboard-btn__courses" />
          <DashboardOptions name="Shared courses" icon={Shared} className="dashboard-btn__courses" />
          <DashboardOptions name="Catalogue" icon={Catalogue} className="dashboard-btn__courses" />

          <DashboardFilter name="Filter by Tags" icon={Tags} className="dashboard-btn__filter" />
          {/* button tests */}
          {/* <DashboardOptions name="Back" icon={ArrowLeft} className="backtest-btn" />
          <DashboardOptions name="Save" icon={Save} className="dashboard-btn__courses" />
          <DashboardOptions name="Cancel" icon={Cancel} className="backtest-btn" /> */}

        </div>
      </div>
    </div>
  );
}

export default Siderbar;