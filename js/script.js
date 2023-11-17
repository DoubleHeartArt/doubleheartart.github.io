

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1013},"pages":[{"id":"page-home-page","displayName":"Home Page","link":{"linkType":"LinkTypePage","href":"#!page-home-page"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-contact-us","displayName":"Contact Us","link":{"linkType":"LinkTypePage","href":"#!page-contact-us"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-categories","displayName":"Categories","link":{"linkType":"LinkTypePage","href":"#!page-categories"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-bead-accessories","displayName":"Bead Accessories","link":{"linkType":"LinkTypePage","href":"#!page-bead-accessories"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-crochet-toys","displayName":"Crochet Toys","link":{"linkType":"LinkTypePage","href":"#!page-crochet-toys"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-crochet-accessories","displayName":"Crochet Accessories","link":{"linkType":"LinkTypePage","href":"#!page-crochet-accessories"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-paintings","displayName":"Paintings","link":{"linkType":"LinkTypePage","href":"#!page-paintings"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-merch","displayName":"Merch","link":{"linkType":"LinkTypePage","href":"#!page-merch"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-apps","displayName":"Apps","link":{"linkType":"LinkTypePage","href":"#!page-apps"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-privacy-policy","displayName":"Privacy Policy","link":{"linkType":"LinkTypePage","href":"#!page-privacy-policy"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false}]}

        $(function() {
            /* hamburger menu */
            $('.close-btn, .open-btn').click(function() {
                $('body').toggleClass('is-not-active is-active');
            });

            /*
                animation widget from here: https://github.com/silexlabs/Silex/issues/443
            */

            window.sr = ScrollReveal({
                distance: '100px'
            });
            sr.reveal('.from-left', { origin:  'left'});
            sr.reveal('.from-right', { origin:  'right'});
            sr.reveal('.from-top', { origin:  'top'});
            sr.reveal('.from-bottom', { origin:  'bottom'});

        })
    