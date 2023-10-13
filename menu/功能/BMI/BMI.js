function getBMI() {
    var weight, height, judge;
    weight = document.getElementById('weight').value;
    height = document.getElementById('height').value;
    // 转换数值类型
    weight = Number(weight);
    height = Number(height);
    height = height/100;
    var BMI = (weight) / (height * height);

    // 用js函数tofixed()来将数字减少到特定的小数位数
    BMI = BMI.toFixed(3);

    // 对BMI进行判断
    if (BMI < 18.5){
        judge = " (偏瘦), 要好好吃饭哦";
    }else if(18.5 <= BMI && BMI <= 24.99){
        judge = " (正常), 请继续保持吧";
    }else if(25 < BMI && BMI < 29.99){
        judge = " (超重), 为了健康,请开始身材管理吧 ";
    }else if(30 <= BMI){
        judge = " (肥胖), 对应健康风险较大，建议参考多项指标多方面评估您的身体状况";
    };

    document.getElementById('result').innerHTML = "你的 BMI 是 " + BMI + judge;
    
}