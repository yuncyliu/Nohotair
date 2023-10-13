// 计算目标心率Target heart rate
function getTHR() {
    var age,Rhr,strength;

    age = document.getElementById('age').value;
    Rhr = document.getElementById('RHR').value;
    strength = document.getElementById('strength').value;

    // 转换数值类型
    age = Number(age);
    Rhr = Number(Rhr);
    strength = Number(strength);

    //计算最大心率
    var Mhr = 208 - (0.7*age);

    //计算储备心率
    var Hrr = Mhr - Rhr;

    //计算目标心率区间
    var Thrlow = (Hrr * strength + Rhr);
    var Thrhigh = (Hrr * (strength + 0.1) + Rhr);

    document.getElementById('result').innerHTML = "目标心率区间为" + Thrlow + "~" + Thrhigh + "bpm";


}