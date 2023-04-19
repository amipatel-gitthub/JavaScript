let arr = [];

$(document).ready(function () {
    $("#btn").click(function() {
        const name = $("#name").val();
        const salary = parseInt($("#salary").val());
        const hra = (salary * 0.08);
        const da = (salary * 0.08);
        const pf = (salary * 0.12);

        let net_salary = salary + hra + da - pf;
        console.log(net_salary);

        let object = {
            "name" : name, 
            "hra" : hra,
            "pf" : pf,
            "da" : da,
            "net_salary" : net_salary,
        }
        arr.push(object);
        console.log(arr);
    })
})