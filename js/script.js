document.querySelector('#searchInput')
        .addEventListener('input', filterList);

    function filterList() {
        const searchInput = document.querySelector('#searchInput');
        const filter = searchInput.value.toLowerCase();
        const listItems = document.querySelectorAll('#container .item');

        listItems.forEach((item) => {
            let text = item.textContent.toLowerCase();
            if (text.includes(filter)) {
                item.style.display = ''; // Show item
            } else {
                item.style.display = 'none'; // Hide item
            }
        });
    }


