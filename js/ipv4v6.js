function ipv4v6(data) {
		if(data && data.type && data.type=='ipv6' && window.location.href.substr(0,v6url.length)!=v6url){
			window.open('https://v6.alist.viklion.cn');
		}
		else{
			window.open('https://alist.viklion.cn');
			}
		}