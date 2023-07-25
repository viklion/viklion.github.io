function _jqjsp(data) {
    if (data && data.type && data.type === 'ipv6') {
        var link = document.querySelector('a[href="https://alist.viklion.cn"]');
        if (link) {
            link.href = 'https://v6.alist.viklion.cn';
        }
    }
}