let netSalary;(grosSalary - ((payee*12)+(nhif*12)+(nssf*12)))
const basicSalary = Number (prompt("what is your basic salary ?"))
const benefits = Number (prompt("what are your benefits ?"))
const pensionablepay = Number (prompt ("what is your NSSF tier"))
let grosSalary = ((basicSalary + benefits)*12)
let nhif;
let payee ;
let nssf = ((pensionablepay*6)/100)

if (basicSalary + benefits <= 24000){
    payee = (((basicSalary + benefits)*10)/100)
}else if (basicSalary + benefits  >= 24001 && basicSalary + benefits <= 32333){
    payee = (((basicSalary + benefits)*25)/100)
}else if (basicSalary + benefits > 32333){
    payee = (((basicSalary + benefits)*30)/100)
}

if (basicSalary + benefits <= 5999){
    nhif = 150
}else if (basicSalary + benefits >= 6000 && basicSalary + benefits <= 7999){
    nhif = 300
}else if (basicSalary + benefits >= 8000 && basicSalary + benefits <= 11999){
    nhif = 400
}else if (basicSalary + benefits >= 12000 && basicSalary + benefits <= 14999){
    nhif = 500
}else if (basicSalary + benefits >= 15000 && basicSalary + benefits <= 19999){
    nhif = 600
}else if (basicSalary + benefits >= 20000 && basicSalary + benefits <= 24999){
    nhif = 750
}else if (basicSalary + benefits >= 25000 && basicSalary + benefits <= 29999){
    nhif = 850
}else if (basicSalary + benefits >= 30000 && basicSalary + benefits <= 34999){
    nhif = 900
}else if (basicSalary + benefits >= 35000 && basicSalary + benefits <= 39999){
    nhif = 950
}else if (basicSalary + benefits >= 40000 && basicSalary + benefits <= 44999){
    nhif = 1000
}else if (basicSalary + benefits >= 45000 && basicSalary + benefits <= 49999){
    nhif = 1100
}else if (basicSalary + benefits >= 50000 && basicSalary + benefits <= 59999){
    nhif = 1200
}else if (basicSalary + benefits >= 60000 && basicSalary + benefits <= 69999){
    nhif = 1300
}else if (basicSalary + benefits >= 70000 && basicSalary + benefits <= 79999){
    nhif = 1400
}else if (basicSalary + benefits >= 80000 && basicSalary + benefits <= 89999){
    nhif = 1500
}else if (basicSalary + benefits >= 90000 && basicSalary + benefits <= 99999){
    nhif = 1600
}else if (basicSalary + benefits > 100000){
    nhif = 1700
}


