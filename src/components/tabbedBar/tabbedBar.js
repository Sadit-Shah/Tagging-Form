"use client";
import Link from 'next/link';
import styles from './tabbedBar.module.css';
import { useState } from 'react';

export default function TabbedBar() {
  const [active, setactive] = useState([1, 0, 0, 0, 0]);

  const handleActive = (index) => {
    // Create a new array by spreading the current state
    const updatedActive = [0,0,0,0,0];
    
    // Toggle the value at the specified index
    updatedActive[index] = 1;
    
    // Update the state with the new array
    setactive(updatedActive);
  };
  return (
<div className={styles.tabbedBar}>
<nav>
  <Link href="#home" style={{ '--clr': '#f3218b' }} className={`${active[0] ? styles.active : ''}`} onClick={()=>handleActive(0)}>
      <span className={styles.icon}>
      <i className="fa-solid fa-house-chimney"></i>
      </span>
      <span className={styles.text}>Home</span>
    
  </Link>
  <Link href="#profile"  style={{ '--clr': '#2196f3' }} className={`${active[1] ? styles.active : ''}`} onClick={()=>handleActive(1)}>
      <span className={styles.icon}>
      <i className="fa-regular fa-user"></i>
      </span>
      <span className={styles.text}>Profile</span>
    
  </Link>
  <Link href="#messages" style={{ '--clr': '#008a1b' }} className={`${active[2] ? styles.active : ''}`} onClick={()=>handleActive(2)}> 
      <span className={styles.icon}>
      <i className="fa-regular fa-message"></i>
      </span>
      <span className={styles.text}>Messages</span>
    
  </Link>
  <Link href="#photos" style={{ '--clr': '#dc1dff' }} className={`${active[3] ? styles.active : ''}`} onClick={()=>handleActive(3)}>
      <span className={styles.icon}>
      <i className="fa-solid fa-camera"></i>
      </span>
      <span className={styles.text}>Photos</span>
  
  </Link>
  <Link href="#settings" style={{ '--clr': '#df6f1d' }} className={`${active[4] ? styles.active : ''}`} onClick={()=>handleActive(4)}>
      <span className={styles.icon}>
      <i className="fa-solid fa-gear"></i>
      </span>
      <span className={styles.text}>Settings</span>
   
  </Link>
  <div className={styles.indicator}></div>
</nav>
</div>
  );
}
