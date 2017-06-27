angular.module('app', ['ui.bootstrap','ngAnimate','chart.js'])

.controller('vaList', ['$scope','$modal', function($scope, $modal) {
 
    var mydomain = document.domain ;
    if(document.domain != "ina-log.com"){return;}

    $scope.hmbData = [//比較対象データ貼り付け
        {"no":2,"name":"キレマッスル","e1":400,"e2":300,"e3":75,"e4":180,"e5":54000,"e6":6,"e7":1800,"e8":189,"e9":28420,"e10":500,"e11":6980,"e12":232.67,"other1":"＜ラクラクキレマッスルコース＞ ・・1回目は500円（94%OFF） ・・2回目ずっと〜6,980円（30%OFF） ・・4回継続が条件 ・・5回目以降は電話で停止可能 ・・効果がなければ全額返金保証あり（30日間返金保証）","other2":"-","other3":0,"image_url":"http://ina-log.com/wp-content/themes/xeory_base/hmb_image/km.png","asp":"https://px.a8.net/svt/ejp?a8mat=2TIS1I+DTQFA2+3G7O+HUD03&a8ejpredirect=http%3A%2F%2Fabms.jp%2Fkm4%3Fadcd%3Dingla8nsrso","co_name":"株式会社イングリウッド","co_add":"〒207-0012 東京都東大和市新堀3-20-2 4階 株式会社イングリウッド 東大和支社","co_tel":"03-6433-5910","co_mail":"http://abms.jp",},{"no":6,"name":"ビルドマッスルHMB","e1":500,"e2":375,"e3":75,"e4":120,"e5":45000,"e6":4,"e7":1500,"e8":161,"e9":24200,"e10":500,"e11":5925,"e12":197.5,"other1":"＜トクトクコース＞ ・・1回目は500円（93%OFF） ・・2回目ずっと〜5,925円（25%OFF） ・・3回継続が条件 ・・4回目以降は電話で停止可能 ・・効果がなければ全額返金保証あり","other2":"-","other3":0,"image_url":"http://ina-log.com/wp-content/themes/xeory_base/hmb_image/bmh.png","asp":"https://px.a8.net/svt/ejp?a8mat=2TISTC+91O682+2T2M+2HB8GI","co_name":"株式会社モイスト","co_add":"〒136-0071 東京都江東区亀戸1-4-2","co_tel":"0800-805-3547","co_mail":"support_lp@mens-drug.com",},{"no":7,"name":"メタルマッスルHMB","e1":400,"e2":267,"e3":66.75,"e4":180,"e5":48060,"e6":6,"e7":1602,"e8":176,"e9":26420,"e10":500,"e11":6480,"e12":216,"other1":"＜メタルボディコース＞ ・・1回目は500円（94%OFF） ・・2回目ずっと〜6,480円（20%OFF） ・・4回継続が条件 ・・5回目以降は電話で停止可能 ・・効果がなければ30日間全額返金保証あり","other2":"GACKT愛用","other3":0,"image_url":"http://ina-log.com/wp-content/themes/xeory_base/hmb_image/mt.png","asp":"http://h.accesstrade.net/sp/cc?rk=0100kr5n00h4e0","co_name":"株式会社ART OF LIFE","co_add":"〒150-0043 東京都渋谷区道玄坂1-12-1　渋谷マークシティ22階","co_tel":"0120-589-029","co_mail":"support@bellare.jp",},{"no":1,"name":"マッスルエレメンツ","e1":300,"e2":250,"e3":83.33,"e4":180,"e5":45000,"e6":6,"e7":1500,"e8":171,"e9":25780,"e10":500,"e11":6320,"e12":210.67,"other1":"＜3回定期コース＞ ・・1回目は500円（93%OFF） ・・2回目〜ずっと6,320円（20%OFF） ・・3回継続が条件 ・・4回目以降は電話で停止可能 ・・効果がなければ3ヶ月分の返金保証あり","other2":"-","other3":0,"image_url":"http://ina-log.com/wp-content/themes/xeory_base/hmb_image/ms.png","asp":"https://px.a8.net/svt/ejp?a8mat=2TIS1E+13W32Y+3QOM+63OYA","co_name":"株式会社ＳＥＬＭＯＲＥ","co_add":"〒150-0011 東京都渋谷区東1-25-2","co_tel":"050-2018-7374","co_mail":"support@muscle-elements.jp",},{"no":0,"name":"ディープチェンジHMB","e1":400,"e2":250,"e3":62.5,"e4":240,"e5":60000,"e6":8,"e7":2000,"e8":321,"e9":40800,"e10":500,"e11":6500,"e12":216.67,"other1":"＜実感チャレンジコース＞ ・・初回：56粒 + トレーニング本 +トレーニングチューブで500円 ・・2回目〜4回目は9,100円（30%OFF） ・・5回目〜ずっと6.500円（50%OFF） ・・4回継続が条件 ・・5回目以降は電話で停止可能 ・・効果がなければ全額返金保証あり","other2":"クレアチンプレゼントあり","other3":0,"image_url":"http://ina-log.com/wp-content/themes/xeory_base/hmb_image/dch.png","asp":"https://px.a8.net/svt/ejp?a8mat=2TIQH3+BNQN16+3L60+HUD03&a8ejpredirect=https%3A%2F%2Fdch-hmb.com%2Fshopping%2Flp.php%3Fp%3Ddch1-2%26adcd%3Dfedtz5x0ost","co_name":"株式会社ラッシャーマン","co_add":"〒150-0043 東京都渋谷区宇田川町36-22 ノア渋谷パートⅡ　２F","co_tel":"0120-945-711","co_mail":"support@mens-dream.net",},{"no":3,"name":"バルクアップHMBプロ","e1":480,"e2":400,"e3":83.33,"e4":150,"e5":60000,"e6":5,"e7":2000,"e8":162,"e9":24300,"e10":500,"e11":5950,"e12":198.33,"other1":"＜3ヶ月特別本気プラン＞ ・・1回目は500円（94%OFF） ・・2回目ずっと〜5,950円（50%OFF） ・・3回継続が条件 ・・4回目以降はメールで停止可能 ・・効果がなければ全額返金保証あり ・・筋トレ方法無料サポート付き","other2":"-","other3":0,"image_url":"http://ina-log.com/wp-content/themes/xeory_base/hmb_image/buppro.jpg","asp":"https://px.a8.net/svt/ejp?a8mat=2TISTB+AZBV8A+3RIM+BW0YB&a8ejpredirect=http%3A%2F%2Fb0nds.jp%2Flp%2Fhmbpro_a8%2F","co_name":"株式会社bonds","co_add":"〒810-0075　福岡県福岡市中央区港2-7-3　avanti2F","co_tel":"0570-030-200","co_mail":"info@b0nds.jp",},{"no":4,"name":"ストライクHMB","e1":350,"e2":250,"e3":71.43,"e4":180,"e5":45000,"e6":6,"e7":1500,"e8":162,"e9":24300,"e10":500,"e11":5950,"e12":198.33,"other1":"＜限定モテトクコース＞ ・・1回目は500円（94%OFF） ・・2回目ずっと〜5,950円（35%OFF） ・・3回継続が条件 ・・4回目以降はメールで停止可能 ・・効果がなければ全額返金保証あり","other2":"-","other3":0,"image_url":"http://ina-log.com/wp-content/themes/xeory_base/hmb_image/shmb.png","asp":"https://px.a8.net/svt/ejp?a8mat=2TISTC+7X6P36+3OPI+BZGEQ","co_name":"株式会社クリート","co_add":"〒104-0061 東京都中央区銀座3-13-4　真光ビル4F-B","co_tel":"092-731-2266","co_mail":"info@1lifestore.com",},{"no":5,"name":"パーフェクトボディHMB","e1":500,"e2":375,"e3":75,"e4":120,"e5":45000,"e6":4,"e7":1500,"e8":188,"e9":28220,"e10":500,"e11":6930,"e12":231,"other1":"＜トクトクコース＞ ・・1回目は500円（93%OFF） ・・2回目ずっと〜6,930円（10%OFF） ・・4回継続が条件 ・・5回目以降は電話で停止可能 ・・効果がなければ全額返金保証あり","other2":"-","other3":0,"image_url":"http://ina-log.com/wp-content/themes/xeory_base/hmb_image/pbhmb.png","asp":"https://px.a8.net/svt/ejp?a8mat=2TISTC+8M6WHU+33UO+3T09QA","co_name":"株式会社ミーロード","co_add":"〒153‐0063 東京都目黒区目黒1-9-22 LC 1F オーガニックレーベル事務局","co_tel":"0800-600-0050","co_mail":"support_lp@organic-label.jp",},{"no":8,"name":"HMBアルティメイト ","e1":500,"e2":375,"e3":75,"e4":120,"e5":45000,"e6":4,"e7":1500,"e8":161,"e9":24200,"e10":500,"e11":5925,"e12":197.5,"other1":"＜トクトクコース＞ ・・1回目は500円（93%OFF） ・・2回目ずっと〜5,925円（25%OFF） ・・4回継続が条件 ・・5回目以降は電話で停止可能 ・・効果がなければ全額返金保証あり","other2":"-","other3":0,"image_url":"http://ina-log.com/wp-content/themes/xeory_base/hmb_image/ultimate.png","asp":"http://h.accesstrade.net/sp/cc?rk=0100kkv900h4e0","co_name":"株式会社ヘルスアップ","co_add":"〒130-0013 東京都墨田区錦糸1-2-1アルカセントラル14F 自然派研究所事務局","co_tel":"0570-065-129","co_mail":"support_lp@shizen-labo.jp",},
    ];

    $scope.sortData = {
        "e9_up":{"sort":"総コスト(初〜5回分)：安い順↓","orderVal":"e9","orderVal_name":"e9","max_scale":42000,"step_size":1000,"series_type":"5回注文時の総コスト（単位：円）",},"e8_up":{"sort":"1日コスト：安い順↓","orderVal":"e8","orderVal_name":"e8","max_scale":350,"step_size":50,"series_type":"5回注文時の1日コスト（単位：円）",},"e3_down":{"sort":"含有率：高い順↓","orderVal":"-e3","orderVal_name":"e3","max_scale":100,"step_size":10,"series_type":"1粒あたりのHMB含有率（単位：％）",},"e5_down":{"sort":"総HMB量：多い順↓","orderVal":"-e5","orderVal_name":"e5","max_scale":65000,"step_size":5000,"series_type":"1袋（パッケージ）あたりの総HMB量（単位：mg）",},"e1_down":{"sort":"1粒あたり質量mg：多い順↓","orderVal":"-e1","orderVal_name":"e1","max_scale":600,"step_size":100,"series_type":"1粒あたりの質量（単位：mg）",},"e11_up":{"sort":"月コスト(5回〜)：安い順↓","orderVal":"e11","orderVal_name":"e11","max_scale":7000,"step_size":1000,"series_type":"5回目以降の総コスト（単位：円）",},"e12_up":{"sort":"日コスト(5回〜)：安い順↓","orderVal":"e12","orderVal_name":"e12","max_scale":250,"step_size":10,"series_type":"5回目以降の日コスト（単位：円）",},"e4_down":{"sort":"粒数総：多い順↓","orderVal":"-e4","orderVal_name":"e4","max_scale":250,"step_size":10,"series_type":"1袋（パッケージ）あたりの総粒数（単位：粒）",},
    }


    $scope.subject_info = {
            name:'test',
            address:'住所',
            tel:'電話番号',
            mail:'メールアドレス'
    }


    $scope.sort_on = function (sort) { // 各ソートボタンが押された時の処理

        $scope.orderVal = '';
        $scope.orderVal = $scope.sortData[sort]["orderVal"];
        $scope.orderVal_name = $scope.sortData[sort]["orderVal_name"];
        $scope.sort = $scope.sortData[sort]["sort"];
        $scope.rank = true;

        for(key in $scope.sortData) {
            eval("$scope.is_" + key + " = false;"); //ng-classをいったん全てfalseに
        }

        eval("$scope.is_" + sort + " = true;"); //ng-classの選択箇所だけtrueに


        //////chartラベルセット//////////////////////////////////////////////////////
        var i = '';
        var chart_labe = new Array();
        for(i = 0; i < $scope.hmbData.length; i++) {
            chart_labe[i] = $scope.hmbData[i]['name'];
            //ラベル配列入れる（ラベルセットはループでは出来なかったので一度配列変数に入れる）
        }
        $scope.labels = chart_labe; //ラベルセット
        //////chartラベルセット//////////////////////////////////////////////////////


        $scope.series = [$scope.sortData[sort]["series_type"]]; //chart指標セット
        $scope.ColorBar = ['#4169e1']; //chart色セット


        //////chartデータセット//////////////////////////////////////////////////////
        var i = '';
        var chart_data = new Array();
        for(i = 0; i < $scope.hmbData.length; i++) {
            chart_data[i] = $scope.hmbData[i][$scope.orderVal_name];
            //データを配列に入れる（データセットはループでは出来なかったので一度配列変数に入れる）
        }
        $scope.data = [ chart_data ]; //データセット
        //////chartデータセット//////////////////////////////////////////////////////

        //////chartオプションセット//////////////////////////////////////////////////////
        $scope.DataSetOverride = [{ xAxisID: 'x-axis-1' }]; //x-axis-1 is the ID defined in scales under options.
        $scope.options = {
            legend: { display: true },
            responsive: true,  // set to false to remove responsiveness. Default responsive value is true.
            scales: {
                xAxes: [
                    {
                        id: 'x-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left',
                        ticks: {
                          stepSize: $scope.sortData[sort]["step_size"],
                          unitStepSize: $scope.sortData[sort]["step_size"],
                          min: 0,
                          max: $scope.sortData[sort]["max_scale"],
                          callback: function(value){
                                      return value;
                                      //return value+'mg';で単位がつく
                                    }
                        }
                    }
                ]
            }
        }
        //////chartオプションセット//////////////////////////////////////////////////////

        //////chartクリック&ホバーイベントセット//////////////////////////////////////////////////////
        $scope.clickme = function($event){
            //alert("You've clicked upon "+$event[0]._view.label);
        }
     
        $scope.hoverme = function ($event) {
            //alert("You hovered over " + $event[0]._view.label);
        }
        //////chartクリック&ホバーイベントセット//////////////////////////////////////////////////////


    }// 各ソートボタンが押された時の処理 end


  $scope.open = function(index) {

    $scope.company = $scope.hmbData[index]['co_name'];
    $scope.co_add = $scope.hmbData[index]['co_add'];
    $scope.co_tel = $scope.hmbData[index]['co_tel'];
    $scope.co_mail = $scope.hmbData[index]['co_mail'];

    $modal.open({
        templateUrl:"advertisers.html",
        windowClass: 'center-modal',
        scope: $scope //値を引き継ぐのに必要
    });

  };

    $scope.open2 = function(index) {

    $scope.other1 = $scope.hmbData[index]['other1'];

    $modal.open({
        templateUrl:"campaign.html",
        windowClass: 'center-modal',
        scope: $scope //値を引き継ぐのに必要
    });

  };

    $scope.open3 = function() {

        $scope.subject_info_name = $scope.subject_info['name'];

        $modal.open({
            templateUrl:"subject_info.html",
            windowClass: 'center-modal',
            scope: $scope //値を引き継ぐのに必要
        });

    };

}]);

