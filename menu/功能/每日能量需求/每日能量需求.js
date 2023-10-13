// 计算每日能量需求
function getTDEE() {
    var Height, Weight, Age, personSex,activityLevel;

    Height = document.getElementById('Height').value;
    Weight = document.getElementById('Weight').value;
    Age = document.getElementById('Age').value;
    personSex = document.getElementById('personSex').value;
    activityLevel = document.getElementById('activityLevel').value;

    // 转换数值类型
    Height = Number(Height);
    Weight = Number(Weight);
    Age = Number(Age);
    personSex = Number(personSex);
    activityLevel = Number(activityLevel);

    // 计算BMR
    var BMR;
    if (personSex == '1') {
        BMR = 10 * Weight + 6.25 * Height - 5 * Age + 5;
    } else {
        BMR = 10 * Weight + 6.25 * Height - 5 * Age - 161;
    }
    // 使用 toFixed() 函数将数字减少到特定的小数位数
    BMR = BMR.toFixed(0);

    // 计算每日能量需求
    var TDEE = BMR * activityLevel;
    TDEE = TDEE.toFixed(0);

    document.getElementById('result').innerHTML = "您的每日能量需求是 " + TDEE + "Kcal";
    
}