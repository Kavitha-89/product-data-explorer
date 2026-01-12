let allProducts = []; // to store all data globally

// Load CSV and display table
Papa.parse('data/products.csv', {
    download: true,
    header: true,
    complete: function(results) {
        allProducts = results.data;
        displayTable(allProducts);
        setupSearch(); // Initialize search after loading data
    }
});

function displayTable(products) {
    const container = document.getElementById('product-table');
    if (products.length === 0) {
        container.innerHTML = "<p>No products found.</p>";
        return;
    }

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

// Filter table based on search input
function setupSearch() {
    const input = document.getElementById('search-input');
    input.addEventListener('input', function() {
        const query = input.value.toLowerCase();
        const filtered = allProducts.filter(product => {
            return product.Name.toLowerCase().includes(query) ||
                   product.Category.toLowerCase().includes(query);
        });
        displayTable(filtered);
    });
}

