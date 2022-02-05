if (document.getElementById('callbell-iframe')) {
    console.warn('[CALLBELL] Double IFrame was detected, please check your page for duplicates.');
}
else {
    var iframe = document.createElement('iframe');
    iframe.id = 'callbell-iframe';
    iframe.style.position = 'sticky';
    iframe.style.bottom = 0;
    iframe.allowFullscreen = true;
    iframe.frameBorder = 0;
    iframe.scrolling = 'no';
    iframe.style.backfaceVisibility = 'hidden';
    iframe.style.right = 'initial';
    iframe.style.left = '100%';
    iframe.style.width = '108px';
    iframe.style.height = '108px';
    iframe.style.top = 'initial';
    iframe.style.zIndex = '2147483647';
    document.body.appendChild(iframe);
    iframe.contentWindow.document.open();

    iframe.contentWindow.document.write('<!DOCTYPE html>\n<html>\n<head>\n<meta content=\'no-preview\' name=\'turbolinks-cache-control\'>\n<link rel=\"stylesheet\" media=\"screen\" href=\"./assets/widget/css/widget.css\" />\n<body>\n<div id=\'widget-root\'><\/div>\n<style>\n  #fb-root {\n    transition: opacity .5s ease-in-out;\n    opacity: 0;\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    top: 0;\n    left: 0;\n    z-index: -1;\n  }\n  \n  #fb-root.show {\n    opacity: 1;\n  }\n  \n  .fb-wrapper {\n    width: 50px !important;\n    height: 50px !important;\n  }\n  \n  .fb_dialog {\n    position: absolute !important;\n    top: auto !important;\n    left: 0 !important;\n    bottom: 0px !important;\n    width: 50px !important;\n    display: block !important;\n    height: 50px !important;\n    opacity: 0.001;\n  }\n  \n  .fb-customerchat iframe {\n    right: 75px !important;\n    bottom: 0px !important;\n  }\n  \n  .fb_dialog_content iframe:first-child {\n    position: absolute !important;\n    margin: 0px !important;\n    width: 55px !important;\n    height: 55px !important;\n    bottom: 0px !important;\n    right: 0 !important;\n    left: 0 !important;\n    opacity: 0.001;\n  }\n  \n  .instagram-direct-message {\n    cursor: pointer;\n    width: 50px;\n    height: 50px;\n    border-radius: 5%;\n    background: #d6249f;\n    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);\n    box-shadow: 0px 3px 10px rgba(0,0,0,.25);\n  }\n  \n  .whatsapp-message {\n    cursor: pointer;\n    width: 50px;\n    height: 50px;\n    border-radius: 5%;\n    background: #0bd561;\n    box-shadow: 0px 3px 10px rgba(0,0,0,.25);\n  }\n  \n  .messenger-message {\n    cursor: pointer;\n    width: 50px;\n    height: 50px;\n  background-color: rgb(255, 255, 255);\n   border-radius: 5%;\n  }\n  \n  .telegram-message {\n    cursor: pointer;\n    width: 50px;\n    height: 50px;\n    border-radius: 5%;\n    background-image: linear-gradient(-203deg, #37AEE2 13%, #1E96C8 76%);\n  }\n  \n  .custom-message {\n    width: 50px;\n    height: 50px;\n  cursor: pointer;\n    border-radius: 5%;\n  }\n  \n  .custom-message img {\n    border-radius: 5%;\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n  }\n<\/style>\n<script>\n  window.callbellIframeData = {\n    scriptToken: \'MibRnary8FioEkbMMBZXpfc6\',\n    data: {\"pageId\":null,\"whatsappNumber\":\"573105653998\",\"instagramUsername\":\"Colraices\",\"telegramBotName\":\"Colraices_bot\",\"integrations\":{\"messenger\":true,\"instagram\":true,\"whatsapp\":true,\"telegram\":true},\"logoImgSrc\":\"https://img.icons8.com/fluency/48/000000/filled-message.png",\"customIntegrationLogoSrc\":null,\"customIntegrationUrl\":null,\"widgetConfiguration\":{\"activeIntegrations\":{\"messenger\":true,\"whatsapp\":true,\"instagram\":true,\"telegram\":true,\"custom\":false},\"desktopActiveIntegrations\":{\"messenger\":true,\"whatsapp\":true,\"instagram\":true,\"telegram\":false,\"custom\":true},\"mobileActiveIntegrations\":{\"messenger\":true,\"whatsapp\":true,\"instagram\":true,\"telegram\":false,\"custom\":true},\"welcomeMessage\":\"\",\"offlineMessage\":null,\"welcomeMessageEnabled\":false,\"offlineMessageEnabled\":false,\"brandImage\":{\"url\":null},\"forceLeftPosition\":false,\"configuredIntegrations\":{\"messenger\":true,\"whatsapp\":true,\"instagram\":true,\"telegram\":true,\"custom\":false},\"premium\":true},\"instagramLogoSrc\":\"https://dash.callbell.eu/packs/media/images/instagram-2626055571fb2e7109f4769116a38b4d.svg\",\"whatsappLogoSrc\":\"https://dash.callbell.eu/packs/media/images/whatsapp-ee510fe616bba20ed170710e45c2046a.svg\",\"messengerLogoSrc\":\"https://dash.callbell.eu/packs/media/images/facebook-messenger-c8d9896e29ab6980638319e29b4ca2ae.svg\",\"telegramLogoSrc\":\"https://dash.callbell.eu/packs/media/images/telegram-ad3bddd4d87590be7ebe8a9e007819da.svg\",\"cancelIconSrc\":\"https://dash.callbell.eu/packs/media/images/cancel-9b5b3824f4c2c8ecd4154ea00238705b.svg\"}\n  };\n<\/script>\n\n<script src=\"https://polyfill.io/v3/polyfill.min.js?features=WeakSet%2CObject.assign%2CObject.values%2CArray.prototype.find%2CPromise%2Cfetch%2CArray.from\"><\/script>\n<script src=\"./assets/widget/componetsCalbell.js"><\/script>\n<\/body>\n<\/head>\n<\/html>\n');

    iframe.contentWindow.document.close();
}



    const myiFrame = document.querySelector('#callbell-iframe');

    document.addEventListener('click',function(e){
        const widget = myiFrame.contentDocument.querySelector('.desplegar');
        const botones = document.querySelectorAll('.widget');

        botones.forEach((boton)=>{
            if(e.target == boton){
                widget.click();
            }
        })

    });
