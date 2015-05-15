(function (window) {
    var glob = window.global;
    OAuth.initialize(glob.public_key);

    var $fb = document.querySelector(".facebook");
    var $tw = document.querySelector(".twitter");

    $fb.addEventListener("click", OAuthpopup('facebook'), false);
    $tw.addEventListener("click", OAuthpopup("twitter"), false);

    /* This function is a boilerplate to get the access and then in
     * the success branch the user information */
    function OAuthpopup(provider, callback) {
        return function () {
            OAuth.popup(provider)
                .done(function (result) {
                    console.log(result)
                    result.me().done(function () {
                        if (typeof callback == "function") {
                            callback.call(arguments);
                        }
                        console.log(arguments);
                    })
                })
                .fail(function (err) {
                    console.error(provider + " login failed", err);
                });
        }

    }

})(window, undefined)