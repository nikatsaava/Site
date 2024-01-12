FundraiseUp.on('checkoutOpen', function(details) {	
    console.log(details);
  });

FundraiseUp.on('checkoutClose', function(details) {	
    console.log(details);
  });

FundraiseUp.on('donationComplete', function(details) {	
    console.log(details);
  });
