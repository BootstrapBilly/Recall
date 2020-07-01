import React from 'react'

//css
import classes from "./Search_tags.module.css"

//components
import Tag from "./Components/Tag"

export const Search_tags = props => {

    console.log(props.search_tags)
    return (

        <div className={classes.container}>
            
         {Array.isArray(props.search_tags) ? props.search_tags.map(tag => <Tag text={tag} />) : props.search_tags.split(" ").map(tag => <Tag text={tag} />)}

        </div>

    )

}

export default Search_tags
