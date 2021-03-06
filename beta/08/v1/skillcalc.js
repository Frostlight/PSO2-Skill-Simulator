var encodekey = "Ibcde2gh34k5mnopqrstuvwxyzABCDEFGHaJKLMNOPQRSTUVWXYZ"
var closemsg = "<br><br><input type='button' value='&nbsp;"+getStringTranslation(0,59)+"&nbsp;' onclick='layerOff();'>";
var url = document.location.href;
if (url.indexOf("?") != -1) {
    url = url.substring(url.lastIndexOf("?"));
}
var descid = "";
var descwidth = 0;
var descheight = 0;

var n_class = 7;
var mainclass = 0;
var subclass = -1;
var race = 0;
var maxlv = 70;
var bonussp = 2;
var reqlist = [];
var maxmag = 175;
var mag = [0,0,0,0,0,0,0];

function getStringTranslation(type,index) {
    // 0: translation
    // 1: skillnametrans
    // 2: skilldesctrans
    
    if(type == 0) {
        if(translation[index][1+lang] == "") {
            return translation[index][1];
        } else {
            return translation[index][1+lang];
        }
    } else if(type == 1) {
        if(skillnametrans[index][1+lang] == "") {
            return skillnametrans[index][1];
        } else {
            return skillnametrans[index][1+lang];
        }
    } else if(type == 2) {
        if(skilldesctrans[index][1+lang] == "") {
            return skilldesctrans[index][1];
        } else {
            return skilldesctrans[index][1+lang];
        }
    }
    return "ERROR";
}

function changeMain(id) {
    tmpclass = parseInt(id);
    if(tmpclass == subclass) {
        subclass = mainclass;
    }
    mainclass = tmpclass;
    for(i = 0; i<n_class; i++) {
        name = "ch_class"+i;
        if(mainclass == i) {
            document.getElementById(name).checked = false;
            document.getElementById(name).disabled = true;
        } else if(subclass == i) {
            document.getElementById(name).checked = true;
            document.getElementById(name).disabled = false;
        } else {
            document.getElementById(name).disabled = false;
        }
    }

    calcStats();
    tabClass();
}

function changeSub(id) {
    if(id>=0 && document.getElementById("ch_class"+id).checked) {
        subclass = parseInt(id);
    } else {
        subclass = parseInt(-1);
    }
    for(i = 0;i<n_class;i++) {
        name = "ch_class"+i;
        if(i != subclass) {
            document.getElementById(name).checked = false;
        }
    }

    calcStats();
    tabClass();
}

function changeRace() {
    race = parseInt(document.getElementById("sl_race").value);
    calcStats();
}

function changeMag() {
    calcStats();
}

function tab(id) {
    for(i = 0;i<n_class;i++) {
        if(i == id) {
            document.getElementById("tab"+i).setAttribute("class", "selected");
        } else {
            document.getElementById("tab"+i).setAttribute("class", "unselected");
        }
    }
    tabClass();
    drawSkilltree(id);
}

function tabClass() {
    for(i = 0;i<n_class;i++) {
        icon = "";
        position = "2px 2px";
        repeat = "no-repeat"
        if(mainclass == i) {
            icon = "url(img/maincls.png)";
        }
        if(subclass == i) {
            icon = "url(img/subcls.png)";
        }
        document.getElementById("tab"+i).style.backgroundImage=icon;
        document.getElementById("tab"+i).style.backgroundPosition=position;
        document.getElementById("tab"+i).style.backgroundRepeat=repeat;
    }
}

