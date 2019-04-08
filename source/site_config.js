var siteConfig = {

    content: [
        {
            id: 'intro',
            template: 'layout/side_menu_item',
            data: {
                title: 'Intro',
                icon: 'info_outline',
                link: '#/intro',
                file: 'content/intro.html'
            }
        },
        {
            id: 'read',
            template: 'layout/side_menu_item',
            data: {
                title: 'Read',
                icon: 'import_contacts',
                link: '#/read/strings_theory'
            },
            list: [
                {
                    id: 'strings_theory',
                    template: 'layout/side_menu_subitem',
                    data: {
                        title: 'Strings Theory',
                        link: '#/read/strings_theory',
                        file: 'content/docs/strings_theory.html'
                    }
                },
                {
                    id: 'mind_god',
                    template: 'layout/side_menu_subitem',
                    data: {
                        title: 'Mind of God',
                        link: '#/read/mind_god',
                        file: 'content/docs/mind_god.html'
                    }
                }
            ]
        },
        {
            id: 'kit',
            template: 'layout/side_menu_item',
            data: {
                title: 'Author',
                icon: 'extension',
                link: 'https://danielkapexhiu.com/'
            }
        }
    ],

    strings: {
        startPage: '#/intro',
        baseUrl: '/',
        title: 'Intro'
    }

};
if (typeof module !== 'undefined') {
    module.exports = siteConfig;
}
