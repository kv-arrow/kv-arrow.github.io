// Animation configuration


  LottieInteractivity.create({
    player: '#esimerkki1',
    mode: 'scroll',
    actions: [
      {
         visibility:[0.2, 1.0] ,
          type: 'seek',
        frames: [0, 48]
      }
    ]
  });
  
    LottieInteractivity.create({
    player: '#esimerkki2',
    mode: 'scroll',
    actions: [
   
	   {
            visibility:[0.25, 1.0],
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
        frames: [0, 48]
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
          frames: [0,17],
		  transition: 'onComplete'
      },
	  {
         state: 'none',
          frames: [35],
		  transition: 'click'
		 
      },
	  {
          state: 'autoplay',
		  ForceFlag: false,
          frames: [35,53],
		  transition: 'onComplete',
      },
	    {
         state: 'none',
          frames: [73],
		  transition: 'click'
		 
      },
	   {
          state: 'autoplay',
		  ForceFlag: false,
          frames: [73,94],
		  transition: 'onComplete',
      },
	  {
         state: 'none',
          frames: [112],
		  transition: 'click'
		 
      },
	  {
          state: 'autoplay',
		  ForceFlag: false,
          frames: [112,162],
		  transition: 'onComplete',
		  reset: true
      }
    ]
  });
  
