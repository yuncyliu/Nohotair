function get1RM() {
    var MaxWeight,renumber;
    MaxWeight = document.getElementById('MaxWeight').value;
    renumber = document.getElementById('renumber').value;
    var RM = MaxWeight * (1 + renumber / 30);

    // 用js函数tofixed()来将数字减少到特定的小数位数
    RM = RM.toFixed(2);

    document.getElementById('result').innerHTML = "你的一次最大重量水平是 " + RM + "Kg";
    
}