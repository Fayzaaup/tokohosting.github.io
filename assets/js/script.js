document.querySelectorAll('.smooth-scroll').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        var nftList = document.getElementById("nft-list");
        var viewMoreButton = document.querySelector(".view-more button");

        var itemsPerPage = 6; // Jumlah item yang ditampilkan per kali klik "View More"
        var currentItems = itemsPerPage;

        function showItems() {
            var items = nftList.querySelectorAll(".item");

            for (var i = 0; i < items.length; i++) {
                if (i < currentItems) {
                    items[i].style.display = "block";
                } else {
                    items[i].style.display = "none";
                }
            }

            if (currentItems >= items.length) {
                viewMoreButton.style.display = "none";
            }
        }

        showItems();

        viewMoreButton.addEventListener("click", function() {
            currentItems += itemsPerPage;
            showItems();
        });
    });