function drawSkilltree(id) {
    maxheight = 0;
    document.getElementById("skilltree").innerHTML = "";

    skillbox1 = "<table class='skill' id='";
    skillbox2 = "' cellspacing=0 cellpadding=0 width=151 border=0 style='position:absolute; top:";
    skillbox3 = "px; left:";
    skillbox4 = "px; background-image:url(&quot;img/bar/bar";
    skillbox5 = ".png&quot;);' onmousemove='moveDesc(event);' onmousewheel='mswhl(event,"
    skillbox6 = ");' onmouseover='showDesc(event,"
    skillbox7 = ");' onmouseout='hideDesc();'><tr><td rowspan=2 width=27 style='background-image:url(&quot;img/icon/";
    skillbox8 = ".png&quot;); background-size:27px 27px;' onclick='msclk(";
    skillbox9 = ",0)'></td><td "; //colspan
    skillbox10 = "width=122 height=16 align=center>";
    skillbox11 = "</td></tr><tr>";
    skillbox12 = "</tr></table>";

    document.getElementById("skilltree").style.backgroundImage = "url('img/bg"+id+".gif')";

    pos = document.getElementById("skilltree");
    posx = pos.offsetLeft;
    posy = pos.offsetTop;
    while (pos = pos.offsetParent) {
        posx += pos.offsetLeft;
        posy += pos.offsetTop;
    }

    for(i=0;i<skill[id].length;i++) {
        tmpskill = skill[id][i];

        var skillname = "";
        //not desc[tmpskill[5]][2]+
        if(skillnametrans[tmpskill[5]][lang+1] == "") {
            skillname = skillnametrans[tmpskill[5]][1];
        } else {
            skillname = skillnametrans[tmpskill[5]][lang+1];
            if(lang == 1 && skillname.toString().length >= 13) {
                skillname = "<span style='letter-spacing:-2px'>"+skillname+"</span>";
            }
        }

        box = skillbox1+id+"-"+i+skillbox2+(posy+19+60*tmpskill[2])+skillbox3+(posx+9+170*tmpskill[1])+skillbox4;
        box += tmpskill[4]+"_"+cursp[id][i]+skillbox5+id+","+i+skillbox6+id+","+i+skillbox7+desc[tmpskill[5]][1]+skillbox8;
        box += id+","+i+skillbox9+"colspan="+tmpskill[4]+" "+skillbox10+skillname+skillbox11;

        var j = 1;
        for(j=1;j<tmpskill[4];j++) {
            box += "<td width=11 height=11 onclick='msclk("+id+","+i+","+j+");'></td>";
        }
        box += "<td width="+(122-((j-1)*11))+" height=11 onclick='msclk("+id+","+i+","+j+");'></td>";
        box += skillbox12;

        document.getElementById("skilltree").innerHTML += box;
        if(tmpskill[2] > maxheight) {
            maxheight = tmpskill[2];
        }
    }

    for(i=0;i<skill[id].length;i++) {
        if(skill[id][i][6] == 0 || cursp[id][skill[id][i][6][0]]>=skill[id][i][6][1]) {
            enable(id,i);
        }
    }
}

function mswhl(evt,cls,skl) {
    delta = 0;
    if(!evt) {
        evt = window.event;
    }
    if(event.wheelDelta) {
        delta = event.wheelDelta/120;
    } else if (event.detail) {
        delta = -event.detail/3;
    }
    if(delta>0) {
        delta = -1;
    } else {
        delta = 1;
    }
    sp = cursp[cls][skl]+delta;
    setSP(cls,skl,sp);
    //    if (!evt) evt = window.event;
    //    delta = 0;
    //    if(event.wheelDelta <= -120){
    //        delta = 1;
    //    } else {
    //        delta = -1;
    //    }
    //    sp = cursp[cls][skl]+delta;
    //    setSP(cls,skl,sp);
    showDesc(evt,cls,skl);
}

function msclk(cls,skl,sp) {
    setSP(cls,skl,sp);
    showDesc(evt,cls,skl);
}

function setSP(cls,skl,sp) {
    if(sp>=0 && sp<=skill[cls][skl][4] && sp>=skill[cls][skl][3]) {
        cursp[cls][skl] = sp;
        req(cls,skl);
    }

    reqrest();

    calcSP();
}

function reqrest() {
    while(reqlist.length!=0) {
        tmpskill = reqlist.pop();
        req(tmpskill[0],tmpskill[1]);
    }
}

function req(cls,skl) {
    setBar(cls,skl);

    if(cursp[cls][skl]>0 && skill[cls][skl][6] != 0 && cursp[cls][skill[cls][skl][6][0]]<skill[cls][skl][6][1]) {
        enable(cls,skl);
        setSP(cls,skill[cls][skl][6][0],skill[cls][skl][6][1]);
    }

    for(i=0; i < skill[cls][skl][7].length; i++) {
        tmpskill = skill[cls][skl][7][i];
        if(cursp[cls][skl]>=tmpskill[1]) {
            enable(cls,tmpskill[0]);
        } else {
            disable(cls,tmpskill[0]);
            if(cursp[cls][tmpskill[0]]>0) {
                cursp[cls][tmpskill[0]] = 0;
                //                req(cls,tmpskill[0]);
                reqlist.push([cls,tmpskill[0]]);
            }
        }
    }
}

function enable(cls,skl) {
    document.getElementById(cls+"-"+skl).style.backgroundColor = "#FFFFFF";
    document.getElementById(cls+"-"+skl).style.color = "#000000";
}

function disable(cls,skl) {
    document.getElementById(cls+"-"+skl).style.backgroundColor = "#DDDDDD";
    document.getElementById(cls+"-"+skl).style.color = "#666666";
}

