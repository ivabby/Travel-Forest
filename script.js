function enterSite(){
    console.log("Enter Site");

    $("#landing").css("transform" , "translate(-200vw)");

    $("#dimmed-bg").css("visibility" , "visible");
    $("#dimmed-bg").css("transform" , "translate(0)");

    $("#full-site").css("visibility" , "visible");
    $("#full-site").css("overflow" , "visible");
    $("#full-site").css("max-height" , "auto");

    $("#above-fold").css("opacity" , "1");
    $("#register-side-bar").css("transform" , "translate(0)");
}

$("#visible-section").mouseenter(function() { openForm(); });
$("#empty-section").mouseenter(function() { closeForm(); });
$("#form-section").mouseleave(function() { closeForm(); });

function openForm() {
    $("#register-side-bar").css("transform", "translate(-650px)");
    $("#register-side-bar").css("transition-delay", "0s");
    $("#register-side-bar").css("z-index", "100");

    $("#call-num").css("opacity", "0");
    $("#reg").css("opacity", "0");
}

function closeForm() {
    $("#register-side-bar").css("transform", "translate(0)");
    $("#register-side-bar").css("z-index", "0");
    $("#call-num").css("opacity", "1");
    $("#reg").css("opacity", "1");
}

(function manageTotalUsers(){

    let totalUsers = String(getRandom(100000, 200000));
    totalUsers = addComma(totalUsers);

    addTotalUsers(totalUsers);

    function addTotalUsers(currentValue) {
        let num = Number(currentValue.replace("," , ""));
        num++;
        num = String(num);
        num = addComma(num);
        $("#total-users").html(num);
        setTimeout(function(){
            addTotalUsers(num);
        }, getRandom(100, 3000));
    }

    function getRandom(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }

    function addComma(num){
        return num.slice(0,3) + "," + num.slice(3,6);
    }

})();
