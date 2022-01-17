const scriptURL = "https://script.google.com/macros/s/AKfycbzvVq83PeAVSMpbZUrXgOcqnCVYbt2eghHaew771pDuz1PA-8ers7Q7vHTWOt9wRg48Kg/exec"
$(document).ready(function(){
    $("#search").click(e => {searchsheet(e);});
});
function searchsheet(e)
{
    e.preventDefault();
    $.ajax({
        url: scriptURL,
        type: "GET",
        success: function(response) {
            console.log(response);
            display(response);
        },
        error: function() {
            console.log("read 失敗");
            alert("read 失敗");
        }
    });
};
function exist(imgurl)
{
    let xmlHttp;
    if (window.ActiveXObject)
    {
        xml = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest)
    {
        xmlHttp = new XMLHttpRequest();
    }
    xmlHttp.open("Get", imgurl, false);
    xmlHttp.send();
    if (xmlHttp.status == 404) return false;
    else return true;
}
function display(googlesheet)
{
    for (let i in googlesheet)
    {
        if ($("#station1").val() == googlesheet[i][0] && $("#station2").val() == googlesheet[i][1])
        {
            $("#price1").html(googlesheet[i][3] + "元");
            $("#price2").html(googlesheet[i][4] + "元");
            $("#price3").html(googlesheet[i][5] + "元");
            $("#price4").html(googlesheet[i][6] + "元");
            $("#data1").html("約" + googlesheet[i][7] + "分鐘");
            $("#data2").html(googlesheet[i][8]);
            let img = "<img src='" + googlesheet[i][0] + "/" + googlesheet[i][0] + "to" + googlesheet[i][2] + "/" + googlesheet[i][0] + "to" + googlesheet[i][1] + ".png'>";
            let imgurl = googlesheet[i][0] + "/" + googlesheet[i][0] + "to" + googlesheet[i][2] + "/" + googlesheet[i][0] + "to" + googlesheet[i][1] + ".png";
            // $("#road").html(img);
            if (exist(imgurl))
            {
                $("#road").html(img);
            }
            else
            {
                $("#road").html("");
            }
        }
    }
}