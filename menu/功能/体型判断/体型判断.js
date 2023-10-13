function getresult() {
    var Waist, Hip,chest,shoulder,maxelement;

    Waist = document.getElementById('Waist').value;
    Hip = document.getElementById('Hip').value;
    shoulder = document.getElementById('shoulder').value;
    chest = document.getElementById('chest').value;

    var  WHR= Waist/Hip;
    WHR=WHR.toFixed(2);

    if(!shoulder || !Hip || !chest || !Waist)
    {
        document.getElementById('result').innerHTML = "请输入完整数值后再进行体型判断";
    }
    else{
        if(shoulder >= Hip && shoulder >= chest)
        {
            if(shoulder = Hip)
            {
                if(WHR <0.85)
                {
                    document.getElementById('result').innerHTML = "您的体型为:X";
                }
                else if(0.85 <= WHR < 1){
                    document.getElementById('result').innerHTML = "您的体型为:H";
                }
                else{
                    document.getElementById('result').innerHTML = "未找到匹配体型";
                }
            }else{
                document.getElementById('result').innerHTML = "您的体型为:Y";
            }
        }
        else if(Hip >= shoulder && Hip >= chest)
        {
            if(shoulder < Hip)
            {
                if(WHR < 1)
                {
                    document.getElementById('result').innerHTML = "您的体型为:A";
                }else{
                    document.getElementById('result').innerHTML = "您的体型为:O";
                }
            }else{
                if(WHR < 0.85)
                {
                    document.getElementById('result').innerHTML = "您的体型为:X";
                }
                else if(0.85 <= WHR < 1)
                {
                    document.getElementById('result').innerHTML = "您的体型为:H";
                }
                else{
                    document.getElementById('result').innerHTML = "未找到匹配体型";
                }
            }
        }
        else if(chest >= shoulder && chest >= Hip){
            if(shoulder = Hip)
            {
                if(WHR < 0.85)
                {
                    document.getElementById('result').innerHTML = "您的体型为:X";
                }else if(0.85 <= WHR < 1){
                    document.getElementById('result').innerHTML = "您的体型为:Y";
                }
                else{
                    document.getElementById('result').innerHTML = "未找到匹配体型";
                }
            }
            else if(shoulder > Hip)
            {
                if(WHR < 1){
                    document.getElementById('result').innerHTML = "您的体型为:Y";
                }
                else{
                    document.getElementById('result').innerHTML = "未找到匹配体型";
                }
            }
            else if(shoulder < Hip){
                if(WHR < 0.85){
                    document.getElementById('result').innerHTML = "您的体型为:X";
                }
                else{
                    document.getElementById('result').innerHTML = "未找到匹配体型";
                }
            }
        }
    }
}