function setBar(cls,skl) {
    element = cls+"-"+skl;
    lv = cursp[cls][skl];
    max = skill[cls][skl][4];
    newBar = "url(img/bar/bar" + max + "_" + lv + ".png)";
    document.getElementById(element).style.backgroundImage = newBar;
}

function calcSP() {
    for(i=0;i<n_class;i++) {
        usedsp = 0;
        totalsp = 0;
        elementlv = "sl_level"+i;
        elementsp = "sl_bonussp"+i;
        elementlb = "l_spalert"+i;

        for(j=0;j<cursp[i].length;j++) {
            usedsp += cursp[i][j];
        }
        for(j=0;j<skill[i].length;j++) {
            usedsp -= skill[i][j][3];
        }

        totalsp = eval(document.getElementById(elementlv).value);
        totalsp += eval(document.getElementById(elementsp).value);

        document.getElementById(elementlb).innerHTML = usedsp+"/"+totalsp;
        if(usedsp>totalsp) {
            document.getElementById(elementlb).style.color = "#FF0000";
        } else {
            document.getElementById(elementlb).style.color = "#000000";
        }
    }

    calcStats();
}

function calcStats() {
    tmpstats = [0,0,0,0,0,0,0,0,0];

//    0 HP
//    1 PP
//    2 SATK
//    3 RATK
//    4 TATK
//    5 SDEF
//    6 RDEF
//    7 TDEF
//    8 ABL

    usedmag = 0;
    for(i=0;i<7;i++) {
        element = "sl_mag"+i;
        mag[i] = parseInt(document.getElementById(element).value);
        usedmag += mag[i];
    }

    for(i=0;i<9;i++) {
        tmpmainlv = parseInt(document.getElementById("sl_level"+mainclass).value);
        tmpstats[i] = stats[mainclass][tmpmainlv][i+2];
        if(subclass>=0 && i!=1) {
            tmpsublv = parseInt(document.getElementById("sl_level"+subclass).value);
            if(tmpsublv>tmpmainlv) {
                tmpsublv = tmpmainlv;
            }
            tmpstats[i] += stats[subclass][tmpsublv][i+2]*0.2;
        }

        //racemod
        tmpstats[i] = Math.floor(tmpstats[i]*racemod[race][i+1]);
    }

    if(mainclass==0 || subclass==0) {
        tmpstats[0] += skillstats[1][cursp[0][15]]+skillstats[1][cursp[0][16]]+skillstats[1][cursp[0][17]];
        tmpstats[2] += skillstats[1][cursp[0][10]]+skillstats[1][cursp[0][11]]+skillstats[1][cursp[0][12]];
        tmpstats[5] += skillstats[1][cursp[0][14]];
        tmpstats[8] += skillstats[1][cursp[0][13]];
    }
    if(mainclass==1 || subclass==1) {
        tmpstats[0] += skillstats[1][cursp[1][7]]+skillstats[1][cursp[1][8]];
        tmpstats[2] += skillstats[1][cursp[1][10]]+skillstats[1][cursp[1][11]]+skillstats[1][cursp[1][12]];
        tmpstats[5] += skillstats[1][cursp[1][3]];
        tmpstats[8] += skillstats[1][cursp[1][9]];
    }
    if(mainclass==2 || subclass==2) {
        tmpstats[8] += skillstats[1][cursp[2][9]]+skillstats[1][cursp[2][10]]+skillstats[1][cursp[2][11]];
        tmpstats[3] += skillstats[1][cursp[2][7]]+skillstats[1][cursp[2][8]];
        tmpstats[6] += skillstats[1][cursp[2][5]];
    }
    if(mainclass==3 || subclass==3) {
        tmpstats[0] += skillstats[1][cursp[3][8]];
        tmpstats[8] += skillstats[1][cursp[3][6]]+skillstats[1][cursp[3][7]];
        tmpstats[3] += skillstats[1][cursp[3][9]]+skillstats[1][cursp[3][10]]+skillstats[1][cursp[3][11]];
        tmpstats[6] += skillstats[1][cursp[3][4]]+skillstats[1][cursp[3][5]];
    }
    if(mainclass==4 || subclass==4) {
        tmpstats[0] += skillstats[1][cursp[4][3]];
        tmpstats[1] += skillstats[0][cursp[4][7]]+skillstats[0][cursp[4][8]];
        tmpstats[4] += skillstats[1][cursp[4][10]]+skillstats[1][cursp[4][11]]+skillstats[2][cursp[4][12]];
        tmpstats[7] += skillstats[1][cursp[4][5]];
        tmpstats[8] += skillstats[1][cursp[4][9]];
    }
    if(mainclass==5 || subclass==5) {
        tmpstats[1] += skillstats[0][cursp[5][6]]+skillstats[0][cursp[5][7]];
        tmpstats[2] += skillstats[1][cursp[5][11]];
        tmpstats[4] += skillstats[1][cursp[5][9]]+skillstats[1][cursp[5][10]];
        tmpstats[7] += skillstats[1][cursp[5][3]];
        tmpstats[8] += skillstats[1][cursp[5][8]];
    }
    if(mainclass==6 || subclass==6) {
        tmpstats[8] += skillstats[1][cursp[6][8]]+skillstats[1][cursp[6][9]];
        tmpstats[2] += skillstats[1][cursp[6][11]];
        tmpstats[3] += skillstats[1][cursp[6][10]];
    }

    if(document.getElementById("ch_mag").checked == true) {
        tmpstats[2] += mag[0]; //satk
        tmpstats[3] += mag[1]; //ratk
        tmpstats[4] += mag[2]; //tatk
        tmpstats[8] += mag[3]; //abl
        tmpstats[5] += mag[4]; //sdef
        tmpstats[6] += mag[5]; //rdef
        tmpstats[7] += mag[6]; //tdef

        if(mainclass==6 || subclass==6) {
            //braver mag
            if(cursp[6][6]>0) {
                tmpstats[2] += Math.floor((25+(cursp[6][6]*5))*0.01*mag[3]);
                tmpstats[3] += Math.floor((25+(cursp[6][6]*5))*0.01*mag[3]);
            }
        }
    }

    document.getElementById("l_hp").innerHTML = tmpstats[0];
    document.getElementById("l_pp").innerHTML = tmpstats[1];
    document.getElementById("l_abl").innerHTML = tmpstats[8];
    document.getElementById("l_satk").innerHTML = tmpstats[2];
    document.getElementById("l_ratk").innerHTML = tmpstats[3];
    document.getElementById("l_tatk").innerHTML = tmpstats[4];
    document.getElementById("l_sdef").innerHTML = tmpstats[5];
    document.getElementById("l_rdef").innerHTML = tmpstats[6];
    document.getElementById("l_tdef").innerHTML = tmpstats[7];

    document.getElementById("l_magalert").innerHTML = "("+usedmag+"/"+maxmag+")";
    if(usedmag>maxmag) {
        document.getElementById("l_magalert").style.color = "#FF0000";
    } else {
        document.getElementById("l_magalert").style.color = "#000000";
    }
}

