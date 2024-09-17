import React from "react";
import { menu_list } from "../../assets/assets";
import styles from "./ExploreMenu.module.css";
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className={styles.exploreMenu} id = "exploreMenu">
      <h1>Explore our menu</h1>
      <p className={styles.exploremenutext}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        pariatur ut ab odit blanditiis cum quos sint. Libero doloribus ab
        reprehenderit dolore, ut numquam similique ipsam. Exercitationem cumque
        maxime cupiditate.
      </p>
      <div className={styles.exploremenulist}>
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index} className={styles.exploremenulistitem}>
              <img className={category===item.menu_name?styles.active:""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
