import React, { useEffect, useState, useRef} from "react";
import POIDataFilter from "../components/POIDataFilter";
import Navbar from "../components/Navbar";
import POIUsageTable from "../components/POIUsageTable";
import { useNavigate } from 'react-router-dom';

const config = require("../config/config");

const LandAllocation = () => {
    const [data, setData] = useState([]);
    const isFirstRender = useRef(true);
    const [filterOptions, setFilterOptions] = useState({
        step: 'day',
        from: '',
        to: '',
        Trailhead: true,
        Peak: true,
        Scenic: true,
        Lodge: true,
        Leanto: true,
        pois: '',
        min: 0,
        max: 0,
        average: false
    });
    const navigate = useNavigate();

    useEffect(() => {
        if(isFirstRender.current){
            isFirstRender.current = false;
            getPOIData();
        }
    }, [data, filterOptions]);

    /**
     * Function to apply filter options
     * Puts options into the correct format that the API expects
     * Creates a URL with the filter options as query parameters
     * Calls getFilteredData with the URL
     *  @param {object} options - filter options from POIDataFilter component
     */
    const handleFilterChange = (options) => {
        console.log(options);
        let types = '';
        let type = '';
        let pois = '';
        let poiTypes = {
            Trailhead: false,
            Peak: false,
            Scenic: false,
            Lodge: false,
            Leanto: false
        }
        for(const [key, value] of Object.entries(options.types)){
            if(value){
                types += key + ',';
            }
            poiTypes[key] = value;
        }
        options.selected.forEach(poi => {
            pois += poi + ',';
        });
        if(options.average){
            type = 'average';
        }else{
            type = 'total';
        }
        setFilterOptions({
            ...filterOptions, 
            from: options.from,
            to: options.to,
            min: options.min,
            max: options.max,
            average: options.average,
            step: options.step,
            Trailhead: poiTypes.Trailhead,
            Peak: poiTypes.Peak,
            Scenic: poiTypes.Scenic,
            Lodge: poiTypes.Lodge,
            Leanto: poiTypes.Leanto,
            pois: pois
        });
        const url = `${config.apiURL}/poi/${type}Usage?session_key=${sessionStorage.getItem('sessionKey')}&step=${options.step}&from=${options.from}&to=${options.to}&types=${types}&pois=${pois}&min=${options.minVal}&max=${options.maxVal}`
        getFilteredData(url);
    };

    /**
     * Function to get all POI usage data
     */
    const getPOIData = async () => {
        let max = 0;
        if(!sessionStorage.getItem('sessionKey')){
            console.error('No session key found');
            navigate('/login');
        }else{
            try{
                const response = await fetch(`${config.apiURL}/poi/allUsage?session_key=${sessionStorage.getItem('sessionKey')}`);
                if(response.status === 200){
                    const data = await response.json();
                    data.forEach(row => {
                        if(Number(row.visitors) > max){
                            max = Number(row.visitors);
                        }
                        row.date = row.date.split('T')[0];
                    });
                    setFilterOptions({...filterOptions, max: max});
                    setData(data);
                }else{
                    console.error('Failed to get data');
                }
            }
            catch(error){
                console.error(error);
            }
        }
    }

    /**
     * Function to get filtered POI usage data
     * @param {string} type - average or total(daily)
     */
    const getFilteredData = async (url) => {
        let max = 0;
        if(!sessionStorage.getItem('sessionKey')){
            console.error('No session key found');
            navigate('/login');
        }else{
            try{
                const response = await fetch(url);
                if(response.status === 200){
                    const data = await response.json();
                    data.forEach(row => {
                        if(row.visitors > max){
                            max = row.visitors;
                        }
                        row.date = row.date.split('T')[0];
                    });
                    setData(data);
                    setFilterOptions({...filterOptions, max: max});
                }else{
                    console.error('Failed to get data');
                }
            }
            catch(error){
                console.error(error);
            }
        }
    }

    return (
        <div className="h-screen bg-cover bg-home bg-center bg-fixed bg-no-repeat hero pt-8 pb-8 sm:p-8 overflow-y-scroll">
            <Navbar />
            <div className='flex flex-col items-center w-full mb-1'>
                <div className="flex flex-row mt-8 mb-4 w-full justify-center">
                    <POIDataFilter
                        filterOptions = {filterOptions}
                        handleFilterChange = {handleFilterChange}
                    />
                </div>
                <POIUsageTable
                    data = {data}
                />
            </div>
        </div>
    );
}

export default LandAllocation;
