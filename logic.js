var input1 = document.getElementById("input1");
document.querySelector("button").addEventListener("click",function(){
    var year = input1.value;
    var days = year*365;
    document.getElementById("input2").value = days + "  days";
})