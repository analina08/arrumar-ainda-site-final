window.onscroll = function() 
{
    const scroll = document.getElementById("scroll")

    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
    {
        scroll .style.display = "block";
        
    }
    else{
        scroll .style.display = "none";
    }
};
document.getElementById("scroll").addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
document.getElementById('formulario').addEventListener('subimit', function(){
    e.preventDefault();

    const email = document.getElementById('email').value;
    if (email) {
      alert('Obrigado por entrar em contato, retornaremos em breve!');
      document.getElementById('email').value = '';
    } else {
      alert('Por favor, insira um e-mail válido.');
    }
  });