/**
 * POISelect.js - Component for selecting points of interest (POIs).
 * This component provides a multi-select dropdown menu for selecting POIs.
 */

 import React, { useState, useEffect, useRef } from "react"; // Importing React and necessary hooks
 import { MultiSelect } from 'react-multi-select-component'; // Importing MultiSelect component
 import '../assets/stylesheets/POISelect.css'; // Importing component-specific CSS
 
 /**
  * POISelect - Functional component for selecting points of interest (POIs).
  * @param {Object} props - Component props
  * @param {Function} props.handleChange - Function to handle change in selected POIs
  * @returns {JSX.Element} - Rendered component
  */
 const POISelect = (props) => {
     const [selected, setSelected] = useState([]); // State for selected POIs
     const isFirstRender = useRef(true);

     useEffect(() => {
        console.log(props.preselected);
     }, [props.preselected]);


     useEffect(() => {
        if(isFirstRender.current && props.pois.length > 0 && props.preselected.length > 0) {
            let selectionValues = props.pois.filter(poi => props.preselected.includes(poi.value));
            setSelected(selectionValues);
            isFirstRender.current = false;
        }
     }, [props.preselected, props.pois]);

     // useEffect hook to handle changes in selected POIs
     useEffect(() => {
         props.handleChange(selected); // Calling handleChange function with selected POIs
     }, [selected]);
 
     // Render the component
     return (
         <div className="flex flex-col w-full">
             <div className="flex flex-row justify-between">
                 <label className="text-sm">Points Of Interest</label>
                 <div className="text-red">*</div>
             </div>
             {/* MultiSelect component for selecting POIs */}
             <MultiSelect
                 options={props.pois} // Options for POIs
                 labelledBy="Points of Interest" // Accessibility label
                 onChange={setSelected} // Function to handle change in selection
                 hasSelectAll={false} // Disable select all option
                 value={selected} // Selected values
                 showCheckbox={true} // Show checkboxes
                 className="multiSelect" // Custom CSS class
             />
         </div>
     );
 };
 
 POISelect.defaultProps = {
    preselected: []
  };

 export default POISelect; // Exporting POISelect component
 