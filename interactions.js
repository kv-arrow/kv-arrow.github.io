// Animation configuration


  LottieInteractivity.create({
    player: '#esimerkki1',
    mode: 'scroll',
    actions: [
      {
         visibility:[0, 1.0] ,
          type: 'seek',
        frames: [0, 121]
      }
    ]
  });
  
    LottieInteractivity.create({
    player: '#esimerkki2',
    mode: 'scroll',
    actions: [
   
	   {
            visibility:[0.2,1.0],
            type: "play",
        }
    ]
  });

  LottieInteractivity.create({
    player: '#esimerkki3',
    mode: 'cursor',
    actions: [
      {
         position: { x: [0, 1], y: [-1, 2] },
          type: 'seek',
        frames: [0, 121]
      }
    ]
  });
  
   LottieInteractivity.create({
    player: '#esimerkki4',
    mode: 'cursor',
    actions: [
      {
          type: "toggle"
        
      }
    ]
  });

LottieInteractivity.create({
    player: '#esimerkki5',
    mode: 'chain',
    actions: [
      {
          state: 'none',
          transition: 'click',
          frames: [0]
      },
	  {
          state: 'autoplay',
		  ForceFlag: false,
          frames: [0,60],
		  transition: 'onComplete'
      },
	  {
         state: 'none',
          frames: [60],
		  transition: 'click'
		 
      },
	  {
          state: 'autoplay',
		  ForceFlag: false,
          frames: [60,121],
		  transition: 'onComplete',
		   reset: true
      },
    ]
  });
  
