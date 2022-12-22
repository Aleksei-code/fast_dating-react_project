import React from "react";

export function displayDate(data) {
    const month = (monthN) => {
        switch (monthN) {
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November";
            case 11:
                return "December";
        }
    };
    const timestampNow = Date.parse(Date());
    const diffOfTime = timestampNow - data;
    if (diffOfTime < 60000) {
        return "one minute ago";
    } else if (diffOfTime < 300000) {
        return "5 minutes ago";
    } else if (diffOfTime < 600000) {
        return "10 minutes ago";
    } else if (diffOfTime < 1800000) {
        return "30 minutes ago";
    } else if (diffOfTime < 86400000) {
        let hours = new Date(+data).getHours();
        if (hours < 10) {
            hours = "0" + hours;
        }
        let minutes = new Date(+data).getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return (
            <>
                {hours}:{minutes}
            </>
        );
    } else if (diffOfTime < 946080000) {
        return (
            <>
                {new Date(+data).getDate()} {month(new Date(+data).getMonth())}
            </>
        );
    } else {
        return (
            <>
                {new Date(+data).getDate()} {month(new Date(+data).getMonth())}{" "}
                {new Date(+data).getFullYear()}
            </>
        );
    }
}
