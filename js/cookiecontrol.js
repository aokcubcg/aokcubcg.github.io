
    window.addEventListener("load", function () {
        window.cookieconsent.initialise({
            "palette": {
                "popup": {
                    "background": "#237afc",
                    "text": "#ffffff"
                },
                "button": {
                    "background": "transparent",
                    "text": "#ffffff",
                    "border": "#fff"
                }
            },
            "type": "opt-in",
            "content": {
                "message": "本サイトではアクセス傾向の分析や改善を目的として，Cookieを利用しています。詳しくはプライバシーポリシーをご確認ください。",
                "dismiss": "拒否する",
                "allow": "同意する",
                "link": "詳細",
                "href": "https://aokcub.net/privacy.html"
            },
            onInitialise: function (status) {
                var type = this.options.type;
                var didConsent = this.hasConsented();
                if (type == 'opt-in' && didConsent) {
                    // enable cookies
                    alert('initialize enable');
                }
                if (type == 'opt-out' && !didConsent) {
                    // disable cookies
                    alert('initialize disable');
                }
            },

            onStatusChange: function (status, chosenBefore) {
                var type = this.options.type;
                var didConsent = this.hasConsented();
                if (type == 'opt-in' && didConsent) {
                    // enable cookies
                    alert('change enable');
                }
                if (type == 'opt-out' && !didConsent) {
                    // disable cookies
                    alert('change disable');
                }
            },

            onRevokeChoice: function () {
                var type = this.options.type;
                if (type == 'opt-in') {
                    // disable cookies
                    alert('revoke enable');
                }
                if (type == 'opt-out') {
                    // enable cookies
                    alert('revoke disable');
                }
            },
        })
    });
