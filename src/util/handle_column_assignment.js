const handle_column_assignment = (notes) => {

    //set the amount of columns based on the width of the window and the amount of notes to display

    if(window.innerWidth <= 800) return 1

    if(window.innerWidth <= 1100) {
        
        if(notes.length < 2) return 1
        return 2
    
    }

    if(window.innerWidth <= 1400) {

        if(notes.length < 2) return 1
        if(notes.length < 3) return 2

        return 3}

    else {

        if(notes.length < 2) return 1
        if(notes.length < 3) return 2
        if(notes.length < 4) return 3

        return 4
    }
    

}

export default handle_column_assignment