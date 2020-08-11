// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics_debug.js','ga');

  window.ga_debug = {trace: true};  
  ga('create', 'UA-12345-6', 'auto');
  
  if (location.hostname == 'localhost') {
  ga('set', 'sendHitTask', null);
  }

  ga('send', 'pageview');

  function sendEvent(idItem, category, action, label){
    if(idItem == "email" || idItem =="btn-enviar"){
      if(validateEmail(document.getElementById("email").value)){
        ga('send',{
          hitType: 'event',
          eventCategory: category,
          eventAction: action,
          eventLabel: label
      });        
      }
    }
    else{
        ga('send',{
            hitType: 'event',
            eventCategory: category,
            eventAction: action,
            eventLabel: label
        });
    }
  }


  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}