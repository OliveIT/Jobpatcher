
export function changeDateFormat(date) {
    var datetime = new Date(date);
    const month = datetime.toLocaleString('en-us', { month: 'long' });
    const time = datetime.toLocaleString('en-us', { hour12: true, hour : 'numeric', minute: '2-digit'  });

    return datetime.getDate() + " " + month;
}

export function changeDateYearFormat(date) {
    var datetime = new Date(date);
    const month = datetime.toLocaleString('en-us', { month: 'long' });
    
    return datetime.getDate() + " " + month + ", " + datetime.getFullYear();
}

export function changeDateTimeFormat(date) {
    var datetime = new Date(date);
    const month = datetime.toLocaleString('en-us', { month: 'long' });
    const time = datetime.toLocaleString('en-us', { hour12: true, hour : 'numeric', minute: '2-digit'  });

    return datetime.getDate() + " " + month + " | " + time;
}

export function changeDateTimeAtFormat(date) {
    var datetime = new Date(date);
    const month = datetime.toLocaleString('en-us', { month: 'long' });
    const time = datetime.toLocaleString('en-us', { hour12: true, hour : 'numeric', minute: '2-digit'  });

    return datetime.getDate() + " " + month + " at " + time;
}

export function changeTimeFormat(date) {
    var datetime = new Date(date);
    const time = datetime.toLocaleString('en-us', { hour12: true, hour : 'numeric', minute: '2-digit'  });

    return time;
}

export function changeSpecialDateFormat(date) {
    var today = new Date();
    var datetime = new Date(date);
    var year = datetime.getFullYear();
    var special = "";
    const month = datetime.toLocaleString('en-us', { month: 'long' });

    if( year == today.getFullYear() ) {
        if( today.getMonth() == datetime.getMonth() &&
            today.getDate() == datetime.getDate() ){
            special = " - Today";
        } else {
            var specialDay = new Date();
            specialDay.setDate( today.getDate() - 1 );
            if( specialDay.getMonth() == datetime.getMonth() && specialDay.getDate() == datetime.getDate() ){
                special = " - Yesterday";
            }

            specialDay = new Date();
            specialDay.setDate( today.getDate() + 1 );
            if( specialDay.getMonth() == datetime.getMonth() && specialDay.getDate() == datetime.getDate() ){
                special = " - Tomorrow";
            }
        }
    } else {
        return month + " " + datetime.getDate() + ", " + year;
    }    

    return month + " " + datetime.getDate() + special;
}

export function changeDateRangeFormat(dateStart, dateEnd) {
    var datetimeStart = new Date(dateStart);
    var datetimeEnd = new Date(dateEnd);
    var monthStart = datetimeStart.toLocaleString('en-us', { month: 'long' });
    var monthEnd = datetimeEnd.toLocaleString('en-us', { month: 'long' });
    var dateStart = datetimeStart.getDate();
    var dateEnd = datetimeEnd.getDate();
    var dateStartStr = dateStart + " " + monthStart;
    var dateEndStr = dateEnd + " " + monthEnd;
    if( monthStart == monthEnd && dateStart == dateEnd ) 
        dateEndStr = "";

    return dateStartStr + " - " + dateEndStr;
}

export function changeDateRangeWithTimeFormat(dateStart, dateEnd) {
    var datetimeStart = new Date(dateStart);
    var datetimeEnd = new Date(dateEnd);
    var monthStart = datetimeStart.toLocaleString('en-us', { month: 'long' });
    var monthEnd = datetimeEnd.toLocaleString('en-us', { month: 'long' });
    var dateStart = datetimeStart.getDate();
    var dateEnd = datetimeEnd.getDate();
    var dateStartStr = dateStart + " " + monthStart + " | ";
    var dateEndStr = dateEnd + " " + monthEnd + " | ";
    if( monthStart == monthEnd && dateStart == dateEnd ) 
        dateEndStr = "";

    var timeStart = datetimeStart.toLocaleString('en-us', { hour12: true, hour : 'numeric', minute: '2-digit'  });
    var timeEnd = datetimeEnd.toLocaleString('en-us', { hour12: true, hour : 'numeric', minute: '2-digit'  });

    return dateStartStr + timeStart + " - " + dateEndStr + timeEnd;
}

////////////////////////////////  ss  //////////////////////////////////
function dayString(day) {
    var dayStr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayStr[day];
}

export function changeSpecialDateFormatSS(date) {
    var today = new Date();
    var datetime = new Date(date);
    var year = datetime.getFullYear();
    var special = "";
    const month = datetime.toLocaleString('en-us', { month: 'short' });

    if( year == today.getFullYear() ) {
        if( today.getMonth() == datetime.getMonth() &&
            today.getDate() == datetime.getDate() ){
            special = " - Today";
        } else {
            var specialDay = new Date();
            specialDay.setDate( today.getDate() - 1 );
            if( specialDay.getMonth() == datetime.getMonth() && specialDay.getDate() == datetime.getDate() ){
                special = " - Yesterday";
            }

            specialDay = new Date();
            specialDay.setDate( today.getDate() + 1 );
            if( specialDay.getMonth() == datetime.getMonth() && specialDay.getDate() == datetime.getDate() ){
                special = " - Tomorrow";
            }
        }
    } else {
        return month + " " + datetime.getDate() + ", " + year;
    }    

    return month + " " + datetime.getDate() + special;
}

export function changeDayDateMonthYearFormatSS(date) {
    var datetime = new Date(date);
    var day = datetime.getDay();
    var year = datetime.getFullYear();
    var month = datetime.toLocaleString('en-us', { month: 'long'});
    var date = datetime.getDate();

    return dayString(day) + ", " + month + " " + date + ", " + year;
}