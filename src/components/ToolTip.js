import React from "react";

//  TWO FUNCTIONS FOR HANDLING THE POSITION FOR HOVERING
class ToolTip extends React.Component{
    tooltipPos = () =>{
        return `${this.props.position}`;
    }

    render(){
        return (
            
            <div className={`${this.tooltipPos()}`}>
                   I am {this.props.position} position...

            </div>
        )
    }
}

export default ToolTip;