module.exports = {
    title: 'ES-FE Document',
    description: 'Front-end team technical documentation',
    base: '/blog/',
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: '博客', link: '/article/' },
            { text: '指南', link: '/guid/' },
            { text: 'jira', link: 'http://jira.shipout.tech/secure/Dashboard.jspa' },
            { text: 'gitlab', link: 'http://gitlab.shipout.tech/' },
        ],
        sidebar: {
            '/article/': [
                ['dsl', '前端DSL实践']
            ]
        }
    }
}
