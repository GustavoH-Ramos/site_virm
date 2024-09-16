const form = document.getElementById("form");
form.addEventListener('submit', function(event)  {
    event.preventDefault();

    const formData = new FormData(form)
    console.log(formData)

    const nome = document.querySelector('#nome')
    const email = document.querySelector('#email')
    const telefone = document.querySelector('#telefone')
    const servico = document.querySelector('#servico')
    const ajudar = document.querySelector('#ajudar')
    

    const formularioValor = `Nome: ${nome.value} \nEmail: ${email.value} \nTelefone: ${telefone.value} \nAssunto: ${servico.value} \nDescrição: ${ajudar.value} `

    const message = encodeURIComponent(formularioValor)
    const phone = ""

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
    console.log(message)
})




