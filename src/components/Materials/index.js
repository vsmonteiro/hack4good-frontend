import React, { useEffect, useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import plastic_bottle from "../../images/plastic-bottle.png";
import soda_can from "../../images/soda_can.png";
import glass_bin from "../../images/glass-bin.png";
import paperImg from "../../images/paper.png";
import plastic_bin from "../../images/plastic-bin.png";
import metal from "../../images/metal.png";
import organic from "../../images/organic.png";
import battery from "../../images/battery.png";
import monitor from "../../images/monitor.png";
import armchair from "../../images/armchair.png";

// import broken-glass from '../../images/broken-glass.png'
import "./styles.css";

export default function Materials({ getMaterialsValue }) {
  const [batteryState, setBatteryState] = useState(false);
  const [cansState, setCansState] = useState(false);
  const [electronics, setElectronics] = useState(false);
  const [furniture, setFurniture] = useState(false);
  const [glassState, setGlassState] = useState(false);
  const [kitchenOilState, setKitchenOil] = useState(false);
  const [metalState, setMetalState] = useState(false);
  const [organicState, setOrganicState] = useState(false);
  const [paper, setPaper] = useState(false);
  const [plastic, setPlastic] = useState(false);

  const materials = [
    { name: "Battery", image: battery, state: cansState, setState: setBatteryState },
    { name: "Cans", image: soda_can, state: batteryState, setState: setCansState },
    { name: "Electronics", image: monitor, state: electronics, setState: setElectronics },
    { name: "Furniture", image: armchair, state: furniture, setState: setFurniture },
    { name: "Glass", image: glass_bin, state: glassState, setState: setGlassState },
    { name: "Kitchen Oil", image: plastic_bottle, state: kitchenOilState, setState: setKitchenOil },
    { name: "Metal", image: metal, state: metalState, setState: setMetalState },
    { name: "Organic", image: organic, state: organicState, setState: setOrganicState },
    { name: "Paper", image: paperImg, state: paper, setState: setPaper },
    { name: "Plastic", image: plastic_bin, state: plastic, setState: setPlastic },
  ];

  useEffect(() => {
    const nameMaterials = materials.map(mat => {
      if(mat.state){
        return mat.name
      }
    })

    getMaterialsValue(nameMaterials.filter(val => val !== undefined))
  }, [
    batteryState,
    cansState,
    electronics,
    furniture,
    glassState,
    kitchenOilState,
    metalState,
    organicState,
    paper,
    plastic,
  ]);

  return (
    <div className='images-container'>
      {materials.map((material) => (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <input
            value={material.state}
            onChange={(e) => material.setState(e.target.checked)}
            type='checkbox'
            id={material.name}
          />
          <label for={material.name}>
            <img className='img' src={material.image} alt={material.name} />{" "}
          </label>
          <p2>{material.name}</p2>
        </div>
      ))}

      {/* <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input type='checkbox' id='myCheckbox8' />
        <label for='myCheckbox8'>
          <img className='img' src={battery} alt='battery' />{" "}
        </label>
        <p2>Battery</p2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input type='checkbox' id='myCheckbox2' />
        <label for='myCheckbox2'>
          <img className='img' src={soda_can} alt='soda can' />
        </label>
        <p2>Cans</p2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input type='checkbox' id='myCheckbox9' />
        <label for='myCheckbox9'>
          <img className='img' src={monitor} alt='monitor' />{" "}
        </label>
        <p2>Electronics</p2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input type='checkbox' id='myCheckbox10' />
        <label for='myCheckbox10'>
          <img className='img' src={armchair} alt='armchair' />{" "}
        </label>
        <p2>Furniture</p2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input type='checkbox' id='myCheckbox3' />
        <label for='myCheckbox3'>
          <img className='img' src={glass_bin} alt='glass bin' />
        </label>
        <p2>Glass</p2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input type='checkbox' id='myCheckbox1' />
        <label for='myCheckbox1'>
          <img className='img' src={plastic_bottle} alt='plastic bottle' />
        </label>
        <p2>Kitchen Oil</p2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input type='checkbox' id='myCheckbox6' />
        <label for='myCheckbox6'>
          <img className='img' src={metal} alt='metal' />{" "}
        </label>
        <p2>Metal</p2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input type='checkbox' id='myCheckbox7' />
        <label for='myCheckbox7'>
          <img className='img' src={organic} alt='organic' />{" "}
        </label>
        <p2>Organic</p2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input type='checkbox' id='myCheckbox4' />
        <label for='myCheckbox4'>
          <img className='img' src={paper} alt='paper' />
        </label>
        <p2>Paper</p2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input type='checkbox' id='myCheckbox5' />
        <label for='myCheckbox5'>
          <img className='img' src={plastic_bin} alt='plastic bin' />{" "}
        </label>
        <p2>Plastic</p2>
      </div> */}
    </div>
  );
}
