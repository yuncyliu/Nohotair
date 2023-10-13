function getresult() {
    var Waist, Hip,chest,shoulder;

    Waist = document.getElementById('Waist').value;
    Hip = document.getElementById('Hip').value;
    shoulder = document.getElementById('shoulder').value;
    chest = document.getElementById('chest').value;

    var  WHR= Waist/Hip;
    WHR=WHR.toFixed(2);

    if(shoulder >= Hip && shoulder >= chest)
    {
        if(shoulder = Hip)
        {
            if(WHR <0.85)
            {
                document.getElementById('result').innerHTML = "您的体型为:X型(沙漏型/标准型)";
            }else{
                document.getElementById('result').innerHTML = "您的体型为:H型(矩型)";
            }
        }else{
            document.getElementById('result').innerHTML = "您的体型为:T型(草莓型)";
        }
    }
    else if(Hip >= shoulder && Hip >= chest)
    {
        if(shoulder < Hip)
        {
            if(WHR < 1)
            {
                document.getElementById('result').innerHTML = "您的体型为:A型(梨形)";
            }else{
                document.getElementById('result').innerHTML = "您的体型为:O型(苹果型)";
            }
        }else{
            if(WHR < 0.85)
            {
                document.getElementById('result').innerHTML = "您的体型为:X型(沙漏型/标准型)";
            }else{
                document.getElementById('result').innerHTML = "您的体型为:H型(矩型)";
            }
        }
    }
    else{
        if(shoulder = Hip)
        {
            if(WHR < 0.85)
            {
                document.getElementById('result').innerHTML = "您的体型为:X型(沙漏型/标准型)";
            }else{
                document.getElementById('result').innerHTML = "您的体型为:T型(草莓型)";
            }
        }
        else if(shoulder > Hip)
        {
            if(WHR < 1){
                document.getElementById('result').innerHTML = "您的体型为:T型(草莓型)";
            }
        }
        else{
            if(WHR < 0.85){
                document.getElementById('result').innerHTML = "您的体型为:X型(沙漏型/标准型)";
            }
        }
    }
}
