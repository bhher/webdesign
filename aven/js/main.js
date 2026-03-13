$( function () {
	// 페이지 로딩시 스트롤을 브라우저 최상단으로 이동
	$('body, html').stop().animate({'scrollTop':0},1500,'swing');
  
  // 스크롤 기능 구현
  $(window).scroll(function(){
	  var sct = $(this).scrollTop();
	  console.log(sct);
	  for(var i=0; i<5; i++){
		  $('section>article').eq(i).css({
			  'transform':'translateZ('+parseInt((-5000*i) + sct)+'px)'
			 });
	  
		  if(sct >= i * 5000 && sct < (i+1)*5000){
			  /*기존 클래스 .on 제거*/
			$( '.scrollNav li' ).removeClass();
			/*현재 페이지에 클래스(.on) 부여*/
			$( '.scrollNav li' ).eq( i ).addClass( 'on' );
			
			$( 'article' ).removeClass();
			$( 'article' ).eq( i ).addClass( 'on' );		  
		  }
	  }
  });
  /*서브 내비게이션 선택(클릭)시 페이지(스크롤) 이동*/
    $( '.scrollNav li' ).on( 'click', function () {
        
        var mov = $( this ).index();
        $( 'body, html' ).stop().animate( { 
            'scrollTop' : 5000 * mov
        }, 1500, 'swing' );
        
    } );
  
  $( 'body' ).on( 'mousemove', function ( e ) {
        
        /*가로(x), 세로(y) 마우스 커서 위치 저장*/
        var posX = e.pageX/100;
		console.log(posX);
        var posY = e.pageY/150;
       
	   /*1페이지*/
        $( '.obj11' ).css( { 'bottom': -100 - posY , 'left': -270 - posX } );
        $( '.obj12' ).css( {  'top': -85 + posY,        'right': -590 - posX } );
        $( '.obj13' ).css( {  'bottom': -50 + posY,  'left': -100 + posX  } );	

        /*2페이지*/
        $( '.obj21' ).css( {  'bottom': -420 - posY , 'right': -700 - posX } );
        $( '.obj22' ).css( { 'bottom': -100 + posY , 'right': -100 + posX } );
        
        /*3페이지*/
        $( '.obj31' ).css( { 'bottom': 60 - posY, 'right': 160 - posX } );
        $( '.obj32' ).css( { 'top':100 - posY , 'left':200 - posX} );	
        /*4페이지*/
        $( '.obj41' ).css( {'bottom': -100 - posY , 'left': 350 + posX } );
        $( '.obj42' ).css( {  'top': -200 - posY,   'right': 170 + posX } );
        $( '.obj43' ).css( { 'top': - 70 + posY ,  'right': -100 + posX } );
        
        /*5페이지*/
        $( '.obj51' ).css( { 'top': 60 - posY , 'left': -100 - posX  } );
        $( '.obj52' ).css( {  'top': -200 - posY , 'right': 250 + posX } );
        $( '.obj53' ).css( {  'top': 120 - posY , 'left': -30 + posX } );


	
   } );
  
  $('body').trigger('mousemove');
  
  
});
  






















