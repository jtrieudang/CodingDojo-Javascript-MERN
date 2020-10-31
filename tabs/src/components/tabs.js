import React, { useState } from 'react';
import styles from './tabs.module.css'

function Tabs(props) {
    //assuming it starts with 0
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <div className={styles.headers}>
                {/* loop thru each items by creating with map */}
                {props.items.map((item, i) => {
                    return (
                        <div key={i}
                            className={styles.header + (i == activeIndex ? ' ' + styles.active : ' ')} onClick={()=> setActiveIndex(i)}>
                            {item.label}
                        </div>
                    )
                })}
            </div>
            {/* outside of the header */}
            <div className={styles.content}>
                {props.items[activeIndex].content}
            </div>
        </div>
    );
}


export default Tabs;