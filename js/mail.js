// Builds mailto links in the browser so the address never appears as a whole in the HTML source.
document.querySelectorAll('a[data-mail-user]').forEach(function (link) {
    link.href = 'mailto:' + link.dataset.mailUser + '@' + link.dataset.mailDomain;
});
