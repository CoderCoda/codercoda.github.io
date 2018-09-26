new Vue({
	el: "#app",

	data: {
		profiles: [
			{ title: "Github", icon: "fab fa-github", href: "https://github.com/CoderCoda"},
			{ title: "Linkedin", icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/limitch/"},
			//{ title: "YouTube", icon: "fab fa-youtube", href: ""},
			//{ title: "Music", icon: "fas fa-music", href: ""},
			{ title: "Email", icon: "fas fa-envelope", href: "mailto:mitchell.li@duke.edu"},
			{ title: "Resume", icon: "fas fa-file-alt", href: "./assets/Mitchell_Li_Resume.pdf"}
		],

		projects: [
			{
				title: "Campus Backpack",
				subtitle: "An online peer-to-peer textbook marketplace for college students",
				demo: true,
				demoLink: "http://campusbackpack.pythonanywhere.com/",
				repoLink: "https://github.com/CoderCoda/campus-bookworm",
				tools: [{name:"Django"},{name:"Python"},{name:"Bootstrap"}]
			},
			{
				title: "Litebulb",
				subtitle: "Record your brilliant startup ideas with this simple CRUD web application",
				demo: true,
				demoLink: "https://warm-scrubland-23696.herokuapp.com/",
				repoLink: "https://github.com/CoderCoda/litebulb",
				tools: [{name:"MongoDB"},{name:"Express.js"},{name:"Node.js"},{name:"Handlebars.js"},{name:"ES6"},{name:"Bootstrap"}]
			},
			/*
			{
				title: "Don Bon Beats",
				subtitle: "Coming soon!",
				demo: true,
				demoLink: "",
				repoLink: "",
				tools: [{name:"MongoDB"},{name:"Express.js"},{name:"Vue.js"},{name:"Node.js"},{name:"Vuetify.js"},{name:"JavaScript"},{name:"HTML"},{name:"CSS"}]
			},
			*/
			{
				title: "Trello",
				subtitle: "Cloning the popular project manager",
				demo: true,
				demoLink: "https://codercoda.github.io/trello/",
				repoLink: "https://github.com/CoderCoda/trello",
				tools: [{name:"Vue.js"},{name:"Firebase"}]
			},
			{
				title: "Cost Coach",
				subtitle: "Calculates out-of-pocket treatment costs for cancer patients. Developed in coordination with the Duke University Cancer Research Institute",
				demo: false,
				demoLink: "",
				repoLink: "https://github.com/CoderCoda/testcoach",
				tools: [{name:"Vue.js"},{name:"Flask"}]
			},
			{
				title: "Twarkov",
				subtitle: "Markov text generator trained off the tweets of a given Twitter user",
				demo: false,
				demoLink: "",
				repoLink: "https://github.com/CoderCoda/twarkov",
				tools: [{name:"Java"},{name:"Markov Chains"},{name:"Twitter4J"}]
			},
			{
				title: "Breakout",
				subtitle: "Reimagining an Atari classic as a web application",
				demo: true,
				demoLink: "https://codercoda.github.io/breakout-online/",
				repoLink: "https://github.com/CoderCoda/breakout-online",
				tools: [{name:"Vanilla JS"}]
			},
			{
				title: "Personal Website",
				subtitle: "A nice Vue of my styling abilities.",
				demo: false,
				demoLink: "",
				repoLink: "https://github.com/CoderCoda/limitchell",
				tools: [{name:"Vuetify.js"},{name:"Vue.js"},{name:"CSS"}]
			}
		]
	}
})