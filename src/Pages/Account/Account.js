import React from 'react'

//css
import classes from "./Account.module.css"

//components
import Nav from "../../Shared components/Nav/Nav"

//external
import { DndProvider, useDrag } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'



export const Account = () => {

    const item_types = {

        ITEM: "item"

    }

    const [{ isDragging }, drag] = useDrag({

        item: { type: item_types.ITEM },

        collect: (monitor) => ({

            isDragging: !!monitor.isDragging()
            
        })

    })

    return (

        <div className={classes.container}>

            <DndProvider backend={HTML5Backend}>

                {[1, 2, 3, 4, 5].map(i => 

                <div key={i} className={classes.item}>{i}</div>
                
                )}

            </DndProvider>

            <Nav />

        </div>

    )

}

export default Account