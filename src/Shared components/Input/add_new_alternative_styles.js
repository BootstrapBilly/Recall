export const input_style = (props, input_focused, colours) => {

    return {
        
        border: "none",
        borderBottom: props.text_area ? "none" : `1px solid ${input_focused ? colours.primary : "rgba(128, 128, 128, 0.2)"}`,
        background: "transparent",
        outline: "none",
        boxShadow: "none",
        width: "200px",
        color: colours.primary,
        marginTop: props.label === "TAGS FOR EASIER SEARCHING" ? "0px" : "25px",
        marginBottom: "5px",
        borderRadius: "0px"
    }

}

export const textarea_style = (props, input_focused, colours) => {

    return {
        background: props.add_new && "transparent",
        border: `1px solid ${input_focused ? colours.primary : "rgba(128, 128, 128, 0.2)"}`,
        padding: "5px 5px", paddingBottom: "15px",
        color: colours.secondary,
        width: "230px",
        right: "15px"
    }

}