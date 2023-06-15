export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    quantidadeEstoque: number;
    descricaoPreco: string;
    imagem: string;
}   

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Mouse gamer", preco: 439.00, descricaoPreco: "À vista no PIX", imagem: "app/assets/mouse-3.jpg", quantidadeEstoque: 20 },
    { id: 2, descricao: "Monitor muito bom", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem: "app/assets/monitor-1.jpg", quantidadeEstoque: 20 },
    { id: 3, descricao: "Teclado excelente", preco: 749.99, descricaoPreco: "À vista no PIX", imagem: "app/assets/teclado-1.jpg", quantidadeEstoque: 20 },
    { id: 4, descricao: "Fone para quem joga", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "app/assets/fone-de-ouvido-2.jpg", quantidadeEstoque: 20 },
    { id: 5, descricao: "Fone de ouvido", preco: 299.99, descricaoPreco: "À vista no PIX", imagem: "app/assets/fone-de-ouvido-1.jpg", quantidadeEstoque: 20 },
    { id: 6, descricao: "Fone de ouvido bom", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "app/assets/fone-de-ouvido-3.jpg", quantidadeEstoque: 20 },
    { id: 7, descricao: "HD 1TB", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "app/assets/hd.jpg", quantidadeEstoque: 20 },
    { id: 8, descricao: "Placa de vídeos", preco: 18449.99, descricaoPreco: "À vista no PIX", imagem: "app/assets/placa-video.jpg", quantidadeEstoque: 20 },
    { id: 9, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "À vista no PIX", imagem: "app/assets/processador.jpg", quantidadeEstoque: 20 },
    { id: 10, descricao: "Notebook bom", preco: 2500, descricaoPreco: "À vista no PIX", imagem: "app/assets/laptop-1.jpg", quantidadeEstoque: 20 },
    { id: 11, descricao: "Notebook excelente", preco: 4500, descricaoPreco: "À vista no PIX", imagem: "app/assets/laptop-2.jpg", quantidadeEstoque: 20 },
    { id: 12, descricao: "Mouse barato", preco: 20, descricaoPreco: "À vista no PIX", imagem: "app/assets/mouse-1.png", quantidadeEstoque: 20 },
    { id: 13, descricao: "Mouse ótimo", preco: 200, descricaoPreco: "À vista no PIX", imagem: "app/assets/mouse-2.jpg", quantidadeEstoque: 20 },
    { id: 14, descricao: "Mouse pequeno", preco: 50, descricaoPreco: "À vista no PIX", imagem: "app/assets/mouse-4.jpg", quantidadeEstoque: 20 },
    { id: 15, descricao: "Teclado bom", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "app/assets/teclado-2.jpg", quantidadeEstoque: 20 },
]