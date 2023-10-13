function getWHR() {
    var Waist, Hip;

    Waist = document.getElementById('Waist').value;
    Hip = document.getElementById('Hip').value;
    personSex = document.getElementById('personSex').value

    var WHR = Waist/Hip;

    // 用js函数tofixed()来将数字减少到特定的小数位数
    WHR = WHR.toFixed(2);

    var minNum = (0.67 + 0.18 * personSex);
	var maxNum = (0.8 + 0.15 * personSex);

    if(WHR < maxNum && WHR > minNum) {
        document.getElementById('result').innerHTML = "您的腰臀比为:" + WHR + " 处于正常区间";
    } else {
        document.getElementById('result').innerHTML = "您的腰臀比为:" + WHR + " 超过正常区间";
    }
}