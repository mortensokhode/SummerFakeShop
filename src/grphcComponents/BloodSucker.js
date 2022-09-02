import React from 'react'
// import { ReactComponent as BloodSuckerIcn } from "../img/frontal-bat-svgrepo-com.svg";
import { ReactComponent as BloodSuckerIcn } from "../img/testMove.svg";

function BloodSucker(props) {
  return (
    props.showIcon && (
          <svg className="myBat">
              <BloodSuckerIcn />
          </svg>
    ) 
  )
}

export default BloodSucker

