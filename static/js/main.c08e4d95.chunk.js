(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{29:function(e,t,a){e.exports=a(49)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/motivate.558a0f7d.gif"},42:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){e.exports=a.p+"static/media/congrats.fe0c5765.gif"},49:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(13),i=a.n(s),r=(a(34),a(28)),l=a(5),h=a(6),u=a(8),c=a(7),d=(a(35),a(10)),m=a(18),g=a(14),p=(a(36),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(h.a)(a,[{key:"formatTime",value:function(e){var t=Math.floor(e%864e5/36e5),a=Math.floor(e%36e5/6e4),n=Math.floor(e%6e4/1e3);return a<10&&(a="0"+a),n<10&&(n="0"+n),t<10&&(t="0"+t),t+":"+a+":"+n}},{key:"isSuccess",value:function(e){return!0===e?"Yes":"No"}},{key:"render",value:function(){return o.a.createElement("div",{className:"Entry"},o.a.createElement("div",null,o.a.createElement(m.a,{bg:this.props.fast.wasSuccessful?"success":"danger"},o.a.createElement(m.a.Body,null,this.props.fast.wasSuccessful?o.a.createElement("div",{className:"text-right"},o.a.createElement(g.b,null)):"",o.a.createElement(m.a.Text,null,o.a.createElement("em",null,"Date Completed:")," ",this.props.fast.dateMade," ",o.a.createElement("br",null),o.a.createElement("em",null,"Duration:")," ",this.formatTime(this.props.fast.timePassed)," ",o.a.createElement("br",null),o.a.createElement("em",null,"Success:")," ",this.isSuccess(this.props.fast.wasSuccessful)," ",this.props.fast.wasSuccessful?o.a.createElement(g.a,null):o.a.createElement(g.e,null))))))}}]),a}(n.Component)),y=(a(37),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleSelectChange=function(){var e=document.getElementById("filterBy").value;n.props.handleSelectChange(e)},n.state={},n}return Object(h.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"Filter"},o.a.createElement("label",{"margin-right":"5px"},"Sort by "),o.a.createElement("select",{id:"filterBy",onChange:this.handleSelectChange},o.a.createElement("option",{value:"none"},"Most Recent"),o.a.createElement("option",{value:"fastingTime"},"Fast Length"),o.a.createElement("option",{value:"wasSuccessful"},"Successful Attempts")))}}]),a}(n.Component)),f=(a(38),function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).calcSuccess=function(){var e;if(0!==a.props.pastFasts.length){for(var t=0,n=0;n<a.props.pastFasts.length;n++)a.props.pastFasts[n].wasSuccessful&&t++;e=Math.round(t/a.props.pastFasts.length*100)}else e="";return e},a.handleSelectChange=function(e){"none"!==e?a.setState({isFiltering:!0}):a.setState({isFiltering:!1}),a.setState({filterBy:e})},a.sortBy=function(){var e=a.props.pastFasts.slice();return a.state.isFiltering?"fastingTime"===a.state.filterBy?e.sort((function(e,t){return t.timePassed-e.timePassed})):"wasSuccessful"===a.state.filterBy&&e.sort((function(e,t){return t.wasSuccessful-e.wasSuccessful})):e.sort((function(e,t){return t.dateCompare-e.dateCompare})),e},a.state={isFiltering:!1,filterBy:"none"},a.handleSelectChange=a.handleSelectChange.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"render",value:function(){var e;return e=0===this.props.pastFasts.length?o.a.createElement("img",{id:"motivate",src:a(39),alt:"motivate"}):this.sortBy().map((function(e){return o.a.createElement(p,{key:e.index.toString(),index:e.index,fast:e}," ")})),o.a.createElement("div",{className:"StatsPanel"},o.a.createElement("div",{className:"history"},o.a.createElement("h3",null," ",o.a.createElement("span",{className:"logo"},"STARV")," History")),o.a.createElement("div",{className:"success"},o.a.createElement("strong",null,"Success rate: ",0===this.props.pastFasts.length?"":this.calcSuccess(),"% ")),o.a.createElement("div",{className:"Entries"},e),o.a.createElement(y,{pastFasts:this.props.pastFasts,handleSelectChange:this.handleSelectChange}))}}]),n}(n.Component)),v=a(15),b=a.n(v),w={color:"yellow"},T={color:"blue"},E={color:"green"},S=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).dispTime=setInterval((function(){if(n.props.isRunning){var e=n.props.displayTime,t=e-1e3;t<=72e5&&t>18e5?n.setState({timerColor:w}):t<=18e5?n.setState({timerColor:E}):n.setState({timerColor:T}),e>0?n.props.setDisplayTime(parseFloat(t)):(n.setState({endTime:Date.now(),timerColor:T}),n.props.setDurationText(b()(n.state.endTime).fromNow()),n.props.toggleRunning(),n.props.saveFast(n.props.fastLength,n.props.displayTime),n.props.toggleStartButton(!1))}}),1e3),n.timePassed=setInterval((function(){0!==n.props.pastFasts.length&&n.props.setDurationText(b()(n.state.endTime).fromNow())}),6e4),n.state={endTime:null,timerColor:T},n}return Object(h.a)(a,[{key:"formatTime",value:function(e){var t=Math.floor(e%864e5/36e5),a=Math.floor(e%36e5/6e4),n=Math.floor(e%6e4/1e3);return a<10&&(a="0"+a),n<10&&(n="0"+n),t<10&&(t="0"+t),t+":"+a+":"+n}},{key:"render",value:function(){return o.a.createElement("div",{className:"Timer"},o.a.createElement("h1",{style:this.state.timerColor},this.formatTime(this.props.displayTime)))}}]),a}(n.Component),k=a(56),C=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).randomQuote=setInterval((function(){var e=Math.round(102*Object(k.a)());n.setState({activeQuote:R[e]})}),3e5),n.state={activeQuote:R[Math.round(102*Object(k.a)())]},n}return Object(h.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"Quotes"},this.state.activeQuote)}}]),a}(n.Component),R="Life is about making an impact, not making an income. -Kevin Kruse\nWhatever the mind of man can conceive and believe, it can achieve. -Napoleon Hill\nStrive not to be a success, but rather to be of value. -Albert Einstein\nTwo roads diverged in a wood, and I\u2014I took the one less traveled by, And that has made all the difference.  -Robert Frost\nI attribute my success to this: I never gave or took any excuse. -Florence Nightingale\nYou miss 100% of the shots you don\u2019t take. -Wayne Gretzky\nI've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed. -Michael Jordan\nThe most difficult thing is the decision to act, the rest is merely tenacity. -Amelia Earhart\nEvery strike brings me closer to the next home run. -Babe Ruth\nDefiniteness of purpose is the starting point of all achievement. -W. Clement Stone\nLife isn't about getting and having, it's about giving and being. -Kevin Kruse\nLife is what happens to you while you\u2019re busy making other plans. -John Lennon\nWe become what we think about. -Earl Nightingale\nTwenty years from now you will be more disappointed by the things that you didn\u2019t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover. -Mark Twain\nLife is 10% what happens to me and 90% of how I react to it. -Charles Swindoll\nThe most common way people give up their power is by thinking they don\u2019t have any. -Alice Walker\nThe mind is everything. What you think you become.  -Buddha\nThe best time to plant a tree was 20 years ago. The second best time is now. -Chinese Proverb\nAn unexamined life is not worth living. -Socrates\nEighty percent of success is showing up. -Woody Allen\nYour time is limited, so don\u2019t waste it living someone else\u2019s life. -Steve Jobs\nWinning isn\u2019t everything, but wanting to win is. -Vince Lombardi\nI am not a product of my circumstances. I am a product of my decisions. -Stephen Covey\nEvery child is an artist.  The problem is how to remain an artist once he grows up. -Pablo Picasso\nYou can never cross the ocean until you have the courage to lose sight of the shore. -Christopher Columbus\nI\u2019ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. -Maya Angelou\nEither you run the day, or the day runs you. -Jim Rohn\nWhether you think you can or you think you can\u2019t, you\u2019re right. -Henry Ford\nThe two most important days in your life are the day you are born and the day you find out why. -Mark Twain\nWhatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it. -Johann Wolfgang von Goethe\nThe best revenge is massive success. -Frank Sinatra\nPeople often say that motivation doesn\u2019t last. Well, neither does bathing.  That\u2019s why we recommend it daily. -Zig Ziglar\nLife shrinks or expands in proportion to one's courage. -Anais Nin\nIf you hear a voice within you say \u201cyou cannot paint,\u201d then by all means paint and that voice will be silenced. -Vincent Van Gogh\nThere is only one way to avoid criticism: do nothing, say nothing, and be nothing. -Aristotle\nAsk and it will be given to you; search, and you will find; knock and the door will be opened for you. -Jesus\nThe only person you are destined to become is the person you decide to be. -Ralph Waldo Emerson\nGo confidently in the direction of your dreams.  Live the life you have imagined. -Henry David Thoreau\nWhen I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me. -Erma Bombeck\nFew things can help an individual more than to place responsibility on him, and to let him know that you trust him.  -Booker T. Washington\nCertain things catch your eye, but pursue only those that capture the heart. - Ancient Indian Proverb\nBelieve you can and you\u2019re halfway there. -Theodore Roosevelt\nEverything you\u2019ve ever wanted is on the other side of fear. -George Addair\nWe can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light. -Plato\nTeach thy tongue to say, \"I do not know,\" and thous shalt progress. -Maimonides\nStart where you are. Use what you have.  Do what you can. -Arthur Ashe\nWhen I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down \u2018happy\u2019.  They told me I didn\u2019t understand the assignment, and I told them they didn\u2019t understand life. -John Lennon\nFall seven times and stand up eight. -Japanese Proverb\nWhen one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us. -Helen Keller\nEverything has beauty, but not everyone can see. -Confucius\nHow wonderful it is that nobody need wait a single moment before starting to improve the world. -Anne Frank\nWhen I let go of what I am, I become what I might be. -Lao Tzu\nLife is not measured by the number of breaths we take, but by the moments that take our breath away. -Maya Angelou\nHappiness is not something readymade.  It comes from your own actions. -Dalai Lama\nIf you're offered a seat on a rocket ship, don't ask what seat! Just get on. -Sheryl Sandberg\nFirst, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end. -Aristotle\nIf the wind will not serve, take to the oars. -Latin Proverb\nYou can\u2019t fall if you don\u2019t climb.  But there\u2019s no joy in living your whole life on the ground. -Unknown\nWe must believe that we are gifted for something, and that this thing, at whatever cost, must be attained. -Marie Curie\nToo many of us are not living our dreams because we are living our fears. -Les Brown\nChallenges are what make life interesting and overcoming them is what makes life meaningful. -Joshua J. Marine\nIf you want to lift yourself up, lift up someone else. -Booker T. Washington\nI have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do. -Leonardo da Vinci\nLimitations live only in our minds.  But if we use our imaginations, our possibilities become limitless. -Jamie Paolinetti\nYou take your life in your own hands, and what happens? A terrible thing, no one to blame. -Erica Jong\nWhat\u2019s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do. -Bob Dylan\nI didn\u2019t fail the test. I just found 100 ways to do it wrong. -Benjamin Franklin\nIn order to succeed, your desire for success should be greater than your fear of failure. -Bill Cosby\nA person who never made a mistake never tried anything new. - Albert Einstein\nThe person who says it cannot be done should not interrupt the person who is doing it. -Chinese Proverb\nThere are no traffic jams along the extra mile. -Roger Staubach\nIt is never too late to be what you might have been. -George Eliot\nYou become what you believe. -Oprah Winfrey\nI would rather die of passion than of boredom. -Vincent van Gogh\nA truly rich man is one whose children run into his arms when his hands are empty. -Unknown\nIt is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.  -Ann Landers\nIf you want your children to turn out well, spend twice as much time with them, and half as much money. -Abigail Van Buren\nBuild your own dreams, or someone else will hire you to build theirs. -Farrah Gray\nThe battles that count aren't the ones for gold medals. The struggles within yourself--the invisible battles inside all of us--that's where it's at. -Jesse Owens\nEducation costs money.  But then so does ignorance. -Sir Claus Moser\nI have learned over the years that when one's mind is made up, this diminishes fear. -Rosa Parks\nIt does not matter how slowly you go as long as you do not stop. -Confucius\nIf you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey\nRemember that not getting what you want is sometimes a wonderful stroke of luck. -Dalai Lama\nYou can\u2019t use up creativity.  The more you use, the more you have. -Maya Angelou\nDream big and dare to fail. -Norman Vaughan\nOur lives begin to end the day we become silent about things that matter. -Martin Luther King Jr.\nDo what you can, where you are, with what you have. -Teddy Roosevelt\nIf you do what you\u2019ve always done, you\u2019ll get what you\u2019ve always gotten. -Tony Robbins\nDreaming, after all, is a form of planning. -Gloria Steinem\nIt's your place in the world; it's your life. Go on and do all you can with it, and make it the life you want to live. -Mae Jemison\nYou may be disappointed if you fail, but you are doomed if you don't try. -Beverly Sills\nRemember no one can make you feel inferior without your consent. -Eleanor Roosevelt\nLife is what we make it, always has been, always will be. -Grandma Moses\nThe question isn\u2019t who is going to let me; it\u2019s who is going to stop me. -Ayn Rand\nWhen everything seems to be going against you, remember that the airplane takes off against the wind, not with it. -Henry Ford\nIt\u2019s not the years in your life that count. It\u2019s the life in your years. -Abraham Lincoln\nChange your thoughts and you change your world. -Norman Vincent Peale\nEither write something worth reading or do something worth writing. -Benjamin Franklin\nNothing is impossible, the word itself says, \u201cI\u2019m possible!\u201d -Audrey Hepburn\nThe only way to do great work is to love what you do. -Steve Jobs\nIf you can dream it, you can achieve it. -Zig Ziglar".split("\n"),F=a(22),I=a(27),O=a(26),j=(a(42),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleCustomTime=function(e){n.props.isRunning||n.setCustomTime(e.target)},n.setCustomTime=function(e){if(null!=e){var t=parseFloat(e.value);e.min<=t&&e.max>=t?(n.props.setFastLength(t),n.props.toggleStartButton(!1)):n.props.toggleStartButton(!0)}},n.handleOptionChange=function(e){var t=e.target.id;n.setState({selectedRadio:"custom"!=t?t:"Radio3"}),"Radio3"==t?n.setCustomTime(document.getElementById("custom")):(n.props.setFastLength(parseFloat(e.target.value)),n.props.toggleStartButton(!1))},n.state={selectedRadio:"Radio1"},n.handleOptionChange=n.handleOptionChange.bind(Object(d.a)(n)),n.handleCustomTime=n.handleCustomTime.bind(Object(d.a)(n)),n}return Object(h.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"radioButtons"},o.a.createElement("div",{className:"radioButton"},o.a.createElement("input",{type:"radio",name:"Radios",id:"Radio1",value:16,checked:"Radio1"===this.state.selectedRadio,onClick:this.handleOptionChange,disabled:this.props.isRunning}),o.a.createElement("label",{className:"radioLabel"}," 16:8 ")),o.a.createElement("div",{className:"radioButton"},o.a.createElement("input",{type:"radio",name:"Radios",id:"Radio2",value:18,checked:"Radio2"===this.state.selectedRadio,onClick:this.handleOptionChange,disabled:this.props.isRunning}),o.a.createElement("label",{className:"radioLabel"}," 18:6 ")),o.a.createElement("div",{className:"radioButton",id:"customSelect"},o.a.createElement("input",{type:"radio",name:"Radios",id:"Radio3",value:"option3",checked:"Radio3"===this.state.selectedRadio,onClick:this.handleOptionChange,disabled:this.props.isRunning}),o.a.createElement("label",{className:"radioLabel"},"Custom"),o.a.createElement(I.a,{placement:"right",overlay:o.a.createElement(O.a,null,"Choose intended fasting hours between 5 and 23, inclusive.")},o.a.createElement("div",{id:"customInput"},o.a.createElement("input",{type:"number",id:"custom",name:"quantity",min:"5",max:"23",placeholder:this.props.fastLength,disabled:this.props.isRunning,onChange:this.handleCustomTime,onClick:this.handleOptionChange}),o.a.createElement("br",null)))))}}]),a}(n.Component)),B=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleStartStop=function(){n.props.isRunning?(n.setState({endTime:Date.now()}),n.props.toggleRunning(),n.props.saveFast(n.props.fastLength,n.props.displayTime),n.props.setDurationText(b()(n.state.endTime).fromNow()),n.props.toggleStartButton(!1)):(n.props.setDisplayTime(60*n.props.fastLength*60*1e3),n.props.toggleRunning(),n.props.toggleStartButton(!0))},n.state={},n.handleStartStop=n.handleStartStop.bind(Object(d.a)(n)),n}return Object(h.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{id:"OptionsPanel"},o.a.createElement(F.a,{onClick:this.handleStartStop,disabled:this.props.startDisabled},o.a.createElement(g.c,null),"Start"),o.a.createElement(F.a,{variant:"danger",onClick:this.handleStartStop,disabled:!this.props.isRunning},o.a.createElement(g.d,null),"Stop"),o.a.createElement(j,{setFastLength:this.props.setFastLength,toggleStartButton:this.props.toggleStartButton,isRunning:this.props.isRunning,durationText:this.props.durationText}),o.a.createElement("div",{className:"timeSince"},"Time since last fast: ",this.props.durationText," "))}}]),a}(n.Component),L=(a(46),function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).changeTimer=function(e){a.setState({isTimerChanged:e})},a.state={isRunning:!1,fastLength:1/60/30,displayTime:2e3,startDisabled:!1,durationText:"you have yet to complete a fast"},a.toggleRunning=a.toggleRunning.bind(Object(d.a)(a)),a.setFastLength=a.setFastLength.bind(Object(d.a)(a)),a.setDisplayTime=a.setDisplayTime.bind(Object(d.a)(a)),a.setDurationText=a.setDurationText.bind(Object(d.a)(a)),a.toggleStartButton=a.toggleStartButton.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"toggleStartButton",value:function(e){this.setState({startDisabled:e})}},{key:"setDurationText",value:function(e){this.setState({durationText:e})}},{key:"toggleRunning",value:function(){this.setState({isRunning:!this.state.isRunning})}},{key:"setFastLength",value:function(e){isNaN(e)?console.log("input rejected"):this.setState({fastLength:e,displayTime:1e3*e*60*60})}},{key:"setDisplayTime",value:function(e){this.setState({displayTime:parseFloat(e)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"MainPanel"},o.a.createElement("h1",null," ",o.a.createElement("span",{className:"mainlogo"},"STARV")),o.a.createElement("p",{className:"subtitle"},"Superb Timer for Achieving Resolutions Victoriously:",o.a.createElement("br",null),o.a.createElement("i",null,"A dieting solution for the 21st century")),o.a.createElement(S,{saveFast:this.props.saveFast,isRunning:this.state.isRunning,fastLength:this.state.fastLength,displayTime:this.state.displayTime,toggleRunning:this.toggleRunning,setDisplayTime:this.setDisplayTime,toggleStartButton:this.toggleStartButton,setDurationText:this.setDurationText,pastFasts:this.props.pastFasts}),o.a.createElement(B,{fastLength:this.state.fastLength,displayTime:this.state.displayTime,durationText:this.state.durationText,setDurationText:this.setDurationText,isRunning:this.state.isRunning,saveFast:this.props.saveFast,setDisplayTime:this.setDisplayTime,startDisabled:this.state.startDisabled,toggleStartButton:this.toggleStartButton,toggleRunning:this.toggleRunning,setFastLength:this.setFastLength,isTimerChanged:this.props.isTimerChanged}),o.a.createElement(C,null),o.a.createElement("div",null,this.state.isRunning?"":this.props.isTimerChanged?o.a.createElement("div",null,o.a.createElement("img",{id:"congrats",src:a(47),alt:"congrats"})):o.a.createElement("div",null)))}}]),n}(n.Component)),D=(a(48),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).saveFast=function(e,t){var a=parseFloat(t),o=60*e*60*1e3-a,s=Date.now(),i={dateMade:b()().format("MMM DD, YYYY"),dateCompare:s,wasSuccessful:0===a,timePassed:o,index:n.state.pastFasts.length};n.setState((function(e){return{pastFasts:[].concat(Object(r.a)(e.pastFasts),[i])}})),0===a?n.setState({isTimerChanged:!0}):n.setState({isTimerChanged:!1})},n.state={pastFasts:[],isTimerChanged:!1},n}return Object(h.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"StatsPanel"},o.a.createElement(f,{pastFasts:this.state.pastFasts})),o.a.createElement("div",{className:"MainPanel"},o.a.createElement(L,{saveFast:this.saveFast,pastFasts:this.state.pastFasts,isTimerChanged:this.state.isTimerChanged})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.c08e4d95.chunk.js.map