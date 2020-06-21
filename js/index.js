$(document).ready(function () {


    // Sticky cart
    // When the user scrolls the page, execute addStickyClass
    window.onscroll = function () { addStickyClass() };

    // Get the navbar
    var cart = document.getElementById("my-sticky-cart");

    // Get the offset position of the navbar
    var sticky = cart.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function addStickyClass() {
        if (window.pageYOffset >= sticky) {
            cart.classList.add("sticky")
        } else {
            cart.classList.remove("sticky");
        }
    }



    // Activate tabs
    function activeTab(obj) {
        // Delete all the "Active" classes
        $('.card-header-tabs li').removeClass('active');
        //Add "Active" class to clicked tab
        $(obj).addClass('active');
        //Get href of clicked tab
        var id = $(obj).find('a').attr('href');
        // Hide all the content of the other tabs
        $('.tab-item').hide();
        //Show clicked tab's content
        $(id).show();
    };

    $('.card-header-tabs li').click(function () {
        activeTab(this);
        return false;
    });

    activeTab($('.card-header-tabs li:first-child'));
    // End of Activate tabs

    // my product carousel 
    $('.my-product-carousel').slick({
        dots: true,
        infinite: false,
        speed: 300,
        autoplay: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // End of my product carousel

    // Logo carousel 
    $('.logo-carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // End of Logo carousel

    

    // Filter advanced search    

    $("#my-category-pg-brand").change(function () {
        $("#my-category-pg-brand option:selected").each(function () {
            var value = $(this).val().toLowerCase();
            if (value == "all") {
                $(".product").filter(function () {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) <= -1)
                });
            } else {
                $(".product").filter(function () {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            }
        });
    }).trigger("change");

    // Tabulation of category page
    $('.js-tabulation').tabulation();

    


});
