// Lottie animaatiot


  LottieInteractivity.create({
    player: '#esimerkki1',
    mode: 'scroll',
    actions: [
      {
         visibility:[0.2, 0.9] ,
          type: 'seek',
        frames: [0, 49]
      }
    ]
  });
  
    LottieInteractivity.create({
    player: '#esimerkki2',
    mode: 'scroll',
    actions: [
   
	   {
            visibility:[0.5, 1.0],
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
        frames: [0, 49]
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
          state: 'autoplay',
          transition: 'onComplete',
          frames: [0,17]
      },
	 {
          state: 'none',
          transition: 'click',
          frames: [17]
      },
	  {
          state: 'autoplay',
		  ForceFlag: false,
          frames: [17,31],
		  transition: 'onComplete'
      },
	  {
         state: 'none',
          frames: [31],
		  transition: 'click'
		 
      },
	  {
          state: 'autoplay',
		  ForceFlag: false,
          frames: [31,46],
		  transition: 'onComplete',
      },
	    {
         state: 'none',
          frames: [46],
		  transition: 'click'
		 
      },
	   {
          state: 'autoplay',
		  ForceFlag: false,
          frames: [46,67],
		  transition: 'onComplete',
      },
	  {
         state: 'none',
          frames: [67],
		  transition: 'click'
		 
      },
	  {
          state: 'autoplay',
		  ForceFlag: false,
          frames: [67,97],
		  transition: 'onComplete',
		  reset: true
      }
    ]
  });
  
