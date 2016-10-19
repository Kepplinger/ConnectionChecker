package at.htl.ccrestprovider.model;

import java.time.LocalDateTime;

/**
 * This class stores the current date and time.
 * It also has some convenient functions which are useful for
 * the disconnection algorithm.
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
        this.hour = dateTime.getHour();
        this.minute = dateTime.getMinute();
        this.second = dateTime.getSecond();
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

    public int getHour() {
        return hour;
    }

    public int getMinute() {
        return minute;
    }

    public int getSecond() {
        return second;
    }

    public void setSeconds(int second) {
        this.second = second;
    }

    /**
     * Returns a new DateTime object and adds the given seconds to its current time.
     *
     * @param secondsToAdd
     * @return DateTime
     */
    public DateTime plusSeconds(int secondsToAdd) {
        DateTime dateTime = new DateTime(this);
        dateTime.setSeconds(dateTime.getSecond() + secondsToAdd);
        return dateTime;
    }

    /**
     * Checks if given DateTime is after the current instance.
     *
     * @param dateTime
     * @return boolean
     */
    public boolean isAfter(DateTime dateTime) {
        if (year > dateTime.getYear()) {
            return true;
        } else if (year == dateTime.getYear()) {
            if (month > dateTime.getMonth()) {
                return true;
            } else if (month == dateTime.getMonth()) {
                if (day > dateTime.getDay()) {
                    return true;
                } else if (day == dateTime.getDay()) {
                    if (hour > dateTime.getHour()) {
                        return true;
                    } else if (hour == dateTime.getHour()) {
                        if (minute > dateTime.getMinute()) {
                            return true;
                        } else if (minute == dateTime.getMinute()) {
                            if (second > dateTime.getSecond()) {
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

    /**
     * Checks if given DateTime is before the current instance.
     *
     * @param dateTime
     * @return boolean
     */
    public boolean isBefore(DateTime dateTime) {
        if (year < dateTime.getYear()) {
            return true;
        } else if (year == dateTime.getYear()) {
            if (month < dateTime.getMonth()) {
                return true;
            } else if (month == dateTime.getMonth()) {
                if (day < dateTime.getDay()) {
                    return true;
                } else if (day == dateTime.getDay()) {
                    if (hour < dateTime.getHour()) {
                        return true;
                    } else if (hour == dateTime.getHour()) {
                        if (minute < dateTime.getMinute()) {
                            return true;
                        } else if (minute == dateTime.getMinute()) {
                            if (second < dateTime.getSecond()) {
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

    /**
     * Returns the current time in the DateTime format.
     *
     * @return DateTime
     */
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
