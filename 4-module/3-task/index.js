function highlight(table) {
    let statusData, genderData, ageData, row = 0;

    for (row = 1; row < table.rows.length; row++) {
        statusData = table.rows[row].cells[3].dataset.available;
        genderData = table.rows[row].cells[2].textContent;
        ageData = parseInt(table.rows[row].cells[1].textContent);
        (genderData == "m") ? table.rows[row].classList.add('male') : table.rows[row].classList.add('female');
        
        if (statusData == null) {
            table.rows[row].setAttribute('hidden', '')
        } else if (statusData == "true") {
            table.rows[row].classList.add('available')
        } else {
            table.rows[row].classList.add('unavailable')
        }
        
        if (ageData < 18) {
            table.rows[row].style.textDecoration = "line-through";
        }
    }
}