function showCodeURL() {
    code = encode();
    copyurl = document.location.href;
    copyurl = copyurl.substring(0,copyurl.lastIndexOf(".php"));
    title = "Share URL";
    //msg = copyurl+".php?"+code;
    var codeurl = document.location.href;
    if (codeurl.indexOf("?") != -1) {
        codeurl = codeurl.toString().substr(0, codeurl.toString().indexOf('?'))
    }
    
    msg = codeurl+"?"+code;
    msg = "This is the URL to your skill tree:<br><br><input class='url' type='text' size='50' value='"+msg
    +"' onfocus='this.select()' readonly>"+closemsg;
    layerOn(title,msg);
}

function showCodeText() {
    txt = "";
    txt += classfullname[mainclass];
    if(subclass>=0) {
        txt += "/" + classfullname[subclass];
    }
    txt += " Skill Build\n";
    txt += "Code: "+encode()+"\n";

    usedsp = 0;
    for(i=0;i<n_class;i++) {
        for(j=0;j<cursp[i].length;j++) {
            usedsp += cursp[i][j];
        }
        for(j=0;j<skill[i].length;j++) {
            usedsp -= skill[i][j][3];
        }
        if(usedsp!=0) {
            txt += "=====" + classfullname[i];
            txt += " Lv "+document.getElementById("sl_level"+i).value+"/"+maxlv+", +"+document.getElementById("sl_bonussp"+i).value+" CO SP\n";
            for(j=0;j<cursp[i].length;j++) {
                if(cursp[i][j] > 0) {
                    if(cursp[i][j] < 10) {
                        txt += "&#8199;";
                    }
                    txt += cursp[i][j]+": "+getStringTranslation(1,skill[i][j][5])+"\n";
                    //txt += cursp[i][j]+": "+desc[skill[i][j][5]][2]+"\n";
                }
            }
        }
        usedsp = 0;
    }

    msg = getStringTranslation(0,56)+"<br><textarea cols=40 rows=4 onfocus='this.select()' readonly>"+txt+"</textarea>";
    layerOn(getStringTranslation(0,55),msg+closemsg);
}

