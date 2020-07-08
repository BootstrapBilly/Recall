//this function was written by someone else https://codepen.io/liborgabrhel/pen/eyzwOx

const handle_text_area_change = (e, text_area_dimensions, set_text_area_dimensions, props) => {

    const textareaLineHeight = 24;
    const { minRows, maxRows } = text_area_dimensions;

    const previousRows = e.target.rows;
    e.target.rows = minRows; // reset number of rows in textarea 

    const currentRows = ~~(e.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
        e.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
        e.target.rows = maxRows;
        e.target.scrollTop = e.target.scrollHeight;
    }

    set_text_area_dimensions({ ...text_area_dimensions, rows: currentRows < maxRows ? currentRows : maxRows })

    props.onChange(e)

}

export default handle_text_area_change