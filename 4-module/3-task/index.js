function highlight(table) {
    let tableRows = table.rows;
    let StatusData, GenderData, AgeData, row = 0;

    for (row = 1; row < tableRows.length; row++) {

        StatusData = table.rows[row].cells[3].getAttribute("data-available");
        GenderData = table.rows[row].cells[2].textContent;
        AgeData = parseInt(table.rows[row].cells[1].textContent);

        //Gender
        (GenderData == "m") ? table.rows[row].classList.add('male') : table.rows[row].classList.add('female');
        // Status
        if (StatusData == null) {
            table.rows[row].setAttribute('hidden', '')
        } else if (StatusData == "true") {
            table.rows[row].classList.add('available')
        } else {
            table.rows[row].classList.add('unavailable')
        }
        //Age
        if (AgeData < 18) {
            table.rows[row].setAttribute('style', 'text-decoration: line-through')
        }
    }
}