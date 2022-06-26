function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    //var res = document.getElementById('res')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')//criando uma tag
        img.setAttribute('id', 'foto')//atribuindo id à tag imagem
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade <= 3) {
                img.setAttribute('src', 'bebe.jpg')
            } else if(idade > 3 && idade <= 10) {
                img.setAttribute('src', 'crianca.jpg')
            } else if(idade > 10 && idade <= 18) {
                img.setAttribute('src', 'adolescente.jpg')
            } else if(idade > 18 && idade <= 50) {
                img.setAttribute('src', 'adulto.jpg')
            } else if(idade > 50) {
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade <= 3) {
                img.setAttribute('src', 'bebe.jpg')
            } else if(idade > 3 && idade <= 10) {
                img.setAttribute('src', 'crianca.jpg')
            } else if(idade > 10 && idade <= 18) {
                img.setAttribute('src', 'adolescente.jpg')
            } else if(idade > 18 && idade <= 50) {
                img.setAttribute('src', 'adulto.jpg')
            } else if(idade > 50) {
                img.setAttribute('src', 'idoso.jpg')
            }
        }
        res.style.textAlign = 'center'//centralizando o texto
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)//adicionando o elemento abaixo
        img.style.width='300px';
        img.style.borderRadius='150px 150px 150px 150px'
        
    }
}