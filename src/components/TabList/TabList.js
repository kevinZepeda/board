import React, { PropTypes as T } from 'react'
import classnames from 'classnames'

import Tab from 'components/Tab/Tab'

import styles from './styles.module.css'


export class TabList extends React.Component {

    render () {
    //for each tab passed in by tablist, do something
    //tabs is a list of objects like {name: "name"}
    let tabs = this.props.tabs.map(tab => {
        let active;
        if(tab.name === this.props.activeTab) {
            active=true;
        }
        return(
            <Tab name={tab.name} key={tab.id} 
            onTabClick={this.props.onTabClick.bind(this)}
            active={active}/>
        );
    });
    //render the tabs with a temp heading
	return (
      <div className={styles.tablist}>
        {tabs}
      </div>
	);
    }
}

export default TabList
