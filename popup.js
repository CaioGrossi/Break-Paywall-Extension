document.addEventListener('DOMContentLoaded', function() {

    const redirectPageButton = document.getElementById('redirect_button');

    redirectPageButton.addEventListener('click', function() {

        chrome.tabs.query({ currentWindow: true, active: true }, function(tab) {
            const tab_url = tab[0].url;
            const tab_id = tab[0].id;

            chrome.tabs.update(tab_id, {
               url: `https://12ft.io/${tab_url}`
            });
         });
    });
});
