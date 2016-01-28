
wdays = [];
wdays["U"] = [0,"Sunday"];
wdays["M"] = [1,"Monday"];
wdays["T"] = [2,"Tuesday"];
wdays["W"] = [3,"Wednesday"];
wdays["R"] = [4,"Thursday"];
wdays["F"] = [5,"Friday"];
wdays["S"] = [6,"Saturday"];

wdays2 = [];
wdays2[0] = ["U"];
wdays2[1] = ["M"];
wdays2[2] = ["T"];
wdays2[3] = ["W"];
wdays2[4] = ["R"];
wdays2[5] = ["F"];
wdays2[6] = ["S"];

function Session(wd,d,w,n){
	this.sessionsNumber = n;
	this.sessionWeekDay = wdays[wd][1];
	this.sessionDate = d;
	this.week = w;
}

/*function Schedule(d,n,ss){
	this.startDate = d;
	this.numberOfSessions = n;
	this.sessions = ss;
}*/

function Schedule(cnf){
	var str = cnf.sessionDays;
	var sd = cnf.startDate;
	var date = new Date(sd);
	var week = cnf.startWeekNumber;
	var breakS = new Date(cnf.breakStartDate);
	var breakE = new Date(cnf.resumeDate);
	var nsessions = cnf.numberOfSessions;

	var sessions = [];

	var cnt = 0;

	//for(var i=0;i<nsessions;i++){
	while(true){
		if(cnt >= nsessions) {break;}
		var dnum = date.getDay();
		var wday = wdays2[dnum];
		if(dnum == 0 && cnt != 0){
			week += 1;
		}
		if(str.includes(wday) && (date.getTime() < breakS.getTime() || date.getTime() >= breakE.getTime())){
			//ddate = new Date(date.getTime());
			cnt += 1;
			sessions[cnt] = new Session(wday,date.toLocaleDateString(),week,cnt);
		}
		date.setDate(date.getDate() + 1);
		//cnt += 1;
	}

	//return new Schedule(sd,nsessions,sessions);
	this.startDate = sd;
	this.numberOfSessions = nsessions;
	this.sessions = sessions;
}



///////////////////////////Run Test

sampleCnf = {
 "sessionDays": "MWR", // possible values MTWRFSU
 "startDate": "11/30/2015",
 "startWeekNumber": 1, // possible values are 0 and 1
 "breakStartDate": "12/21/2015", // first day without meeting
 "resumeDate": "1/4/2016", // first day back in session
 "numberOfSessions": 30
}


console.log(new Schedule(sampleCnf));