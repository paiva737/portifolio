const botaoWhatsApp = document.getElementById('botaoWhatsapp');
const urlWhatsapp = 'https://api.whatsapp.com/send?phone=5571992854808&text=Ol%C3%A1%20Rafael%2C%20Me%20fale%20mais%20sobre%20voc%C3%AA';
botaoWhatsApp.addEventListener('click',function(){
window.open(urlWhatsapp, '_blank');
});

const botaoLinkedin = document.getElementById('botaoLinkedin');
const urlLinkedin = 'https://www.linkedin.com/in/rafael-paiva-472531235/?locale=en_US';
botaoLinkedin.addEventListener('click',function(){
window.open(urlLinkedin, '_blank');
});


const botaoGmail = document.getElementById('botaoGmail');
const urlGmail = 'mailto:rafaelpaiva636@gmail.com?subject=Oferta de Trabalho';
botaoGmail.addEventListener('click',function(){
window.open(urlGmail, '_blank');
});


const botaoGitHub = document.getElementById('botaoGitHub');
const urlGitHub = 'https://github.com/paiva737';
botaoGitHub.addEventListener('click',function(){
window.open(urlGitHub, '_blank');
});
