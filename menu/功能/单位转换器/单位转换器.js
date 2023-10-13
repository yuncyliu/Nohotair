function getResult() {
    var amount1,unit1,unit2,amount2;

    amount1 = document.getElementById('amount').value;
    unit1 = document.getElementById('unit1').value;
    unit2 = document.getElementById('unit2').value;

    if(unit1 == '0')
    {
        if(unit2 =='0')
        {
            amount2 = amount1;
            document.getElementById('result').innerHTML = "单位换算后数值为" + amount1 + "千克=" + amount2 + "千克";
        }
        else if(unit2 =='1')
        {
            amount2 = 1000 * amount1;
            document.getElementById('result').innerHTML = "单位换算后数值为" + amount1 + "千克=" + amount2 + "克";
        }
        else if(unit2 =='2')
        {
            amount2 = 2.204623 * amount1;
            document.getElementById('result').innerHTML = "单位换算后数值为" + amount1 + "千克=" + amount2 + "磅";
        }
        else if(unit2 =='3')
        {
            amount2 = 35.273962 * amount1;
            document.getElementById('result').innerHTML = "单位换算后数值为" + amount1 + "千克=" + amount2 + "盎司";
        }
        else
        {
            document.getElementById('result').innerHTML = "不支持两者的单位转化"
        }
    }
    else if(unit1 == '1')
    {
        if(unit2 == '0')
        {
            amount2 = 0.001 * amount1;
            document.getElementById('result').innerHTML = "单位换算后数值为" + amount1 + "克=" + amount2 + "千克";
        }
        else if(unit2 =='1')
        {
            amount2 = amount1;
            document.getElementById('result').innerHTML = "单位换算后数值为" + amount1 + "克=" + amount2 + "克";
        }
        else if(unit2 =='2')
        {
            amount2 = 0.002205 * amount1;
            document.getElementById('result').innerHTML = "单位换算后数值为" + amount1 + "克=" + amount2 + "磅";
        }
        else if(unit2 =='3')
        {
            amount2 = 0.035274 * amount1;
            document.getElementById('result').innerHTML = "单位换算后数值为" + amount1 + "克=" + amount2 + "盎司";
        }
        else
        {
            document.getElementById('result').innerHTML = "不支持两者的单位转化"
        }
    }
    else if(unit1 =='2')
    {
        if(unit2 =='0')
        {
            amount2 = 0.453592 * amount1;
            document.getElementById('result').innerHTML = "单位换算后数值为" + amount1 + "磅=" + amount2 + "千克";
        }
        else if(unit2 =='1')
        {
            amount2 = 453.59237 * amount1;
            document.getElementById('result').innerHTML = "单位换算后数值为" + amount1 + "磅=" + amount2 + "克";
        }
        else if(unit2 =='2')
        {
            amount2 = amount1;
            document.getElementById('result').innerHTML = "单位换算后数值为" + amount1 + "磅=" + amount2 + "磅";
        }
        else if(unit2 =='3')
        {
            amount2 = 16 * amount1;
            document.getElementById('result').innerHTML = "单位换算后数值为" + amount1 + "磅=" + amount2 + "盎司";
        }
        else
        {
            document.getElementById('result').innerHTML = "不支持两者的单位转化"
        }
    }
    else if(unit1 =='3')
    {
        if(unit2 =='0')
        {
            amount2 = 0.02835 * amount1;
            document.getElementById('result').innerHTML = "单位换算后数值为" + amount1 + "盎司=" + amount2 + "千克";
        }
        else if(unit2 =='1')
        {
            amount2 = 28.349523 * amount1;
            document.getElementById('result').innerHTML = "单位换算后数值为" + amount1 + "盎司=" + amount2 + "克";
        }
        else if(unit2 =='2')
        {
            amount2 = 0.0625 * amount1;
            document.getElementById('result').innerHTML = "单位换算后数值为" + amount1 + "盎司=" + amount2 + "磅";
        }
        else if(unit2 =='3')
        {
            amount2 = amount1;
            document.getElementById('result').innerHTML = "单位换算后数值为" + amount1 + "盎司=" + amount2 + "盎司";
        }
        else
        {
            document.getElementById('result').innerHTML = "不支持两者的单位转化"
        }
    }
    else if(unit1 =='4')
    {
        if(unit2 =='4')
        {
            amount2 = amount1;
            document.getElementById('result').innerHTML = "单位换算后数值为" + amount1 + "千焦=" + amount2 + "千焦";
        }
        else if(unit2 =='5')
        {
            amount2 = 0.23912 * amount1;
            document.getElementById('result').innerHTML = "单位换算后数值为" + amount1 + "千焦=" + amount2 + "千卡";
        }
        else
        {
            document.getElementById('result').innerHTML = "不支持两者的单位转化"
        }
    }
    else if(unit1 =='5')
    {
        if(unit2 =='4')
        {
            amount2 = 4.186 * amount1;
            document.getElementById('result').innerHTML = "单位换算后数值为" + amount1 + "千卡=" + amount2 + "千焦";
        }
        else if(unit2 =='5')
        {
            amount2 = amount1;
            document.getElementById('result').innerHTML = "单位换算后数值为" + amount1 + "千卡=" + amount2 + "千卡";
        }
        else
        {
            document.getElementById('result').innerHTML = "不支持两者的单位转化";
        }
    }
    else
    {
        document.getElementById('result').innerHTML = "输入错误";
    }


}