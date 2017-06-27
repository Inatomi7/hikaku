<?php
/**
 * Template Name: template-comparison
 *
 */
?>
<?php get_header(); ?>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/angular152.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/hmb-comparison.js"></script>

<link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.10.0/ui-bootstrap-tpls.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-animate.js"></script>

<script src="<?php echo get_template_directory_uri(); ?>/js/chart.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/angular-chart.min.js"></script>

<style>
@media (max-width: 767px) {
  .responsive {
    border-collapse: separate;
    border-spacing: 0  20px;
    display: table !important;
    border:none !important;
  }
  .responsive thead {
    display: none;
  }

  .responsive tr {
    background-color: #f6f6f6;
  }
  .responsive td {
    border: none;
    display: block;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #dddddd;
    font-size: 0.9em;
  }
  .responsive td.col-6 {
    float: left;
    width: 50%;
  }
  .responsive td.txt-right {
    text-align: right;
  }
  .responsive td:before {
    content: attr(data-title) " ";
  }
  .responsive .clear {
    clear: both;
  }

  .btn{
    margin: 3px 2px;
  }

}

.center-modal {
    top: 20%;
}

.sort_style{
  color:red;
  background-color: #fffacd;
}

.chart_style{
  /*font-size: 0.5em !important;
  line-height: 1.5em !important;*/
}

/* アニメーション用 */

.ng-enter,
.ng-leave,
.ng-move {
  -webkit-transition: opacity 0.5s linear;
  transition: opacity 0.5s linear;
}
.ng-enter {
  opacity: 0;
}
.ng-enter.ng-enter-active {
  opacity: 1;
}
.ng-leave {
  opacity: 1;
}
.ng-leave.ng-leave-active {
  opacity: 0;
}
.ng-move {
  opacity: .5;
}
.ng-move.ng-move-active {
  opacity: 1;
}

/* アニメーション用 */


</style>

<div id="content">


<div class="wrap clearfix">

  <?php bzb_breadcrumb(); ?>
  <div id="main"<?php bzb_layout_main(); ?> role="main" itemprop="mainContentOfPage">

    <div class="main-inner">

    <?php
			if ( have_posts() ) :

				while ( have_posts() ) : the_post();

        ?>


    <?php $cf = get_post_meta($post->ID); ?>
    <article id="post-<?php echo the_ID(); ?>" <?php post_class(); ?> itemscope="itemscope" itemtype="http://schema.org/CreativeWork">

      <header class="post-header">
        <h1 class="post-title" itemprop="headline"><?php the_title(); ?></h1>
      </header>

      <section class="post-content" itemprop="text">
      
      <?php if( get_the_post_thumbnail() ) : ?>
      <div class="post-thumbnail">
        <?php the_post_thumbnail(); ?>
      </div>
      <?php endif; ?>
        <?php the_content(); ?>
        <p>パッケージデータとキャンペーン情報を元に情報をまとめました。<br>
          分量やキャンペーンなどがメーカーによって微妙に違っています。<br><br>
          ソート用のボタンを押すと棒グラフが現れます。<br>
          製品についての微妙な違いが一目でわかると思います。<br><br>
          主観的情報は含まれておりません。<br>
          HMB購入を考えてる方は、検討する際にお役立てください。
        </p>
        
        <span>（スマホの場合は横向きにするとグラフが綺麗に見えます。）</span>
        
        <div ng-controller="vaList">

        <canvas id="bar" class="chart chart-horizontal-bar"
                chart-data="data" chart-labels="labels"
                chart-series="series" chart-colors="ColorBar"
                chart-options="options" chart-click="clickme" chart-hover="hoverme"
                chart-dataset-override="DataSetOverride" 
                style="height:10px;" 
                >
        </canvas>

        <br />
            <div class="action-list">
                <!--検索：
                <input id="name" name="name" type="text" ng-model="search" placeholder="検索" />-->
                グラフ：<br>
                <button ng-click="sort_on('e9_up')" class="btn btn-default">総コスト(初〜5回分)</button>
                <button ng-click="sort_on('e8_up')" class="btn btn-default">1日コスト(初〜5回)</button>
                <button ng-click="sort_on('e11_up')" class="btn btn-default">月コスト(5回〜)</button>
                <button ng-click="sort_on('e12_up')" class="btn btn-default">1日コスト(5回〜)</button><br>
                <button ng-click="sort_on('e1_down')" class="btn btn-default">1粒質量</button>
                <button ng-click="sort_on('e3_down')" class="btn btn-default">HMB含有率</button>
                <button ng-click="sort_on('e5_down')" class="btn btn-default">総HMB量</button>
                <button ng-click="sort_on('e4_down')" class="btn btn-default">総粒数</button>
            </div>

        <br />

            <span>{{sort}}</span>
            <table class="responsive">

                  <thead>
                    <tr>
                      <th>商品名</th>
                      <th>1粒のHMB<br>(含有率)</th>
                      <th>粒数</th>
                      <th>総HMB量</th>
                      <th>1日粒数</th>
                      <th>1日摂取HMB</th>
                      <th>1日コスト<br><span style="font-size:0.6em;">初〜5回</span></th>
                      <th>総コスト<br><span style="font-size:0.6em;">初〜5回</span></th>
                      <th>1日コスト<br><span style="font-size:0.6em;">5回〜</span></th>
                      <th>月コスト<br><span style="font-size:0.6em;">5回〜</span></th>
                      <th>初回価格</th>
                    </tr>
                  </thead>
                  <tbody>

                  <tr class="va-list-item" ng-repeat="hmb in hmbData | filter:search | orderBy: orderVal">
                    <!-- {{$index+1}}位： -->
                    <td style="text-align: center ;"><span ng-show="rank">{{$index+1}}位：</span>{{hmb.name}}<br>
                      <a style="padding: 3px" href="{{hmb.asp}}" target="_blank" rel="nofollow">
                        <img src="{{hmb.image_url}}" style="height:140px; margin:10px auto;" />
                      </a><br><span style="color:red;">{{hmb.other2}}</span><br>
                      <a ng-click="open(hmb.no)" style="font-size:0.7em;">広告主様について</a>
                    </td>
                    <td data-title="HMB(g)／1粒(g)：" class="clear txt-right" ng-class="{sort_style:is_e3_down}">
                      {{hmb.e2}}mg/<span ng-class="{sort_style:is_e1_down}">{{hmb.e1}}mg</span><br> ({{hmb.e3}}%)
                    </td>
                    <td data-title="粒数：" class="col-6" ng-class="{sort_style:is_e4_down}">{{hmb.e4}} 粒</td>
                    <td data-title="総HMB：" class="col-6 txt-right" ng-class="{sort_style:is_e5_down}">{{hmb.e5}} mg</td>
                    <td data-title="粒数(1日)：" class="col-6">{{hmb.e6}} 粒</td>
                    <td data-title="HMB(1日)：" class="col-6 txt-right">{{hmb.e7}} mg</td>
                    <td data-title="1日コスト(初〜5回)：" class="clear" ng-class="{sort_style:is_e8_up}">{{hmb.e8}}円</td>
                    <td data-title="総コスト(初〜5回分)：" class="clear" ng-class="{sort_style:is_e9_up}">{{hmb.e9|number}}円</td>
                    <td data-title="1日コスト(5回〜)：" class="clear" ng-class="{sort_style:is_e12_up}">{{hmb.e12}}円</td>
                    <td data-title="月コスト(5回〜)：" class="clear" ng-class="{sort_style:is_e11_up}">{{hmb.e11|number}}円</td>
                    <td data-title="初回購入：" class="clear">
                      <div class="post-in-cta" style="text-align:center;">
                        <p class="post-cta-btn" style="margin:0;">
                          <a style="padding: 3px; margin:0 auto; width:110px;" href="{{hmb.asp}}" target="_blank" rel="nofollow">
                            {{hmb.e10}}円で試す
                          </a>
                        </p>
                        <span ng-click="open2(hmb.no)" style="font-size:0.7em;">キャンペーンについて</span>
                      </div>
                    </td>

                  </tr>

                  </tbody>
             </table>
        </div>