function encode() {
    code = ""+ver;
    tmp = 0;
    tmp = race + mainclass*13 + (subclass+1)*169;
    code += encodekey.charAt(Math.floor(tmp/52)) + encodekey.charAt(Math.floor(tmp%52));

    for(i=0;i<n_class;i++) {
        tmp = document.getElementById("sl_level"+i).value;
        code += encodekey.charAt(Math.floor(tmp/52)) + encodekey.charAt(Math.floor(tmp%52));
        tmp = document.getElementById("sl_bonussp"+i).value;
        code += encodekey.charAt(Math.floor(tmp/52)) + encodekey.charAt(Math.floor(tmp%52));
    }

    for(i=0;i<7;i++) {
        tmp = mag[i];
        code += encodekey.charAt(Math.floor(tmp/52)) + encodekey.charAt(Math.floor(tmp%52));
    }

    for(i=0;i<cursp.length;i++) {
        for(j=0;j<cursp[i].length;j++) {
            tmp = cursp[i][j*3] + cursp[i][j*3+1]*13 + cursp[i][j*3+2]*169;
            code += encodekey.charAt(Math.floor(tmp/52)) + encodekey.charAt(Math.floor(tmp%52));
        }
    }

    code = code.replace(/IIIIIIIIII/g,"0");
    code = code.replace(/IIIIIIIII/g,"9");
    code = code.replace(/IIIIIIII/g,"8");
    code = code.replace(/IIIIIII/g,"7");
    code = code.replace(/IIIIII/g,"6");
    code = code.replace(/IIIII/g,"l");
    code = code.replace(/IIII/g,"j");
    code = code.replace(/III/g,"i");
    code = code.replace(/II/g,"f");

    return code;
}

function decode(code) {
    tmp = 0;
    codever = parseInt(code.substring(1,3),10);
    if(isNaN(codever)) {
        tmpurl = document.location.href;
        tmpurl = tmpurl.substring(0,tmpurl.indexOf("skillcalc.php"))+"old/02/skillcalc.html"+code;
        tmpmsg = "Unable to load. Code is incompatible with current version.";
        tmpmsg += "<br><a href='"+tmpurl+"'>You can use an older version of the simulator to recover the build by using this link.</a>";
        layerOn(getStringTranslation(0,57),tmpmsg+closemsg);
        return;
    }
    if(codever<8){
        tmpurl = document.location.href;
        tmpurl = tmpurl.substring(0,tmpurl.indexOf("skillcalc.php"))+"old/"+codever+"/skillcalc.php"+code;
        tmpmsg = "Unable to load. Code is incompatible with current version.";
        tmpmsg += "<br><a href='"+tmpurl+"'>You can use an older version of the simulator to recover the build by using this link.</a>";
        layerOn(getStringTranslation(0,57),tmpmsg+closemsg);
        return;
    }

    resetAll();

    code = code.substring(code.indexOf("?")+3);
    code = code.replace(/0/g,"IIIIIIIIII");
    code = code.replace(/9/g,"IIIIIIIII");
    code = code.replace(/8/g,"IIIIIIII");
    code = code.replace(/7/g,"IIIIIII");
    code = code.replace(/6/g,"IIIIII");
    code = code.replace(/l/g,"IIIII");
    code = code.replace(/j/g,"IIII");
    code = code.replace(/i/g,"III");
    code = code.replace(/f/g,"II");

    tmp = encodekey.indexOf(code.charAt(0))*52 + encodekey.indexOf(code.charAt(1));
    document.getElementById("sl_race").value = (tmp%169)%13;
    changeRace();
    main = Math.floor((tmp%169)/13);
    elementmain = "ra_class"+main;
    document.getElementById(elementmain).checked = true;
    document.getElementById(elementmain).value = main;
    changeMain(main);
    sub = Math.floor(tmp/169)-1;
    if(sub>=0) {
        elementsub = "ch_class"+sub;
        document.getElementById(elementsub).checked = true;
        document.getElementById(elementsub).value = sub;
    }
    changeSub(sub);

    code = code.substring(2);
    
    for(i=0;i<versiondata[codever][1];i++) {
        document.getElementById("sl_level"+i).value = encodekey.indexOf(code.charAt(4*i))*52 + encodekey.indexOf(code.charAt(4*i+1));
        document.getElementById("sl_bonussp"+i).value = encodekey.indexOf(code.charAt(4*i+2))*52 + encodekey.indexOf(code.charAt(4*i+3));
    }
    
    code = code.substring(4*versiondata[codever][1]);

    for(i=0;i<7;i++) {
        document.getElementById("sl_mag"+i).value = encodekey.indexOf(code.charAt(2*i))*52 + encodekey.indexOf(code.charAt(2*i+1));
    }

    code = code.substring(2*7);

    for(i=0;i<versiondata[codever][1];i++) {
        classskillcount = versiondata[codever][i+3];
        for(j=0;j<classskillcount/3;j++) {
            tmp = encodekey.indexOf(code.charAt(2*j))*52 + encodekey.indexOf(code.charAt(2*j+1));
            cursp[i][j*3] = (tmp%169)%13;
            cursp[i][j*3+1] = Math.floor((tmp%169)/13);
            cursp[i][j*3+2] = Math.floor(tmp/169);
        }
        code = code.substring(2*classskillcount);
    }

}

