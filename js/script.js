// for filtering object

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



//for toggle button

const toggleButtons = document.getElementsByClassName("toggle");

for (let i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener("click", function() {
        const content = document.querySelector("#content .content_box");
        
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block"; 
        } else {
            content.style.display = "none"; 
        }
    });
}

    

// Toggle the visibility

function toggleSearchInput() {
    var searchInput = document.getElementById('searchInput');
    searchInput.classList.toggle('show'); 
    searchInput.placeholder = "Search Product...";
}




// toggle the menu

function toggleMenu() {
    const menu = document.getElementById('menu');

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}