<!-- modal -->
<script type="text/ng-template" id="advertisers.html">

  <div class="modal-header">
    <button type="button" class="close" ng-click="$dismiss()" aria-hidden="true">×</button>
    <h3>広告主様について</h3>
  </div>
  <div class="modal-body">
    <strong>{{company}}</strong><br>
    {{co_add}}<br>
    {{co_tel}}<br>
    {{co_mail}}
  </div>
  <div class="modal-footer">
    <button class="btn btn-danger" ng-click="$close()">OK</button>
  </div>

</script>
<!-- modal -->

<!-- modal2 -->
<script type="text/ng-template" id="campaign.html">

  <div class="modal-header">
    <button type="button" class="close" ng-click="$dismiss()" aria-hidden="true">×</button>
    <h3>キャンペーンについて</h3>
  </div>
  <div class="modal-body">
    {{other1}}
  </div>
  <div class="modal-footer">
    <button class="btn btn-danger" ng-click="$close()">OK</button>
  </div>

</script>
<!-- modal2 -->

<!-- modal3 -->
<script type="text/ng-template" id="subject_info.html">

  <div class="modal-header">
    <button type="button" class="close" ng-click="$dismiss()" aria-hidden="true">×</button>
    <h3>主体者情報について</h3>
  </div>
  <div class="modal-body">
    氏名：{{subject_info['name']}}<br>
    住所：{{subject_info['address']}}<br>
    TEL：{{subject_info['tel']}}
    </div>
  <div class="modal-footer">
    <button class="btn btn-danger" ng-click="$close()">OK</button>
  </div>

</script>
<!-- modal3 -->


      </section>

    </article>

        <?php

				endwhile;

			else :
		?>

    <p>投稿が見つかりません。</p>

    <?php
			endif;
		?>

    </div><!-- /main-inner -->
  </div><!-- /main -->


<?php get_sidebar(); ?>

</div><!-- /wrap -->



</div><!-- /content -->

<?php get_footer(); ?>
