(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('龙田', {
"type": "FeatureCollection",
"name": "longtian",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "id": 440100 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 383.719214072731688, -187.899778560570383 ], [ 382.172591206735319, -189.659728718428312 ], [ 380.208138447146894, -190.838400374181333 ], [ 378.44013096351739, -189.954396632366581 ], [ 378.243685687558525, -188.186389148737021 ], [ 377.850795135640851, -186.221936389148595 ], [ 376.475678203928965, -183.569925163704283 ], [ 373.921889616464057, -182.293030869971801 ], [ 371.662768942937362, -181.310804490177617 ], [ 369.108980355472454, -181.99836295603356 ], [ 366.064078578110468, -182.980589335827744 ], [ 363.706735266604369, -184.257483629560227 ], [ 360.956501403180596, -186.025491113189787 ], [ 358.697380729653958, -188.677502338634099 ], [ 354.473807296538894, -192.606407857810893 ], [ 350.839569691300369, -195.553086997193503 ], [ 347.205332086061844, -198.008652946679007 ], [ 344.919762442845297, -199.081471350637798 ], [ 344.847988774555404, -197.861318989709702 ], [ 343.669317118802383, -195.111085126285957 ], [ 341.311973807296283, -194.128858746491744 ], [ 341.311973807296283, -191.771515434985645 ], [ 338.954630495790241, -190.396398503273758 ], [ 334.829279700654581, -190.396398503273758 ], [ 334.436389148736907, -186.663938260055829 ], [ 335.025724976613446, -185.092376052385106 ], [ 336.400841908325333, -182.931478016837843 ], [ 336.793732460243007, -176.841674462113815 ], [ 336.204396632366468, -173.698550046772368 ], [ 338.954630495790241, -171.734097287183971 ], [ 339.543966323666723, -168.001637043966014 ], [ 340.133302151543319, -162.69761459307739 ], [ 338.561739943872567, -158.768709073900595 ], [ 334.829279700654638, -157.982927970065248 ], [ 332.668381665107404, -156.411365762394496 ], [ 334.239943872778099, -152.089569691300028 ], [ 338.758185219831432, -146.392656688493673 ], [ 339.740411599625645, -139.517072029934241 ], [ 342.097754911131688, -135.195275958839773 ], [ 345.240879326473134, -135.784611786716312 ], [ 347.008886810102695, -136.766838166510496 ], [ 348.187558465855773, -133.427268475210212 ], [ 351.527128157156028, -133.427268475210212 ], [ 352.116463985032567, -124.587231057062411 ], [ 355.259588400374014, -123.801449953227049 ], [ 355.259588400374014, -121.05121608980329 ], [ 359.384939195509617, -117.122310570626482 ], [ 361.349391955097985, -109.460944808231716 ], [ 360.760056127221446, -105.33559401309607 ], [ 363.510289990645219, -100.228016838166241 ], [ 367.242750233863205, -96.69200187090712 ], [ 371.368101028998808, -98.852899906454354 ], [ 374.118334892422581, -101.603133769878113 ], [ 374.118334892422581, -105.139148737137234 ], [ 375.689897100093333, -102.781805425631148 ], [ 376.868568755846354, -100.03157156220739 ], [ 380.993919550982014, -99.442235734330879 ], [ 381.190364826940822, -99.835126286248496 ], [ 380.993919550982014, -103.960477081384141 ], [ 380.404583723105475, -106.907156220766737 ], [ 383.351262862488113, -109.068054256313985 ], [ 389.048175865294468, -110.836061739943545 ], [ 393.17352666043007, -110.639616463984694 ], [ 397.29887745556573, -109.657390084190496 ], [ 399.06688493919529, -107.889382600560936 ], [ 399.459775491112964, -107.496492048643262 ], [ 402.995790458372085, -107.692937324602099 ], [ 403.781571562207432, -104.94270346117834 ], [ 407.514031805425418, -103.960477081384141 ], [ 412.62160898035529, -105.728484565013702 ], [ 415.175397567820141, -109.264499532272822 ], [ 419.300748362955801, -110.05028063610817 ], [ 423.033208606173787, -112.211178671655418 ], [ 430.891019644527375, -112.604069223573106 ], [ 432.855472404115744, -113.979186155284978 ], [ 436.784377923292595, -115.943638914873375 ], [ 440.71328344246939, -119.479653882132496 ], [ 442.677736202057758, -120.854770813844382 ], [ 442.088400374181276, -124.783676333021177 ], [ 441.499064546304737, -126.551683816650737 ], [ 438.945275958839829, -126.748129092609588 ], [ 434.623479887745361, -126.748129092609588 ], [ 432.659027128156936, -126.944574368568425 ], [ 432.659027128156936, -129.498362956033361 ], [ 431.480355472403915, -131.266370439662921 ], [ 429.712347988774354, -133.23082319925129 ], [ 430.69457436856851, -134.99883068288085 ], [ 429.123012160897815, -137.159728718428084 ], [ 427.944340505144794, -139.517072029934184 ], [ 429.515902712815489, -142.267305893357957 ], [ 430.69457436856851, -144.231758652946326 ], [ 428.730121608980141, -146.196211412534751 ], [ 425.390551917679886, -148.160664172123148 ], [ 424.211880261926808, -148.946445275958524 ], [ 422.050982226379574, -146.981992516370099 ], [ 421.854536950420766, -145.017539756781701 ], [ 421.854536950420766, -143.642422825069843 ], [ 420.675865294667688, -143.642422825069843 ], [ 420.086529466791148, -143.642422825069843 ], [ 419.693638914873532, -143.053086997193304 ], [ 416.943405051449759, -143.053086997193304 ], [ 417.336295603367432, -145.213985032740538 ], [ 419.497193638914666, -146.785547240411262 ], [ 421.068755846585361, -149.535781103835006 ], [ 421.6580916744619, -151.696679139382269 ], [ 423.818989710009134, -153.857577174929503 ], [ 423.426099158091461, -155.232694106641389 ], [ 421.461646398503035, -155.429139382600226 ], [ 421.068755846585361, -157.59003741814746 ], [ 421.6580916744619, -160.340271281571233 ], [ 420.479420018708879, -161.71538821328312 ], [ 418.12207670720278, -162.304724041159631 ], [ 416.157623947614411, -163.679840972871489 ], [ 415.568288119737872, -164.269176800748028 ], [ 412.818054256314099, -163.48339569691268 ], [ 411.835827876519886, -164.465622076706865 ], [ 410.264265668849191, -165.644293732459914 ], [ 407.710477081384283, -165.840739008418751 ], [ 406.924695977548879, -167.805191768007148 ], [ 406.531805425631205, -169.376753975677872 ], [ 405.746024321795858, -170.948316183348595 ], [ 404.370907390083971, -171.341206735266269 ], [ 403.781571562207432, -169.966089803554382 ], [ 401.620673526660198, -169.769644527595545 ], [ 401.031337698783659, -171.144761459307432 ], [ 398.870439663236425, -169.966089803554382 ], [ 396.513096351730383, -169.573199251636709 ], [ 393.76286248830661, -171.537652011225106 ], [ 387.673058933582581, -177.823900841907971 ], [ 384.726379794199943, -180.967025257249418 ], [ 382.958372310570439, -186.07460243217929 ], [ 382.3690364826939, -187.44971936389112 ], [ 383.719214072731688, -187.899778560570383 ] ] ] ],"encodeOffsets":[[116086,23320]]},"properties":{"cp":/*[409.9,-337.7]*/[376.5,-144.4],"name":"龙田社区","childNum":1 } },
{ "type": "Feature", "properties": { "id": 440200 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 404.476433945905399, -221.212725252135954 ], [ 408.029700654817475, -226.051216089803518 ], [ 409.699485500467631, -230.373012160898014 ], [ 412.351496725912, -235.87347988774556 ], [ 415.494621141253447, -240.784611786716567 ], [ 421.093311506080397, -247.856641721234837 ], [ 425.906220767072, -256.20556594948556 ], [ 428.754677268475177, -259.839803554724085 ], [ 431.799579045837163, -263.866931711880341 ], [ 432.385096016969385, -265.567719104216735 ], [ 428.337231057062468, -266.617165575303716 ], [ 425.979887745556368, -269.367399438727432 ], [ 424.408325537885673, -270.938961646398184 ], [ 425.194106641721021, -274.671421889616113 ], [ 426.569223573432907, -277.81454630495756 ], [ 425.979887745556368, -281.743451824134354 ], [ 423.818989710009134, -282.529232927969701 ], [ 419.497193638914666, -283.904349859681588 ], [ 417.336295603367432, -284.886576239475801 ], [ 416.943405051449759, -288.029700654817248 ], [ 418.907857811038127, -290.976379794199829 ], [ 420.479420018708879, -295.298175865294297 ], [ 420.282974742750014, -298.637745556594609 ], [ 418.318521983161645, -300.995088868100652 ], [ 415.568288119737872, -302.763096351730269 ], [ 412.22871842843756, -304.923994387277503 ], [ 409.08559401309617, -305.120439663236311 ], [ 403.585126286248624, -304.923994387277503 ], [ 399.852666043030695, -303.548877455565616 ], [ 396.905986903648056, -300.602198316183035 ], [ 394.352198316183149, -299.030636108512283 ], [ 391.798409728718241, -298.244855004676936 ], [ 389.833956969129815, -300.209307764265304 ], [ 388.458840037417929, -300.995088868100652 ], [ 386.101496725911886, -300.012862488306496 ], [ 383.744153414405787, -299.619971936388822 ], [ 381.583255378858553, -300.602198316183035 ], [ 380.797474275023205, -300.995088868100652 ], [ 376.672123479887546, -301.191534144059517 ], [ 375.886342376052198, -296.28040224508851 ], [ 378.636576239475971, -293.530168381664794 ], [ 379.225912067352454, -290.779934518241021 ], [ 376.868568755846354, -290.583489242282155 ], [ 374.118334892422638, -288.029700654817248 ], [ 376.868568755846354, -285.47591206735234 ], [ 379.029466791393645, -284.100795135640453 ], [ 378.243685687558241, -279.778999064545928 ], [ 381.190364826940879, -277.81454630495756 ], [ 382.3690364826939, -273.296304957904226 ], [ 381.583255378858553, -271.528297474274666 ], [ 380.208138447146666, -268.77806361085095 ], [ 377.065014031805219, -267.599391955097872 ], [ 373.528999064546099, -267.599391955097872 ], [ 370.189429373245844, -269.170954162768567 ], [ 367.046304957904397, -269.170954162768567 ], [ 368.224976613657418, -261.11669784845617 ], [ 369.796538821328113, -256.598456501402836 ], [ 371.368101028998865, -252.276660430308368 ], [ 374.118334892422638, -247.169083255378524 ], [ 376.998044051364161, -242.177587379879839 ], [ 379.422357343311489, -239.75327408793251 ], [ 385.413938260056113, -235.33325537885861 ], [ 391.209073900841872, -230.422123479887603 ], [ 397.298877455565957, -226.394995322731404 ], [ 401.448783910196425, -223.546538821328284 ], [ 404.476433945905399, -221.212725252135954 ] ] ] ],"encodeOffsets":[[116086,23320]]},"properties":{"cp":[397.3,-261.4],"name":"南布社区","childNum":1 } },
{ "type": "Feature", "properties": { "id": 440300 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 419.837781522594412, -198.660131436309257 ], [ 420.111085126286241, -203.852899906454525 ], [ 420.111085126286241, -207.781805425631347 ], [ 413.235500467726808, -214.460944808231943 ], [ 401.448783910196425, -223.546538821328284 ], [ 397.298877455565957, -226.394995322731404 ], [ 391.209073900841872, -230.422123479887603 ], [ 385.413938260056113, -235.33325537885861 ], [ 379.422357343311489, -239.75327408793251 ], [ 376.998044051364161, -242.177587379879839 ], [ 377.065014031805219, -242.06150608044868 ], [ 370.975210477081191, -244.811739943872453 ], [ 365.278297474274837, -251.294434050514155 ], [ 358.599158091674269, -255.419784845649815 ], [ 352.11646398503251, -259.152245088867744 ], [ 347.20533208606156, -261.11669784845617 ], [ 341.704864359214014, -262.295369504209191 ], [ 335.615060804489985, -263.866931711879943 ], [ 329.918147801683631, -264.259822263797616 ], [ 325.792797006547971, -264.259822263797616 ], [ 325.203461178671432, -257.973573433114723 ], [ 324.221234798877276, -256.794901777361702 ], [ 324.221234798877276, -254.044667913937928 ], [ 328.739476145930553, -252.473105706267233 ], [ 333.257717492983886, -250.705098222637673 ], [ 336.400841908325333, -247.9548643592139 ], [ 336.400841908325333, -245.990411599625503 ], [ 340.329747427502127, -244.615294667913616 ], [ 341.115528531337475, -241.079279700654496 ], [ 341.115528531337475, -239.114826941066099 ], [ 341.508419083255149, -236.168147801683517 ], [ 343.0799812909259, -234.989476145930468 ], [ 341.115528531337475, -232.828578110383205 ], [ 340.722637979419801, -229.685453695041787 ], [ 338.561739943872567, -228.703227315247574 ], [ 337.972404115996028, -226.738774555659177 ], [ 338.168849391954893, -220.059635173058609 ], [ 338.758185219831432, -213.380495790458042 ], [ 342.883536014967035, -212.005378858746184 ], [ 346.812441534143829, -209.255144995322439 ], [ 349.366230121608737, -207.880028063610553 ], [ 348.58044901777339, -206.112020579980992 ], [ 346.419550982226156, -203.754677268474893 ], [ 345.044434050514269, -201.200888681009985 ], [ 344.919762442845297, -199.081471350637798 ], [ 347.205332086061844, -198.008652946679007 ], [ 350.839569691300369, -195.553086997193503 ], [ 354.473807296538894, -192.606407857810893 ], [ 358.697380729653958, -188.677502338634099 ], [ 360.956501403180596, -186.025491113189787 ], [ 363.706735266604369, -184.257483629560227 ], [ 366.064078578110468, -182.980589335827744 ], [ 369.108980355472454, -181.99836295603356 ], [ 371.662768942937362, -181.310804490177617 ], [ 373.921889616464057, -182.293030869971801 ], [ 376.475678203928965, -183.569925163704283 ], [ 377.850795135640851, -186.221936389148595 ], [ 378.243685687558525, -188.186389148737021 ], [ 378.44013096351739, -189.954396632366581 ], [ 380.208138447146894, -190.838400374181333 ], [ 382.172591206735319, -189.659728718428312 ], [ 383.719214072731688, -187.899778560570383 ], [ 384.726379794199943, -188.235500467726467 ], [ 386.49438727782956, -189.414172123479517 ], [ 389.244621141253276, -187.842609915808794 ], [ 391.40551917680051, -187.842609915808794 ], [ 394.352198316183149, -189.807062675397191 ], [ 396.905986903648056, -189.021281571561815 ], [ 399.263330215154156, -186.860383536014581 ], [ 401.817118802619063, -185.092376052385021 ], [ 405.942469597754666, -185.485266604302694 ], [ 408.889148737137305, -189.21772684752068 ], [ 410.264265668849134, -192.164405986903262 ], [ 411.050046772684539, -192.753741814779801 ], [ 414.193171188025985, -192.950187090738638 ], [ 415.175397567820141, -195.503975678203574 ], [ 417.139850327408567, -198.450654817586155 ], [ 419.104303086996993, -199.236435921421503 ], [ 419.837781522594412, -198.660131436309257 ] ] ] ],"encodeOffsets":[[116086,23320]]},"properties":{"cp":/*[459.4,-247.6]*/[373.7,-210.6],"name":"老坑社区","childNum":1 } },
{ "type": "Feature", "properties": { "id": 440400 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 432.385096016969385, -265.567719104216735 ], [ 431.799579045837163, -263.866931711880341 ], [ 428.754677268475177, -259.839803554724085 ], [ 425.906220767072, -256.20556594948556 ], [ 421.093311506080397, -247.856641721234837 ], [ 415.494621141253447, -240.784611786716567 ], [ 412.351496725912, -235.87347988774556 ], [ 409.699485500467631, -230.373012160898014 ], [ 408.029700654817475, -226.051216089803518 ], [ 404.476433945905399, -221.212725252135954 ], [ 413.235500467726808, -214.460944808231943 ], [ 420.111085126286241, -207.781805425631347 ], [ 420.111085126286241, -203.852899906454525 ], [ 419.837781522594412, -198.660131436309257 ], [ 421.854536950420766, -197.075537885874269 ], [ 424.211880261926808, -195.307530402244709 ], [ 422.247427502338383, -192.950187090738638 ], [ 423.426099158091461, -190.003507951356028 ], [ 424.015434985968, -188.039055191767631 ], [ 425.586997193638695, -187.44971936389112 ], [ 426.765668849391716, -189.610617399438354 ], [ 428.926566884939007, -192.557296538820935 ], [ 431.480355472403915, -195.896866230121248 ], [ 434.034144059868822, -198.843545369503829 ], [ 436.980823199251404, -197.664873713750808 ], [ 439.731057062675177, -195.111085126285872 ], [ 443.463517305893106, -195.700420954162382 ], [ 444.838634237604992, -201.790224508886439 ], [ 453.875116931711659, -225.560102899906099 ], [ 491.003274087932425, -226.345884003741446 ], [ 491.985500467726638, -245.401075771748964 ], [ 508.486903648269163, -245.793966323666638 ], [ 499.843311506080227, -227.524555659494524 ], [ 501.611318989709844, -226.935219831617985 ], [ 510.647801683816454, -235.382366697848113 ], [ 510.844246959775319, -241.079279700654467 ], [ 512.808699719363631, -243.829513564078241 ], [ 512.808699719363631, -247.758419083255035 ], [ 516.541159962581673, -251.097988774555319 ], [ 516.93405051449929, -254.830449017773276 ], [ 514.576707202993248, -256.794901777361702 ], [ 514.380261927034439, -258.955799812908936 ], [ 519.094948550046524, -259.741580916744283 ], [ 519.094948550046524, -261.509588400373843 ], [ 515.755378858746326, -264.259822263797616 ], [ 514.183816651075631, -266.027829747427177 ], [ 512.612254443404822, -269.170954162768567 ], [ 509.469130028063432, -270.349625818521645 ], [ 504.557998129092425, -270.349625818521645 ], [ 499.843311506080227, -269.563844714686297 ], [ 495.717960710944567, -269.760289990645106 ], [ 492.181945743685446, -271.528297474274666 ], [ 488.253040224508709, -274.278531337698439 ], [ 485.306361085126071, -275.850093545369191 ], [ 480.788119738072737, -276.439429373245673 ], [ 474.894761459307574, -277.225210477081077 ], [ 470.376520112254241, -279.189663236669446 ], [ 465.661833489242099, -281.939897100093219 ], [ 462.518709073900652, -283.70790458372278 ], [ 454.071562207670524, -284.100795135640453 ], [ 454.660898035547007, -274.867867165574978 ], [ 449.946211412534865, -274.278531337698439 ], [ 446.999532273152283, -272.903414405986553 ], [ 443.856407857810837, -269.956735266603971 ], [ 441.302619270345929, -266.224275023385985 ], [ 437.373713751169134, -265.242048643591829 ], [ 433.641253507951149, -265.242048643591829 ], [ 432.385096016969385, -265.567719104216735 ] ] ] ],"encodeOffsets":[[116086,23320]]},"properties":{"cp":/*[397.3,-261.4]*/[459.4,-247.6],"name":"竹坑社区","childNum":1 } }
]
}

);
}));