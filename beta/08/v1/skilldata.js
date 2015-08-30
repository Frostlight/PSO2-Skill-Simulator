skill = [
[ //HU 2 3  4   5    6       7
[ 0,5, 0,1, 1, 60,0      ,[[ 1, 0]]], //step
[ 1,5, 1,0,10, 61,[ 0, 0],[]], //stad
[ 2,5, 2,1, 1, 62,0      ,[]], //stat
[ 3,5, 3,1, 1, 63,0      ,[]], //jr
[ 4,4, 0,1, 1, 70,0      ,[[ 5, 0]]], //guard
[ 5,4, 1,1, 1, 71,[ 4, 0],[[ 6, 0]]], //justguard
[ 6,4, 2,1, 1, 72,[ 5, 0],[[ 7, 0]]], //justcounter
[ 7,4, 3,0, 1,230,[ 6, 0],[]], //healingguard
[ 8,3, 0,0,10,167,0      ,[]], //rare
[ 9,3, 1,0, 5,222,0      ,[]], //fgearboost
[10,2, 0,0,10,  0,0      ,[[11, 3]]], //satk1
[11,2, 1,0,10,  1,[10, 3],[[12, 3]]], //satk2
[12,2, 2,0,10,  2,[11, 3],[]], //satk3
[13,1, 0,0,10, 30,0      ,[]], //apt
[14,1, 3,0,10,  5,0      ,[]], //sdef
[15,0, 0,0,10, 35,0      ,[[16, 3],[18, 1],[19, 1],[20, 1],[21, 5],[23, 3],[25, 3],[36, 5]]], // hp
[16,1, 1,0,10, 36,[15, 3],[[17, 3]]], //hp2
[17,1, 2,0,10, 37,[16, 3],[]], //hp3
[18,3, 4,0, 1, 46,[15, 1],[]], //pgear
[19,2, 4,0, 1, 47,[15, 1],[]], //wlgear
[20,1, 4,0, 1, 45,[15, 1],[]], //sgear
[21,5, 5,0,10,102,[15, 5],[[22, 5]]], //iron
[22,5, 6,0, 5,208,[21, 5],[]],
[23,4, 5,0,10, 77,[15, 3],[[24, 3]]], //war
[24,4, 6,0, 5,231,[23, 3],[]],
[25,2, 5,0,10, 75,[15, 3],[[26, 1],[29, 3],[30, 3],[31, 3]]], //guard
[26,5, 7,0, 1,104,[25, 1],[[27, 1]]], //gspoison
[27,5, 8,0, 1,105,[26, 1],[[28, 1]]],
[28,5, 9,0, 5,209,[27, 1],[]],
[29,4, 7,0,10, 78,[25, 3],[]], //auto
[30,3, 7,0,10,173,[25, 3],[]], //ab
[31,2, 8,0,10, 76,[25, 3],[[32, 3],[33, 3]]], //gsup
[32,3, 9,0, 5,174,[31, 3],[]], //massiv
[33,2, 9,0,10,103,[31, 3],[[34, 5],[35, 5]]], //flash
[34,3,10,0,10,106,[33, 5],[]], //flashtech
[35,2,10,0,10,107,[33, 5],[]], //flash2
[36,0, 5,0,10, 79,[15, 5],[[37, 5],[38, 3]]], //ja
[37,1, 7,0,10, 80,[36, 5],[]], //ja2
[38,0, 7,0,10, 73,[36, 3],[[39, 5],[41, 5]]], //fury
[39,1, 8,0,10, 74,[38, 5],[[40, 5]]], //fcrit
[40,1, 9,0,10,161,[39, 5],[]], //fcombo
[41,0, 8,0, 5,100,[38, 5],[[42, 5]]], //fup
[42,0, 9,0, 5,101,[41, 5],[]] //fup2
],
[ //FI 2 3  4   5    6       7
[ 0,5, 0,1, 1, 60,0      ,[[ 1, 0]]], //step
[ 1,5, 1,0,10, 61,[ 0, 0],[]], //stad
[ 2,5, 2,1, 1, 62,0      ,[]], //stat
[ 3,4, 0,0,10,  5,0      ,[]], //sdef
[ 4,4, 2,1, 1, 63,0      ,[]], //jr
[ 5,3, 0,0,10,168,0      ,[]], //rare
[ 6,3, 2,0, 5,223,0      ,[]], //crit strike
[ 7,2, 0,0,10, 35,0      ,[]], //hp1
[ 8,2, 1,0,10, 36,0      ,[]], //hp2
[ 9,1, 0,0,10, 30,0      ,[]], //apt
[10,0, 0,0,10,  0,0      ,[[11, 3],[12, 3],[13, 1],[14, 1],[15, 1],[16, 3],[17, 2],[18, 3],[21, 3],[24, 5],[25, 5],[28, 3],[30, 3],[31, 3]]], //satk =============
[11,1, 1,0,10,  1,[10, 3],[]], //satk2
[12,1, 2,0,10,  2,[10, 3],[]], //satk3
[13,3, 3,0, 1, 48,[10, 1],[]], //kgear
[14,2, 3,0, 1, 50,[10, 1],[]], //tdgear
[15,1, 3,0, 1, 49,[10, 1],[]], //dsgear
[16,5, 4,0, 5,232,[10, 3],[]], //techarts
[17,4, 4,0, 1,175,[10, 2],[]], //adre
[18,3, 4,0,10, 84,[10, 3],[[19, 3],[20, 5]]], //wstance
[19,4, 5,0,10, 85,[18, 3],[]], //wcrit
[20,3, 5,0,10, 86,[18, 5],[]], //wsup1
[21,1, 4,0,10, 81,[10, 3],[[22, 3],[23, 5]]], //bstance
[22,2, 5,0,10, 82,[21, 3],[]], //bcrit
[23,1, 5,0,10, 83,[21, 5],[]], //bsup1
[24,4, 6,0,10,233,[10, 5],[]], //limit
[25,3, 6,0,10,111,[10, 5],[[26, 4],[27, 2]]], //halfslay
[26,4, 7,0, 5,177,[25, 4],[]], //crazybeat
[27,3, 7,0, 5,176,[25, 2],[]], //crazyheart
[28,2, 6,0,10,110,[10, 3],[[29, 3]]], //deadslay
[29,2, 7,0,10,162,[28, 3],[]], //ppslay
[30,1, 6,0, 5,210,[10, 3],[]], //halfboost
[31,0, 6,0,10,108,[10, 3],[[32, 5],[33, 3]]], //chad
[32,1, 7,0,10,109,[31, 5],[]], //chbind
[33,0, 7,0, 5,211,[31, 3],[]] //chadplus
],
[ //RA 2 3  4   5    6       7
[ 0,5, 0,1, 1, 64,0      ,[[ 1, 0]]], //dive
[ 1,5, 1,0,10, 65,[ 0, 0],[]], //drad
[ 2,5, 2,1, 1, 66,0      ,[]], //jr
[ 3,4, 0,0,10,169,0      ,[]], //rare
[ 4,4, 1,0, 5,224,0      ,[]], //sharp
[ 5,3, 0,0,10, 15,0      ,[]], //rdef
[ 6,3, 1,1, 1,113,0      ,[]], //trapsearch
[ 7,2, 0,0,10, 10,0      ,[[ 8, 3]]], //ratk1
[ 8,2, 1,0,10, 11,[ 7, 3],[]], //ratk2
[ 9,0, 0,0,10, 30,0      ,[[10, 3],[12, 1],[14, 1],[16, 1],[18, 1],[19, 1],[20, 3],[21, 3],[22, 3]]], //apt
[10,1, 1,0,10, 31,[ 9, 3],[[11, 3]]], //apt2
[11,1, 2,0,10, 32,[10, 3],[]], //apt3
[12,5, 3,0,10, 90,[ 9, 1],[[13, 3]]], //tm
[13,5, 4,0, 5,179,[12, 3],[]], //tactics
[14,4, 3,0, 1, 93,[ 9, 1],[[15, 1]]], //ptrap
[15,4, 4,0, 1, 94,[14, 1],[]], //ptcust
[16,3, 3,0, 1, 91,[ 9, 1],[[17, 1]]], //uptrap
[17,3, 4,0, 1, 92,[16, 1],[]], //uptcust
[18,2, 3,0, 1,234,[ 9, 1],[]], //gravity
[19,1, 3,0, 1, 95,[ 9, 1],[]], //stun
[20,2, 5,0,10,163,[ 9, 3],[]], //killing
[21,1, 5,0, 5,213,[ 9, 3],[]], //first
[22,0, 5,0,10, 87,[ 9, 3],[[23, 3],[24, 3],[25, 3],[26, 3],[27, 5],[28, 3],[29, 3],[31, 5],[33, 5]]], //whad1
[23,5, 6,0,10, 99,[22, 3],[]], //jellen
[24,4, 6,0, 5, 98,[22, 3],[]], //panic
[25,3, 6,0, 5,114,[22, 3],[]], //mirage
[26,2, 6,0, 5, 97,[22, 3],[]], //bind
[27,1, 6,0,10, 96,[22, 5],[]], //weak
[28,3, 7,0, 1,235,[22, 3],[]], //bkeep
[29,2, 7,0, 5,180,[22, 3],[[30, 3]]], //power
[30,2, 8,0,10,178,[29, 3],[]], //ppsave
[31,1, 7,0,10, 89,[22, 5],[[32, 5]]], //stsnipe1
[32,1, 8,0,10,112,[31, 5],[]], //stsnipe2
[33,0, 7,0,10, 88,[22, 5],[[34, 2]]], //whad2
[34,0, 8,0, 5,212,[33, 2],[]] //whblast
],
[ //GU
[ 0,5, 0,1, 1, 64,0      ,[[ 1, 0]]], //dive
[ 1,5, 1,0,10, 65,[ 0, 0],[]], //drad
[ 2,5, 2,1, 1, 66,0      ,[]], //jr
[ 3,4, 0,0,10,170,0      ,[]], //rare
[ 4,3, 0,0,10, 15,0      ,[]], //rdef1
[ 5,3, 1,0,10, 16,0      ,[]], //rdef2
[ 6,2, 0,0,10, 30,0      ,[[ 7, 5]]], //apt1
[ 7,2, 1,0,10, 31,[ 6, 5],[]], //apt2
[ 8,2, 2,0,10, 35,0      ,[]], //hp
[ 9,0, 0,0,10, 10,0      ,[[10, 3],[11, 3],[12, 1],[13, 3],[17, 3],[21, 5],[22, 3],[23, 3]]], //ratk1
[10,1, 1,0,10, 11,[ 9, 3],[]], //ratk2
[11,1, 2,0,10, 12,[ 9, 3],[]], //ratk3
[12,1, 3,0, 1, 51,[ 9, 1],[]], //tmgear
[13,4, 4,0,10,119,[ 9, 3],[[14, 5],[15, 3]]], //chtr
[14,5, 5,0, 1,237,[13, 5],[]], //chfbonus
[15,4, 5,0,10,120,[13, 3],[[16, 5]]], //chfinish
[16,4, 6,0, 1,236,[15, 5],[]], //twchain
[17,3, 4,0,10,118,[ 9, 3],[[18, 2]]], //showtime
[18,3, 5,0, 5,184,[17, 2],[[19, 3]]], //shstar
[19,3, 6,0, 1,215,[18, 3],[]], //tough
[20,3, 7,0, 5,225,0      ,[]], //high
[21,2, 4,0,10,122,[ 9, 5],[]], //auto
[22,1, 4,0,10,121,[ 9, 3],[]], //aerial
[23,0, 5,0,10,115,[ 9, 3],[[24, 3],[25, 5],[26, 5]]], //zero
[24,2, 8,0,10,164,[23, 3],[]], //perfect
[25,1, 8,0,10,117,[23, 5],[]], //attackpp
[26,0, 8,0,10,116,[23, 5],[[27, 3]]], //zero2
[27,0, 9,0, 5,214,[26, 3],[]], //zerocrit
[28,5, 6,0, 5,181,0      ,[[29, 2]]], //srup
[29,5, 7,0, 5,183,[28, 2],[[30, 2]]], //sra
[30,5, 8,0, 5,182,[29, 2],[]] //srja
],
[ //FO
[ 0,5, 0,1, 1, 67,0      ,[[ 1, 0]]], //me
[ 1,5, 1,1, 1, 68,[ 0, 0],[]], //jr
[ 2,4, 0,0,10,171,0      ,[]], //rare
[ 3,4, 1,0, 5,216,0      ,[]], //talis
[ 4,4, 2,0, 5,226,0      ,[]], //elecon
[ 5,3, 0,0,10, 25,0      ,[]], //tdef
[ 6,3, 1,0,10, 35,0      ,[]], //hp
[ 7,2, 0,0,10, 40,0      ,[]], //pp1
[ 8,2, 1,0,10, 41,0      ,[]], //pp2
[ 9,1, 0,0,10, 30,0      ,[]], //apt1
[10,0, 0,0,10, 20,0      ,[[11, 2],[12, 3],[13, 3],[14, 3],[15, 3],[16, 3],[17, 3],[19, 2],[23, 3],[27, 3],[33, 3]]], //tatk1
[11,1, 1,0,10, 21,[10, 2],[]], //tatk2
[12,1, 2,0, 5,217,[10, 3],[]], //tatkhigh
[13,5, 3,0,10,141,[10, 3],[]], //techja
[14,4, 3,0, 1,133,[10, 3],[]], //chargepp
[15,3, 3,0, 1,238,[10, 3],[]], //chargeesc
[16,2, 3,0,10,140,[10, 3],[]], //normal
[17,1, 3,0,10,134,[10, 3],[[18, 1]]], //tchad1
[18,1, 4,0,10,135,[17, 1],[]], //tchad2
[19,1, 5,0,10,137,[10, 2],[[20, 2],[21, 3]]], //photon
[20,2, 6,0, 1,165,[19, 2],[]], //photonafter
[21,1, 6,0,10,138,[19, 3],[[22, 1]]], //photonad
[22,1, 7,0,10,185,[21, 1],[]], //photonboost
[23,4, 8,0,10,127,[10, 3],[[24, 5],[25, 3],[26, 5]]], //bm1
[24,5, 9,0,10,139,[23, 5],[]], //btppsave
[25,5,10,0,10,131,[23, 3],[]], //shockboost
[26,4,10,0,10,128,[23, 5],[]], //bm2
[27,2, 8,0,10,125,[10, 3],[[28, 2],[29, 3],[32, 5]]], //im1
[28,3, 9,0, 5,186,[27, 2],[]], //frkeep
[29,3,10,0,10,130,[27, 3],[[30, 5]]], //freezeboost
[30,3,11,0,10,136,[29, 5],[[31, 3]]], //frig
[31,3,12,0, 5,187,[30, 5],[]], //frigboost
[32,2,10,0,10,126,[27, 5],[]], //im2
[33,0, 8,0,10,123,[10, 3],[[34, 5],[35, 3],[36, 5]]], //fm1
[34,1, 9,0,10,132,[33, 5],[]], //ftscharge
[35,1,10,0,10,129,[33, 3],[]], //burnboost
[36,0,10,0,10,124,[33, 5],[]] //fm2
],
[ //TE
[ 0,5, 0,1, 1, 67,0      ,[[ 1, 0]]], //me
[ 1,5, 1,1, 1, 68,[ 0, 0],[]], //jr
[ 2,4, 0,0,10,172,0      ,[]], //rare
[ 3,3, 0,0,10, 25,0      ,[]], //tdef
[ 4,3, 1,1, 1,166,0      ,[]], //extend
[ 5,3, 2,0, 1,227,0      ,[]], //long
[ 6,2, 0,0,10, 40,0      ,[]], //pp1
[ 7,2, 1,0,10, 41,0      ,[]], //pp2
[ 8,1, 0,0,10, 30,0      ,[]], //apt1
[ 9,0, 0,0,10, 20,0      ,[[10, 3],[11, 3],[12, 1],[13, 3],[16, 5],[17, 3],[20, 5],[21, 3],[22, 3],[24, 5],[25, 1],[27, 5],[28, 3],[32, 3],[35, 3]]], //tatk1
[10,1, 1,0,10, 21,[ 9, 3],[]], //tatk2
[11,1, 2,0,10,  0,[ 9, 3],[]], //satk
[12,1, 3,0, 1, 52,[ 9, 1],[]], //wgear
[13,4, 4,0,10,144,[ 9, 3],[[14, 5],[15, 5]]], //debandad
[14,5, 5,0, 5,240,[13, 5],[]], //debandtough
[15,4, 5,0,10,145,[13, 5],[]], //debandcut
[16,3, 4,0, 5,156,[ 9, 5],[]], //resta
[17,2, 4,0,10,142,[ 9, 3],[[18, 5],[19, 5]]], //shiftaad
[18,3, 5,0, 5,239,[17, 5],[]], //shiftastrike
[19,2, 5,0,10,143,[17, 5],[]], //shiftacrit
[20,1, 4,0,10,157,[ 9, 5],[]], //pprest
[21,4, 6,0, 1,218,[ 9, 3],[]], //super
[22,3, 6,0, 1,155,[ 9, 3],[]], //terri
[23,3, 7,0, 5,219,0      ,[]], //terripp
[24,2, 6,0,10,160,[ 9, 5],[]], //ppconv
[25,1, 6,0,10,189,[ 9, 1],[[26, 3]]], //wandlovers
[26,1, 7,0, 5,188,[25, 3],[]], //wandreact
[27,5, 8,0,10,158,[ 9, 5],[]], //eleweak
[28,4, 8,0,10,150,[ 9, 3],[[29, 3],[31, 2]]], //dm1
[29,5, 9,0,10,154,[28, 3],[[30, 5]]], //poisonboost
[30,5,10,0,10,159,[29, 5],[]], //pig
[31,4, 9,0,10,151,[28, 2],[]], //dm2
[32,2, 8,0,10,148,[ 9, 3],[[33, 3],[34, 2]]], //lm1
[33,3, 9,0,10,153,[32, 3],[]], //panicboost
[34,2, 9,0,10,149,[32, 2],[]], //lm2
[35,0, 8,0,10,146,[ 9, 3],[[36, 3],[37, 2]]], //wm1
[36,1, 9,0,10,152,[35, 3],[]], //mirageboost
[37,0, 9,0,10,147,[35, 2],[]] //wm2
],
[ //BR
[ 0,5, 0,1, 1, 60,0      ,[[ 1, 0],[ 3, 0]]], //step
[ 1,5, 1,0,10, 61,[ 0, 0],[[ 2, 3]]], //stad
[ 2,5, 2,0, 1,207,[ 1, 3],[]], //snatch
[ 3,4, 1,1, 1, 62,[ 0, 0],[]], //stat
[ 4,4, 2,1, 1, 63,0      ,[[ 5, 0]]], //jr
[ 5,4, 3,0, 5,206,[ 4, 0],[]], //jrcover
[ 6,4, 0,0, 5,204,0      ,[]], //brmag
[ 7,3, 0,0,10,205,0      ,[]], //rare
[ 8,0, 0,0,10, 30,0      ,[[ 9, 3],[10, 3],[11, 3],[12, 3],[13, 1],[15, 3],[16, 3],[21, 3],[25, 3],[29, 3]]], //apt1
[ 9,1, 1,0,10, 31,[ 8, 3],[]], //apt2
[10,2, 2,0,10, 10,[ 8, 3],[]], //ratk
[11,1, 2,0,10,  0,[ 8, 3],[]], //satk
[12,2, 3,0, 5,241,[ 8, 3],[]], //atad
[13,1, 3,0, 1, 53,[ 8, 1],[[14, 1]]], //kgear
[14,1, 4,0, 1,228,[13, 1],[]], //counteredge
[15,5, 5,0, 5,242,[ 8, 3],[]], //chargeshot
[16,4, 5,0,10,193,[ 8, 3],[[17, 3],[19, 3]]], //rapid
[17,5, 6,0,10,195,[16, 3],[[18, 5]]], //rapidm
[18,5, 7,0, 5,229,[17, 5],[]], //rapidad
[19,4, 6,0, 5,194,[16, 3],[[20, 3]]], //rapidup1
[20,4, 7,0, 5,221,[19, 3],[]], //rapidup2
[21,3, 5,0,10,200,[ 8, 3],[[22, 5]]], //wstance
[22,3, 6,0,10,201,[21, 5],[[23, 3]]], //wup1
[23,3, 7,0,10,202,[22, 3],[[24, 3]]], //wcrit
[24,3, 8,0,10,203,[23, 3],[]], //wcharge
[25,1, 5,0,10,190,[ 8, 3],[[26, 3],[27, 3]]], //katanacombat
[26,2, 6,0, 5,192,[25, 3],[]], //combatfinish
[27,1, 6,0, 5,191,[25, 3],[[28, 3]]], //combatja
[28,1, 7,0, 5,220,[27, 3],[]], //combatesc
[29,0, 5,0,10,196,[ 8, 3],[[30, 5]]], //astance
[30,0, 6,0,10,197,[29, 5],[[31, 3]]], //aup1
[31,0, 7,0,10,198,[30, 3],[[32, 3]]], //acrit
[32,0, 8,0,10,199,[31, 3],[]] //acharge
]
];

versiondata = [
//ver
   //klassenanzahl
      //max mag level
         //skillanzahl jeder klasse
[ 0, 0,  0, 0, 0, 0, 0, 0, 0, 0],
[ 1, 0,  0, 0, 0, 0, 0, 0, 0, 0],
[ 2, 0,  0, 0, 0, 0, 0, 0, 0, 0],
[ 3, 6,150,33,27,27,21,27,27, 0],
[ 4, 6,150,36,27,27,24,30,30, 0],
[ 5, 7,175,39,30,30,27,33,33,27],
[ 6, 7,175,39,30,33,30,33,36,30],
[ 7, 7,175,42,33,33,30,36,36,33],
[ 8, 7,175,45,36,36,33,39,39,33]
]

cursp = [ //-0     //v 10              //v 20              //v 30              //v 40
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //HU
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //FI
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //RA
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //GU
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //FO
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //TE
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] //BR
];