// const testArr = [4,2,6,7,3,1,5,9,8,10,0];
// const testArr = ["cucumber", "banana", "apple", "date", "nut", "orange", "avocado", "pineapple", "onion", "garlic"];
// const testArr = [
// 	{text: "cucumber", href: "#"}, 
// 	{text: "banana", href: "#"}, 
// 	{text: "apple", href: "#"}, 
// 	{text: "date", href: "#"}, 
// 	{text: "nut", href: "#"}, 
// 	{text: "orange", href: "#"}, 
// 	{text: "avocado", href: "#"}, 
// 	{text: "pineapple", href: "#"}, 
// 	{text: "onion", href: "#"},
// 	{text: "garlic", href: "#"}
// ];

// const reorderArray = (arr) => {
// 	const sort = (arr) => {
// 		arr.sort(function(a, b){
// 			return b.text.length - a.text.length
// 		});
// 	};
// 	sort(arr);
// 	const secondToFirst = (arr) => {
// 		arr.unshift(arr[1]);
// 		arr.splice(2, 1);
// 	};
// 	secondToFirst(arr);
// }

// reorderArray(testArr);
// console.log(testArr);












// var title = "--------------- Tom's Web Portal 3.0 ---------------";

var array = [
	{	
		text: "coderbyte",
		href: "https://www.coderbyte.com/profile/tombetthauser"
	},
	{	
		text: "sumo",
		href: "https://www.tombetthauser.com/sumo"
	},
	// {	
	// 	text: "bandcamp following",
	// 	href: "https://bandcamp.com/tobeth/following/artists_and_labels"
	// },
	// {	
	// 	text: "bandcamp daily",
	// 	href: "https://daily.bandcamp.com/"
	// },
	// {	
	// 	text: "the daily",
	// 	href: "https://www.nytimes.com/2019/06/25/podcasts/the-daily/democrats-trump-impeachment.html"
	// },
	// {	
	// 	text: "fresh air",
	// 	href: "https://www.npr.org/programs/fresh-air/"
	// },
	{	
		text: "benefits",
		href: "https://portal.edd.ca.gov/WebApp/Login?resource_url=https%3A%2F%2Fportal.edd.ca.gov%2FWebApp%2FHome"
	},
	{	
		text: "trello",
		href: "https://trello.com/tombetthauser/boards"
	},
	{	
		text: "bandcamp",
		href: "https://bandcamp.com/tobeth/feed"
	},
	// {
	// 	text: "focus tube",
	// 	href: "http://www.tombetthauser.com/focus"
	// },
	{
		text: "udemy",
		href: "https://www.udemy.com/"
	},
	// {
	// 	text: "project euler",
	// 	href: "https://projecteuler.net/archives"
	// },
	// {
	// 	text: "repl",
	// 	href: "https://repl.it/languages"
	// },
	{
		text: "contacts",
		href: "https://docs.google.com/spreadsheets/d/1p6r4aKiNSTuoJ6tC6PWKh5aNPfIItZ8FzQzVQytXOkA/edit#gid=0"
	},
	// {
	// 	text: "timer",
	// 	href: "http://www.cubetimer.com/"
	// },
	// {
	// 	text: "coder byte",
	// 	href: "https://coderbyte.com/challenges"
	// },
	// {
	// 	text: "code wars",
	// 	href: "https://www.codewars.com/dashboard"
	// },
	// {
	// 	text: "surveys",
	// 	href: "https://docs.google.com/forms/u/0/"
	// },



	// 	text: "Google Email",
	// 	href: "https://mail.google.com/mail/u/0/#inbox"
	// },{
	// 	text: "Daily To-Do List",
	// 	href: "http://www.tombetthauser.com/todo"
	// },{
	// 	text: "Long-Term To-Do List",
	// 	href: "https://docs.google.com/document/d/1ORfzN-T_qT6cFo0h9KLiIud6dkb4xbjJzh3hE8dBC60/edit?usp=sharing"
	// },{
	// 	text: "Contacts Document",
	// 	href: "https://docs.google.com/spreadsheets/d/1p6r4aKiNSTuoJ6tC6PWKh5aNPfIItZ8FzQzVQytXOkA/edit#gid=0"
	// },{
	// 	text: "",
	// 	href: ""
	// },{
	// 	text: "Bandcamp Feed",
	// 	href: "https://bandcamp.com/tobeth/feed"
	// },{
	// 	text: "Bandcamp Collection",
	// 	href: "https://bandcamp.com/tobeth/"
	// },{
	// 	text: "Bret's Bandcamp Collection",
	// 	href: "https://bandcamp.com/buuza"
	// },{
	// 	text: "Soul Search and Destroy",
	// 	href: "https://www.youtube.com/channel/UCpv-IKyVsBJIJRadHjFN3-A"
	// },{
	// 	text: "",
	// 	href: ""
	// },{
	// 	text: "Fresh Air",
	// 	href: "https://www.npr.org/programs/fresh-air/"
	// },{
	// 	text: "This American Life",
	// 	href: "https://www.thisamericanlife.org/archive"
	// },{
	// 	text: "The California Report",
	// 	href: "https://www.npr.org/podcasts/432285393/the-california-report"
	// },{
	// 	text: "The Daily Podcast",
	// 	href: "https://www.nytimes.com/podcasts/the-daily"
	// },{
	// 	text: "The Bay Podcast",
	// 	href: "https://www.kqed.org/news/tag/the-bay"
	// },{
	// 	text: "",
	// 	href: ""
	// },{
	// 	text: "KQED Live Stream",
	// 	href: "https://www.kqed.org/radio/live"
	// },{
	// 	text: "Cap Radio Live Stream",
	// 	href: "http://player.capradio.org/nowPlaying/News"
	// },{
	// 	text: "Vally Public Radio Live Stream (Star Date 10p)",
	// 	href: "http://player.listenlive.co/52611"
	// },{
	// 	text: "KCRW Live Stream (H.Rollins 8p Sun)",
	// 	href: "https://www.kcrw.com/embed-player"
	// },{
	// 	text: "KDVS Live Stream",
	// 	href: "https://kdvs.org/programming/listen-now/"
	// },{
	// 	text: "KALX Live Stream",
	// 	href: "https://www.kalx.berkeley.edu/live-streaming"
	// },{
	// 	text: "KSJS Live Stream",
	// 	href: "https://ksjs.org/listen/"
	// },{
	// 	text: "",
	// 	href: ""
	// },{
	// 	text: "CAC Artist Calls",
	// 	href: "http://cac.ca.gov/opportunities/artist.php"
	// },{
	// 	text: "Studio Applications Document",
	// 	href: "https://docs.google.com/spreadsheets/d/17ymytH_JXGPj3qLuBF0o-77dmUkLGEYbeSvXbnsQU0A/edit#gid=0"
	// },{
	// 	text: "Big Cartel Orders",
	// 	href: "https://my.bigcartel.com/orders"
	// },{
	// 	text: "Patreon",
	// 	href: "https://www.patreon.com/tombetthauser"
	// },{
	// 	text: "",
	// 	href: ""
	// },{
	// 	text: "Tom's Github",
	// 	href: "https://github.com/tombetthauser"
	// },{
	// 	text: "Andrei's Udemy Course",
	// 	href: "https://www.udemy.com/the-complete-web-developer-in-2018/learn/v4/content"
	// },{
	// 	text: "Colt's Udemy Course",
	// 	href: "https://www.udemy.com/the-web-developer-bootcamp/learn/v4/content"
	// },{
	// 	text: "Font Awesome",
	// 	href: "https://fontawesome.com/icons?d=listing&m=free"
	// },{
	// 	text: "Font Awesome CDN",
	// 	href: "https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=web-fonts-with-css"
	// },{
	// 	text: "Bob Ross Ipsum",
	// 	href: "http://www.bobrosslipsum.com/index.html"
	// },{
	// 	text: "Bootstrap 3.3.7",
	// 	href: "https://getbootstrap.com/docs/3.3/"
	// },{
	// 	text: "Unsplash Stock Photos",
	// 	href: "https://unsplash.com/"
	// },{
	// 	text: "Zalgo Garbled Text Generator",
	// 	href: "https://eeemo.net/"
	// },{
	// 	text: "UI Gradients",
	// 	href: "https://uigradients.com/"
	// },{
	// 	text: "Web Portal v.1",
	// 	href: "http://tombetthauser.com/201513"
	// },{
	// 	text: "",
	// 	href: ""
	// },{
	// 	text: "West Valley Banner (G08116792)",
	// 	href: "https://ssb-prod.ec.wvm.edu/PROD/twbkwbis.P_WWWLogin"
	// },{
	// 	text: "",
	// 	href: ""
	// },{
	// 	text: "CAC Arts Jobs",
	// 	href: "http://cac.ca.gov/opportunities/jobs.php"
	// },{
	// 	text: "CCC Job Postings",
	// 	href: "http://www.cccregistry.org/jobs/searchResults.aspx?searchID=44865"
	// },{
	// 	text: "Exploratorium Jobs",
	// 	href: "https://www.exploratorium.edu/about/jobs/"
	// },{
	// 	text: "Old Job Search Document",
	// 	href: "https://docs.google.com/spreadsheets/d/1l20UPBOQMkogL1QJ7oocjODdiOJUu0tE_UuwqbftDKU/edit#gid=0"
	// },{
	// 	text: "",
	// 	href: ""
	// },{
	// 	text: "NOAA Percipitation Forecast",
	// 	href: "http://www.wpc.ncep.noaa.gov/qpf/qpfloop12hr.html"
	// },{
	// 	text: "NOAA Tempurature Forecast",
	// 	href: "https://graphical.weather.gov/sectors/conusLoop.php#tabs"
	// },{
	// 	text: "All Trails",
	// 	href: "https://www.alltrails.com/explore/us/california/sacramento"
	// },{
	// 	text: "",
	// 	href: ""
	// },{
	// 	text: "Erin's Instagram",
	// 	href: "https://www.instagram.com/kaczkowskierin/"
	// },{
	// 	text: "Cousin's Instagram",
	// 	href: "https://www.instagram.com/catfax.exe/"
	// },{
	// 	text: "Mom's Instagram",
	// 	href: "https://www.instagram.com/laurajanecoats/"
	// },{
	// 	text: "Tom's Instagram",
	// 	href: "https://www.instagram.com/nightcoyot1/"
	// },{
	// 	text: "Dan's Instagram",
	// 	href: "https://www.instagram.com/delliotherwitt/"
	// },{
	// 	text: "Kiki's Instagram",
	// 	href: "https://www.instagram.com/kiki_serious/"
	// },{
	// 	text: "",
	// 	href: ""
	// },{
	// 	text: "Erin's Website",
	// 	href: "https://www.erinkaczkowskistudio.com/"
	// },{
	// 	text: "Alex's Website",
	// 	href: "http://alexanderdouglasbrown.com/"
	// },{
	// 	text: "My Website",
	// 	href: "https://www.tombetthauser.com/"
	// },{
	// 	text: "Mom's Website",
	// 	href: "http://laurajanecoats.com/"
	// },{
	// 	text: "Cody's Website",
	// 	href: "http://y9k.xyz/"
	// },{
	// 	text: "Cousin's Website",
	// 	href: "http://bretward.com/"
	// },{
	// 	text: "Tom Chung's Website",
	// 	href: "http://tomchung.org/"
	// },{
	// 	text: "Evan's Website",
	// 	href: "http://evannesbit.com/"
	// },{
	// 	text: "Dan's Website",
	// 	href: "http://www.danielherwitt.com/"
	// },{
	// 	text: "Kiki's Website",
	// 	href: "http://kikijohnson.tumblr.com/"
	// },{
	// 	text: "Marks Website",
	// 	href: "https://markaubert.com/"
	// },{
	// 	text: "",
	// 	href: ""
	// },
]

var password = [
	"ch1pdude",
	"password",
	"p"
];

// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

init();

// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

function reorderArray(arr){
	const sort = (arr) => {
		arr.sort(function(a, b){
			return b.text.length - a.text.length
		});
	};
	sort(arr);
	const secondToFirst = (arr) => {
		arr.unshift(arr[2]);
		arr.splice(3, 1);
	};
	secondToFirst(arr);
}

function init() {
	reorderArray(array);
	var p = prompt("key required");
	while (p !== password[0] && p !== password[1] && p !== password[2]) {
		p = prompt("key required");
	}
	// x = Math.round(Math.random() * (greeting.length - 1));
	// alert(greeting[x]);
	load();
}

function load() {
	var x = document.createElement("P");
	document.body.appendChild(x);
	for(i = 0; i < array.length; i++){
	    var x = document.createElement("A");
	    x.href = array[i].href;
	    x.target = "new";
	    x.class = "link";
	    var y = document.createTextNode(array[i].text.toLowerCase());
	    x.appendChild(y);
	    document.body.appendChild(x);
    	var x = document.createElement("BR");
	    document.body.appendChild(x);
	}
};