function grade(mark) {
    if (mark <= 100 && mark >= 0) {
        if (mark >= 90) {
            return ('Congratulations you got GPA A+');
        }
        else if (mark >= 80) {
            return ('Grade: A');
        }
        else if (mark >= 70) {
            return ('Grade: B');
        }
        else if (mark >= 60) {
            return ('Grade: C');
        }
        else if (mark >= 50) {
            return ('Grade: D');
        }
        else {
            return ('fail !');
        }
    }
    else {
        return ('Enter Valid Mark');
    }
}
var myMarks = 100;
var myMarkIs = grade(myMarks)
console.log(myMarkIs);