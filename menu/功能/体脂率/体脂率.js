// 体脂率：Body fat ratio
function getBFR() {
    var Height, Weight, Age, personSex;
    
    Height = document.getElementById('Height').value;
    Weight = document.getElementById('Weight').value;
    Age = document.getElementById('Age').value;
    personSex = document.getElementById('personSex').value;
    
    // 转换数值类型
    Height = Number(Height);
    Weight = Number(Weight);
    Age = Number(Age);
    personSex = Number(personSex);

    Height = Height/100;

    // 计算BMI
    var BMI = Weight / (Height * Height);
    // 使用 toFixed() 函数将数字减少到特定的小数位数
    BMI = BMI.toFixed(3);
    
    // 计算体脂率
    var BFR = 1.2 * BMI + 0.23 * Age - 5.4 - 10.8 * personSex;
    BFR = BFR.toFixed(2);
    
    var minNum = 15 + 5 * (1 - personSex);
    var maxNum = 18 + 7 * (1 - personSex);
    
    if (BFR < maxNum && BFR > minNum) {
        document.getElementById('result').innerHTML = "您的体脂率为" + BFR + '%' + "，您的体脂率属于健康范围";
    } else {
        document.getElementById('result').innerHTML = "您的体脂率为" + BFR + '%' + "，您的体脂率不属健康范围内";
    }
    
}
    