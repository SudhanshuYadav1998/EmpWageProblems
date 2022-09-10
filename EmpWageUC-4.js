console.log("Welcome to Employee Wage Calculator")
let EmpHrs=0;
let EmpWage=0;
let isPartTime=0;
let isFullTime=1;
let isAbsent=2;
let EmpWagePerHrs=20;
let MaxWorkingDays=20;
let MaxWorkingHrs=100;
let TotalWorkingDays=0;
let TotalWorkingHrs=0;
while(TotalWorkingDays<MaxWorkingDays && TotalWorkingHrs<MaxWorkingHrs)
{
    TotalWorkingDays++;
    let EmpCheck=Math.floor(Math.random()*3);
    switch(EmpCheck)
    {
        case isPartTime:
        EmpHrs=4;
        break;
        case isFullTime:
        EmpHrs=8;
        break;
        default:
        EmpHrs=0;
        break;
    }
    TotalWorkingHrs+=EmpHrs
    if(TotalWorkingHrs>100)
    {
        TotalWorkingHrs=100;
    }
    console.log("Day: "+TotalWorkingDays + " " + "Working Hrs: " +EmpHrs)

}
console.log("Total Emp Hrs: "+TotalWorkingHrs)
EmpWage=TotalWorkingHrs*EmpWagePerHrs
console.log("Total Emp Wage is: "+EmpWage)