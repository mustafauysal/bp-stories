function buildItem(id, type, length, src, preview, link, seem, time){
	return {
		"id": id,
		"type": type,
		"length": length,
		"src": src,
		"preview": preview,
		"link": link,
		"seem": seem,
		"time": time
	};
}

var initBpStories = function(){
	var header = document.getElementById("header");
	var skin = location.href.split('skin=')[1];

	if(!skin) {
		skin = 'Snapgram';
	}

	if(skin.indexOf('#')!==-1){
		skin = skin.split('#')[0];
	}

	var skins = {
		'Snapgram': {
			'avatars': true,
			'list': false,
			'autoFullScreen': false
		},

		'VemDeZAP': {
			'avatars': false,
			'list': true,
			'autoFullScreen': false
		},

		'FaceSnap': {
			'avatars': true,
			'list': false,
			'autoFullScreen': true
		},

		'Snapssenger': {
			'avatars': false,
			'list': false,
			'autoFullScreen': false
		}
	};

	var stories = new Zuck('stories', {
		backNative: true,
		autoFullScreen: skins[skin]['autoFullScreen'],
		skin: skin,
		avatars: skins[skin]['avatars'],
		list: skins[skin]['list'],
		localStorage: true,
		stories: [
			{
				id: "jjj",
				photo: "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-19/s320x320/14474109_106423119826964_1391073283641704448_a.jpg",
				name: "JJJ",
				link: "https://jjj.blog/",
				lastUpdated: 1492431096855,
				items: [
					buildItem("jjj-1", "photo", 3, "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-15/e35/17817800_146697099194149_374247150772551680_n.jpg", "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-15/e35/17817800_146697099194149_374247150772551680_n.jpg", '', false, 1492431096855),
					buildItem("jjj-2", "photo", 3, "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-15/e35/17493735_1703491819944470_6535305946506199040_n.jpg", "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-15/e35/17493735_1703491819944470_6535305946506199040_n.jpg", 'https://jjj.blog', false, 1492303299037),
					buildItem("jjj-3", "video", 0, "http://instagram.fada1-4.fna.fbcdn.net/t50.2886-16/17839704_1252414858205358_1808043144122466304_n.mp4", "http://instagram.fada1-4.fna.fbcdn.net/t50.2886-16/17839704_1252414858205358_1808043144122466304_n.mp4", '', false, 1492303299037)
				]
			},
			{
				id: "photomatt",
				photo: "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-19/s320x320/12328295_957431637638102_1870122738_a.jpg",
				name: "photomatt",
				link: "https://ma.tt/",
				lastUpdated: 1492107321886,
				items: [
					buildItem("photomatt-1", "video", 0, "https://instagram.fada1-4.fna.fbcdn.net/t50.2886-16/17583265_194167704412979_3188843020610961408_n.mp4", "https://instagram.fada1-4.fna.fbcdn.net/t50.2886-16/17583265_194167704412979_3188843020610961408_n.mp4", '', false, 1492107321886),
					buildItem("photomatt-2", "photo", 3, "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-15/e35/16906639_1672167796410551_6603579103125700608_n.jpg", "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-15/e35/16906639_1672167796410551_6603579103125700608_n.jpg", '', false, 1492303299037),
					buildItem("photomatt-3", "photo", 3, "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-15/e35/16230849_780714422094740_2762344951277682688_n.jpg", "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-15/e35/16230849_780714422094740_2762344951277682688_n.jpg", '', false, 1492431344008)
				]
			},
			{
				id: "adele",
				photo: "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-19/s320x320/13734412_1043566459046588_1746466105_a.jpg",
				name: "adele",
				link: "",
				lastUpdated: 1492179190787,
				items: [
					buildItem("adele-1", "photo", 5, "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-15/e35/17596091_1887928184754199_5923640313645105152_n.jpg", "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-15/e35/17596091_1887928184754199_5923640313645105152_n.jpg", '', false, 1492179190787),
					buildItem("adele-2", "photo", 3, "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-15/e35/17438146_281412432282262_2211844647758594048_n.jpg", "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-15/e35/17438146_281412432282262_2211844647758594048_n.jpg", '', false, 1492303299037),
				]
			},
			{
				id: "myspacetom",
				photo: "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-19/11417387_416005575260074_1274881932_a.jpg",
				name: "myspacetom",
				link: "",
				lastUpdated: 1492303299037,
				items: [
					buildItem("myspacetom-1", "photo", 0, "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-15/e35/17932142_1808327742827805_5981710367431065600_n.jpg", "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-15/e35/17932142_1808327742827805_5981710367431065600_n.jpg", '', false, 1492303299037),
					buildItem("myspacetom-2", "photo", 3, "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-15/e35/17934117_1847832598800104_2137632105419505664_n.jpg","https://instagram.fada1-4.fna.fbcdn.net/t51.2885-15/e35/17934117_1847832598800104_2137632105419505664_n.jpg", '', false, 1492107229660),
				]
			},
			{
				id: "coldplay",
				photo: "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-19/s320x320/13703042_133639940402874_1466232815_a.jpg",
				name: "coldplay",
				link: "",
				lastUpdated: 1492303299037,
				items: [
					buildItem("coldplay-1", "photo", 5, "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-15/e35/17934505_289767804813434_5289136557259751424_n.jpg", "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-15/e35/17934505_289767804813434_5289136557259751424_n.jpg", '', false, 1492303299037),
					buildItem("coldplay-2", "photo", 5, "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-15/e35/17882302_1897909623824710_7619462056881684480_n.jpg", "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-15/e35/17882302_1897909623824710_7619462056881684480_n.jpg", '', false, 1492303299037)
				]
			},
			{
				id: "lanadelrey",
				photo: "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-19/s320x320/17662413_131883597346050_6214302852467130368_a.jpg",
				name: "lanadelrey",
				link: "",
				lastUpdated: 1492303299037,
				items: [
					buildItem("lanadelrey-1", "video", 0, "https://instagram.fada1-4.fna.fbcdn.net/t50.2886-16/17972566_2257302231162060_4808089186336768000_n.mp4", "https://instagram.fada1-4.fna.fbcdn.net/t50.2886-16/17972566_2257302231162060_4808089186336768000_n.mp4", '', false, 1492538988800),
					buildItem("lanadelrey-2", "photo", 10, "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-15/e35/17662175_1881795218711223_8885341622280126464_n.jpg", "https://instagram.fada1-4.fna.fbcdn.net/t51.2885-15/e35/17662175_1881795218711223_8885341622280126464_n.jpg", '', false, 1492303299037)
				]
			}
		]
	});

	var el = document.querySelectorAll('#skin option');
	var total = el.length;
	for (var i = 0; i < total; i++) {
		var what = (skin==el[i].value)?true:false;

		if(what){
			el[i].setAttribute('selected', what);

			header.innerHTML = skin;
			header.className = skin;
		} else {
			el[i].removeAttribute('selected');
		}
	}

	document.body.style.display = 'block';
};

initBpStories();