function saveCookie() {
    slot = document.getElementById("sl_save").value;

    code = encode();
    date = new Date();
    date.setTime(date.getTime()+360*3000*60*60*24);
    expdate = date.toGMTString();

    classcode = "";
    if(subclass == -1) {
        classcode = "" + mainclass + "X" + race;
    } else {
        classcode = "" + mainclass + subclass + race;
    }

    document.cookie = slot + "=" + classcode + "?" + code + "; expires="+ expdate;
    tmpslot = slot;
    loadSaveSlots();
    document.getElementById("sl_save").value = tmpslot;

    layerOn(getStringTranslation(0,62),"Skilltree saved to Slot "+tmpslot.substring(4)+"."+closemsg);
}

function loadCookie() {
    slot = document.getElementById("sl_save").value;

    cookies = new Array();
    cookies = document.cookie.split("; ");
    code = "";

    for(i=0;cookies[i];i++) {
        if(cookies[i].substr(0,7) == slot + "=") {
            code = cookies[i].substr(10,cookies[i].length);
            break;
        }
    }
    if(code=="") {
        return;
    }

    decode(code);
    tab(mainclass);
    calcSP();
    if(optionlayer.innerHTML == "") {
        layerOn(getStringTranslation(0,64),getStringTranslation(0,65)+closemsg);
    }
}

function loadSaveSlots() {
    cookies = new Array();
    cookies = document.cookie.split("; ");
    for(i=1;i<=12;i++) {
        slot = "";
        if(i <=9 ) {
            slot = "save0"+i;
        } else {
            slot = "save"+i;
        }

        code = "";
        for(j=0;cookies[j];j++) {
            if(cookies[j].substr(0,7) == slot + "=") {
                code = cookies[j].substr(7,cookies[j].length);
                break;
            }
        }

        if(code=="") {
            continue;
        }

        subclasslabel = "";
        if(code.substr(1,1)!="X") {
            subclasslabel = classabrname[code.substr(1,1)];
        }

        label = getStringTranslation(0,60) + " " + i + ": " + classabrname[code.substr(0,1)]+subclasslabel+racename[code.substr(2,1)];

        document.getElementById("sl_save").options[i-1] = new Option(label,slot);
    }
    document.getElementById("sl_save").value = "save01";
}

