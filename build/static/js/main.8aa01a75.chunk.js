(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e){e.exports={sponsors:[{name:"Digital Ocean",img:"digitalocean.png"}]}},113:function(e,t,a){e.exports=a(226)},225:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(36),s=a.n(l),i=a(7),o=a(8),c=a(10),m=a(9),u=a(11),d=a(14),h={facebook:"https://www.facebook.com/TechatNYU/",twitter:"https://twitter.com/techatnyu",medium:"https://medium.com/@TechatNYU",instagram:"https://www.instagram.com/techatnyu/",rsvp:"http://rsvp.techatnyu.org/",calendar:"http://cal.techatnyu.org/",resumes:"https://balloon.io/tnyuresumes"},p=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{id:"footer-content"},r.a.createElement("div",{id:"copyright"}," \xa9Tech@NYU, 2018 "),r.a.createElement("div",{id:"social-handles"},r.a.createElement("a",{href:h.facebook,target:"_blank"},"Facebook"),r.a.createElement("a",{href:h.twitter,target:"_blank"},"Twitter"),r.a.createElement("a",{href:h.medium,target:"_blank"},"Medium"),r.a.createElement("a",{href:h.instagram,target:"_blank"},"Instagram"))))}}]),t}(n.Component),b={links:h,footer:p,notFound:function(){return r.a.createElement("div",null,r.a.createElement("img",{id:"dots",src:"/img/dots.png"}),r.a.createElement("h1",{className:"not-found"},"404 Page Not Found :-("))},teams:{"53f54dd98d1e62ff12539dc1":"Hack Days","53f54dd98d1e62ff12539dc2":"After Hours","53f99d48c66b44cf6f8f6d81":"Demo Days","53f99d6bc66b44cf6f8f6d82":"Design Days","54e8c420bc61fd4096c01048":"Infrastructure","5440609d6b0287336dfc51cf":"Startup Week","53f99d8fc66b44cf6f8f6d83":"Business Development","53f54dd98d1e62ff12539dc3":"Marketing","56410d72e24ad83b0635516f":"Game Days"},apiBase:{production:"https://api.tnyu.org/v3/",test:"https://api.tnyu.org/v3-test/"}},E=a(48),f=a.n(E),v="https://api.tnyu.org/v3/events/upcoming-publicly-live?page%5Blimit%5D=15&sort=startDateTime?",g=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=new Date(this.props.event.attributes.startDateTime);return r.a.createElement("div",{className:"event-card"},r.a.createElement("p",{className:"event-title"}," ",this.props.event.attributes.title," "),r.a.createElement("p",{className:"event-team"}," ",b.teams[this.props.event.relationships.teams.data[0].id]),r.a.createElement("p",{className:"event-description"},this.props.event.attributes.description),r.a.createElement("hr",{className:"line-break"}),r.a.createElement("p",{className:"event-date"}," ",e.getMonth()+1,".",e.getDate()," "),r.a.createElement("p",{className:"event-rsvp"},r.a.createElement("a",{href:b.links.rsvp,target:"_blank"},"RSVP")))}}]),t}(n.Component),y=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=new Date(this.props.event.attributes.startDateTime);return r.a.createElement("div",{className:"event-card-mobile"},r.a.createElement("p",{className:"event-title-mobile"}," ",this.props.event.attributes.title," "),r.a.createElement("p",{className:"event-team-mobile"}," ",b.teams[this.props.event.relationships.teams.data[0].id]),r.a.createElement("p",{className:"event-description-mobile"},this.props.event.attributes.description),r.a.createElement("hr",{className:"line-break"}),r.a.createElement("p",{className:"event-date-mobile"}," ",e.getMonth()+1,".",e.getDate()," "),r.a.createElement("p",{className:"event-rsvp-mobile"},r.a.createElement("a",{href:b.links.rsvp,target:"_blank"},"RSVP")))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={events:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(v,{method:"GET"}).then(function(e){return e.json()}).then(function(t){0===t.data.length?console.log("no upcoming events"):e.setState({events:t.data})})}},{key:"render",value:function(){for(var e=[],t=0,a=this.state.events.length-1;a>=0;a--)e.push(r.a.createElement("div",{key:t},r.a.createElement(g,{event:this.state.events[a]}))),t+=1;return r.a.createElement("div",null,this.state.events.length>0&&r.a.createElement(f.a,{dots:!1,slidesToShow:3,arrows:!0},e))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={events:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(v,{method:"GET"}).then(function(e){return e.json()}).then(function(t){0===t.data.length?console.log("no upcoming events"):e.setState({events:t.data})})}},{key:"render",value:function(){var e=[],t=0;if(this.state.events.length>0)for(var a=this.state.events.length-1;a>=0;a--)e.push(r.a.createElement("div",{className:"event-mobile",key:t},r.a.createElement(y,{event:this.state.events[a]}))),t+=1;return r.a.createElement("div",null,this.state.events.length>0&&e)}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={email:"Enter your email"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({email:e.target.value})}},{key:"validate",value:function(e){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)}},{key:"submitChange",value:function(e){if(this.validate(e)){var t="https://mailtrain.tnyu.org/subscription/ryeVfPjte?email="+e+"&subscribe=Sign+Up";window.open(t,"_blank").focus()}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"signup-form"},r.a.createElement("p",null," Be the first to know about upcoming events and opportunities. "),r.a.createElement("br",null),r.a.createElement("form",null,r.a.createElement("input",{type:"email",placeholder:this.state.email,onChange:this.handleChange.bind(this)}),r.a.createElement("button",{onClick:function(){return e.submitChange(e.state.email)},type:"submit",className:"btn btn-success"},r.a.createElement("i",{className:"material-icons arrow-submit"},"arrow_forward"))))}}]),t}(n.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"tnyu-title"},r.a.createElement("h1",null,"tech@nyu")),r.a.createElement(k,null),r.a.createElement("div",{id:"main-slider"},r.a.createElement(w,{team:this.state})),r.a.createElement("div",{id:"mobile-events"},r.a.createElement(N,null)),r.a.createElement("h2",{id:"tnyu-description"}," We are NYC's largest student-run community ",r.a.createElement("br",null)," of coders, designers, and builders. "),r.a.createElement("footer",{id:"footer"},r.a.createElement(b.footer,null)))}}]),t}(n.Component),O=a(30),T=a(112),C={fontSize:"1.8vmin"},D={marginBottom:"10vh"},Y={height:"1px",border:"none",color:"#f05158",backgroundColor:"#f05158",marginBottom:"10vh",marginLeft:"0"},q={color:"#f05158"},x=function(){return r.a.createElement("div",{className:"page-content"},r.a.createElement("div",{className:"tech-description"},"Tech@NYU is NYC\u2019s largest community of students interested in technology and its possibilities. We provide spaces to help people ideate, experiment, learn, and build together. ",r.a.createElement("br",null),r.a.createElement("br",null),"Behind the operations of Tech@NYU is the Board, a group of students that runs events focused on coding, gaming, design, business, entrepreneurship, and more, to foster a fun and inclusive tech community in NYC. ",r.a.createElement("br",null),r.a.createElement("br",null),"These events are held throughout the academic year and are open to students of all backgrounds. We\u2019d love see you! ",r.a.createElement("br",null),r.a.createElement("br",null),"If you have any questions, head to our ",r.a.createElement(d.c,{to:"/faq",style:q}," FAQ")," or drop us a line at ",r.a.createElement("a",{className:"email-us",href:"mailto:hello@techatnyu.org",style:C},"hello@techatnyu.org"),"."),r.a.createElement("div",{className:"events"},"events"),r.a.createElement("div",{style:D,className:"tech-description"},"We host regular get-together in each of six categories: ",r.a.createElement("br",null)," After Hours, Demo Days, Design Days, Freshman Circuit, Game Day and HackDays. In addition, we host Startup Week every semester."),r.a.createElement("hr",{id:"events-line",style:Y}))},A=function(){return r.a.createElement("table",{id:"tnyu-teams-about"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"team-name"},"After Hours"),r.a.createElement("td",{className:"team-description"},"Held weekly. Gives students an opportunity to link up, eat pizza, and start creating awesome things! Events range from mixers to guest lectures. All experience levels are welcome!")),r.a.createElement("tr",null,r.a.createElement("td",{className:"team-name"},"Demo Days"),r.a.createElement("td",{className:"team-description"},"Held monthly. Gathers a community of students who create things, providing a platform for student builders to present their work, celebrate their creations, and inspire other students to build projects they care about. ",r.a.createElement("a",{href:"http://demodays.co",target:"__blank",className:"email-us",style:C},"Apply to demo your project here!"))),r.a.createElement("tr",null,r.a.createElement("td",{className:"team-name"},"Design Days"),r.a.createElement("td",{className:"team-description"},"Held bi-monthly. Brings in design professionals from around the country to give workshops or talks on various design topics.")),r.a.createElement("tr",null,r.a.createElement("td",{className:"team-name"},"Freshman Circuit"),r.a.createElement("td",{className:"team-description"},"Open to freshman only. Tours NYC startups and meets with startup employees to learn about what they do. This is a great way to explore your interests and how they fit into the industry! Spaces are limited. Applications open on September 1st every year.")),r.a.createElement("tr",null,r.a.createElement("td",{className:"team-name"},"Game Days"),r.a.createElement("td",{className:"team-description"},"Held monthly. Gathers students from all over New York City to explore digital and physical game design, meet new people, express themselves creatively, and bring their ideas to fruition! ")),r.a.createElement("tr",null,r.a.createElement("td",{className:"team-name"},"Hack Days"),r.a.createElement("td",{className:"team-description"},"Held bi-monthly. Brings in guest speakers to host lectures or workshops about programming and web technologies. We cover everything from Angular to Zepto and all experience levels are welcome!")),r.a.createElement("tr",null,r.a.createElement("td",{className:"team-name"},"Startup Week"),r.a.createElement("td",{className:"team-description"},"Held once every semester. This is Tech@NYU\u2019s flagship event, comprising a week-long series of events and workshops that celebrate all things design, hacking, entrepreneurship, and technology, wrapping up with a keynote speech by the CEO of an NYC Startup."))))},S=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<O.a.length;t+=2){var a=[O.a[t],O.a[t+1]];e.push(a),console.log(O.a[t])}return console.log(e,O.a.length),r.a.createElement("div",{id:"board-members"},r.a.createElement("div",{className:"events"},"board members"),r.a.createElement("table",null,r.a.createElement("tbody",null,e.length>0&&e.map(function(e,t){return void 0!=e[1]?r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"cell-1"},r.a.createElement("span",{className:"member-name"},e[0].name,", ",e[0].role),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("a",{className:"member-handle",href:e[0].link,target:"__blank"},"Website"))),r.a.createElement("td",{className:"cell-2"},r.a.createElement("span",{className:"member-name"},e[1].name,", ",e[1].role),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("a",{className:"member-handle",href:e[1].link,target:"__blank"},"Website")))):r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"cell-1"},r.a.createElement("span",{className:"member-name"},e[0].name,", ",e[0].role),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("a",{className:"member-handle",href:e[0].link,target:"__blank"},"Website"))))}))),r.a.createElement("br",null),r.a.createElement("a",{target:"__blank",href:"http://ship.techatnyu.org",id:"alum-link"}," see our alum and an archive of their projects "))}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={sponsors:T.sponsors},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=[];if(this.state.sponsors.length>0)for(var t=0;t<this.state.sponsors.length;t++){var a="/img/sponsors/"+this.state.sponsors[t].img;e.push(r.a.createElement("div",{key:t},r.a.createElement("img",{src:a})))}return r.a.createElement("div",{id:"sponsor-list"},r.a.createElement("div",{className:"events"},"sponsors"),r.a.createElement("p",{className:"sponsor-description"},"Our awesome sponsors help keep Tech@NYU up and running. We are so grateful for their support. If you would like to help sponsor Tech@NYU, please contact hello@techatnyu.org!"),r.a.createElement("div",{id:"sponsor-slider"},r.a.createElement(f.a,{dots:!1,slidesToShow:4,arrows:!0},e)))}}]),t}(n.Component),_=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"page-title"},"about"),r.a.createElement("img",{id:"dots",src:"/img/dots.png"}),r.a.createElement("img",{id:"clock",src:"/img/clock.png"}),r.a.createElement("img",{id:"squiggly",src:"/img/squiggly.png"}),r.a.createElement("img",{id:"comment-img",src:"/img/comment-bubble.png"}),r.a.createElement("img",{id:"team-photo",src:"img/team-photo2.jpg"}),r.a.createElement(x,null),r.a.createElement(A,null),r.a.createElement(S,null),r.a.createElement(U,null),r.a.createElement("div",{id:"anti-harassment"},r.a.createElement("h1",{className:"events"},"  anti-harassment policy "),r.a.createElement("p",{style:C},"All Tech@NYU events and appearances are covered by a strict anti-harrassment policy. ",r.a.createElement(d.c,{to:"/policy",style:q},"Read about the policy"),".")),r.a.createElement("footer",{id:"footer"},r.a.createElement(b.footer,null)))}}]),t}(n.Component),I=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{id:"dots",src:"/img/dots.png"}),r.a.createElement("h1",{className:"page-title"},"faq"),r.a.createElement("div",{className:"page-content"},r.a.createElement("div",{className:"question-answer"},r.a.createElement("div",{className:"question"}," Who can attend Tech@NYU events?"),r.a.createElement("div",{className:"answer"}," Our events are open to the public. In any other case, we will clearly outline attendance requirements. ")),r.a.createElement("div",{className:"question-answer"},r.a.createElement("div",{className:"question"}," How much experience do I need to attend or participate? "),r.a.createElement("div",{className:"answer"}," Most of our events are beginner-friendly, but additional details about the level of the workshop can usually be found on the event's facebook page. Check out our ",r.a.createElement("a",{href:b.links.facebook,target:"_blank"},"Facebook")," page here for more information about the upcoming event. ")),r.a.createElement("div",{className:"question-answer"},r.a.createElement("div",{className:"question"}," How do I find out about these events? "),r.a.createElement("div",{className:"answer"}," Join our mailing list and follow us on our social media channels:",r.a.createElement("br",null),r.a.createElement("a",{href:b.links.twitter,target:"_blank"},"Twitter"),", ",r.a.createElement("a",{href:b.links.instagram,target:"_blank"},"Instagram"),", ",r.a.createElement("a",{href:b.links.facebook,target:"_blank"},"Facebook"))),r.a.createElement("div",{className:"question-answer"},r.a.createElement("div",{className:"question"}," Where are the events held? "),r.a.createElement("div",{className:"answer"}," Most of our events are held on NYU's Washington Square Campus. These events usually take place at the Leslie eLab or the LaGuardia Co-op, but please check the event's ",r.a.createElement("a",{href:b.links.facebook,target:"_blank"},"Facebook")," page for the exact location.")),r.a.createElement("div",{className:"question-answer"},r.a.createElement("div",{className:"question"}," Are these events free? Do I need tickets to attend events? "),r.a.createElement("div",{className:"answer"}," Yes! Our events are usually free for both NYU students and the public, and does not require a ticket to attend but we encourage you to RSVP ",r.a.createElement("a",{href:b.links.rsvp,target:"_blank"},"here"),". However, some of our events might require a ticket to attend. Please check the event's ",r.a.createElement("a",{href:b.links.facebook,target:"_blank"},"Facebook")," page for details.")),r.a.createElement("div",{className:"question-answer"},r.a.createElement("div",{className:"question"}," How do I join Tech@NYU? "),r.a.createElement("div",{className:"answer"},' Tech@NYU has become more a community than an organization that you "join." The Tech@NYU executive board (e-board) plans and runs events geared toward students who want to learn more about different topics in the tech industry, but anyone can come to these events! So, bring your friends! Bring your grandma! We want to create spaces where you can easily talk to and learn from other people about tech.')),r.a.createElement("div",{className:"question-answer"},r.a.createElement("div",{className:"question"}," How do I join the Tech@NYU e-board? "),r.a.createElement("div",{className:"answer"}," At the beginning of each semester we open applications for our e-board. Positions we recruit for depend on what roles we need filled and we tend to recruit more heavily in the fall than in the spring. If you're interested in joining our board look out for applications on our Facebook page and here on the website as we near the beginnings of each semester. ")),r.a.createElement("div",{className:"question-answer"},r.a.createElement("div",{className:"question"}," What roles are within the e-board? "),r.a.createElement("div",{className:"answer"}," We have various roles and teams within the e-board. Normally each team will have a team lead and one or two other team members. Aside from the event teams, the e-board also has infrastructure, marketing, and other operational roles. Check out our ",r.a.createElement("a",{href:"#/about"},"about")," page to find out more about the different teams in Tech@NYU and see additional information on our e-board members.")),r.a.createElement("div",{className:"email-us"},"If you have additional questions, please don't hesitate to email us at ",r.a.createElement("a",{href:"mailto:hello@techatnyu.org"},"hello@techatnyu.org!"))),r.a.createElement("footer",{id:"footer"},r.a.createElement(b.footer,null)))}}]),t}(n.Component),H={color:"#f05158"},W=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"jobs-card"},r.a.createElement("div",{className:"job-content"},r.a.createElement("span",{className:"job-title"},this.props.job.title),r.a.createElement("br",null),r.a.createElement("span",null,this.props.job.paid," | ",this.props.job.salary," "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,this.props.job.description)),r.a.createElement("div",{className:"job-apply"},r.a.createElement("p",null," APPLY ")))}}]),t}(n.Component),F=[{title:"Data Scientist Intern",paid:"Paid",salary:"15 hours/week",location:"New York, NY",description:"Description description description description description description description description.",link:""},{title:"Data Scientist Intern",paid:"Paid",salary:"15 hours/week",location:"New York, NY",description:"Description description description description description description description description.",link:""},{title:"Data Scientist Intern",paid:"Paid",salary:"15 hours/week",location:"New York, NY",description:"Description description description description description description description description.",link:""},{title:"Data Scientist Intern",paid:"Paid",salary:"15 hours/week",location:"New York, NY",description:"Description description description description description description description description.",link:""}],P=(n.Component,{marginBottom:"10vh"}),M=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"libraries"},r.a.createElement("div",{className:"library"},r.a.createElement("div",{className:"lib-title"},"career"),r.a.createElement("div",{className:"articles"},r.a.createElement("p",null,"article name"),r.a.createElement("p",null,"article name"),r.a.createElement("p",null,"article name"))),r.a.createElement("div",{className:"library"},r.a.createElement("div",{className:"lib-title"},"jobs/companies"),r.a.createElement("div",{className:"articles"},r.a.createElement("p",null,"article name"),r.a.createElement("p",null,"article name"),r.a.createElement("p",null,"article name"))),r.a.createElement("div",{className:"library"},r.a.createElement("div",{className:"lib-title"},"interview prep"),r.a.createElement("div",{className:"articles"},r.a.createElement("p",null,"article name"),r.a.createElement("p",null,"article name"),r.a.createElement("p",null,"article name"))))}}]),t}(n.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{id:"dots",src:"/img/dots.png"}),r.a.createElement("h1",{className:"page-title"},"library"),r.a.createElement("div",{className:"page-content"},r.a.createElement("div",{className:"page-intro",style:P},"We want to empower technologists everywhere by creating an open-sourced library of interview guides, tips and skill-sharing for students to use. Here is where we gather what we know about things such as internships, interviewing, and learning in general and offer it as a free resource.")),r.a.createElement(M,null),r.a.createElement("footer",{id:"footer"},r.a.createElement(b.footer,null)))}}]),t}(n.Component),L={fontSize:"2vmin"},G=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{id:"dots",src:"/img/dots.png"}),r.a.createElement("h1",{className:"page-title"}," anti-harassment ",r.a.createElement("br",null)," policy"),r.a.createElement("div",{className:"page-content"},r.a.createElement("div",{id:"policy"},"The following anti-harassment policy covers all Tech@NYU events and activities and applies to all members, presenters, and other participants. ",r.a.createElement("br",null),r.a.createElement("br",null),"Furthermore, Tech@NYU will only lend its brand to or fund groups that offer a similar anti-harassment policy. For information on how to offer an anti-harassment policy to your group, see Code for America's guide, the advice of which can be generalized to non\u2013Code for America groups. ",r.a.createElement("br",null),r.a.createElement("br",null),"Tech@NYU does not tolerate harassment in any form. We welcome everyone regardless of sex, race, gender, gender identity and expression, sexual orientation, disability, age, physical appearance, religion/faith, national origin, source of income, and language preference. ",r.a.createElement("br",null),r.a.createElement("br",null),"Harassment includes but is not limited to: offensive verbal or written comments related to, or exclusion based on, any of the characteristics listed above (i.e. sex, race, gender, etc.); deliberate intimidation; following or stalking; unwanted photography or recording; sustained disruption of talks or other events; inappropriate physical contact; unwelcome sexual attention; and patronizing language or action. ",r.a.createElement("br",null),r.a.createElement("br",null),"Further, sexual language and imagery is not appropriate at any Tech@NYU event or activity, including talks. Anyone in violation of this policy may be warned, expelled from the event, and/or banned from future tech@nyu activities, at the sole discretion of the Tech@NYU leadership and the event organizers. ",r.a.createElement("br",null),r.a.createElement("br",null),"If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of the event staff immediately. Additionally, you can contact David Wang, Tech@NYU\u2019s President, at dhw249@stern.nyu.edu and [phone number]. To the largest extent possible, reports of harassment will be kept confidential; usually, this means they will only be shared Tech@NYU board members who are not involved in the incident and are directly dealing with anti-harassment enforcement, or with law enforcement/venue security should their presence become necessary. ",r.a.createElement("br",null),r.a.createElement("br",null),"Tech@NYU leadership and/or event staff will be happy to help participants contact venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the event. ",r.a.createElement("br",null),r.a.createElement("br",null),"We value your participation and hope that by widely communicating these expectations we can all enjoy a welcoming environment. ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{className:"email-us",style:L},"Email Template for Anti-Harassment Reporting"),r.a.createElement("br",null),r.a.createElement("br",null),"If you have any issue, please report in person, call the number above, or use this email template. ",r.a.createElement("br",null),r.a.createElement("br",null),"SUBJECT: Safe Space Alert at [EVENT NAME] ",r.a.createElement("br",null),r.a.createElement("br",null),"I am writing because of harassment at a tech@nyu event, (NAME, PLACE, DATE OF EVENT). You can reach me at (CONTACT INFO). Thank you. ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{className:"email-us",style:L},"Contributors to this Policy"),r.a.createElement("br",null),r.a.createElement("br",null),"This anti-harassment policy is based on Code for America\u2019s Anti-Harassment policy and the example policy from the Geek Feminism wiki, created by the Ada Initiative and other volunteers. Those policies were in turn based on several others, including the Ohio LinuxFest anti-harassment policy, written by Esther Filderman and Beth Lynn Eicher, and the Con Anti-Harassment Project. Mary Gardiner, Valerie Aurora, Sarah Smith, and Donna Benjamin generalized the policies and added supporting material. Many members of LinuxChix, Geek Feminism and other groups contributed to this work. The policy shown above was edited into its present form by Ethan Resnick.")),r.a.createElement("footer",{id:"footer"},r.a.createElement(b.footer,null)))}}]),t}(n.Component),z=function(){return r.a.createElement("nav",{className:"navbar-header"},r.a.createElement("div",{className:"navbar-content"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.a,{title:"home",activeClassName:"active",to:"/"},"home")),r.a.createElement("li",null,r.a.createElement(d.a,{title:"about",activeClassName:"active",to:"/about"},"about")),r.a.createElement("li",null,r.a.createElement(d.a,{title:"faq",activeClassName:"active",to:"/faq"},"faq")),r.a.createElement("li",null,r.a.createElement("a",{href:b.links.medium,target:"_blank"},"blog")))))},V=function(e){return r.a.createElement("div",null,r.a.createElement(z,null),e.children)},R=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.e,{onUpdate:function(){return window.scrollTo(0,0)},history:d.f},r.a.createElement(d.d,{path:"/",component:V},r.a.createElement(d.b,{component:j}),r.a.createElement(d.d,{path:"about",component:_}),r.a.createElement(d.d,{path:"faq",component:I}),r.a.createElement(d.d,{path:"library",component:B}),r.a.createElement(d.d,{path:"policy",component:G}),r.a.createElement(d.d,{path:"*",component:b.notFound})))}}]),t}(n.Component);a(225),document.addEventListener("DOMContentLoaded",function(){s.a.render(r.a.createElement(R,null),document.getElementById("root"))})},30:function(e){e.exports={a:[{name:"Maura Puscheck",role:"President",link:"https://www.instagram.com/small_beyonce/"},{name:"Jenny Oh",role:"Marketing Lead",link:"https://twitter.com/ohjennners"},{name:"Leena Loo",role:"Member",link:"https://www.linkedin.com/in/leena-loo-113533131/"},{name:"Michael Yang",role:"Infra",link:"http://yang.money"}]}}},[[113,1,2]]]);
//# sourceMappingURL=main.8aa01a75.chunk.js.map