(function() {var implementors = {};
implementors["pallet_account_linker"] = [{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_account_linker/weights/struct.SubstrateWeight.html\" title=\"struct pallet_account_linker::weights::SubstrateWeight\">SubstrateWeight</a>&lt;T&gt;","synthetic":true,"types":["pallet_account_linker::weights::SubstrateWeight"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"pallet_account_linker/pallet/enum.Event.html\" title=\"enum pallet_account_linker::pallet::Event\">Event</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Freeze,&nbsp;</span>","synthetic":true,"types":["pallet_account_linker::pallet::Event"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"pallet_account_linker/pallet/enum.Error.html\" title=\"enum pallet_account_linker::pallet::Error\">Error</a>&lt;T&gt;","synthetic":true,"types":["pallet_account_linker::pallet::Error"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_account_linker/pallet/struct.Pallet.html\" title=\"struct pallet_account_linker::pallet::Pallet\">Pallet</a>&lt;T&gt;","synthetic":true,"types":["pallet_account_linker::pallet::Pallet"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"pallet_account_linker/pallet/enum.Call.html\" title=\"enum pallet_account_linker::pallet::Call\">Call</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::BlockNumber: Freeze,&nbsp;</span>","synthetic":true,"types":["pallet_account_linker::pallet::Call"]}];
implementors["pallet_nft"] = [{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_nft/weights/struct.SubstrateWeight.html\" title=\"struct pallet_nft::weights::SubstrateWeight\">SubstrateWeight</a>&lt;T&gt;","synthetic":true,"types":["pallet_nft::weights::SubstrateWeight"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"pallet_nft/pallet/enum.Error.html\" title=\"enum pallet_nft::pallet::Error\">Error</a>&lt;T&gt;","synthetic":true,"types":["pallet_nft::pallet::Error"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"pallet_nft/pallet/enum.Event.html\" title=\"enum pallet_nft::pallet::Event\">Event</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::ClassId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::TokenId: Freeze,&nbsp;</span>","synthetic":true,"types":["pallet_nft::pallet::Event"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_nft/pallet/struct.Pallet.html\" title=\"struct pallet_nft::pallet::Pallet\">Pallet</a>&lt;T&gt;","synthetic":true,"types":["pallet_nft::pallet::Pallet"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"pallet_nft/pallet/enum.Call.html\" title=\"enum pallet_nft::pallet::Call\">Call</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::BlockNumber: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::ClassId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Lookup as StaticLookup&gt;::Source: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::TokenId: Freeze,&nbsp;</span>","synthetic":true,"types":["pallet_nft::pallet::Call"]},{"text":"impl Freeze for <a class=\"enum\" href=\"pallet_nft/enum.ClassProperty.html\" title=\"enum pallet_nft::ClassProperty\">ClassProperty</a>","synthetic":true,"types":["pallet_nft::ClassProperty"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_nft/struct.Properties.html\" title=\"struct pallet_nft::Properties\">Properties</a>","synthetic":true,"types":["pallet_nft::Properties"]},{"text":"impl&lt;BN, ID&gt; Freeze for <a class=\"struct\" href=\"pallet_nft/struct.ClassData.html\" title=\"struct pallet_nft::ClassData\">ClassData</a>&lt;BN, ID&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BN: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;ID: Freeze,&nbsp;</span>","synthetic":true,"types":["pallet_nft::ClassData"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_nft/struct.TokenData.html\" title=\"struct pallet_nft::TokenData\">TokenData</a>","synthetic":true,"types":["pallet_nft::TokenData"]},{"text":"impl&lt;ID&gt; Freeze for <a class=\"enum\" href=\"pallet_nft/enum.ClassType.html\" title=\"enum pallet_nft::ClassType\">ClassType</a>&lt;ID&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ID: Freeze,&nbsp;</span>","synthetic":true,"types":["pallet_nft::ClassType"]}];
implementors["pallet_offchain_worker"] = [{"text":"impl Freeze for <a class=\"enum\" href=\"pallet_offchain_worker/urls/enum.BlockChainType.html\" title=\"enum pallet_offchain_worker::urls::BlockChainType\">BlockChainType</a>","synthetic":true,"types":["pallet_offchain_worker::urls::BlockChainType"]},{"text":"impl Freeze for <a class=\"enum\" href=\"pallet_offchain_worker/urls/enum.DataSource.html\" title=\"enum pallet_offchain_worker::urls::DataSource\">DataSource</a>","synthetic":true,"types":["pallet_offchain_worker::urls::DataSource"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"pallet_offchain_worker/urls/struct.HttpGet.html\" title=\"struct pallet_offchain_worker::urls::HttpGet\">HttpGet</a>&lt;'a&gt;","synthetic":true,"types":["pallet_offchain_worker::urls::HttpGet"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"pallet_offchain_worker/urls/struct.HttpPost.html\" title=\"struct pallet_offchain_worker::urls::HttpPost\">HttpPost</a>&lt;'a&gt;","synthetic":true,"types":["pallet_offchain_worker::urls::HttpPost"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"pallet_offchain_worker/urls/enum.HttpRequest.html\" title=\"enum pallet_offchain_worker::urls::HttpRequest\">HttpRequest</a>&lt;'a&gt;","synthetic":true,"types":["pallet_offchain_worker::urls::HttpRequest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_offchain_worker/urls/struct.TokenInfo.html\" title=\"struct pallet_offchain_worker::urls::TokenInfo\">TokenInfo</a>","synthetic":true,"types":["pallet_offchain_worker::urls::TokenInfo"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_offchain_worker/urls/struct.EtherScanBalance.html\" title=\"struct pallet_offchain_worker::urls::EtherScanBalance\">EtherScanBalance</a>","synthetic":true,"types":["pallet_offchain_worker::urls::EtherScanBalance"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_offchain_worker/urls/struct.EtherScanResponse.html\" title=\"struct pallet_offchain_worker::urls::EtherScanResponse\">EtherScanResponse</a>","synthetic":true,"types":["pallet_offchain_worker::urls::EtherScanResponse"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_offchain_worker/urls/struct.InfuraBalance.html\" title=\"struct pallet_offchain_worker::urls::InfuraBalance\">InfuraBalance</a>","synthetic":true,"types":["pallet_offchain_worker::urls::InfuraBalance"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_offchain_worker/urls/struct.InfuraResponse.html\" title=\"struct pallet_offchain_worker::urls::InfuraResponse\">InfuraResponse</a>","synthetic":true,"types":["pallet_offchain_worker::urls::InfuraResponse"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_offchain_worker/weights/struct.SubstrateWeight.html\" title=\"struct pallet_offchain_worker::weights::SubstrateWeight\">SubstrateWeight</a>&lt;T&gt;","synthetic":true,"types":["pallet_offchain_worker::weights::SubstrateWeight"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_offchain_worker/pallet/crypto/struct.Public.html\" title=\"struct pallet_offchain_worker::pallet::crypto::Public\">Public</a>","synthetic":true,"types":["pallet_offchain_worker::pallet::crypto::Public"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_offchain_worker/pallet/crypto/struct.Signature.html\" title=\"struct pallet_offchain_worker::pallet::crypto::Signature\">Signature</a>","synthetic":true,"types":["pallet_offchain_worker::pallet::crypto::Signature"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_offchain_worker/pallet/crypto/struct.Pair.html\" title=\"struct pallet_offchain_worker::pallet::crypto::Pair\">Pair</a>","synthetic":true,"types":["pallet_offchain_worker::pallet::crypto::Pair"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_offchain_worker/pallet/crypto/struct.TestAuthId.html\" title=\"struct pallet_offchain_worker::pallet::crypto::TestAuthId\">TestAuthId</a>","synthetic":true,"types":["pallet_offchain_worker::pallet::crypto::TestAuthId"]},{"text":"impl&lt;AccountId&gt; Freeze for <a class=\"struct\" href=\"pallet_offchain_worker/pallet/struct.QueryKey.html\" title=\"struct pallet_offchain_worker::pallet::QueryKey\">QueryKey</a>&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,&nbsp;</span>","synthetic":true,"types":["pallet_offchain_worker::pallet::QueryKey"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"pallet_offchain_worker/pallet/enum.Event.html\" title=\"enum pallet_offchain_worker::pallet::Event\">Event</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::BlockNumber: Freeze,&nbsp;</span>","synthetic":true,"types":["pallet_offchain_worker::pallet::Event"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"pallet_offchain_worker/pallet/enum.Error.html\" title=\"enum pallet_offchain_worker::pallet::Error\">Error</a>&lt;T&gt;","synthetic":true,"types":["pallet_offchain_worker::pallet::Error"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_offchain_worker/pallet/struct.Pallet.html\" title=\"struct pallet_offchain_worker::pallet::Pallet\">Pallet</a>&lt;T&gt;","synthetic":true,"types":["pallet_offchain_worker::pallet::Pallet"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"pallet_offchain_worker/pallet/enum.Call.html\" title=\"enum pallet_offchain_worker::pallet::Call\">Call</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::BlockNumber: Freeze,&nbsp;</span>","synthetic":true,"types":["pallet_offchain_worker::pallet::Call"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()