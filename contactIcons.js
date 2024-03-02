function populateContactIcons() {
    const svgString = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#BDD5D7" class="bi bi-placeholder" viewBox="0 0 16 16" xmlns:xlink="http://www.w3.org/1999/xlink">';
    const urlString = '<a xlink:href=placeholder>';
    const pathString = '<path fill="#BDD5D7" d=placeholder />';
    const endString = '</a></svg>';

    fetch("svg-icons.txt")
        .then((res) => res.text())
        .then((text) => {
            // Split the text by lines
            const lines = text.split('\n');
            // Iterate over each line
            var tableBody = document.getElementById("iconTable");
            var newTableBody = document.createElement('tbody');
            newTableBody.setAttribute("id", "iconTable");
            tableBody.parentNode.replaceChild(newTableBody, tableBody);
            let row = newTableBody.insertRow();
            let cell = 0;
            lines.forEach((line, index) =>
            {
                if (index === 0) return;
                if (line)
                {
                    const pair = line.split(',');
                    let svgout = svgString.replace("placeholder", pair[0]) +
                        urlString.replace("placeholder", pair[1]) +
                        pathString.replace("placeholder", pair[2]) + endString;
                    //console.log(svgout);
                    let iconCell = row.insertCell(cell++);
                    iconCell.innerHTML = svgout;
                }
            });
        })
        .catch((e) => console.error(e));
}
