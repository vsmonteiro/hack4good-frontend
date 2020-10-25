import React from "react";
import "./styles.css";
import odg1 from "../../images/Icons_web-01.png";
import odg8 from "../../images/Icons_web-08.png";
import odg10 from "../../images/Icons_web-10.png";
import odg11 from "../../images/Icons_WEB-11.png";
import odg13 from "../../images/Icons_web-13.png";
import odg14 from "../../images/Icons_web-14.png";
import odg15 from "../../images/Icons_web-15.png";
import odg17 from "../../images/Icons_web-17.png";

export default function Objectives(){

        return(
     <div className="bigrow">
        <div className="bigcolumn">
            <div className="row">
                <img className="objectivesImage" src={odg1} alt='Collectory' />
                <div className = "column">
                <p3 className = 'colorSDG1'> GOAL 1 </p3>
                <p3 className = 'colorSDG1'> End poverty in all its forms everywhere.</p3>
                </div>
            </div>
            
            <div className="row">
                <img className="objectivesImage" src={odg8} alt='Collectory' />
                <div className = "column">
                <p3 className = 'colorSDG8'> GOAL 8 </p3>
                <p3 className = 'colorSDG8'> Promote sustained, inclusive and sustainable economic growth, <br />full and productive employment and decent work for all.</p3>
                </div>
            </div>    

            <div className="row" style={{paddingBottom: '55px'}}>
                <img className="objectivesImage" src={odg10} alt='Collectory' />
                <div className = "column">
                <p3 className = 'colorSDG10'> GOAL 10 </p3>
                <p3 className = 'colorSDG10'> Reduce inequality within and among countries.</p3>
                </div>
            </div>  

            <div className="row">
                <img className="objectivesImage" src={odg11} alt='Collectory' />
                <div className = "column">
                <p3 className = 'colorSDG11'> GOAL 11 </p3>
                <p3 className = 'colorSDG11'> Make cities and human settlements inclusive, safe, resilient and <br /> sustainable.</p3>
                </div>
            </div>
            </div>  

            <div className="bigcolumn">
            <div className="row">
                <img className="objectivesImage" src={odg13} alt='Collectory' />
                <div className = "column">
                <p3 className = 'colorSDG13'> GOAL 13 </p3>
                <p3 className = 'colorSDG13'> Make cities and human settlements inclusive, safe, resilient and sustainable.</p3>
                </div>
            </div>  

            <div className="row">
                <img className="objectivesImage" src={odg14} alt='Collectory' />
                <div className = "column">
                <p3 className = 'colorSDG14'> GOAL 14 </p3>
                <p3 className = 'colorSDG14'> Conserve and sustainably use the oceans, seas and marine resouces <br /> for sustainable development.</p3>
                </div>
            </div> 

            <div className="row">
                <img className="objectivesImage" src={odg15} alt='Collectory' />
                <div className = "column">
                <p3 className = 'colorSDG15'> GOAL 15 </p3>
                <p3 className = 'colorSDG15'> Protect, restore and promote sustainable use of terestrial ecosystems, <br />sustainably manage forests, combat desertification, and halt and reverse <br /> land degradation and halt biodiversity loss.</p3>
                </div>
            </div> 

            <div className="row">
                <img className="objectivesImage" src={odg17} alt='Collectory' />
                <div className = "column">
                <p3 className = 'colorSDG17'> GOAL 17 </p3>
                <p3 className = 'colorSDG17'> Strengthen the means of implementation and revitalize the global <br /> partnership for sustainable development.</p3>
                </div>
            </div> 
        </div>  
    
        </div>
    )
}