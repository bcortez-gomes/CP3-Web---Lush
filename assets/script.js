document.addEventListener("DOMContentLoaded", function () {
    const produtos = [
        {
            nome: "Bomba Estrelas",
            preco: 15.00,
            categoria: "Bomba de banho",
            disponibilidade: true,
            imagem: "./assets/img/bomb-rose-star.avif",
            descricao: "Relaxe com espuma perfumada"
        },
        {
            nome: "Bomba Wild Remedy",
            preco: 52.00,
            categoria: "Bomba de banho",
            disponibilidade: true,
            imagem: "./assets/img/bombas-wild-remedy.avif",
            descricao: "Sinta a cura da natureza"
        },
        {
            nome: "Barra Cake",
            preco: 5.00,
            categoria: "Sabão em barra",
            disponibilidade: true,
            imagem: "./assets/img/cake-soap.avif",
            descricao: "Delicioso sabão em formato de bolo"
        },
        {
            nome: "Barra Feira",
            preco: 5.00,
            categoria: "Sabão em barra",
            disponibilidade: true,
            imagem: "./assets/img/fair-soap.avif",
            descricao: "Sabão artesanal para sua pele"
        },
        {
            nome: "Creme de Tratamento Hanami",
            preco: 25.00,
            categoria: "Creme de tratamento",
            disponibilidade: true,
            imagem: "./assets/img/hanami-cream.avif",
            descricao: "Tratamento natural de argila"
        },
        {
            nome: "Kit Breath",
            preco: 185.00,
            categoria: "Kit",
            disponibilidade: true,
            imagem: "./assets/img/kit-and-breath.avif",
            descricao: "Seu banho ficou épico"
        },
        {
            nome: "Kit Comfy Cozy",
            preco: 105.00,
            categoria: "Kit",
            disponibilidade: true,
            imagem: "./assets/img/kit-comfy-cozy.avif",
            descricao: "Kit para conforto e aconchego"
        },
        {
            nome: "Kit Lush XXII",
            preco: 145.00,
            categoria: "Kit",
            disponibilidade: true,
            imagem: "./assets/img/kit-lush-XXII.avif",
            descricao: "Seleção especial Lush XXII"
        },
        {
            nome: "Kit Mashmellow & Rose",
            preco: 14.00,
            categoria: "Sais de banho",
            disponibilidade: true, 
            imagem: "./assets/img/mashmellow-and-rose.avif",
            descricao: "Bomba de sais de banho delicada"
        },
        {
            nome: "Kit Mug Blue",
            preco: 18.00,
            categoria: "Sais de banho",
            disponibilidade: false,
            imagem: "./assets/img/mug-blue.avif",
            descricao: "Bomba de sais azul relaxante"
        }
    ];

    const produtosContainer = document.getElementById("produtos");
    const btnListarTodos = document.getElementById("btn-listar");
    const formFiltro = document.getElementById("form-filtro");
    const selectCategoria = document.getElementById("categoria");
    const checkboxDisponiveis = document.getElementById("disponiveis");
    const toggleBusca = document.getElementById("toggleBusca");
    const menuBusca = document.getElementById("menuBusca");

    function listarProdutos(lista) {
        produtosContainer.innerHTML = "";

        lista.forEach(produto => {
            const card = document.createElement("div");
            card.classList.add("produto-card");
            if (!produto.disponibilidade) card.classList.add("indisponivel");

            card.innerHTML = `
                <div class="produto-img">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    ${!produto.disponibilidade ? `<span class="sold-out">SOLD OUT</span>` : ""}
                </div>
                <div class="tag-novidade">
                    <i class='fas fa-star'></i>
                    <p>Novo</p>
                </div>
                <div class="produto-info">
                    <h2>${produto.nome}</h2>
                    <p class="categoria">${produto.categoria}</p>
                    <p class="descricao">${produto.descricao}</p>
                    ${produto.disponibilidade ? `<p class="preco">R$ ${produto.preco.toFixed(2)}</p>` : `<button class="btn-indisponivel" disabled>Indisponível</button>`}
                </div>
            `;
            produtosContainer.appendChild(card);
        });
    }

    function aplicarFiltros() {
        let produtosFiltrados = [...produtos];

        const categoriaSelecionada = selectCategoria.value;
        const somenteDisponiveis = checkboxDisponiveis.checked;

        if (categoriaSelecionada) {
            produtosFiltrados = produtosFiltrados.filter(produto => produto.categoria === categoriaSelecionada);
        }

        if (somenteDisponiveis) {
            produtosFiltrados = produtosFiltrados.filter(produto => produto.disponibilidade === true);
        }

        listarProdutos(produtosFiltrados);
    }

    btnListarTodos.addEventListener("click", function() {
        selectCategoria.value = "";
        checkboxDisponiveis.checked = false;
        listarProdutos(produtos);
    });

    formFiltro.addEventListener("submit", function(event) {
        event.preventDefault();
        aplicarFiltros();
    });

    if (toggleBusca) {
        toggleBusca.addEventListener("click", function() {
            if (menuBusca.style.display === "block") {
                menuBusca.style.display = "none";
            } else {
                menuBusca.style.display = "block";
            }
        });
    }

    document.addEventListener("click", function(event) {
        const isClickInsideMenu = menuBusca.contains(event.target);
        const isClickOnToggle = toggleBusca.contains(event.target);

        if (menuBusca.style.display === "block" && !isClickInsideMenu && !isClickOnToggle) {
            menuBusca.style.display = "none";
        }
    });
});