// 计算每日能量需求Daily energy requirements
function getWater() {
    var Weight,activityLevel;

    Weight = document.getElementById('Weight').value;
    activityLevel = document.getElementById('activityLevel').value;
   // 将 activityLevel 转换为数值类型
   activityLevel = Number(activityLevel); 

    // 计算每日饮水量
    var Waterlow = Weight * activityLevel;
    var Waterhigh = Weight * ( activityLevel + 5 );

    document.getElementById('result').innerHTML = "建议每日饮水量为" + Waterlow + "毫升至" + Waterhigh + "毫升" ;
    
}