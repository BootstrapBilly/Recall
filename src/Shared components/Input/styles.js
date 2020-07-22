export const input_style = (props, input_focused, colours, erroneous_field) => {

    return {
        
        border: "none",
        borderBottom: props.text_area ? "none" : `1px solid ${input_focused ? colours.primary : erroneous_field === props.label ? "red" : "rgba(128, 128, 128, 0.2)"}`,
        background: "transparent",
        outline: "none",
        boxShadow: "none",
        width: props.authentication ? "90%" : "200px",
        color: colours.primary,
        marginTop: props.label === "TAGS FOR EASIER SEARCHING" ? "0px" : props.authentication ? "15px" : "25px",
        marginBottom: "5px",
        borderRadius: "0px",
    }

}

export const textarea_style = (props, input_focused, colours) => {

    return {
        background: props.add_new && "transparent",
        border: `1px solid ${input_focused ? colours.primary : "rgba(128, 128, 128, 0.2)"}`,
        padding: "5px 5px", paddingBottom: "15px",
        color: "black",
        width: "210px",
        right: "5px",
        marginTop:"20px"
    }

}