function populateContactIcons() {
    const svgString = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0A2C5C" class="bi bi-placeholder" viewBox="0 0 16 16" xmlns:xlink="http://www.w3.org/1999/xlink">';
    const urlString = '<a xlink:href=placeholder>';
    const pathString = '<path fill="#0A2C5C" d=placeholder />';
    const endString = '</a></svg>';

    fetch("svg-icons.txt")
        .then((res) => res.text())
        .then((text) => {
            // Split the text by lines
            const lines = text.split('\n');

            // Get the table body element
            const tableBody = document.getElementById("iconTable");
            const newTableBody = document.createElement('tbody');
            newTableBody.setAttribute("id", "iconTable");
            tableBody.parentNode.replaceChild(newTableBody, tableBody);

            lines.forEach((line, index) => {
                if (index === 0) return; // Skip the header or first line
                if (line) {
                    const pair = line.split(',');
                    let svgout = svgString.replace("placeholder", pair[0]) +
                        urlString.replace("placeholder", pair[1]) +
                        pathString.replace("placeholder", pair[2]) + endString;
                    svgout += '<a href=' + pair[1] + '>' + ' ' + pair[0] + '</a>';

                    // Create a new row for each icon
                    let row = newTableBody.insertRow();
                    let iconCell = row.insertCell(0);
                    iconCell.innerHTML = svgout;
                }
            });
        })
        .catch((e) => console.error(e));
}