function showDesc(evt,cls,skl) {
    if(document.getElementById("ch_desc").checked == true) {
        if (!evt) evt = window.event;

        skillarray = desc[skill[cls][skl][5]];

        skillname = getStringTranslation(1,skill[cls][skl][5]);

        skilldesc = getStringTranslation(2,skill[cls][skl][5]);
        if(lang==1) {
            skilldesc = "<span style='font-size:1.1em'>"+skilldesc+"</span>";
        }

        skilldescdetail = skillarray[6];
        width = 250;
        height = 140;
        if(document.getElementById("ch_detail").checked == true) {
            if(skilldescdetail!="") {
                width += 80;
                height += 20;
                tmp = "<table class='data'>";
                for(i = 1; i<skilldescdetail[0].length; i++) {
                    height += 22;
                    tmp += "<tr>";
                    for(j = 0;j<skilldescdetail.length; j++) {
                        if(j==0) {
                            header = descheadertrans[skilldescdetail[j][i]][lang+1];
                            if(header == "") {
                                header = descheadertrans[skilldescdetail[j][i]][1];
                            }
                            if(lang==1) {
                                header = "<span style='font-size:1.2em'>"+header+"</span>";
                            }
                            if(header.toString().length >= 13) {
                                header = "<span style='font-size:0.9em;letter-spacing:-1px'>"+header+"</span>";
                            }
                            if(lang!=1) {
                                tmp += "<th>"+header+"</th>";
                            } else {
                                tmp += "<th style='font-weight:normal'>"+header+"</th>"
                            }
                        } else {
                            if(cursp[cls][skl]==j) {
                                tmp += "<td style='background-color:#E5F5E5'>"+skilldescdetail[j][i]+"</td>";
                            } else {
                                tmp += "<td>"+skilldescdetail[j][i]+"</td>";
                            }
                        }
                    }
                    tmp += "</tr>";
                }
                tmp += "</table>";
                skilldescdetail = tmp;
            }
        } else {
            skilldescdetail = "";
        }

        scrollTop = 0;
        if (typeof(window.pageYOffset) == 'number') {
            //Netscape compliant
            scrollTop = window.pageYOffset;
        } else if (document.body && document.body.scrollTop) {
            //DOM compliant
            scrollTop = document.body.scrollTop;
        } else if (document.documentElement && document.documentElement.scrollTop) {
            //IE6 standards compliant mode
            scrollTop = document.documentElement.scrollTop;
        }
        scrollLeft = 0;
        if (typeof(window.pageXOffset) == 'number') {
            //Netscape compliant
            scrollLeft = window.pageXOffset;
        } else if (document.body && document.body.scrollLeft) {
            //DOM compliant
            scrollLeft = document.body.scrollLeft;
        } else if (document.documentElement && document.documentElement.scrollLeft) {
            //IE6 standards compliant mode
            scrollLeft = document.documentElement.scrollLeft;
        }

        posx = evt.clientX + scrollLeft + 30;
        posy = evt.clientY + scrollTop + 30;

        if(window.innerWidth<posx+width-scrollLeft) {
            posx = posx - 60 - width;
        }
        if(window.innerHeight<posy+height-scrollTop) {
            posy = posy - 60 - height;
        }
        if(posx<0 || posx<scrollLeft) {
            posx = scrollLeft+5;
        }
        if(posy<0 || posy<scrollTop) {
            posy = scrollTop+5;
        }

//        if(descid != cls+"-"+skl) {
//            descid = cls+"-"+skl;
//            document.getElementById("desc").style.top = posy+"px";
//            document.getElementById("desc").style.left = posx+"px";
//        }
        document.getElementById("desc").style.width = width+"px";
        document.getElementById("desc").style.border = "solid 1px #777777";
        document.getElementById("desc").style.backgroundColor = "#FFFFFF";
        document.getElementById("desc").style.padding = "0px";
        document.getElementById("l_desctitle").innerHTML = "<h3>"+skillname+"</h3>";
        document.getElementById("l_desc").innerHTML = skilldesc;
        document.getElementById("l_descdetail").innerHTML = skilldescdetail;

        descwidth = width + 15;
        descheight = document.getElementById("desc").offsetHeight;
    }
}

function moveDesc(evt) {
    if (!evt) evt = window.event;

    scrollTop = 0;
    if (typeof(window.pageYOffset) == 'number') {
        //Netscape compliant
        scrollTop = window.pageYOffset;
    } else if (document.body && document.body.scrollTop) {
        //DOM compliant
        scrollTop = document.body.scrollTop;
    } else if (document.documentElement && document.documentElement.scrollTop) {
        //IE6 standards compliant mode
        scrollTop = document.documentElement.scrollTop;
    }
    scrollLeft = 0;
    if (typeof(window.pageXOffset) == 'number') {
        //Netscape compliant
        scrollLeft = window.pageXOffset;
    } else if (document.body && document.body.scrollLeft) {
        //DOM compliant
        scrollLeft = document.body.scrollLeft;
    } else if (document.documentElement && document.documentElement.scrollLeft) {
        //IE6 standards compliant mode
        scrollLeft = document.documentElement.scrollLeft;
    }

    posx = evt.clientX + scrollLeft + 30;
    posy = evt.clientY + scrollTop + 30;

    if(window.innerWidth<posx+descwidth-scrollLeft) {
        posx = posx - 60 - descwidth;
    }
    if(window.innerHeight<posy+descheight-scrollTop) {
        posy = posy - 60 - descheight;
    }
    if(posx<0 || posx<scrollLeft) {
        posx = scrollLeft+5;
    }
    if(posy<0 || posy<scrollTop) {
        posy = scrollTop+5;
    }

    document.getElementById("desc").style.top = posy+"px";
    document.getElementById("desc").style.left = posx+"px";
}

