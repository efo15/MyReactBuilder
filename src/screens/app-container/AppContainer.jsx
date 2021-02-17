import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faDownload } from '@fortawesome/free-solid-svg-icons';

const Preview = <FontAwesomeIcon icon={faEye} size="lg" />;
const Download = <FontAwesomeIcon icon={faDownload} size="lg" />;

function CourseOptions(props) {
  return (
    <div className="course-options">
      <div>
        <button className={props.className}> <i className="icon-btn">{props.icon}</i> {props.name}</button>
      </div>
    </div>
  );
}

function AppContainer() {
  return (
    <div className="app-container">
      <div className="location-title">
        <h2>Course Editor View</h2>
        <CourseOptions name="Preview" className="preview-btn" icon={Preview} />
        <CourseOptions name="Download" className="download-btn" icon={Download} />
      </div>
    </div>
  )
}

export default AppContainer;