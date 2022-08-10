import React from "react";
import { useSelector } from "react-redux";
import { Horse } from './styled'
import '../App.css'
export default function Race() {
    const horses = useSelector((state) => state.horses.horses);
    
    return (
        <ul>
            {horses?.map((horse, index) => (
                <ul key={index} className="main" >
                    <div className="horse">
                        {horse.name}
                        <Horse value={horse.distance}>
                            🐴
                        </Horse>
                    </div>
                    <div className="finish">
                        <h2>
                            {horse.distance === 1000
                                ? "Finished"
                                : "🏁 Distance: " + horse.distance}
                        </h2>
                    </div>
                    
                </ul> 
            ))}
           
        </ul>
    );
}
