// Load CSV and display table
Papa.parse('data/products.csv', {
    download: true,
    header: true,
    complete: function(results) {
        const data = results.data;
        displayTable(data);
    }
});

function displayTable(products) {
    const container = document.getElementById('product-table');
    let html = '<table><tr>';
    
    // table headers
    for (let key in products[0]) {
        html += `<th>${key}</th>`;
    }
    html += '</tr>';

    // table rows
    products.forEach(product => {
        html += '<tr>';
        for (let key in product) {
            html += `<td>${product[key]}</td>`;
        }
        html += '</tr>';
    });

    html += '</table>';
    container.innerHTML = html;
}
