package at.htl.ccrestprovider.model;

import java.time.LocalDateTime;

/**
 * Created by kepplinger on 19.10.16.
 */
public class DateTime {

    private int day;
    private int month;
    private int year;
    private int hour;
    private int minute;
    private int second;

    public DateTime() {
    }

    public DateTime(DateTime dateTime) {
        this.day = dateTime.getDay();
        this.month = dateTime.getMonth();
        this.year = dateTime.getYear();
        this.hour = dateTime.getHours();
        this.minute = dateTime.getMinutes();
        this.second = dateTime.getSeconds();
    }

    public DateTime(int day, int month, int year, int hour, int minute, int second) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

    public int getDay() {
        return day;
    }

    public int getMonth() {
        return month;
    }

    public int getYear() {
        return year;
    }

    public int getHours() {
        return hour;
    }

    public int getMinutes() {
        return minute;
    }

    public int getSeconds() {
        return second;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public void setHours(int hour) {
        this.hour = hour;
    }

    public void setMinutes(int minute) {
        this.minute = minute;
    }

    public void setSeconds(int second) {
        this.second = second;
    }

    public DateTime plusSeconds(int secondsToAdd) {
        DateTime dateTime = new DateTime(this);
        dateTime.setSeconds(dateTime.getSeconds() + secondsToAdd);
        return dateTime;
    }

    public boolean isAfter(DateTime dateTime) {
        if (year > dateTime.getYear()) {
            return true;
        } else if (year == dateTime.getYear()) {
            if (month > dateTime.getMonth()) {
                return true;
            } else if (month == dateTime.getMonth()) {
                if (day > dateTime.getDay()) {
                    return true;
                } else if (day == dateTime.getDay()){
                    if (hour > dateTime.getHours()) {
                        return true;
                    } else if (hour == dateTime.getHours()) {
                        if (minute > dateTime.getMinutes()) {
                            return true;
                        } else if (minute == dateTime.getMinutes()) {
                            if (second > dateTime.getSeconds()) {
                                return true;
                            } else {
                                return false;
                            }
                        }
                    }
                }
            }
        }
        return false;
    }

    public boolean isBefore(DateTime dateTime){
        if (year < dateTime.getYear()) {
            return true;
        } else if (year == dateTime.getYear()) {
            if (month < dateTime.getMonth()) {
                return true;
            } else if (month == dateTime.getMonth()) {
                if (day < dateTime.getDay()) {
                    return true;
                } else if (day == dateTime.getDay()){
                    if (hour < dateTime.getHours()) {
                        return true;
                    } else if (hour == dateTime.getHours()) {
                        if (minute < dateTime.getMinutes()) {
                            return true;
                        } else if (minute == dateTime.getMinutes()) {
                            if (second < dateTime.getSeconds()) {
                                return true;
                            } else {
                                return false;
                            }
                        }
                    }
                }
            }
        }
        return false;
    }

    public static DateTime now() {

        LocalDateTime localDateTime = LocalDateTime.now();


        return new DateTime(localDateTime.getDayOfMonth(),
                localDateTime.getMonthValue(),
                localDateTime.getYear(),
                localDateTime.getHour(),
                localDateTime.getMinute(),
                localDateTime.getSecond());
    }
}
