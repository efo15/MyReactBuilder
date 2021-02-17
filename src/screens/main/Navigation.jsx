import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faChartLine, faHome, faImages, faUserCircle, faUserCog } from '@fortawesome/free-solid-svg-icons';

const Home = <FontAwesomeIcon icon={faHome} size="lg" />;
const Assets = <FontAwesomeIcon icon={faImages} size="lg" />;
const Notications = <FontAwesomeIcon icon={faBell} size="lg" />;
const Reports = <FontAwesomeIcon icon={faChartLine} size="lg" />;
const User = <FontAwesomeIcon icon={faUserCircle} size="lg" />;
const UserCog = <FontAwesomeIcon icon={faUserCog} size="lg" />;

function QuickLinkMenuIcon(props) {
  return (
    <div className="quicklink-menu-item-icon">
      <div>
        <button> <i>{props.icon}</i></button>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation-inner">
        <div className="quickLinkMenu">
          <QuickLinkMenuIcon name="Dashboard" icon={Home} className="user-menu-items" />
          <QuickLinkMenuIcon name="Asset Management" icon={Assets} className="user-menu-items" />
          <QuickLinkMenuIcon name="Reports" icon={Reports} className="user-menu-items" />
          <div className="user-profile">
          <QuickLinkMenuIcon name="Notifications" icon={Notications} />
          <QuickLinkMenuIcon name="Notifications" icon={UserCog} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;