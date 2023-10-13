// 计算基础代谢率BMR
function getBMR() {
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
    
    // 计算BMR
    var BMR;
    if (personSex == '1') {
        BMR = 10 * Weight + 6.25 * Height - 5 * Age + 5;
    } else {
        BMR = 10 * Weight + 6.25 * Height - 5 * Age - 161;
    }

    // 使用 toFixed() 函数将数字减少到特定的小数位数
    BMR = BMR.toFixed(0);

    document.getElementById('result').innerHTML = "您的基础代谢率为" + BMR + " Kcal/天";
    
}
    