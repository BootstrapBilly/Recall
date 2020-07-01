import React, {useEffect, useState} from 'react'

//css
import classes from "./Search_tags.module.css"

//components
import Tag from "./Components/Tag"

export const Search_tags = props => {

    const [search_tags, set_search_tags] = useState(props.search_tags.filter(tag => tag !== ""))

    useEffect(()=> {

        if(props.edit_mode){ 
            
            if(!search_tags.find(tag => tag === "Add new"))
            set_search_tags(search_tags => [...search_tags, "Add new"])
        
        }

        if(!props.edit_mode){

            set_search_tags(search_tags => [...search_tags.filter(tag => tag !== "Add new")])
        }
    
    },[props.edit_mode])

    return (

        <div className={classes.container} style={{marginBottom: props.edit_mode && "1px"}}>

            {Array.isArray(props.search_tags) ?
                search_tags
                .map((tag, index) =>
                    <Tag text={tag} edit_mode={props.edit_mode} new={props.edit_mode && index === props.search_tags.length - 1 && true} />
                )

                :

                search_tags.split(" ")
                .map((tag, index) =>
                    <Tag text={tag} edit_mode={props.edit_mode} new={props.edit_mode && index === props.search_tags.length - 1 && true} />
                )}

        </div>

    )

}

export default Search_tags
