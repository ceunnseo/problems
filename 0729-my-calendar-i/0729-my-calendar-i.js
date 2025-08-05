
var MyCalendar = function() {
    this.bookings = []; //예약 저장소
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendar.prototype.book = function(startTime, endTime) {
    for (const [s, e] of this.bookings) {
        if (startTime < e && s < endTime) {
            return false;
        }
    }
    this.bookings.push([startTime, endTime]);
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */