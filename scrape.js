/*! ics.js Wed Aug 20 2014 17:23:02 */
/* var saveAs=saveAs||function(e){"use strict";if(typeof e==="undefined"||typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,a=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s="application/octet-stream",d=1e3*40,c=function(e){var t=function(){if(typeof e==="string"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,d)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e["on"+t[r]];if(typeof o==="function"){try{o.call(e,n||e)}catch(a){u(a)}}}},p=function(e){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,d){if(!d){t=p(t)}var v=this,w=t.type,m=w===s,y,h=function(){l(v,"writestart progress write writeend".split(" "))},S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");var n=e.open(t,"_blank");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,"_blank");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||"download",n)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||"download";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!==null){define("FileSaver.js",function(){return saveAs})}
var icss=function(e,t){"use strict";{if(!(navigator.userAgent.indexOf("MSIE")>-1&&-1==navigator.userAgent.indexOf("MSIE 10"))){void 0===e&&(e="default"),void 0===t&&(t="Calendar");var r=-1!==navigator.appVersion.indexOf("Win")?"\r\n":"\n",n=[],i=["BEGIN:VCALENDAR","PRODID:"+t,"VERSION:2.0"].join(r),o=r+"END:VCALENDAR",a=["SU","MO","TU","WE","TH","FR","SA"];return{events:function(){return n},calendar:function(){return i+r+n.join(r)+o},addEvent:function(t,i,o,l,u,s){if(void 0===t||void 0===i||void 0===o||void 0===l||void 0===u)return!1;if(s&&!s.rrule){if("YEARLY"!==s.freq&&"MONTHLY"!==s.freq&&"WEEKLY"!==s.freq&&"DAILY"!==s.freq)throw"Recurrence rrule frequency must be provided and be one of the following: 'YEARLY', 'MONTHLY', 'WEEKLY', or 'DAILY'";if(s.until&&isNaN(Date.parse(s.until)))throw"Recurrence rrule 'until' must be a valid date string";if(s.interval&&isNaN(parseInt(s.interval)))throw"Recurrence rrule 'interval' must be an integer";if(s.count&&isNaN(parseInt(s.count)))throw"Recurrence rrule 'count' must be an integer";if(void 0!==s.byday){if("[object Array]"!==Object.prototype.toString.call(s.byday))throw"Recurrence rrule 'byday' must be an array";if(s.byday.length>7)throw"Recurrence rrule 'byday' array must not be longer than the 7 days in a week";s.byday=s.byday.filter(function(e,t){return s.byday.indexOf(e)==t});for(var c in s.byday)if(a.indexOf(s.byday[c])<0)throw"Recurrence rrule 'byday' values must include only the following: 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'"}}var g=new Date(l),d=new Date(u),f=new Date,S=("0000"+g.getFullYear().toString()).slice(-4),E=("00"+(g.getMonth()+1).toString()).slice(-2),v=("00"+g.getDate().toString()).slice(-2),y=("00"+g.getHours().toString()).slice(-2),A=("00"+g.getMinutes().toString()).slice(-2),T=("00"+g.getSeconds().toString()).slice(-2),b=("0000"+d.getFullYear().toString()).slice(-4),D=("00"+(d.getMonth()+1).toString()).slice(-2),N=("00"+d.getDate().toString()).slice(-2),h=("00"+d.getHours().toString()).slice(-2),I=("00"+d.getMinutes().toString()).slice(-2),R=("00"+d.getMinutes().toString()).slice(-2),M=("0000"+f.getFullYear().toString()).slice(-4),w=("00"+(f.getMonth()+1).toString()).slice(-2),L=("00"+f.getDate().toString()).slice(-2),O=("00"+f.getHours().toString()).slice(-2),p=("00"+f.getMinutes().toString()).slice(-2),Y=("00"+f.getMinutes().toString()).slice(-2),U="",V="";y+A+T+h+I+R!=0&&(U="T"+y+A+T,V="T"+h+I+R);var B,C=S+E+v+U,j=b+D+N+V,m=M+w+L+("T"+O+p+Y);if(s)if(s.rrule)B=s.rrule;else{if(B="rrule:FREQ="+s.freq,s.until){var x=new Date(Date.parse(s.until)).toISOString();B+=";UNTIL="+x.substring(0,x.length-13).replace(/[-]/g,"")+"000000Z"}s.interval&&(B+=";INTERVAL="+s.interval),s.count&&(B+=";COUNT="+s.count),s.byday&&s.byday.length>0&&(B+=";BYDAY="+s.byday.join(","))}(new Date).toISOString();var H=["BEGIN:VEVENT","UID:"+n.length+"@"+e,"CLASS:PUBLIC","DESCRIPTION:"+i,"DTSTAMP;VALUE=DATE-TIME:"+m,"DTSTART;VALUE=DATE-TIME:"+C,"DTEND;VALUE=DATE-TIME:"+j,"LOCATION:"+o,"SUMMARY;LANGUAGE=en-us:"+t,"TRANSP:TRANSPARENT","END:VEVENT"];return B&&H.splice(4,0,B),H=H.join(r),n.push(H),H},download:function(e,t){if(n.length<1)return!1;t=void 0!==t?t:".ics",e=void 0!==e?e:"calendar";var a,l=i+r+n.join(r)+o;if(-1===navigator.userAgent.indexOf("MSIE 10"))a=new Blob([l]);else{var u=new BlobBuilder;u.append(l),a=u.getBlob("text/x-vCalendar;charset="+document.characterSet)}return saveAs(a,e+t),l},build:function(){return!(n.length<1)&&i+r+n.join(r)+o}}}console.log("Unsupported Browser")}};
*/
var saveAs=saveAs||function(e){"use strict";if(typeof e==="undefined"||typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,a=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s="application/octet-stream",d=1e3*40,c=function(e){var t=function(){if(typeof e==="string"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,d)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e["on"+t[r]];if(typeof o==="function"){try{o.call(e,n||e)}catch(a){u(a)}}}},p=function(e){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,d){if(!d){t=p(t)}var v=this,w=t.type,m=w===s,y,h=function(){l(v,"writestart progress write writeend".split(" "))},S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");var n=e.open(t,"_blank");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,"_blank");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||"download",n)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||"download";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!==null){define("FileSaver.js",function(){return saveAs})}

window.ics=function(e,t){"use strict";{if(!(navigator.userAgent.indexOf("MSIE")>-1&&-1==navigator.userAgent.indexOf("MSIE 10"))){void 0===e&&(e="default"),void 0===t&&(t="Calendar");var r=-1!==navigator.appVersion.indexOf("Win")?"\r\n":"\n",n=[],i=["BEGIN:VCALENDAR","PRODID:"+t,"VERSION:2.0"].join(r),o=r+"END:VCALENDAR",a=["SU","MO","TU","WE","TH","FR","SA"];return{events:function(){return n},calendar:function(){return i+r+n.join(r)+o},addEvent:function(t,i,o,l,u,s){if(void 0===t||void 0===i||void 0===o||void 0===l||void 0===u)return!1;if(s&&!s.rrule){if("YEARLY"!==s.freq&&"MONTHLY"!==s.freq&&"WEEKLY"!==s.freq&&"DAILY"!==s.freq)throw"Recurrence rrule frequency must be provided and be one of the following: 'YEARLY', 'MONTHLY', 'WEEKLY', or 'DAILY'";if(s.until&&isNaN(Date.parse(s.until)))throw"Recurrence rrule 'until' must be a valid date string";if(s.interval&&isNaN(parseInt(s.interval)))throw"Recurrence rrule 'interval' must be an integer";if(s.count&&isNaN(parseInt(s.count)))throw"Recurrence rrule 'count' must be an integer";if(void 0!==s.byday){if("[object Array]"!==Object.prototype.toString.call(s.byday))throw"Recurrence rrule 'byday' must be an array";if(s.byday.length>7)throw"Recurrence rrule 'byday' array must not be longer than the 7 days in a week";s.byday=s.byday.filter(function(e,t){return s.byday.indexOf(e)==t});for(var c in s.byday)if(a.indexOf(s.byday[c])<0)throw"Recurrence rrule 'byday' values must include only the following: 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'"}}var g=new Date(l),d=new Date(u),f=new Date,S=("0000"+g.getFullYear().toString()).slice(-4),E=("00"+(g.getMonth()+1).toString()).slice(-2),v=("00"+g.getDate().toString()).slice(-2),y=("00"+g.getHours().toString()).slice(-2),A=("00"+g.getMinutes().toString()).slice(-2),T=("00"+g.getSeconds().toString()).slice(-2),b=("0000"+d.getFullYear().toString()).slice(-4),D=("00"+(d.getMonth()+1).toString()).slice(-2),N=("00"+d.getDate().toString()).slice(-2),h=("00"+d.getHours().toString()).slice(-2),I=("00"+d.getMinutes().toString()).slice(-2),R=("00"+d.getMinutes().toString()).slice(-2),M=("0000"+f.getFullYear().toString()).slice(-4),w=("00"+(f.getMonth()+1).toString()).slice(-2),L=("00"+f.getDate().toString()).slice(-2),O=("00"+f.getHours().toString()).slice(-2),p=("00"+f.getMinutes().toString()).slice(-2),Y=("00"+f.getMinutes().toString()).slice(-2),U="",V="";y+A+T+h+I+R!=0&&(U="T"+y+A+T,V="T"+h+I+R);var B,C=S+E+v+U,j=b+D+N+V,m=M+w+L+("T"+O+p+Y);if(s)if(s.rrule)B=s.rrule;else{if(B="rrule:FREQ="+s.freq,s.until){var x=new Date(Date.parse(s.until)).toISOString();B+=";UNTIL="+x.substring(0,x.length-13).replace(/[-]/g,"")+"000000Z"}s.interval&&(B+=";INTERVAL="+s.interval),s.count&&(B+=";COUNT="+s.count),s.byday&&s.byday.length>0&&(B+=";BYDAY="+s.byday.join(","))}(new Date).toISOString();var H=["BEGIN:VEVENT","UID:"+n.length+"@"+e,"CLASS:PUBLIC","DESCRIPTION:"+i,"DTSTAMP;VALUE=DATE-TIME:"+m,"DTSTART;VALUE=DATE-TIME:"+C,"DTEND;VALUE=DATE-TIME:"+j,"LOCATION:"+o,"SUMMARY;LANGUAGE=en-us:"+t,"TRANSP:TRANSPARENT","END:VEVENT"];return B&&H.splice(4,0,B),H=H.join(r),n.push(H),H},download:function(e,t){if(n.length<1)return!1;t=void 0!==t?t:".ics",e=void 0!==e?e:"calendar";var a,l=i+r+n.join(r)+o;if(-1===navigator.userAgent.indexOf("MSIE 10"))a=new Blob([l]);else{var u=new BlobBuilder;u.append(l),a=u.getBlob("text/x-vCalendar;charset="+document.characterSet)}return saveAs(a,e+t),l},build:function(){return!(n.length<1)&&i+r+n.join(r)+o}}}console.log("Unsupported Browser")}};
cal = ics();
// cal.addEvent('Christmas', 'Christian holiday celebrating the birth of Jesus Christ', 'Bethlehem', '12/25/2013', '12/25/2013');
// cal.addEvent('Christmas', 'Christian holiday celebrating the birth of Jesus Christ', 'Bethlehem', '12/25/2014', '12/25/2014');
// cal.addEvent('New Years', 'Watch the ball drop!', 'New York', '01/01/2015', '01/01/2015');
// cal.addEvent('New Years', 'Watch the ball drop!', 'New York', '01/01/2016', '01/01/2016');

document.getElementById('scrapeButton').addEventListener('click', async () => {
    try {
       
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: parsePageContent,
        }, (results) => {
           
            if (chrome.runtime.lastError) {
                console.error('Script execution failed: ', chrome.runtime.lastError.message);
            } else if (results && results.length > 0) {

                const courses = results[0].result;
                console.log('Parsed content (courses):', courses);

              
                courses.forEach(function (course) {
                    calendarEvents = courseToCalendarEvents(course)
                    calendarEvents.forEach(function (calendarEvent) {
                        cal.addEvent(calendarEvent['summary'], calendarEvent['summary'], calendarEvent['location'], calendarEvent['start']['dateTime'], calendarEvent['end']['dateTime'], calendarEvent['recurrence'])
                      
                    })

                })

              
                cal.download('Student Schedule')
            }
        });
    } catch (err) {
        console.error('Failed to parse:', err);
    }
});

function courseToCalendarEvents(course) {

    const buildingAbbreviations = {
        "AAS": "Boston University African American Studies, 138 Mountfort St, Brookline, MA 02446",
        "AGG": "Agganis Arena, 925 Commonwealth Ave, Boston, MA 02215",
        "ASC": "Elliot Cole Academic Support Center, 300 Ashford St, Boston, MA 02134",
        "BRB": "Boston University Biology Research Building, 5 Cummington Mall, Boston, MA 02215",
        "BSC": "Boston University Biological Science Center, 2 Cummington Mall, Boston, MA 02215",
        "CAS": "College of Arts and Sciences, “725 Commonwealth Ave, Boston, MA 02215",
        "CDS": "BU Faculty of Computing & Data Sciences, 645-665 Commonwealth Avenue, Boston, MA 02215",
        "CFA": "College of Fine Arts, 855 Commonwealth Ave, Boston, MA 02215",
        "CGS": "College of General Studies, 871 Commonwealth Ave, Boston, MA 02215",
        "CNS": "Boston University Cognitive and Neural Systems Department, 677 Beacon St, Boston, MA 02215",
        "COM": "College of Communication, 640 Commonwealth Ave, Boston, MA 02215",
        "CRW": "Boston University DeWolfe Boathouse, 619 Memorial Dr, Cambridge, MA 02139",
        "CSE": "285 Babcock St, Boston, MA 02215",
        "EGL": "English Faculty Offices, 236 Bay State Road, Boston, MA 02215",
        "EIB": "BU Editorial Institute, 143 Bay State Rd, Boston, MA 02215",
        "EMA": "Boston University Engineering Manufacturing Annex, 730 Commonwealth Ave, Boston, MA 02215",
        "EMB": "Boston University Engineering Manufacturing Building, 15 St Mary's St, Brookline, MA 02446",
        "ENG": "College of Engineering, “112 Cummington Mall, Boston, MA 02215",
        "EOP": "Center for English Language, 890 Commonwealth Avenue, Boston, MA 02215",
        "EPC": "Engineering Product Innovation Center, 750 Commonwealth Ave, Brookline, MA 02446",
        "ERA": "Boston University Engineering Research Annex, 48 Cummington Mall, Boston, MA 02215",
        "ERB": "Boston University Engineering Research Building, 48 Cummington Mall, Boston, MA 02215",
        "FAB": "BU Fenway Activities Building, 180 Riverway, Boston, MA 02215",
        "FCB": "Fenway Classroom Building, 25 Pilgrim Rd, Boston, MA 02215",
        "FCC": "Campus Center & Student Residence, 150 Riverway, Boston, MA 02215",
        "FLR": "Boston University Peter Fuller Building, 808 Commonwealth Ave, Brookline, MA 02446",
        "GMS": "Faculty Office Building (Alden Hall), 704 Commonwealth Avenue, Boston, MA 02215",
        "GRS": "Graduate School of Arts and Sciences, 705 Commonwealth Ave, Boston, MA 02215",
        "GSU": "George Sherman Union, 775 Commonwealth Ave, Boston, MA 02215",
        "HAR": "Boston University Rafik B. Hariri Building, 595 Commonwealth Ave, Boston, MA 02215",
        "HAW": "Hawes Building, 43 Hawes Street, Brookline, MA 02446",
        "HIS": "History and American Studies Departments, 226 Bay State Rd, Boston, MA 02215",
        "IEC": "Boston University International Programs, 888 Commonwealth Ave, Boston, MA 02215",
        "IRB": "International Relations Building, 154 Bay State Rd, Boston, MA 02215",
        "IRC": "International Relations Center, 152 Bay State Road, Boston, MA 02215",
        "JSC": "Elie Wiesel Center for Jewish Studies, 147 Bay State Road, Boston, MA 02215",
        "KCB": "Boston University Kenmore Classroom Building, 565 Commonwealth Ave, Boston, MA 02215",
        "KHC": "Kilachand Honors College, 91 Bay State Rd # 115, Boston, MA 02215",
        "LAW": "Boston University School of Law, 765 Commonwealth Ave, Boston, MA 02215",
        "LEV": "Boston University Alan and Sherry Leventhal Center, 233 Bay State Rd, Boston, MA 02215",
        "LNG": "Romance Studies/Modern Foreign Languages, 718 Commonwealth Avenue, Boston, MA 02215",
        "LSE": "Boston University Life Science and Engineering Building, 24 Cummington Mall, Boston, MA 02215",
        "MCH": "Boston University Marsh Chapel, 735 Commonwealth Ave, Boston, MA 02215",
        "MCS": "Boston University Math and Computer Science, 111 Cummington Mall, Boston, MA 02215",
        "MED": "Boston University School of Public Health, 715 Albany Street, Boston, MA 02118",
        "MET": "Boston University Metropolitan College, 1010 Commonwealth Ave, Boston, MA 02215",
        "MOR": "Alfred L. Morse Auditorium, 602 Commonwealth Ave, Boston, MA 02215",
        "MUG": "Mugar Memorial Library, Gotlieb Archival Research Center, 771 Commonwealth Ave, Boston, MA 02215",
        "PDP": "Physical Development Program, 915 Commonwealth Avenue, Boston, MA 02215",
        "PHO": "Boston University Photonics Building, 6-8 St Mary's St, Boston, MA 02215",
        "PLS": "Anthropology, Philosophy, Political Science, 232 Bay State Road, Boston, MA 02215",
        "PRB": "Boston University Physics Research Building, 3 Cummington Mall, Boston, MA 02215",
        "PSY": "Department of Psychological and Brain Sciences, “86 Cummington Mall # 149, Boston, MA 02215",
        "PTH": "Boston Playwrights' Theatre, 949 Commonwealth Ave, Boston, MA 02215",
        "REL": "CAS Religion, 145 Bay State Road, Boston, MA 02215",
        "RKC": "Rajen Kilachand Center for Integrated Life Sciences & Engineering, 610 Commonwealth Ave, Boston, MA 02215",
        "SAC": "Sargent Activities Office, 1 University Road, MA 02215",
        "SAL": "Boston University Sailing Pavilion, Dr Paul Dudley White Bike Path, Boston, MA 02215",
        "SAR": "Sargent College of Health and Rehabilitation Sciences, 635 Commonwealth Ave, Boston, MA 02215",
        "SCI": "Metcalf Center for Science and Engineering, 590-596 Commonwealth Avenue, MA 02215",
        "SDM": "Henry M. Goldman School of Dental Medicine, 100 East Newton Street, Boston, MA 02118",
        "SHA": "Boston University School of Hospitality Administration, 928 Commonwealth Ave, Boston, MA 02215",
        "SLB": "Science and Engineering Library, “38 Cummington Mall, MA 02215",
        "SOC": "Department of Sociology, 96-100 Cummington Mall # 260, Boston, MA 02215",
        "SPH": "Boston University School of Public Health, 715 Albany St, Boston, MA 02118",
        "SSW": "School of Social Work, 264-270 Bay State Rd, Boston, MA 02215",
        "STH": "School of Theology, 745 Commonwealth Ave, Boston, MA 02215",
        "STO": "Stone Science Building, 675 Commonwealth Ave, Boston, MA 02215",
        "THA": "Joan & Edgar Booth Theatre and College of Fine Arts Production Center, 820 Commonwealth Ave, Brookline, MA 02446",
        "TTC": "Boston University Track & Tennis Center, 100 Ashford St, Boston, MA 02215",
        "WEA": "Wheelock College of Education & Human Development Annex, 621 Commonwealth Avenue, Boston, MA 02215",
        "WED": "Wheelock College of Education & Human Development, 2 Silber Way, Boston, MA 02215",
        "YAW": "Boston University Yawkey Center for Student Services, 100 Bay State Rd, Boston, MA 02215"
    };

    const weekdayToInt = {
        'Sun': 5,
        'Mon': 6,
        'Tue': 0,
        'Wed': 1,
        'Thu': 2,
        'Fri': 3,
        'Sat': 4
    };


    const semesterEndDate = "20241212T000000Z"


    classDays = course['days'].split(',')

    calendarEvents = []

    classDays.forEach(function (classDay) {
       
        const firstDayofClass = "2024-02-0" + (5 + weekdayToInt[classDay])
        calendarEvent = {
            summary: course['code'].split(/\s+/)[1] + " " + course['type'] + " @" + course['code'].split(/\s+/)[0] + " " + course['room'],
            location: buildingAbbreviations[course['location']],
           
            recurrence: {rrule:freq='WEEKLY'},
            start: {
                dateTime: convertDateFormatToGCal(course['start'], firstDayofClass),
                timeZone: 'America/New_York'
            },
            end: {
                dateTime: convertDateFormatToGCal(course['stop'], firstDayofClass),
                timeZone: 'America/New_York'
            },
        }
        calendarEvents.push(calendarEvent)
    })

    return calendarEvents
}

function convertDateFormatToGCal(time, date) {
    function convertTime12to24(time12h) {

        const [time, modifier] = [time12h.substring(0, time12h.length - 2), time12h.substring(time12h.length - 2)];
        let [hours, minutes] = time.split(':');

        if (hours === '12') {
            hours = '00';
        }

        if (modifier === 'pm') {
            hours = parseInt(hours, 10) + 12;
        }
        console.log(`${hours}:${minutes}`);
        return `${hours}:${minutes}`;
    }

    const time24 = convertTime12to24(time);

    const dateTime = `${date}T${time24}:00`;

    return dateTime;
}


function parsePageContent() {
   
    const courseTable = document.querySelectorAll('table')[4];


    const courseRows = courseTable.querySelectorAll('tr');

   
    const courses = [];

   
    for (let i = 1; i < courseRows.length; i++) {

       
        let course = {};

     
        row = courseRows[i];

   
        let tds = Array.from(row.querySelectorAll('td'));

      
        if (i == 1) {
            tds.shift();
        }

       
        firsttdIsCourse = tds[0].textContent.trim()
        const regex = /^[A-Z]{3}\s[A-Z]{2}\d{3}\s[A-Z]\d$/;
        if (!regex.test(firsttdIsCourse)) {
            break
        }

    
        course['code'] = tds[0].textContent.trim();
        course['title'] = tds[4].innerText.trim().split('\n')[0];
        course['instructor'] = tds[4].innerText.trim().split('\n')[1]
        course['type'] = tds[6].textContent.trim();
        course['location'] = tds[7].textContent.trim();
        course['room'] = tds[8].textContent.trim();
        course['days'] = tds[9].textContent.trim();
        course['start'] = tds[10].textContent.trim();
        course['stop'] = tds[11].textContent.trim();


        courses.push(course)
    }
    return courses;
}