function hideDesc() {
    document.getElementById("desc").style.width = 0;
    document.getElementById("desc").style.border = 0;
    document.getElementById("desc").style.backgroundColor = "transparent";
    document.getElementById("desc").style.padding = "0px";
    document.getElementById("l_desctitle").innerHTML = "";
    document.getElementById("l_desc").innerHTML = "";
    document.getElementById("l_descdetail").innerHTML = "";

    descwidth = 0;
    descheight = 0;
}

function layerOn(title,msg) {
    x = 1010;
    y = 550;
    document.getElementById("bglayer").style.width = window.innerWidth + "px";
    document.getElementById("bglayer").style.height = window.innerHeight + "px";

    document.getElementById("optionlayer").style.top = Math.floor(y/2) + "px";
    document.getElementById("optionlayer").style.left = Math.floor(x/4) + "px";
    document.getElementById("optionlayer").style.width = Math.floor(x/2) + "px";
    document.getElementById("optionlayer").style.height = "165px";
    document.getElementById("optionlayer").style.padding = "0px";
    document.getElementById("optionlayer").style.border = "1px solid #777777";
    document.getElementById("optionlayer").innerHTML = "<h3>"+title+"</h3><table><tr><td>&nbsp;</td><td>"+msg+"</td></tr></table>";
    document.getElementById("optionlayer").style.backgroundColor = "#FFFFFF";
}

function layerOff() {
    document.getElementById("bglayer").style.width = "0px";
    document.getElementById("bglayer").style.height = "0px";

    document.getElementById("optionlayer").style.width = 0;
    document.getElementById("optionlayer").style.height = 0;
    document.getElementById("optionlayer").innerHTML = "";
    document.getElementById("optionlayer").style.backgroundColor = "transparent";
    document.getElementById("optionlayer").style.border = 0;
}

function resetAll() {
    for(i=0;i<n_class;i++) {
        elementlv = "sl_level"+i;
        elementsp = "sl_bonussp"+i;

        document.getElementById(elementlv).options.length = 0;
        document.getElementById(elementsp).options.length = 0;

        for(j=1; j<=maxlv; j++) {
            document.getElementById(elementlv).options[j-1] = new Option(j,j);
        }

        for(j=0; j<=bonussp; j++) {
            document.getElementById(elementsp).options[j] = new Option(j*5,j*5);
        }

        document.getElementById(elementlv).value = maxlv;
        document.getElementById(elementsp).value = bonussp*5;
    }

    for(i=0;i<7;i++) {
        element = "sl_mag"+i;
        document.getElementById(element).options.length = 0;
        for(j=0; j<=maxmag; j++) {
            document.getElementById(element).options[j] = new Option(j,j);
        }
        document.getElementById(element).value = 0;
    }

    calcSP();
}

function changeLang(langSelection) {
    lang = parseInt(langSelection);
    var name = "";

    for(var i=0;i<=61;i++) {
        name = "t_"+i;
        elements = document.getElementsByClassName(name);
        for(var j=0;j<elements.length;j++) {
            if(translation[i][lang+1]=="") {
                elements[j].innerHTML = translation[i][1];
            }else {
                elements[j].innerHTML = translation[i][lang+1];
            }
        }
    }

    //Rassen
    for(i=0;i<8;i++) {
        name = "o_race"+i;
        if(translation[30+i][lang+1]=="") {
            document.getElementById(name).text = translation[30+i][1];
        } else {
            document.getElementById(name).text = translation[30+i][lang+1];
        }
    }

    //Knoepfe
    name = "b_save";
    if(translation[51][lang+1]=="") {
        document.getElementById(name).value = translation[51][1];
    } else {
        document.getElementById(name).value = translation[51][lang+1];
    }
    name = "b_load";
    if(translation[51][lang+1]=="") {
        document.getElementById(name).value = translation[52][1];
    } else {
        document.getElementById(name).value = translation[52][lang+1];
    }

    tab(mainclass);
}

function init() {
    //anfangsskill setzen
    var i;
    var j;
    for(i=0; i<n_class; i++) {
        for(j=0; j<skill[i].length; j++) {
            cursp[i][j] = skill[i][j][3];
        }
    }

    resetAll();
    tab(0);

    layerOff();
    
    var browserLang = window.navigator.userLanguage || window.navigator.language;
    
    if(browserLang.substr(0, 2) == "ja") {
        document.getElementById("ra_lang0").checked = false;
        document.getElementById("ra_lang1").checked = true;
        changeLang(1);
    }

    if(url.substring(0,1) == "?") {
        decode(url);
        tab(mainclass);
        calcSP();
        if(optionlayer.innerHTML == "") {
            layerOn(getStringTranslation(0,57),getStringTranslation(0,58)+closemsg);
        }
    }

}

init();
loadSaveSlots();