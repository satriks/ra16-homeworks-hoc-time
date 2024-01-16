import moment from "moment";
import { ReactNode} from "react";
import React from 'react'

export default function ModificateDateTime(Component : React.ElementType, date : string){

    const dateLabel = (date : string) => {
   
        const dif = moment() - moment(date)
 
        let res = `${Math.floor(dif / (1000 * 60 *60 * 24))} дней назад`
        
        if (dif < 1000 * 60 * 60 * 24 ) res = "5 часов назад"
        if (dif < 1000 * 60 * 60) res = "12 минут назад"
        
        return res
        
        }

    const newDate =  dateLabel(date)    

    return class extends React.Component{

        render(): ReactNode {
            return (
                <Component date={newDate}/>
            )
        }
    }
    }

    

    
    
