let opcao = "5"

do {
    opcao = prompt(
        "Seja bem-vindo(a)\n" +
        "\n1. Opção Um" +
        "\n2. Opção Dois" +
        "\n3. Opção Três" +
        "\n4. Opção Quatro" +
        "\n5. Encerrar"
    )

    switch (opcao) {
        case "1":
            alert("Você escolheu a opção 1")
            break
        case "2":
            alert("Você escolheu a opção 2")
            break
        case "3":
            alert("Você escolheu a opção 3")
            break   
        case "4":
            alert("Você escolheu a opção 4")
            break
        case "5":
            alert("Você escolheu encerar") 
            alert("Encerrando...")
            break
        default:
            alert("opção inválida")
        }
} while (opcao !== "5")