// 计算标准体重Standard Weight
function getSW() {
    var Height = document.getElementById('Height').value; 
    var personSex = document.getElementById('personSex').value; 
    
    var SW;
    if (personSex === '1') {
        SW = (Height - 80) * 0.7; // 使用男性体重系数计算标准体重
    } else {
        SW = (Height - 70) * 0.6; // 使用女性体重系数计算标准体重
    }

    // 用js函数tofixed()来将数字减少到特定的小数位数
    SW = SW.toFixed(2); 

    document.getElementById('result').innerHTML = "您的身高标准体重为：" + SW + " Kg"; 
}
