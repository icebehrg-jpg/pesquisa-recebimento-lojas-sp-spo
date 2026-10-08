"use strict";

/* ===== CONFIGURAÇÃO: cole aqui a URL do Apps Script (termina em /exec) ===== */
const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxE3hKLXwcSvDKvZekwUg7BKlC7wxgUnz5GKd35obDb1XehH5SReuCUy-MwNPfuUQe_/exec';
/* ============================================================================ */
const STORES = [{ "code": "0003", "name": "Ipiranga", "full": "0003 - SP-SPO-Ipiranga", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Bom Pastor, 2.912", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Capital Sul 1", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0007", "name": "Lapa", "full": "0007 - SP-SPO-Lapa", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Luiz Gatti, 50", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Capital Norte Oeste", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0008", "name": "Tuiuti", "full": "0008 - SP-SPO-Tuiuti", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Tuiuti, 2.516 - Tatuapé", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Leste 1", "truck": "Toco", "ativo": "PQ 3 ALTO" }, { "code": "0009", "name": "R.Iguatemi", "full": "0009 - SP-SPO-R.Iguatemi", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Iguatemi, 321", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Oeste", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0010", "name": "Pompeia", "full": "0010 - SP-SPO-Pompeia", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Francisco Matarazzo, 2.000", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Capital Norte Oeste", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0011", "name": "S.Trimais", "full": "0011 - SP-SPO-S.Trimais", "uf": "SP", "city": "Sao Paulo", "addr": "Avenida Tucuruvi, 220 - 2o. piso", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Norte 1", "truck": "Truck", "ativo": "PQ 2 ALTO" }, { "code": "0013", "name": "V.Mariana", "full": "0013 - SP-SPO-V.Mariana", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Domingos de Morais, 1.118", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Capital Sul 1", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0015", "name": "Jurubatuba", "full": "0015 - SP-SBC-Jurubatuba", "uf": "SP", "city": "Sao Bernardo do Campo", "addr": "Rua Jurubatuba, 646 - SÃO BERNARDO - 09725-220", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "Grande São Paulo ABC 1", "truck": "", "ativo": "" }, { "code": "0016", "name": "A.Neves", "full": "0016 - SP-CAM-A.Neves", "uf": "SP", "city": "Campinas", "addr": "Av. Andrade Neves, 533 e 555", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Interior Campinas", "truck": "", "ativo": "" }, { "code": "0019", "name": "AnieloPratici", "full": "0019 - SP-GRU-AnieloPratici", "uf": "SP", "city": "Guarulhos", "addr": "Av. Aniello Pratici, 520", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "Grande São Paulo Guarulhos", "truck": "", "ativo": "" }, { "code": "0020", "name": "Av.Industrial", "full": "0020 - SP-STA-Av.Industrial", "uf": "SP", "city": "Santo Andre", "addr": "Av. Industrial, 681", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "Grande São Paulo ABC 2", "truck": "", "ativo": "" }, { "code": "0021", "name": "Centro", "full": "0021 - SP-RIB-Centro", "uf": "SP", "city": "Ribeirao Preto", "addr": "Rua Américo Brasiliense, 711", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Ribeirão", "truck": "", "ativo": "" }, { "code": "0022", "name": "Moema", "full": "0022 - SP-SPO-Moema", "uf": "SP", "city": "Sao Paulo", "addr": "Av. dos Imarés, 266", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Sul 2", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0023", "name": "Vergueiro", "full": "0023 - SP-SPO-Vergueiro", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Vergueiro, 3.305", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Capital Sul 1", "truck": "Toco", "ativo": "GD 3 ALTO" }, { "code": "0024", "name": "S.NovaAmerica", "full": "0024 - RJ-RIO-S.NovaAmerica", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Av. Pastor Martin Luther King Jr, 126", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Norte", "truck": "", "ativo": "" }, { "code": "0025", "name": "ItaAvJPessego", "full": "0025 - SP-SPO-ItaAvJPessego", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Sabbado DAngelo, 1980", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Leste 2", "truck": "Truck", "ativo": "PQ 2 ALTO" }, { "code": "0026", "name": "Santana", "full": "0026 - SP-SPO-Santana", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Voluntários da Pátria, 1.483", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Norte 1", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0027", "name": "Centro", "full": "0027 - RJ-RIO-Centro", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Av. Passos, 42, 44 e 46 - Centro", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Sul", "truck": "", "ativo": "" }, { "code": "0028", "name": "GoianiaJdGoias", "full": "0028 - GO-GO-GoianiaJdGoias", "uf": "GO", "city": "Goiania", "addr": "Av. I, 208, Quadra B-37, Lote 02 - Jardim Goiás", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Goias", "truck": "", "ativo": "" }, { "code": "0029", "name": "S.Bauru", "full": "0029 - SP-BAU-S.Bauru", "uf": "SP", "city": "Bauru", "addr": "Rua Henrique Savi, 55 - quadra 15", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Bauru", "truck": "", "ativo": "" }, { "code": "0030", "name": "S.Aricanduva", "full": "0030 - SP-SPO-S.Aricanduva", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Aricanduva, 5.555", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Leste 2", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0031", "name": "AvPaulistaTri", "full": "0031 - SP-SPO-AvPaulistaTri", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Paulista, 1.439 - Loja L01", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Capital Central Paulista", "truck": "Toco", "ativo": "ROLL GRANDE" }, { "code": "0032", "name": "S.MarketPlace", "full": "0032 - SP-SPO-S.MarketPlace", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Doutor Chucri Zaidan, 902 -Subsolo", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Sul 2", "truck": "Truck", "ativo": "PQ 2 ALTO" }, { "code": "0033", "name": "Fco.Morato", "full": "0033 - SP-SPO-Fco.Morato", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Professor Francisco Morato, 1,092", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Capital Oeste", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0034", "name": "Savassi", "full": "0034 - MG-BHZ-Savassi", "uf": "MG", "city": "Belo Horizonte", "addr": "Av. do Contorno, 5.873 - Savassi", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Minas Gerais BH", "truck": "", "ativo": "" }, { "code": "0035", "name": "EzequielRamos", "full": "0035 - SP-BAU-EzequielRamos", "uf": "SP", "city": "Bauru", "addr": "Rua Ezequiel Ramos, 5-25", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Bauru", "truck": "", "ativo": "" }, { "code": "0036", "name": "Mal.Deodoro", "full": "0036 - SP-SBC-Mal.Deodoro", "uf": "SP", "city": "Sao Bernardo do Campo", "addr": "Rua Marechal Deodoro, 2.177", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "Grande São Paulo ABC 1", "truck": "", "ativo": "" }, { "code": "0037", "name": "Taboao", "full": "0037 - SP-TAB-Taboao", "uf": "SP", "city": "Taboao da Serra", "addr": "Praça Nicola Vivilechio, 3", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "Grande São Paulo", "truck": "", "ativo": "" }, { "code": "0038", "name": "S.Interlagos", "full": "0038 - SP-SPO-S.Interlagos", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Interlagos, 2.255", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Sul 4", "truck": "Toco", "ativo": "GD 2 ALTO" }, { "code": "0040", "name": "Araguaia", "full": "0040 - SP-BAR-Araguaia", "uf": "SP", "city": "Barueri", "addr": "Alameda Araguaia, 2.179", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "Grande São Paulo Barueri", "truck": "", "ativo": "" }, { "code": "0041", "name": "Centro", "full": "0041 - SP-SJR-Centro", "uf": "SP", "city": "Sao Jose do Rio Preto", "addr": "Rua General Glicério, 3.112 - Centro", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior São José", "truck": "", "ativo": "" }, { "code": "0043", "name": "S.Cantareira", "full": "0043 - SP-SPO-S.Cantareira", "uf": "SP", "city": "Sao Paulo", "addr": "Av Raimundo Pereira de Magalhães, 11001", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Capital Norte Oeste", "truck": "Truck", "ativo": "PQ 2 ALTO" }, { "code": "0045", "name": "S.Penha", "full": "0045 - SP-SPO-S.Penha", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Dr. João Ribeiro, 304 - Térreo", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Leste 1", "truck": "Toco", "ativo": "PQ 2 ALTO" }, { "code": "0046", "name": "S.Piracicaba", "full": "0046 - SP-PIR-S.Piracicaba", "uf": "SP", "city": "Piracicaba", "addr": "Av. Limeira, 722", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Limeira", "truck": "", "ativo": "" }, { "code": "0047", "name": "Leopoldina", "full": "0047 - SP-SPO-Leopoldina", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Imperatriz Leopoldina, 1.170", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Capital Oeste", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0049", "name": "N.DÁvila", "full": "0049 - SP-SJC-N.DÁvila", "uf": "SP", "city": "Sao Jose dos Campos", "addr": "Av. Nelson D Ávila, 1.005 - Jd. São Dimas", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Interior Taubaté", "truck": "", "ativo": "" }, { "code": "0050", "name": "S.Estação", "full": "0050 - PR-CTB-S.Estação", "uf": "PR", "city": "Curitiba", "addr": "Av. 7 de Setembro, 2.775 - Lj 1151", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Parana CTB", "truck": "", "ativo": "" }, { "code": "0051", "name": "GalCarneiro", "full": "0051 - SP-SOR-GalCarneiro", "uf": "SP", "city": "Sorocaba", "addr": "Av. General Carneiro, 875/877", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Interior Sorocaba", "truck": "", "ativo": "" }, { "code": "0052", "name": "Centro", "full": "0052 - SP-MAR-Centro", "uf": "SP", "city": "Marilia", "addr": "R. São Luiz, 1.085 - Alto Cafezal", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Bauru", "truck": "", "ativo": "" }, { "code": "0053", "name": "Seminário", "full": "0053 - PR-CTB-Seminário", "uf": "PR", "city": "Curitiba", "addr": "Av. Nossa Senhora Aparecida, 582", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Parana CTB", "truck": "", "ativo": "" }, { "code": "0054", "name": "NiloPeçanha", "full": "0054 - RJ-NIG-NiloPeçanha", "uf": "RJ", "city": "Nova Iguaçu", "addr": "Av. Nilo Peçanha, 639 - Centro", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "", "truck": "", "ativo": "" }, { "code": "0055", "name": "S.Iguatemi", "full": "0055 - SP-CAM-S.Iguatemi", "uf": "SP", "city": "Campinas", "addr": "Av. Iguatemi, 777 - Primeiro Piso - Loja 1", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Interior Campinas", "truck": "", "ativo": "" }, { "code": "0056", "name": "A.Pinheiro", "full": "0056 - SP-SPO-A.Pinheiro", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Adolfo Pinheiro, 886", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Sul 3", "truck": "Truck", "ativo": "PQ 3 ALTO" }, { "code": "0057", "name": "V.Maria", "full": "0057 - SP-SPO-V.Maria", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Guilherme Cotching, 563", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Norte 1", "truck": "Truck", "ativo": "GD 2 ALTO" }, { "code": "0058", "name": "S.Bangu", "full": "0058 - RJ-RIO-S.Bangu", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Rua Fonseca, 240 - Loja 154", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Oeste", "truck": "", "ativo": "" }, { "code": "0059", "name": "Com.Norte", "full": "0059 - DF-BRA-Com.Norte", "uf": "DF", "city": "Brasilia", "addr": "SCN Quadra 01, Bloco B, Setor Comercial Norte - Ce", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Brasilia", "truck": "", "ativo": "" }, { "code": "0060", "name": "Freguesia", "full": "0060 - SP-SPO-Freguesia", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Otaviano Alves de Lima, 4.694", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Capital Norte Oeste", "truck": "Truck", "ativo": "PQ 3 ALTO" }, { "code": "0061", "name": "V.Guilherme", "full": "0061 - SP-SPO-V.Guilherme", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Morvan Dias de Figueiredo, 2.305", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Norte 1", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0062", "name": "S.MauaPlaza", "full": "0062 - SP-MAU-S.MauaPlaza", "uf": "SP", "city": "Maua", "addr": "Av. Gov. Mario Covas Jr, 1 - Lj 181", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "Grande São Paulo ABC 2", "truck": "", "ativo": "" }, { "code": "0063", "name": "S.Jacareí", "full": "0063 - SP-JAC-S.Jacareí", "uf": "SP", "city": "Jacarei", "addr": "Rua Olimpio Catão, 500 - Centro", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Interior Taubaté", "truck": "", "ativo": "" }, { "code": "0064", "name": "LiberoBadaro", "full": "0064 - SP-SPO-LiberoBadaro", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Líbero Badaró, 309", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Capital Central", "truck": "Toco", "ativo": "ROLL PEQ" }, { "code": "0065", "name": "Mogi", "full": "0065 - SP-MOG-Mogi", "uf": "SP", "city": "Mogi das Cruzes", "addr": "R. Manuel de Oliveira, 310", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "Grande São Paulo Guarulhos", "truck": "", "ativo": "" }, { "code": "0066", "name": "DiademaCentro", "full": "0066 - SP-DIA-DiademaCentro", "uf": "SP", "city": "Diadema", "addr": "Av. Fabio Eduardo Ramos Esquivel, 50", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "Grande São Paulo ABC 1", "truck": "", "ativo": "" }, { "code": "0067", "name": "S.União", "full": "0067 - SP-OSA-S.União", "uf": "SP", "city": "Osasco", "addr": "Av. dos Autonomistas, 1400", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "Grande São Paulo Osasco", "truck": "", "ativo": "" }, { "code": "0068", "name": "SantaCatarina", "full": "0068 - SP-SPO-SantaCatarina", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Santa Catarina, 1.850", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Sul 4", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0069", "name": "GranjaViana", "full": "0069 - SP-COT-GranjaViana", "uf": "SP", "city": "Cotia", "addr": "R.Ushima Kira, 87 - Km 23,5 R.Tavares", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "Grande São Paulo", "truck": "", "ativo": "" }, { "code": "0070", "name": "S.Polo", "full": "0070 - SP-IND-S.Polo", "uf": "SP", "city": "Indaiatuba", "addr": "Av. Filtros Mann, 670 - Jd. Tropical", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Interior Indaiatuba", "truck": "", "ativo": "" }, { "code": "0071", "name": "Sao Caetano", "full": "0071 - SP-SCS-Sao Caetano", "uf": "SP", "city": "Sao Caetano do Sul", "addr": "Av. Goiás, 101 - Santo Antònio", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "Grande São Paulo ABC 2", "truck": "", "ativo": "" }, { "code": "0073", "name": "S.NovoShop", "full": "0073 - SP-RIB-S.NovoShop", "uf": "SP", "city": "Ribeirao Preto", "addr": "Av. Presidente Kennedy, 1.500", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Ribeirão", "truck": "", "ativo": "" }, { "code": "0074", "name": "Guanab.Barra", "full": "0074 - RJ-RIO-Guanab.Barra", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Av. das Américas, 3.501 - Box 1", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro Barra", "truck": "", "ativo": "" }, { "code": "0075", "name": "S.GrandeRio", "full": "0075 - RJ-SJM-S.GrandeRio", "uf": "RJ", "city": "Sao Joao de Meriti", "addr": "R. Maria Soares Sendas, 111 - Piso 01", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro trecho B", "truck": "", "ativo": "" }, { "code": "0076", "name": "Sao Miguel", "full": "0076 - SP-SPO-Sao Miguel", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Marechal Tito, 1.823", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Leste 2", "truck": "Toco", "ativo": "PQ 2 ALTO" }, { "code": "0077", "name": "S.Suzano", "full": "0077 - SP-SUZ-S.Suzano", "uf": "SP", "city": "Suzano", "addr": "Rua Sete de Setembro, 555 - Lj QE-01", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "Grande São Paulo Guarulhos", "truck": "", "ativo": "" }, { "code": "0078", "name": "DomAguirre", "full": "0078 - SP-SOR-DomAguirre", "uf": "SP", "city": "Sorocaba", "addr": "Av. Dom Aguirre, 2.121", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Interior Sorocaba", "truck": "", "ativo": "" }, { "code": "0079", "name": "N.Cantareira", "full": "0079 - SP-SPO-N.Cantareira", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Nova Cantareira, 1.776 - Tucuruvi", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Norte 1", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0081", "name": "S.Boulevard", "full": "0081 - RJ-RIO-S.Boulevard", "uf": "RJ", "city": "Rio de Janeiro", "addr": "R. Barão de São Francisco, 236 - Piso 2", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Norte", "truck": "", "ativo": "" }, { "code": "0082", "name": "S.PraiaBelas", "full": "0082 - RS-POA-S.PraiaBelas", "uf": "RS", "city": "Porto Alegre", "addr": "Av. Praia de Belas, 1181 - Andar 03", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Rio Grande do Sul", "truck": "", "ativo": "" }, { "code": "0083", "name": "S.Litoral", "full": "0083 - SP-PGR-S.Litoral", "uf": "SP", "city": "Praia Grande", "addr": "Av. Ayrton Senna da Silva, 1.511", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Interior Litoral", "truck": "", "ativo": "" }, { "code": "0084", "name": "S.Eldorado", "full": "0084 - SP-SPO-S.Eldorado", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Rebouças, 3.970 - Loja 2024", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Oeste", "truck": "Toco", "ativo": "GD 2 ALTO" }, { "code": "0085", "name": "S.Mooca", "full": "0085 - SP-SPO-S.Mooca", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Cap. Pacheco Chaves, 313 - piso L1", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Leste 1", "truck": "Toco", "ativo": "PQ 2 ALTO" }, { "code": "0086", "name": "S.Niteroi", "full": "0086 - RJ-NIT-S.Niteroi", "uf": "RJ", "city": "Niteroi", "addr": "R. Quinze de Novembro, 8 - Centro", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro trecho B", "truck": "", "ativo": "" }, { "code": "0087", "name": "Adhem.Barros", "full": "0087 - SP-GUA-Adhem.Barros", "uf": "SP", "city": "Guaruja", "addr": "Av. Adhemar de Barros, 1.255", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Interior Litoral", "truck": "", "ativo": "" }, { "code": "0088", "name": "S.PátioLimeir", "full": "0088 - SP-LIM-S.PátioLimeir", "uf": "SP", "city": "Limeira", "addr": "Rua Carlos Gomes, 1.321- Lj.336 - Centro", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Limeira", "truck": "", "ativo": "" }, { "code": "0090", "name": "S.Garten", "full": "0090 - SC-JOI-S.Garten", "uf": "SC", "city": "Joinville", "addr": "Av. Rolf Wiest, 333 - Bom Retiro", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Santa Catarina", "truck": "", "ativo": "" }, { "code": "0091", "name": "Alvarenga", "full": "0091 - SP-SPO-Alvarenga", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Alvarenga, 1040", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Capital Oeste", "truck": "Truck", "ativo": "PQ 2 ALTO" }, { "code": "0092", "name": "S.Boulevard", "full": "0092 - MG-BHZ-S.Boulevard", "uf": "MG", "city": "Belo Horizonte", "addr": "Av. dos Andradas, 3000 - Loja 03/04", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Minas Gerais BH", "truck": "", "ativo": "" }, { "code": "0093", "name": "V.Formosa", "full": "0093 - SP-SPO-V.Formosa", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Doutor Eduardo Cotching, 841", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Leste 1", "truck": "Toco", "ativo": "PQ 2 ALTO" }, { "code": "0094", "name": "S.ParkBarueri", "full": "0094 - SP-BAR-S.ParkBarueri", "uf": "SP", "city": "Barueri", "addr": "R Gal Div Pedro Rodrigues da Silva, 400, 06440-180", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "Grande São Paulo Barueri", "truck": "", "ativo": "" }, { "code": "0095", "name": "S.JardimNorte", "full": "0095 - MG-JDF-S.JardimNorte", "uf": "MG", "city": "Juiz de Fora", "addr": "Av. Brasil, 6.345", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Minas Gerais Juiz", "truck": "", "ativo": "" }, { "code": "0096", "name": "S.Iguatemi", "full": "0096 - SP-BAR-S.Iguatemi", "uf": "SP", "city": "Barueri", "addr": "Alameda Rio Negro, 110 - Barueri", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "Grande São Paulo Barueri", "truck": "", "ativo": "" }, { "code": "0098", "name": "S.Tivoli", "full": "0098 - SP-STB-S.Tivoli", "uf": "SP", "city": "Santa Bárbara D'Oeste", "addr": "R. do Ósmio, 699", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Limeira", "truck": "", "ativo": "" }, { "code": "0099", "name": "Jundiaí", "full": "0099 - SP-JUN-Jundiaí", "uf": "SP", "city": "Jundiai", "addr": "Av. Jundiai, 1.465 - Jardim Ana Maria", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Interior Jundiai", "truck": "", "ativo": "" }, { "code": "0100", "name": "Sao Carlos", "full": "0100 - SP-SCA-Sao Carlos", "uf": "SP", "city": "Sao Carlos", "addr": "R. Belarmino Indalécio de Souza, 79", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Araçatuba", "truck": "", "ativo": "" }, { "code": "0102", "name": "S.Boulevard", "full": "0102 - RJ-SGO-S.Boulevard", "uf": "RJ", "city": "São Gonçalo", "addr": "Av. Presidente Kennedy, 425", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro trecho B", "truck": "", "ativo": "" }, { "code": "0103", "name": "S.Carioca", "full": "0103 - RJ-RIO-S.Carioca", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Av. Vicente de Carvalho, 909 - Loja 102", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Norte", "truck": "", "ativo": "" }, { "code": "0105", "name": "S.Riomar", "full": "0105 - PE-REC-S.Riomar", "uf": "PE", "city": "Recife", "addr": "Av Republica do Libano, S/N - Pina", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Pernanbuco", "truck": "", "ativo": "" }, { "code": "0106", "name": "S.Palladium", "full": "0106 - PR-PTG-S.Palladium", "uf": "PR", "city": "Ponta Grossa", "addr": "R. Ermelino Leão, 703 - Olarias", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Parana CTB", "truck": "", "ativo": "" }, { "code": "0107", "name": "S.Center", "full": "0107 - MG-UBL-S.Center", "uf": "MG", "city": "Uberlandia", "addr": "Av. João Naves de Avila, 1.331 - Loja 1.270", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Minas Gerais Uberlandia", "truck": "", "ativo": "" }, { "code": "0108", "name": "S.ParkLagos", "full": "0108 - RJ-CBF-S.ParkLagos", "uf": "RJ", "city": "Cabo Frio", "addr": "R. Henrique Terra, 1.700 - Mega Loja 04 - Piso 01", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro Trecho C", "truck": "", "ativo": "" }, { "code": "0109", "name": "S.BelaVista", "full": "0109 - BA-SAL-S.BelaVista", "uf": "BA", "city": "Salvador", "addr": "Al. Euvaldo Luz, 92 - L04.1 - Horto B.Vista", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Bahia", "truck": "", "ativo": "" }, { "code": "0110", "name": "S.Londrina", "full": "0110 - PR-LON-S.Londrina", "uf": "PR", "city": "Londrina", "addr": "Av. Theodoro Victorelli, 150 - Piso Térreo", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "Parana Lon", "truck": "", "ativo": "" }, { "code": "0111", "name": "S.Itaquera", "full": "0111 - SP-SPO-S.Itaquera", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Jose Pinheiro Borges, S/N", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Leste 2", "truck": "Truck", "ativo": "ROLL GRANDE" }, { "code": "0112", "name": "MariaAntônia", "full": "0112 - SP-SPO-MariaAntônia", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Maria Antonia, 108 - Vila Buarque", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Capital Central", "truck": "Toco", "ativo": "PQ 2 ALTO" }, { "code": "0113", "name": "S.Uberaba", "full": "0113 - MG-UBE-S.Uberaba", "uf": "MG", "city": "Uberaba", "addr": "Av. Santa Beatriz da Silva, 1570/1576/1582", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Minas Gerais Uberlandia", "truck": "", "ativo": "" }, { "code": "0114", "name": "S.Iguatemi", "full": "0114 - SP-RIB-S.Iguatemi", "uf": "SP", "city": "Ribeirao Preto", "addr": "R. Luiz Eduardo Toledo Prado, 900", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Ribeirão", "truck": "", "ativo": "" }, { "code": "0115", "name": "S.DCaxias", "full": "0115 - RJ-DCX-S.DCaxias", "uf": "RJ", "city": "Duque de Caxias", "addr": "Rod. Washington Luiz, 2895 - Loja 201I", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro trecho B", "truck": "", "ativo": "" }, { "code": "0116", "name": "Copacabana", "full": "0116 - RJ-RIO-Copacabana", "uf": "RJ", "city": "Rio de Janeiro", "addr": "R. Barata Ribeiro, 181", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Sul", "truck": "", "ativo": "" }, { "code": "0117", "name": "S.Sulacap", "full": "0117 - RJ-RIO-S.Sulacap", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Av. Marechal Fontenele, 3.545", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Oeste", "truck": "", "ativo": "" }, { "code": "0118", "name": "S.Esplanada", "full": "0118 - SP-SOR-S.Esplanada", "uf": "SP", "city": "Votorantim", "addr": "Av. Gisele Constantino, 1.850 - Lj 229A", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Interior Sorocaba", "truck": "", "ativo": "" }, { "code": "0119", "name": "S.ABC", "full": "0119 - SP-STA-S.ABC", "uf": "SP", "city": "Santo Andre", "addr": "Av. Pereira Barreto, 42 - Piso Loft", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "Grande São Paulo ABC 2", "truck": "", "ativo": "" }, { "code": "0120", "name": "S.Taguat", "full": "0120 - DF-TAG-S.Taguat", "uf": "DF", "city": "Brasilia", "addr": "QS 01 Rua 210, Lote 40", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Brasilia", "truck": "", "ativo": "" }, { "code": "0121", "name": "S.Goytacazes", "full": "0121 - RJ-GOY-S.Goytacazes", "uf": "RJ", "city": "Campos dos Goytacazes", "addr": "Av. Dr. Silvio Bastos Tavares, 316/338 - Lj. B/C/D", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro Trecho C", "truck": "", "ativo": "" }, { "code": "0122", "name": "S.Metrop.Barr", "full": "0122 - RJ-RIO-S.Metrop.Barr", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Av. Abelardo Bueno, 1300 - Loja 1", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro Barra", "truck": "", "ativo": "" }, { "code": "0123", "name": "BarroPreto", "full": "0123 - MG-BHZ-BarroPreto", "uf": "MG", "city": "Belo Horizonte", "addr": "Av. do Contorno, 10.623 - Barro Preto", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Minas Gerais BH", "truck": "", "ativo": "" }, { "code": "0124", "name": "Giov.Gronchi", "full": "0124 - SP-SPO-Giov.Gronchi", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Giovanni Gronchi, 6333 - V.Andrade", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Capital Sul 3", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0125", "name": "P.Faccini", "full": "0125 - SP-GRU-P.Faccini", "uf": "SP", "city": "Guarulhos", "addr": "Av. Paulo Faccini, 1107 - Macedo", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "Grande São Paulo Guarulhos", "truck": "", "ativo": "" }, { "code": "0126", "name": "S.CampoGrande", "full": "0126 - RJ-RIO-S.CampoGrande", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Estrada do Monteiro, 1200 - Loja 203P", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Oeste", "truck": "", "ativo": "" }, { "code": "0127", "name": "FashionMall", "full": "0127 - RJ-RIO-FashionMall", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Estrada da Gavea , 899 - LOJA 110", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro Sul", "truck": "", "ativo": "" }, { "code": "0128", "name": "Morumbi", "full": "0128 - SP-SPO-Morumbi", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Morumbi, 6.843", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Sul 2", "truck": "Truck", "ativo": "PQ 2 ALTO" }, { "code": "0130", "name": "S.Tiete", "full": "0130 - SP-SPO-S.Tiete", "uf": "SP", "city": "Sao Paulo", "addr": "Av Raimundo Pereira de Magalhaes, 1465", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Capital Norte Oeste", "truck": "Truck", "ativo": "ROLL GRANDE" }, { "code": "0131", "name": "S.Iguatemi", "full": "0131 - SP-SJR-S.Iguatemi", "uf": "SP", "city": "Sao Jose do Rio Preto", "addr": "Av. Pres. Juscelino Kubitschek de Oliveira, 5.000", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior São José", "truck": "", "ativo": "" }, { "code": "0132", "name": "S.Contagem", "full": "0132 - MG-CON-S.Contagem", "uf": "MG", "city": "Contagem", "addr": "Av. Severino Ballesteros Rodrigues, 850", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Minas Gerais BH", "truck": "", "ativo": "" }, { "code": "0133", "name": "S.Americas", "full": "0133 - RJ-RIO-S.Americas", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Av. das Américas, 15.500 - Loja 170 B", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro Oeste", "truck": "", "ativo": "" }, { "code": "0134", "name": "S.Independ", "full": "0134 - MG-JDF-S.Independ", "uf": "MG", "city": "Juiz de Fora", "addr": "Av. Pres. Itamar Franco, 3.600 - São Mateus", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Minas Gerais Juiz", "truck": "", "ativo": "" }, { "code": "0136", "name": "PedroFioreti", "full": "0136 - SP-OSA-PedroFioreti", "uf": "SP", "city": "Osasco", "addr": "Rua Pedro Fioretti, 479 - Centro", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "Grande São Paulo Osasco", "truck": "", "ativo": "" }, { "code": "0137", "name": "S.Vila Velha", "full": "0137 - ES-VIV-S.Vila Velha", "uf": "ES", "city": "Vila Velha", "addr": "Av. Luciano da Neves, 2.418", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Espirito Santo", "truck": "", "ativo": "" }, { "code": "0138", "name": "S.VilaOlimpia", "full": "0138 - SP-SPO-S.VilaOlimpia", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Olimpíadas, 360 - 3º piso", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Sul 2", "truck": "Truck", "ativo": "GD 2 ALTO" }, { "code": "0139", "name": "Araraquara", "full": "0139 - SP-ARA-Araraquara", "uf": "SP", "city": "Araraquara", "addr": "Av. Duque de Caxias, 515 - Centro", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Araçatuba", "truck": "", "ativo": "" }, { "code": "0140", "name": "S.Continente", "full": "0140 - SC-FLO-S.Continente", "uf": "SC", "city": "Sao Jose", "addr": "Rodovia BR 101 - KM211 - Mega Loja 05", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Santa Catarina", "truck": "", "ativo": "" }, { "code": "0141", "name": "S.Neumarkt", "full": "0141 - SC-BLU-S.Neumarkt", "uf": "SC", "city": "Blumenau", "addr": "Rua Sete de Setembro, 1.213", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Santa Catarina", "truck": "", "ativo": "" }, { "code": "0142", "name": "S.Norte", "full": "0142 - RJ-RIO-S.Norte", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Av. Dom Helder Camara, 5.474", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Norte", "truck": "", "ativo": "" }, { "code": "0143", "name": "Camboriú", "full": "0143 - SC-BCA-Camboriú", "uf": "SC", "city": "Balneario Camboriu", "addr": "Av. do Estado Dalmo Vieira, 898", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Santa Catarina", "truck": "", "ativo": "" }, { "code": "0145", "name": "S.Taubaté", "full": "0145 - SP-TAU-S.Taubaté", "uf": "SP", "city": "Taubate", "addr": "Av. Charles Scnneider, 1700 - Loja P1 / P2", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Interior Taubaté", "truck": "", "ativo": "" }, { "code": "0146", "name": "S.ID", "full": "0146 - DF-BRA-S.ID", "uf": "DF", "city": "Brasilia", "addr": "ST SCN QD 06 Conjunto A - Edif. Venancio 3000 Asa", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Brasilia", "truck": "", "ativo": "" }, { "code": "0147", "name": "S.Riomar", "full": "0147 - CE-FOR-S.Riomar", "uf": "CE", "city": "Fortaleza", "addr": "R. Desembargador Lauro Nogueira, 1500", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Ceará", "truck": "", "ativo": "" }, { "code": "0148", "name": "S.PraçaNova", "full": "0148 - SP-ARA-S.PraçaNova", "uf": "SP", "city": "Araçatuba", "addr": "Rod Marechal Rondon, Km 534,5 Lj 227", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior São José", "truck": "", "ativo": "" }, { "code": "0149", "name": "S.Del Rey", "full": "0149 - MG-BHZ-S.Del Rey", "uf": "MG", "city": "Belo Horizonte", "addr": "Av. Presidente Carlos Luz, 3001", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Minas Gerais BH", "truck": "", "ativo": "" }, { "code": "0150", "name": "S.VRedonda", "full": "0150 - RJ-VRD-S.VRedonda", "uf": "RJ", "city": "Volta Redonda", "addr": "Rod. dos Metalúrgicos 1.189 - Mega loja 02", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro Trecho A", "truck": "", "ativo": "" }, { "code": "0151", "name": "AvDePinedo", "full": "0151 - SP-SPO-AvDePinedo", "uf": "SP", "city": "Sao Paulo", "addr": "Av. de Pinedo, 215", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Sul 3", "truck": "Truck", "ativo": "PQ 2 ALTO" }, { "code": "0152", "name": "S.Iguatemi", "full": "0152 - CE-FOR-S.Iguatemi", "uf": "CE", "city": "Fortaleza", "addr": "Av. Washington Soares, 85 - Loja 797", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Ceará", "truck": "", "ativo": "" }, { "code": "0153", "name": "S.Piratas", "full": "0153 - RJ-ANG-S.Piratas", "uf": "RJ", "city": "Angra dos Reis", "addr": "Estrada dos Marinas 91 - Ljs. 248 a 252", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Trecho A", "truck": "", "ativo": "" }, { "code": "0155", "name": "Pres.Prudente", "full": "0155 - SP-PRU-Pres.Prudente", "uf": "SP", "city": "Presidente Prudente", "addr": "R. Comendador João Pereti, 540 - Lj. 5", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Prudente", "truck": "", "ativo": "" }, { "code": "0156", "name": "BarraShopping", "full": "0156 - RJ-RIO-BarraShopping", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Avenida das Américas, 4.666", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro Barra", "truck": "", "ativo": "" }, { "code": "0157", "name": "S.Iguatemi", "full": "0157 - RS-POA-S.Iguatemi", "uf": "RS", "city": "Porto Alegre", "addr": "Av. João Wallig, 1.800", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Rio Grande do Sul", "truck": "", "ativo": "" }, { "code": "0158", "name": "S.Recife", "full": "0158 - PE-REC-S.Recife", "uf": "PE", "city": "Recife", "addr": "Rua Padre Carapuceiro, 777", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Pernanbuco", "truck": "", "ativo": "" }, { "code": "0159", "name": "S.BarraSul", "full": "0159 - RS-POA-S.BarraSul", "uf": "RS", "city": "Porto Alegre", "addr": "Av. Diário de Notícias, 300", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Rio Grande do Sul", "truck": "", "ativo": "" }, { "code": "0161", "name": "S.NovaIguaçu", "full": "0161 - RJ-NIG-S.NovaIguaçu", "uf": "RJ", "city": "Nova Iguaçu", "addr": "Av. Abilio Augusto Távora, 1.111", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Trecho A", "truck": "", "ativo": "" }, { "code": "0162", "name": "AvPaulista", "full": "0162 - SP-SPO-AvPaulista", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Paulista, 2421", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Capital Central Paulista", "truck": "Toco", "ativo": "PQ 2 ALTO" }, { "code": "0163", "name": "S.West", "full": "0163 - RJ-RIO-S.West", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Estrada do Mendanha, 555 - Loja 102A", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Oeste", "truck": "", "ativo": "" }, { "code": "0164", "name": "S.Bahia", "full": "0164 - BA-SAL-S.Bahia", "uf": "BA", "city": "Salvador", "addr": "Av. Tancredo Neves, 148 - Loja 001/W1", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Bahia", "truck": "", "ativo": "" }, { "code": "0165", "name": "S.Golden", "full": "0165 - SP-SBC-S.Golden", "uf": "SP", "city": "Sao Bernardo do Campo", "addr": "Av. Kennedy, 700 - 2o. Piso", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "Grande São Paulo ABC 1", "truck": "", "ativo": "" }, { "code": "0166", "name": "S.Kennedy", "full": "0166 - CE-FOR-S.Kennedy", "uf": "CE", "city": "Fortaleza", "addr": "Av. Sargento Hermínio Sampaio, 3000", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Ceará", "truck": "", "ativo": "" }, { "code": "0167", "name": "S.Buritis", "full": "0167 - GO-GOI-S.Buritis", "uf": "GO", "city": "Aparecida de Goiania", "addr": "Av. Rio Verde, 102/104 - Loja 385", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Goias", "truck": "", "ativo": "" }, { "code": "0168", "name": "S.Caruaru", "full": "0168 - PE-CAR-S.Caruaru", "uf": "PE", "city": "Caruaru", "addr": "Av. Adjar da Silva Casé, 800", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Pernanbuco", "truck": "", "ativo": "" }, { "code": "0169", "name": "S.CaxiasSul", "full": "0169 - RS-CXS-S.CaxiasSul", "uf": "RS", "city": "Caxias do Sul", "addr": "Rod. RSC 453, 2780, Km 3,5", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Rio Grande do Sul", "truck": "", "ativo": "" }, { "code": "0170", "name": "S.Venancio", "full": "0170 - DF-BRA-S.Venancio", "uf": "DF", "city": "Brasilia", "addr": "SCS Quadra 8, S/N - Asa Sul", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Brasilia", "truck": "", "ativo": "" }, { "code": "0171", "name": "S.Via Brasil", "full": "0171 - RJ-RIO-S.Via Brasil", "uf": "RJ", "city": "Rio de Janeiro", "addr": "R. Itapera, 500 - Irajá", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "", "truck": "", "ativo": "" }, { "code": "0172", "name": "S.CenterValle", "full": "0172 - SP-SJC-S.CenterValle", "uf": "SP", "city": "Sao Jose dos Campos", "addr": "Av. Dep. Benedito Matarazzo, 9403", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Interior Taubaté", "truck": "", "ativo": "" }, { "code": "0174", "name": "S.Pamplona", "full": "0174 - SP-SPO-S.Pamplona", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Pamplona, 1704 - Jd Paulista", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Central Paulista", "truck": "Toco", "ativo": "PQ 2 ALTO" }, { "code": "0175", "name": "S.Itu", "full": "0175 - SP-ITU-S.Itu", "uf": "SP", "city": "Itu", "addr": "Av. Dr. Ermelino Maffei, 1199", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Interior Indaiatuba", "truck": "", "ativo": "" }, { "code": "0176", "name": "S.Pantanal", "full": "0176 - MT-CGB-S.Pantanal", "uf": "MT", "city": "Cuiaba", "addr": "Av. Historiador Rubens de Mendonça, 3.300 - Piso 2", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Mato Grosso", "truck": "", "ativo": "" }, { "code": "0178", "name": "S.Moxuara", "full": "0178 - ES-CAR-S.Moxuara", "uf": "ES", "city": "Cariacica", "addr": "Av. Mário Gurgel, 5353 - São Francisco", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Espirito Santo", "truck": "", "ativo": "" }, { "code": "0179", "name": "S.Salvador", "full": "0179 - BA-SAL-S.Salvador", "uf": "BA", "city": "Salvador", "addr": "Av. Tancredo Neves, 3133", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Bahia", "truck": "", "ativo": "" }, { "code": "0181", "name": "S.Natal", "full": "0181 - RN-NAT-S.Natal", "uf": "RN", "city": "Natal", "addr": "Av. Sen. Salgado Filho, 2234 - Loja 232", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Nordeste", "truck": "", "ativo": "" }, { "code": "0182", "name": "S.Midway", "full": "0182 - RN-NAT-S.Midway", "uf": "RN", "city": "Natal", "addr": "Av. Bernardo Vieira, 3775 - Loja 153", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "", "truck": "", "ativo": "" }, { "code": "0183", "name": "S.Aracaju", "full": "0183 - SE-ARA-S.Aracaju", "uf": "SE", "city": "Aracaju", "addr": "Av. Delmiro Gouveia, 400", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Nordeste", "truck": "", "ativo": "" }, { "code": "0184", "name": "S.MogiBuriti", "full": "0184 - SP-MOG-S.MogiBuriti", "uf": "SP", "city": "Mogi Guaçu", "addr": "R. Francisco Franco de Godoy Bueno, 801", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Campinas", "truck": "", "ativo": "" }, { "code": "0185", "name": "S.Tacaruna", "full": "0185 - PE-REC-S.Tacaruna", "uf": "PE", "city": "Recife", "addr": "Av. Gov. Agamenon Magalhães, 153", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Pernanbuco", "truck": "", "ativo": "" }, { "code": "0186", "name": "S.Vitória", "full": "0186 - ES-VIT-S.Vitória", "uf": "ES", "city": "Vitoria", "addr": "Av. Americo Buaiz, 200 - Loja 247", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Espirito Santo", "truck": "", "ativo": "" }, { "code": "0187", "name": "S.Canoas", "full": "0187 - RS-CAN-S.Canoas", "uf": "RS", "city": "Canoas", "addr": "Av. Farroupilha, 4545", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Rio Grande do Sul", "truck": "", "ativo": "" }, { "code": "0188", "name": "S.Catuai", "full": "0188 - PR-LON-S.Catuai", "uf": "PR", "city": "Londrina", "addr": "Rod. Celso Garcia CID KM 377, 5.600", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "Parana Lon", "truck": "", "ativo": "" }, { "code": "0189", "name": "S.Maia", "full": "0189 - SP-GRU-S.Maia", "uf": "SP", "city": "Guarulhos", "addr": "Av. Bartolomeu de Carlos, 230", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "Grande São Paulo Guarulhos", "truck": "", "ativo": "" }, { "code": "0190", "name": "W.Luis", "full": "0190 - SP-SPO-W.Luis", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Washington Luís, 4937 - Sto Amaro", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Sul 4", "truck": "Truck", "ativo": "PQ 2 ALTO" }, { "code": "0191", "name": "S.Catuai", "full": "0191 - PR-MAR-S.Catuai", "uf": "PR", "city": "Maringa", "addr": "Av. Colombo, 9161 - Pq Ind Bandeirante", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "Parana Lon", "truck": "", "ativo": "" }, { "code": "0192", "name": "S.Olinda", "full": "0192 - PE-OLI-S.Olinda", "uf": "PE", "city": "Olinda", "addr": "Rua Eduardo de Moraes, s/n - Piso L1", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Pernanbuco", "truck": "", "ativo": "" }, { "code": "0193", "name": "S.PatioMaceio", "full": "0193 - AL-MAC-S.PatioMaceio", "uf": "AL", "city": "Maceio", "addr": "Av. Menino Marcelo, 3800 - Cidade Universitaria", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Nordeste", "truck": "", "ativo": "" }, { "code": "0194", "name": "C.Grande", "full": "0194 - PB-CGR-C.Grande", "uf": "PB", "city": "Campina Grande", "addr": "Av. Prefeito Severino Cabral, 1.050", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Nordeste", "truck": "", "ativo": "" }, { "code": "0195", "name": "F.Coutinho", "full": "0195 - SP-SPO-F.Coutinho", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Fradique Coutinho, 496", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Capital Oeste", "truck": "Truck", "ativo": "PQ 2 ALTO" }, { "code": "0196", "name": "RicardoJafet", "full": "0196 - SP-SPO-RicardoJafet", "uf": "SP", "city": "Sao Paulo", "addr": "Av Dr. Ricardo Jafet, 1.501", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Sul 1", "truck": "Truck", "ativo": "PQ 2 ALTO" }, { "code": "0197", "name": "Mangabeira", "full": "0197 - PB-JPA-Mangabeira", "uf": "PB", "city": "Joao Pessoa", "addr": "Av. Hílton Souto Maior, S/N - Mangabeira", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Nordeste", "truck": "", "ativo": "" }, { "code": "0198", "name": "Manaira", "full": "0198 - PB-JPA-Manaira", "uf": "PB", "city": "Joao Pessoa", "addr": "Rua Manoel Arruda Cavalcanti, 805", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Nordeste", "truck": "", "ativo": "" }, { "code": "0199", "name": "JabaquaraBra", "full": "0199 - SP-SPO-JabaquaraBra", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Jabaquara, 1.182", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Sul 1", "truck": "Toco", "ativo": "GD 3 ALTO" }, { "code": "0200", "name": "RadialMooca", "full": "0200 - SP-SPO-RadialMooca", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Alcântara Machado, 400", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Leste 1", "truck": "Toco", "ativo": "PQ 2 ALTO" }, { "code": "0201", "name": "S.Cuiaba", "full": "0201 - MT-CGB-S.Cuiaba", "uf": "MT", "city": "Cuiaba", "addr": "Av. Miguel Sutil, 9300 - Duque de Caxias", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Mato Grosso", "truck": "", "ativo": "" }, { "code": "0202", "name": "S.PortoVelho", "full": "0202 - RO-PVH-S.PortoVelho", "uf": "RO", "city": "Porto Velho", "addr": "Av. Rio Madeira, 3288 - Flodoaldo Pontes Pinto", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Rondônia", "truck": "", "ativo": "" }, { "code": "0203", "name": "Av.Rudge", "full": "0203 - SP-SPO-Av.Rudge", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Rudge, 1.001 - Bom Retiro", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Capital Central", "truck": "Toco", "ativo": "PQ 3 ALTO" }, { "code": "0204", "name": "S.JoqueiNorth", "full": "0204 - CE-FOR-S.JoqueiNorth", "uf": "CE", "city": "Fortaleza", "addr": "Av. Lineu Machado, 419 - Jóquei Clube", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Ceará", "truck": "", "ativo": "" }, { "code": "0206", "name": "S.Palladium", "full": "0206 - PR-CTB-S.Palladium", "uf": "PR", "city": "Curitiba", "addr": "Av. Pres. Kennedy, 4121 - Portão", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Parana CTB", "truck": "", "ativo": "" }, { "code": "0207", "name": "GoianiaBueno", "full": "0207 - GO-GOI-GoianiaBueno", "uf": "GO", "city": "Goiania", "addr": "Av. T63, 841 - Quadra 148 - Lote 01 e 02", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Goias", "truck": "", "ativo": "" }, { "code": "0208", "name": "S.Ilha", "full": "0208 - MA-SLZ-S.Ilha", "uf": "MA", "city": "Sao Luis", "addr": "Av. Daniel de La Touche , 987 - loja 313", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Maranhão", "truck": "", "ativo": "" }, { "code": "0209", "name": "S.PFundo", "full": "0209 - RS-PFD-S.PFundo", "uf": "RS", "city": "Passo Fundo", "addr": "Av. Presidente Vargas, 1610", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Rio Grande do Sul", "truck": "", "ativo": "" }, { "code": "0210", "name": "S.V.Conquista", "full": "0210 - BA-VDC-S.V.Conquista", "uf": "BA", "city": "Vitoria da Conquista", "addr": "Av. Olivia Flores, 2.500 - Loja 1083", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Bahia", "truck": "", "ativo": "" }, { "code": "0211", "name": "S.Paralela", "full": "0211 - BA-SAL-S.Paralela", "uf": "BA", "city": "Salvador", "addr": "Av. Luis Viana Filho, 8.544", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Bahia", "truck": "", "ativo": "" }, { "code": "0212", "name": "S.FCaneca", "full": "0212 - SP-SPO-S.FCaneca", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Frei Caneca, 569 - Consolação", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Capital Central Paulista", "truck": "Toco", "ativo": "PQ 2 ALTO" }, { "code": "0213", "name": "S.PrudenShop", "full": "0213 - SP-PRU-S.PrudenShop", "uf": "SP", "city": "Presidente Prudente", "addr": "Av. Manoel Goulart, 2.400", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Prudente", "truck": "", "ativo": "" }, { "code": "0214", "name": "Pq.ShopMaceio", "full": "0214 - AL-MAC-Pq.ShopMaceio", "uf": "AL", "city": "Maceio", "addr": "Av. Comendador Gustavo Paiva, 5.945", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Nordeste", "truck": "", "ativo": "" }, { "code": "0215", "name": "Tirol", "full": "0215 - RN-NAT-Tirol", "uf": "RN", "city": "Natal", "addr": "Av. Senador Salgado Filho, 1760", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Nordeste", "truck": "", "ativo": "" }, { "code": "0216", "name": "S.Pelotas", "full": "0216 - RS-PLT-S.Pelotas", "uf": "RS", "city": "Pelotas", "addr": "Av. Ferreira Viana, 1.526 - Loja 27B", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Rio Grande do Sul", "truck": "", "ativo": "" }, { "code": "0217", "name": "TijucaExtra", "full": "0217 - RJ-RIO-TijucaExtra", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Rua José Higino, 115", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Norte", "truck": "", "ativo": "" }, { "code": "0218", "name": "S.Jacarepagua", "full": "0218 - RJ-RIO-S.Jacarepagua", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Estrada de Jacarepaguá 6069 - loja 104 B / 105 A", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro Barra", "truck": "", "ativo": "" }, { "code": "0219", "name": "S.Jockey", "full": "0219 - PR-CTB-S.Jockey", "uf": "PR", "city": "Curitiba", "addr": "Av. Victor Ferreira do Amaral, 2633 - Loja L1074", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Parana CTB", "truck": "", "ativo": "" }, { "code": "0220", "name": "S.Mogi", "full": "0220 - SP-MOG-S.Mogi", "uf": "SP", "city": "Mogi das Cruzes", "addr": "Av Ver. Narciso Yague Guimarães, 1001", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "Grande São Paulo Guarulhos", "truck": "", "ativo": "" }, { "code": "0221", "name": "S.GrãoPará", "full": "0221 - PA-BEL-S.GrãoPará", "uf": "PA", "city": "Belem", "addr": "Rod. dos trabalhadores, s/n - Parque Verde", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Pará", "truck": "", "ativo": "" }, { "code": "0222", "name": "S.MacaePlaza", "full": "0222 - RJ-MAC-S.MacaePlaza", "uf": "RJ", "city": "Macae", "addr": "Av. Aluízio da Silva Gomes, 800", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro Trecho C", "truck": "", "ativo": "" }, { "code": "0223", "name": "S.RioPoty", "full": "0223 - PI-TER-S.RioPoty", "uf": "PI", "city": "Teresina", "addr": "Av. Marechal Castelo Branco, 911", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Pernanbuco", "truck": "", "ativo": "" }, { "code": "0224", "name": "S.Sumare", "full": "0224 - SP-SUM-S.Sumare", "uf": "SP", "city": "Sumare", "addr": "Av. Rebouças, 3.400 - Loja L34", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Limeira", "truck": "", "ativo": "" }, { "code": "0225", "name": "S.Ananindeua", "full": "0225 - PA-ANA-S.Ananindeua", "uf": "PA", "city": "Ananindeua", "addr": "Rod. BR-316, Km 4, 4500 - Coqueiro", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Pará", "truck": "", "ativo": "" }, { "code": "0226", "name": "S.Jequitiba", "full": "0226 - BA-ITA-S.Jequitiba", "uf": "BA", "city": "Itabuna", "addr": "Av. Aziz Maron, s/n", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Bahia", "truck": "", "ativo": "" }, { "code": "0227", "name": "Gal.Campinas", "full": "0227 - SP-CAM-Gal.Campinas", "uf": "SP", "city": "Campinas", "addr": "Av. Bailarina Selma Parada, 505", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Interior Campinas", "truck": "", "ativo": "" }, { "code": "0228", "name": "S.Anapolis", "full": "0228 - GO-ANA-S.Anapolis", "uf": "GO", "city": "Anapolis", "addr": "Av. Brasil, 505 - Loja 08A", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Goias", "truck": "", "ativo": "" }, { "code": "0230", "name": "JundiaíCentro", "full": "0230 - SP-JUN-JundiaíCentro", "uf": "SP", "city": "Jundiai", "addr": "Av. Antonio Frederico Ozanan, 2601", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Interior Jundiai", "truck": "", "ativo": "" }, { "code": "0231", "name": "S.Iguatemi", "full": "0231 - DF-BRA-S.Iguatemi", "uf": "DF", "city": "Brasilia", "addr": "ST SHIN CA 04 Bloco A Loja, 183", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Brasilia", "truck": "", "ativo": "" }, { "code": "0232", "name": "S.JdAracaju", "full": "0232 - SE-ARA-S.JdAracaju", "uf": "SE", "city": "Aracaju", "addr": "Av. Ministro Geraldo Barreto Sobral, 215", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Nordeste", "truck": "", "ativo": "" }, { "code": "0234", "name": "S.RioAnil", "full": "0234 - MA-SLZ-S.RioAnil", "uf": "MA", "city": "Sao Luis", "addr": "Av.São Luis Rei de Franca, 8 - Turu", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Maranhão", "truck": "", "ativo": "" }, { "code": "0236", "name": "AvAnaCosta", "full": "0236 - SP-SAN-AvAnaCosta", "uf": "SP", "city": "Santos", "addr": "Av. Ana Costa, 64 - Loja: 66 e 68", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Interior Litoral", "truck": "", "ativo": "" }, { "code": "0238", "name": "Pq.ShopBahia", "full": "0238 - BA-LFR-Pq.ShopBahia", "uf": "BA", "city": "Lauro de Freitas", "addr": "Av Santos Dumont, 4360 - Piso L1 Loja 1010", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Bahia", "truck": "", "ativo": "" }, { "code": "0239", "name": "S.Itaguaçu", "full": "0239 - SC-SJO-S.Itaguaçu", "uf": "SC", "city": "Sao Jose", "addr": "Rua Gerôncio Thives,1.079", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Santa Catarina", "truck": "", "ativo": "" }, { "code": "0241", "name": "S.Chapeco", "full": "0241 - SC-CHA-S.Chapeco", "uf": "SC", "city": "Chapeco", "addr": "Av. Fernando Machado, 4000 D - Líder", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Santa Catarina", "truck": "", "ativo": "" }, { "code": "0242", "name": "Assis", "full": "0242 - SP-ASS-Assis", "uf": "SP", "city": "Assis", "addr": "Rua Floriano Peixoto, 145, Centro", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Prudente", "truck": "", "ativo": "" }, { "code": "0243", "name": "MateoBei", "full": "0243 - SP-SPO-MateoBei", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Mateo Bei, 1600 - São Mateus", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Leste 2", "truck": "Truck", "ativo": "PQ 3 ALTO" }, { "code": "0244", "name": "S.Estação", "full": "0244 - MG-BHZ-S.Estação", "uf": "MG", "city": "Belo Horizonte", "addr": "Av. Cristiano Machado, 11.833 - Loja 1007", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Minas Gerais BH", "truck": "", "ativo": "" }, { "code": "0245", "name": "S.Campinas", "full": "0245 - SP-CAM-S.Campinas", "uf": "SP", "city": "Campinas", "addr": "Rua Jacy Teixeira Camargo, 940", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Interior Campinas", "truck": "", "ativo": "" }, { "code": "0246", "name": "Botafogo", "full": "0246 - RJ-RIO-Botafogo", "uf": "RJ", "city": "Rio de Janeiro", "addr": "R. Voluntários da Pátria, 264", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Sul", "truck": "", "ativo": "" }];
const DAYS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const DS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const H0 = 5,
    NH = 18,
    NC = 6 * NH;
const hh = h => String(H0 + h).padStart(2, '0') + 'h';
const faixa = h => `${hh(h)}–${String(H0 + h + 1).padStart(2,'0')}h`;
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const pt = (a, b) => a.localeCompare(b, 'pt');
const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
const byCode = Object.fromEntries(STORES.map(s => [s.code, s]));
const REGS = [...new Set(STORES.map(s => s.reg))].sort(pt);
const UFS = [...new Set(STORES.map(s => s.uf))].sort(pt);
const regBySlug = Object.fromEntries(STORES.map(s => [s.slug, s.reg]));
const ICON_OK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
const ICON_X = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';
const closeBtn = () => `<button class="md-close" id="mdClose" aria-label="Fechar (Esc)">${ICON_X}<span>Fechar</span><kbd>Esc</kbd></button>`;

/* ---------- Respostas (planilha) ---------- */
let RESP = {},
    RSTATE = FORM_ENDPOINT ? 'loading' : 'off',
    RAT = '',
    DEMO = false;

function parseResp(lojas) {
    const out = {};
    Object.entries(lojas || {}).forEach(([code, l]) => {
        if (!Array.isArray(l.d) || l.d.length !== 6) return;
        const reasons = (l.m || []).map(([txt, keys]) => ({ txt: String(txt), keys }));
        const rOf = {};
        reasons.forEach((r, i) => r.keys.forEach(k => rOf[k] = i));
        if (!byCode[String(code).padStart(4, '0')]) return;
        out[String(code).padStart(4, '0')] = { envio: l.envio, quando: l.quando, nome: l.nome, cargo: l.cargo, d: l.d.map(String), reasons, rOf };
    });
    return out;
}
async function loadResp() {
    if (!FORM_ENDPOINT) { RSTATE = 'off';
        refreshAll(); return; }
    RSTATE = 'loading';
    dstat();
    try {
        const r = await fetch(FORM_ENDPOINT + '?acao=respostas&_=' + Date.now());
        const j = await r.json();
        if (!j.ok) throw new Error(j.erro || 'erro');
        RESP = parseResp(j.lojas);
        DEMO = false;
        RSTATE = 'ok';
        RAT = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    } catch (e) { RSTATE = 'err'; }
    refreshAll();
}
// Dados de exemplo, só para ver o painel antes das respostas chegarem
const DEMO_TXT = ['Shopping só libera a doca depois das 07h.', 'Equipe ainda não chegou nesse horário.', 'Rua residencial: barulho à noite gera reclamação dos vizinhos.', 'Horário de almoço da equipe, não temos quem confira a carga.', 'Movimento de clientes alto, a doca fica bloqueada.', 'Região com risco de assalto à noite.'];

function makeDemo() {
    let seed = 7;
    const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    const out = {};
    STORES.forEach(s => {
        if (rnd() < 0.3) return;
        const d = [],
            m = {};
        const free = rnd() < .2,
            early = free ? 0 : Math.floor(rnd() * 3),
            late = free ? 0 : Math.floor(rnd() * 4),
            lunch = !free && rnd() < .2,
            satShort = !free && rnd() < .4;
        for (let i = 0; i < 6; i++) {
            let row = '';
            for (let h = 0; h < NH; h++) {
                let no = '';
                if (h < early) no = DEMO_TXT[1];
                else if (h >= NH - late) no = rnd() < .5 ? DEMO_TXT[2] : DEMO_TXT[5];
                else if (lunch && (h === 7 || h === 8)) no = DEMO_TXT[3];
                else if (i === 5 && satShort && h >= 10) no = DEMO_TXT[4];
                if (!free && s.city !== 'Sao Paulo' && h < 2 && rnd() < .4) no = DEMO_TXT[0];
                row += no ? 'N' : 'S';
                if (no)(m[no] = m[no] || []).push(i + '|' + h);
            }
            d.push(row);
        }
        out[s.code] = { envio: 'EXEMPLO', quando: 'exemplo', nome: 'Gerente (exemplo)', cargo: 'Gerente', d, m: Object.entries(m) };
    });
    return out;
}

function setDemo(on) {
    DEMO = on;
    if (on) { RESP = parseResp(makeDemo());
        RSTATE = 'demo'; } else { RESP = {};
        RSTATE = FORM_ENDPOINT ? 'loading' : 'off'; if (FORM_ENDPOINT) { loadResp(); return; } }
    refreshAll();
}

function dstat() {
    const el = $('#dstat'),
        n = Object.keys(RESP).length;
    if (RSTATE === 'demo') { el.innerHTML = `<span class="demo-flag">Dados de exemplo</span><span>Números ilustrativos, não são respostas reais.</span><button class="linkbtn" id="dsx">Sair do exemplo</button>`;
        $('#dsx').onclick = () => setDemo(false); return; }
    if (RSTATE === 'loading') { el.innerHTML = '<span class="dot"></span>Carregando respostas…'; return; }
    if (RSTATE === 'ok') { el.innerHTML = `<span class="dot ok"></span><span>${n} de ${STORES.length} lojas responderam. Atualizado às ${RAT}.</span><button class="linkbtn" id="dsr">Atualizar</button>${n?'':'<button class="linkbtn" id="dsd">Ver com dados de exemplo</button>'}`;
        $('#dsr').onclick = loadResp; const dd = $('#dsd'); if (dd) dd.onclick = () => setDemo(true); return; }
    const msg = RSTATE === 'err' ? 'Não foi possível carregar as respostas.' : 'A planilha de respostas ainda não foi conectada.';
    el.innerHTML = `<span class="dot err"></span><span>${msg}</span>${RSTATE==='err'?'<button class="linkbtn" id="dsr">Tentar de novo</button>':''}<button class="linkbtn" id="dsd">Ver com dados de exemplo</button>`;
    const r = $('#dsr');
    if (r) r.onclick = loadResp;
    $('#dsd').onclick = () => setDemo(true);
}

/* ---------- Filtros gerais ---------- */
const G = { reg: '', uf: '' };
const inScope = s => (!G.reg || s.reg === G.reg) && (!G.uf || s.uf === G.uf);

function syncChip(sel) {
    const c = sel.closest('.fchip');
    c.querySelector('.fv').textContent = sel.selectedOptions[0] ? sel.selectedOptions[0].text : '';
    c.classList.toggle('on', sel.selectedIndex > 0 && !c.dataset.neutral);
}
$('#gReg').innerHTML = '<option value="">Todos</option>' + REGS.map(r => `<option>${esc(r)}</option>`).join('');
$('#gUf').innerHTML = '<option value="">Todas</option>' + UFS.map(u => `<option>${u}</option>`).join('');

function setG(k, v) { G[k] = v; const el = $(k === 'reg' ? '#gReg' : '#gUf');
    el.value = v;
    syncChip(el);
    $('#gClear').hidden = !(G.reg || G.uf);
    refreshAll(); }
$('#gReg').onchange = e => setG('reg', e.target.value);
$('#gUf').onchange = e => setG('uf', e.target.value);
$('#gClear').onclick = () => { G.reg = '';
    G.uf = '';
    ['#gReg', '#gUf'].forEach(id => { $(id).value = '';
        syncChip($(id)); });
    $('#gClear').hidden = true;
    refreshAll(); };
[$('#gReg'), $('#gUf')].forEach(syncChip);

/* ---------- Cálculos ---------- */
function stats(list) {
    const resp = list.filter(s => RESP[s.code]);
    const yes = DAYS.map(() => Array(NH).fill(0));
    let ys = 0,
        full = 0;
    resp.forEach(s => {
        const r = RESP[s.code];
        let all = true;
        r.d.forEach((row, i) => { for (let h = 0; h < NH; h++) { if (row[h] === 'S') { yes[i][h]++;
                    ys++; } else all = false; } });
        if (all) full++;
    });
    return { list, resp, n: resp.length, yes, ys, cells: resp.length * NC, full };
}
const scopeLabel = () => [G.reg && `regional ${G.reg}`, G.uf && `UF ${G.uf}`].filter(Boolean).join(', ');
const storeAvail = r => r.d.join('').split('').filter(c => c === 'S').length;

function winLabel(keys) {
    const byDay = DAYS.map(() => []);
    keys.forEach(k => { const [i, h] = k.split('|').map(Number);
        byDay[i].push(h); });
    const dayTxt = byDay.map(hs => {
        hs.sort((a, b) => a - b);
        const rs = [];
        let a = null,
            p = null;
        hs.forEach(h => { if (a === null) { a = p = h; } else if (h === p + 1) { p = h; } else { rs.push([a, p]);
                a = p = h; } });
        if (a !== null) rs.push([a, p]);
        return rs.map(([x, y]) => x === 0 && y === NH - 1 ? 'dia todo' : `${hh(x)}–${String(H0+y+1).padStart(2,'0')}h`).join(', ');
    });
    const out = [];
    let i = 0;
    while (i < 6) {
        if (!dayTxt[i]) { i++; continue; }
        let j = i;
        while (j + 1 < 6 && dayTxt[j + 1] === dayTxt[i]) j++;
        out.push(`${j>i ? `${DS[i]} a ${DS[j]}` : DS[i]}: ${dayTxt[i]}`); i = j+1;
  }
  return out;
}
const heatColor = p => p >= 50 ? `color-mix(in srgb,var(--sim) ${Math.round((p-50)*2*0.85+15)}%,var(--surface))` : `color-mix(in srgb,var(--nao) ${Math.round((50-p)*2*0.8+12)}%,var(--surface))`;

/* ---------- Resumo ---------- */
function renderResumo(){
  const list = STORES.filter(inScope), st = stats(list), sc = scopeLabel();
  $('#rsMeta').textContent = `${list.length} lojas${sc ? `, ${sc}` : ''}. Faixas de uma hora, das 05h às 23h, de segunda a sábado.`;
  if(!st.n){
    $('#rsHead').textContent = RSTATE==='loading' ? 'Carregando respostas…' : 'Aguardando as respostas das lojas.';
    $('#rsSub').textContent = 'Envie a cada regional o link da pesquisa. Assim que as lojas responderem, o painel mostra aqui em quais horários cada uma pode receber o caminhão.';
  } else {
    let worst = null, best = null;
    DAYS.forEach((_,i) => { for(let h=0;h<NH;h++){ const p = pct(st.yes[i][h], st.n); if(!worst || p < worst.p) worst = {i,h,p}; if(!best || p > best.p) best = {i,h,p}; } });
    $('#rsHead').textContent = `${pct(st.ys, st.cells)}% das faixas horárias aceitam caminhão.`;
    $('#rsSub').textContent = `A faixa mais restrita é ${DAYS[worst.i].toLowerCase()}, ${faixa(worst.h)}, com ${worst.p}% das lojas recebendo. ${st.full} ${st.full===1?'loja recebe':'lojas recebem'} em todas as faixas da semana.`;
  }
  const rp = pct(st.n, list.length);
  $('#rsKpis').innerHTML = `
    <div class="kpi"><b>${st.n} <span style="font-size:18px;color:var(--muted);font-weight:500">de ${list.length}</span></b><small>lojas responderam</small><div class="bar"><i style="width:${rp}%"></i></div></div>
    <div class="kpi"><b>${st.n ? pct(st.ys, st.cells)+'%' : '–'}</b><small>das faixas aceitam caminhão</small></div>
    <div class="kpi"><b>${st.n ? st.full : '–'}</b><small>lojas recebem em todas as faixas</small></div>
    <div class="kpi"><b>${st.n ? st.n - st.full : '–'}</b><small>lojas têm alguma faixa sem recebimento</small></div>`;
  const g = ['<span></span>', ...DS.map(d => `<span class="hh">${d}</span>`)];
  for(let h=0;h<NH;h++){
    g.push(`<span class="hl">${faixa(h)}</span>`);
    DAYS.forEach((d,i) => {
      if(!st.n){ g.push('<span class="hc none">–</span>'); return; }
      const p = pct(st.yes[i][h], st.n);
      g.push(`<button class="hc" data-i="${i}" data-h="${h}" style="background:${heatColor(p)}" aria-label="${d}, ${faixa(h)}: ${p}% das lojas recebem">${p}%</button>`);
    });
  }
  $('#heat').innerHTML = g.join('');
  if(st.n){
    const byH = Array.from({length:NH}, (_,h) => pct(DAYS.reduce((a,_,i)=>a+st.yes[i][h],0), st.n*6));
    const good = byH.map((p,h)=>({p,h})).filter(x=>x.p>=80);
    $('#heatNote').innerHTML = good.length
      ? `Na média da semana, <b>${good.length} das 18 faixas</b> têm pelo menos 80% das lojas recebendo. Base: ${st.n} ${st.n===1?'loja':'lojas'} que responderam.`
      : `Nenhuma faixa tem 80% ou mais das lojas recebendo na média da semana. Base: ${st.n} ${st.n===1?'loja':'lojas'} que responderam.`;
  } else $('#heatNote').textContent = '';
}
$('#heat').addEventListener('click', e => { const b = e.target.closest('.hc[data-i]'); if(b) openSlot(+b.dataset.i, +b.dataset.h); });

/* ---------- Regionais ---------- */
const openPend = new Set();
function renderRegionais(){
  const list = STORES.filter(s => !G.uf || s.uf === G.uf);
  const rows = REGS.map(reg => { const ss = list.filter(s => s.reg === reg); return {reg, ss, st:stats(ss)}; }).filter(x => x.ss.length);
  $('#rtable').innerHTML = `<thead><tr><th>Regional</th><th class="num">Lojas</th><th>Respostas</th><th class="num">Faixas com recebimento</th><th class="num">Lojas com restrição</th><th></th></tr></thead>
  <tbody>${rows.map(({reg,ss,st}) => {
    const p = pct(st.n, ss.length), pend = ss.filter(s => !RESP[s.code]);
    return `<tr><td><button class="rname" data-r="${esc(reg)}">${esc(reg)}</button></td><td class="num">${ss.length}</td>
      <td><div class="prog"><div class="pb"><i class="${p===100?'full':''}" style="width:${p}%"></i></div><span>${st.n} de ${ss.length}</span></div></td>
      <td class="num">${st.n ? pct(st.ys, st.cells)+'%' : '–'}</td><td class="num">${st.n ? st.n - st.full : '–'}</td>
      <td class="num">${pend.length ? `<button class="linkbtn" data-p="${esc(reg)}">${openPend.has(reg)?'Ocultar':'Pendentes'} (${pend.length})</button>` : '<span style="color:var(--sim);font-size:13px;font-weight:600">Completo</span>'}</td></tr>
      ${openPend.has(reg) && pend.length ? `<tr class="pendrow"><td colspan="6"><div class="pendchips">${pend.map(s => `<button class="chip" data-code="${s.code}"><small>${s.code}</small>${esc(s.name)}</button>`).join('')}</div></td></tr>` : ''}`;
  }).join('')}</tbody>`;
}
$('#rtable').addEventListener('click', e => {
  const n = e.target.closest('.rname'); if(n){ setG('reg', n.dataset.r); show('lojas', true); return; }
  const p = e.target.closest('[data-p]'); if(p){ const r = p.dataset.p; openPend.has(r) ? openPend.delete(r) : openPend.add(r); renderRegionais(); return; }
  const c = e.target.closest('.chip'); if(c) openStore(c.dataset.code);
});

/* ---------- Lojas ---------- */
const L = {q:'', status:'', sort:'code'};
function barBg(r, i){
  const row = r.d[i], st = [];
  for(let h=0;h<NH;h++){ const c = row[h]==='S' ? 'var(--sim)' : 'var(--nao)'; st.push(`${c} ${(h*100/NH).toFixed(3)}% ${((h+1)*100/NH).toFixed(3)}%`); }
  return `linear-gradient(90deg,${st.join(',')})`;
}
function renderLojas(){
  const q = L.q.trim().toLowerCase();
  let rows = STORES.filter(inScope).filter(s => !q || s.name.toLowerCase().includes(q) || s.code.includes(q) || s.city.toLowerCase().includes(q));
  rows = rows.filter(s => { const r = RESP[s.code];
    if(L.status === 'resp') return !!r; if(L.status === 'pend') return !r;
    if(L.status === 'restr') return r && storeAvail(r) < NC; if(L.status === 'full') return r && storeAvail(r) === NC; return true; });
  const av = s => RESP[s.code] ? storeAvail(RESP[s.code]) : 999;
  rows.sort(L.sort==='low' ? (a,b) => av(a)-av(b) || pt(a.code,b.code) : L.sort==='reg' ? (a,b) => pt(a.reg,b.reg) || pt(a.code,b.code) : (a,b) => pt(a.code,b.code));
  $('#lCount').textContent = `${rows.length} de ${STORES.filter(inScope).length} lojas`;
  $('#ltable').innerHTML = `<thead><tr><th>Loja</th>${DAYS.map(d=>`<th>${d}</th>`).join('')}<th style="text-align:right;padding-right:18px">Faixas</th></tr></thead><tbody>${
    rows.length ? rows.map(s => { const r = RESP[s.code];
      return `<tr data-code="${s.code}"><td class="st"><div class="ln"><small>${s.code}</small><b>${esc(s.name)}</b></div><div class="lsub">${esc(s.city)}/${s.uf}, ${esc(s.reg)}</div></td>
      ${r ? DAYS.map((_,i) => `<td><div class="dbar" data-c="${s.code}" data-i="${i}" style="background:${barBg(r,i)}"></div></td>`).join('')
          : `<td colspan="6"><div class="dbar pend"></div></td>`}
      <td class="pc">${r ? `${pct(storeAvail(r), NC)}%<small>${storeAvail(r)} de ${NC}</small>` : '<span class="pending-txt">Sem resposta</span>'}</td></tr>`; }).join('')
    : `<tr><td colspan="8" class="empty">Nenhuma loja com esses filtros.</td></tr>`}</tbody>`;
}
$('#lq').oninput = e => { L.q = e.target.value; renderLojas(); };
[['#lStatus','status'],['#lSort','sort']].forEach(([id,k]) => { const el = $(id); syncChip(el); el.onchange = () => { L[k] = el.value; syncChip(el); renderLojas(); }; });
$('#ltable').addEventListener('click', e => { const tr = e.target.closest('tr[data-code]'); if(tr) openStore(tr.dataset.code); });

/* ---------- Agrupamentos ---------- */
const GRPS = [...new Set(STORES.map(s => s.grp || ''))].sort((a,b) => (a==='') - (b==='') || pt(a,b));
const grpName = g => g || 'Sem agrupamento definido';
function groupInfo(g){
  const ss = STORES.filter(s => (s.grp || '') === g).sort((a,b) => pt(a.code,b.code));
  const resp = ss.filter(s => RESP[s.code]);
  const common = resp.length ? DAYS.map((_,i) => Array.from({length:NH}, (_,h) => resp.every(s => RESP[s.code].d[i][h] === 'S'))) : null;
  const keys = []; if(common) common.forEach((row,i) => row.forEach((v,h) => { if(v) keys.push(i+'|'+h); }));
  return {g, ss, resp, common, keys, n:keys.length, pend:ss.length - resp.length};
}
// Rota em sequência: 1 hora por loja, horas seguidas, cada loja numa hora em que recebe.
// Para cada dia testa todas as janelas de n horas seguidas e verifica, por emparelhamento
// (loja ↔ hora), se dá para encaixar todas as lojas que responderam.
function matchWindow(stores, i, start){
  const n = stores.length, hourOf = Array(n).fill(-1), storeAt = Array(n).fill(-1);
  const ok = (s, k) => RESP[stores[s].code].d[i][start + k] === 'S';
  const tryS = (s, seen) => { for(let k=0;k<n;k++){ if(!ok(s,k) || seen[k]) continue; seen[k] = true;
    if(storeAt[k] < 0 || tryS(storeAt[k], seen)){ storeAt[k] = s; hourOf[s] = k; return true; } } return false; };
  for(let s=0;s<n;s++) if(!tryS(s, Array(n).fill(false))) return null;
  return storeAt.map(s => stores[s]);
}
function routeInfo(info){
  const st = info.resp, n = st.length;
  if(n < 2 || n > NH) return null;
  const union = DAYS.map(() => Array(NH).fill(false)), routes = DAYS.map(() => []);
  DAYS.forEach((_,i) => {
    for(let start=0; start + n <= NH; start++){
      const order = matchWindow(st, i, start);
      if(order){ routes[i].push({start, order}); for(let k=0;k<n;k++) union[i][start+k] = true; }
    }
  });
  const keys = []; union.forEach((row,i) => row.forEach((v,h) => { if(v) keys.push(i+'|'+h); }));
  return {n, union, routes, keys, days:routes.filter(r => r.length).length};
}
const routeTxt = (r, i) => r.order.map((s,k) => `${hh(r.start+k)} ${esc(s.name)}`).join(' → ');
function rbarBg(row){
  const st = []; for(let h=0;h<NH;h++){ const c = row[h] ? 'color-mix(in srgb,var(--accent) 60%,var(--surface))' : 'var(--empty)'; st.push(`${c} ${(h*100/NH).toFixed(3)}% ${((h+1)*100/NH).toFixed(3)}%`); }
  return `linear-gradient(90deg,${st.join(',')})`;
}
function cbarBg(row){
  const st = []; for(let h=0;h<NH;h++){ const c = row[h] ? 'var(--sim)' : 'var(--nao-soft)'; st.push(`${c} ${(h*100/NH).toFixed(3)}% ${((h+1)*100/NH).toFixed(3)}%`); }
  return `linear-gradient(90deg,${st.join(',')})`;
}
function groupTable(info, hl){
  const {ss, common, g} = info;
  return `<div class="tblwrap" style="border:0;border-radius:0"><table class="gtab${hl?' focus':''}"><thead><tr><th>Loja</th>${DS.map(d=>`<th>${d}</th>`).join('')}<th>Faixas</th></tr></thead>
  <tbody>${ss.map(s => { const r = RESP[s.code], extra = [s.truck, s.ativo].filter(Boolean).join(', ');
    return `<tr data-code="${s.code}" class="${s.code===hl?'hl':''}"><td><div class="ln"><small>${s.code}</small><b>${esc(s.name)}</b>${s.code===hl?'<span class="thisone">esta loja</span>':''}</div>
      <div class="gsub" style="padding-left:44px">${esc(s.city)}/${s.uf}, ${esc(s.reg)}${extra?`, ${esc(extra)}`:''}</div></td>
      ${r ? DAYS.map((_,i) => `<td><div class="dbar" data-c="${s.code}" data-i="${i}" style="background:${barBg(r,i)}"></div></td>`).join('') : `<td colspan="6"><div class="dbar pend"></div></td>`}
      <td class="pc">${r ? pct(storeAvail(r),NC)+'%' : 'Sem resposta'}</td></tr>`; }).join('')}</tbody>
  <tfoot>${(() => { const R = routeInfo(info); return R ? `<tr class="rrow"><td>Rota em sequência<div class="gsub">1 hora por loja, horas seguidas</div></td>${R.union.map((row,i) => `<td><div class="cbar rbar" data-g="${esc(g)}" data-i="${i}" style="background:${rbarBg(row)}"></div></td>`).join('')}<td class="pc">${R.days} de 6 dias</td></tr>` : ''; })()}
  <tr><td>Janela em comum</td>${common ? common.map((row,i) => `<td><div class="cbar" data-g="${esc(g)}" data-i="${i}" style="background:${cbarBg(row)}"></div></td>`).join('') : '<td colspan="6" class="gnote" style="font-weight:400">Aguardando respostas</td>'}<td class="pc">${common ? `${info.n} de ${NC}` : ''}</td></tr></tfoot></table></div>`;
}
function routeNote(info){
  const R = routeInfo(info); if(!R) return '';
  if(!R.days) return `<br><b>Rota em sequência:</b> não há horas seguidas em que dê para atender as ${R.n} lojas, uma por hora.`;
  const i = R.routes.findIndex(r => r.length), ex = R.routes[i][0];
  return `<br><b>Rota em sequência:</b> atendendo uma loja por hora, o caminhão consegue passar pelas ${R.n} lojas em ${R.days} de 6 dias (${winLabel(R.keys).join('; ')}). Exemplo, ${DAYS[i].toLowerCase()}: ${routeTxt(ex, i)}.`;
}
function groupNote(info){
  const {resp, ss, pend, keys} = info;
  if(!resp.length) return `Nenhuma das ${ss.length} lojas respondeu ainda.`;
  const pd = pend ? ` ${pend} ${pend>1?'lojas ainda não responderam':'loja ainda não respondeu'}, então a janela pode diminuir.` : '';
  if(resp.length === 1) return `Só 1 loja respondeu até agora; a janela em comum é a dela.${pd}`;
  if(!keys.length) return `As ${resp.length} lojas que responderam <b>não têm nenhuma faixa em comum</b>.${pd}`;
  return `As ${resp.length} lojas que responderam podem receber juntas em <b>${keys.length} de ${NC} faixas</b>: ${winLabel(keys).join('; ')}.${pd}`;
}
function groupNoteFull(info){ return groupNote(info) + routeNote(info);
}
function groupBlockers(info){
  const items = info.resp.filter(s => RESP[s.code].reasons.length);
  if(!items.length || !info.resp.length) return '';
  return `<details class="gblock"><summary>O que impede uma janela maior<span style="font-weight:400;color:var(--muted);font-size:13px">${items.length} ${items.length>1?'lojas com restrição':'loja com restrição'}</span><span class="tg"><span class="o">Expandir</span><span class="c">Fechar</span></span></summary>
    <ul class="gbl">${items.map(s => RESP[s.code].reasons.map(x => `<li><div class="ln" style="flex-wrap:wrap"><button class="bs" data-code="${s.code}"><small>${s.code}</small>${esc(s.name)}</button><span class="wins">${winLabel(x.keys).map(w=>`<span>${w}</span>`).join('')}</span></div><p>${esc(x.txt)}</p></li>`).join('')).join('')}</ul></details>`;
}
const GS = {q:'', sort:'name'};
function renderGrupos(){
  const q = GS.q.trim().toLowerCase();
  let infos = GRPS.map(groupInfo).filter(x => x.ss.some(inScope));
  const total = infos.length;
  if(q) infos = infos.filter(x => grpName(x.g).toLowerCase().includes(q) || x.ss.some(s => s.name.toLowerCase().includes(q) || s.code.includes(q)));
  if(GS.sort === 'few') infos.sort((a,b) => (a.resp.length?0:1)-(b.resp.length?0:1) || a.n-b.n || pt(a.g,b.g));
  else if(GS.sort === 'pend') infos.sort((a,b) => b.pend-a.pend || pt(a.g,b.g));
  else if(GS.sort === 'route') infos.sort((a,b) => { const ra = routeInfo(a), rb = routeInfo(b); return (ra?ra.days:7) - (rb?rb.days:7) || pt(a.g,b.g); });
  const all = GRPS.map(groupInfo).filter(x => x.ss.some(inScope) && x.g);
  const complete = all.filter(x => !x.pend).length, none = all.filter(x => x.resp.length > 1 && !x.n && !(routeInfo(x) || {days:0}).days).length;
  const withResp = all.filter(x => x.resp.length > 1);
  const avg = withResp.length ? Math.round(withResp.reduce((a,x)=>a+x.n,0) / withResp.length) : 0;
  $('#gsum').innerHTML = `
    <div class="kpi"><b>${all.length}</b><small>agrupamentos${scopeLabel()?` (${esc(scopeLabel())})`:''}</small></div>
    <div class="kpi"><b>${complete}</b><small>com todas as lojas respondidas</small></div>
    <div class="kpi"><b>${withResp.length ? avg : '–'}</b><small>faixas em comum, em média, de ${NC}</small></div>
    <div class="kpi"><b>${withResp.length ? none : '–'}</b><small>sem janela em comum nem rota em sequência</small></div>`;
  $('#gCount').textContent = `${infos.length} de ${total} agrupamentos`;
  $('#glist').innerHTML = infos.length ? infos.map(x => `<article class="gcard"><header><h3>${esc(grpName(x.g))}</h3><div class="gmeta"><span>${x.ss.length} ${x.ss.length>1?'lojas':'loja'}</span><span>${[...new Set(x.ss.map(s=>s.reg))].map(esc).join(', ')}</span>${x.pend?`<span class="warn">${x.pend} sem resposta</span>`:''}</div></header>
      ${groupTable(x)}<p class="gnote">${groupNoteFull(x)}</p>${groupBlockers(x)}</article>`).join('')
    : `<div class="empty">Nenhum agrupamento com esses filtros.</div>`;
}
$('#gq').oninput = e => { GS.q = e.target.value; renderGrupos(); };
(() => { const el = $('#gSort'); syncChip(el); el.onchange = () => { GS.sort = el.value; syncChip(el); renderGrupos(); }; })();
$('#glist').addEventListener('click', e => { const t = e.target.closest('tr[data-code], .bs'); if(t) openStore(t.dataset.code); });

/* ---------- Motivos ---------- */
let MQ = '';
function renderMotivos(){
  const q = MQ.trim().toLowerCase(), items = [];
  STORES.filter(inScope).forEach(s => { const r = RESP[s.code]; if(!r) return; r.reasons.forEach(x => { if(!q || x.txt.toLowerCase().includes(q)) items.push({s, x}); }); });
  items.sort((a,b) => b.x.keys.length - a.x.keys.length || pt(a.s.code, b.s.code));
  const ns = new Set(items.map(i => i.s.code)).size;
  $('#mCount').textContent = `${items.length} ${items.length===1?'motivo':'motivos'} de ${ns} ${ns===1?'loja':'lojas'}`;
  $('#mlist').innerHTML = items.length ? items.map(({s,x}) => `<button class="mcard" data-code="${s.code}">
      <span class="mt"><small>${s.code}</small>${esc(s.name)}</span><span class="ms">${esc(s.city)}/${s.uf}, ${esc(s.reg)}, ${x.keys.length} ${x.keys.length===1?'faixa':'faixas'}</span>
      <span class="wins">${winLabel(x.keys).map(w=>`<span>${w}</span>`).join('')}</span><p>${esc(x.txt)}</p></button>`).join('')
    : `<div class="empty" style="grid-column:1/-1">${Object.keys(RESP).length ? 'Nenhum motivo com esses filtros.' : 'Os motivos aparecem aqui assim que as lojas responderem.'}</div>`;
}
$('#mq').oninput = e => { MQ = e.target.value; renderMotivos(); };
$('#mlist').addEventListener('click', e => { const b = e.target.closest('.mcard'); if(b) openStore(b.dataset.code); });

/* ---------- Modais ---------- */
const md = $('#md');
function showMd(html){
  $('#mdIn').innerHTML = html; $('#mdClose').onclick = () => md.close(); tip.classList.remove('on');
  if(!md.open) md.showModal(); md.scrollTop = 0;
  const t = $('#mdTitle'); if(t){ t.tabIndex = -1; t.focus({preventScroll:true}); }
}
md.addEventListener('click', e => { if(e.target === md) md.close(); });
$('#mdIn').addEventListener('click', e => { const c = e.target.closest('[data-code]'); if(c && !c.closest('.md-head')) openStore(c.dataset.code); });
function openStore(code){
  const s = byCode[code], r = RESP[code];
  let body;
  if(!r) body = `<div class="pendbox">A loja ainda não respondeu à pesquisa. Ela aparece aqui assim que o gerente enviar as faixas pelo link do regional ${esc(s.reg)}.</div>`;
  else {
    const g = ['<span></span>', ...DS.map(d => `<span class="gh">${d}</span>`)];
    for(let h=0;h<NH;h++){
      g.push(`<span class="gl">${faixa(h)}</span>`);
      DAYS.forEach((d,i) => { const yes = r.d[i][h]==='S', n = yes ? '' : (r.rOf[i+'|'+h] ?? -1) + 1;
        g.push(`<span class="gc ${yes?'s':'n'}" data-c="${code}" data-k="${i}|${h}" aria-label="${yes ? 'Recebe' : esc(n ? `Motivo ${n}: ${r.reasons[n-1].txt}` : 'Não recebe, sem motivo informado')}">${yes?'':n||'!'}</span>`); });
    }
    const av = storeAvail(r);
    body = `<section><h4>Grade da semana: ${av} de ${NC} faixas com recebimento (${pct(av,NC)}%)</h4><div class="sgrid">${g.join('')}</div>
      <div class="legend" style="margin:10px 0 0"><span><i class="sw" style="background:var(--sim-soft);outline:1px solid var(--sim)"></i>Recebe</span><span><i class="sw" style="background:var(--nao-soft);outline:1.5px solid var(--nao)"></i>Não recebe (número do motivo)</span></div></section>
      <section><h4>Justificativas</h4>${r.reasons.length ? `<ol class="rlist">${r.reasons.map((x,i) => `<li><div class="rl-h"><b class="rn">${i+1}</b><span class="wins">${winLabel(x.keys).map(w=>`<span>${w}</span>`).join('')}</span></div><p>${esc(x.txt)}</p></li>`).join('')}</ol>` : '<div class="okbox">A loja recebe em todas as faixas da semana.</div>'}
      <p class="hint" style="margin:12px 0 0">Respondido por ${esc(r.nome)} (${esc(r.cargo)}) em ${esc(r.quando)}.</p></section>`;
  }
  showMd(`<div class="md-head"><div><p class="meta" style="margin:0">Loja ${s.code}</p><h2 id="mdTitle">${esc(s.name)}</h2>
    <div class="tags"><span>${esc(s.city)}/${s.uf}</span><span>${esc(s.addr)}</span><span>Regional ${esc(s.reg)}</span><span>${esc(grpName(s.grp))}</span>${s.truck?`<span>${esc(s.truck)}, ${esc(s.ativo)}</span>`:''}</div></div>${closeBtn()}</div>${body}
    ${s.grp ? (() => { const info = groupInfo(s.grp), o = info.ss.length - 1; return `<section style="border-top:1px solid var(--line);padding-top:18px"><h4 style="color:var(--muted)">Agrupamento ${esc(s.grp)}</h4>
      <p class="hint">${o ? `Vai junto com ${o} ${o>1?'outras lojas':'outra loja'}. Clique em uma loja para abrir a ficha dela.` : 'Esta é a única loja do agrupamento.'}</p>${groupTable(info, s.code)}<p class="gnote" style="margin-top:10px">${groupNoteFull(info)}</p></section>`; })() : ''}`);
}
function openSlot(i, h){
  const st = stats(STORES.filter(inScope));
  const no = st.resp.filter(s => RESP[s.code].d[i][h] !== 'S');
  const groups = new Map();
  no.forEach(s => { const r = RESP[s.code], ri = r.rOf[i+'|'+h], txt = ri != null ? r.reasons[ri].txt : 'Sem motivo informado';
    if(!groups.has(txt)) groups.set(txt, []); groups.get(txt).push(s); });
  const gs = [...groups.entries()].sort((a,b) => b[1].length - a[1].length);
  showMd(`<div class="md-head"><div><p class="meta" style="margin:0">Faixa horária${scopeLabel()?`, ${esc(scopeLabel())}`:''}</p><h2 id="mdTitle">${DAYS[i]}, ${faixa(h)}</h2>
    <p>${st.n - no.length} de ${st.n} lojas recebem (${pct(st.n-no.length, st.n)}%). ${no.length} não recebem.</p></div>${closeBtn()}</div>
    ${no.length ? `<div class="slist">${gs.map(([txt, ss]) => `<div class="sgroup"><p>${esc(txt)}</p><div class="pendchips" style="padding:0">${ss.map(s => `<button class="chip" data-code="${s.code}"><small>${s.code}</small>${esc(s.name)}</button>`).join('')}</div></div>`).join('')}</div>`
      : '<div class="okbox">Todas as lojas que responderam recebem nesta faixa.</div>'}`);
}

/* ---------- Tooltip das barras ---------- */
const tip = $('#tip');
// o modal fica numa camada acima de tudo; a dica precisa morar dentro dele para aparecer
function tipHost(){ const host = md.open ? md : document.body; if(tip.parentElement !== host) host.appendChild(tip); }
function placeTip(e){
  tipHost();
  const r = tip.getBoundingClientRect(); let x = e.clientX + 14, y = e.clientY + 14;
  if(x + r.width > innerWidth - 8) x = e.clientX - r.width - 14;
  if(y + r.height > innerHeight - 8) y = e.clientY - r.height - 14;
  tip.style.left = x + 'px'; tip.style.top = y + 'px';
}
document.addEventListener('pointermove', e => {
  const gc = e.target.closest('.gc[data-k]');
  if(gc){
    const r = RESP[gc.dataset.c], k = gc.dataset.k, [i] = k.split('|').map(Number), ri = r && r.rOf[k];
    if(!r){ tip.classList.remove('on'); return; }
    tip.innerHTML = r.d[i][+k.split('|')[1]] === 'S' ? 'Recebe'
      : ri != null ? `<b>Motivo ${ri+1}</b><br>${esc(r.reasons[ri].txt)}` : 'Não recebe, sem motivo informado';
    tip.classList.add('on'); placeTip(e); return;
  }
  const rb = e.target.closest('.rbar[data-g]');
  if(rb){
    const R = routeInfo(groupInfo(rb.dataset.g)), i = +rb.dataset.i, rc = rb.getBoundingClientRect();
    const h = Math.min(NH-1, Math.max(0, Math.floor((e.clientX - rc.left) / rc.width * NH)));
    const r = R && R.routes[i].find(x => h >= x.start && h < x.start + R.n);
    tip.innerHTML = `<b>${DAYS[i]}, ${faixa(h)}</b><br>${r ? `Rota possível: ${routeTxt(r, i)}` : 'Nenhuma sequência de horas seguidas passa por esta faixa.'}`;
    tip.classList.add('on'); placeTip(e); return;
  }
  const cb = e.target.closest('.cbar[data-g]');
  if(cb){
    const info = groupInfo(cb.dataset.g), i = +cb.dataset.i, rc = cb.getBoundingClientRect();
    const h = Math.min(NH-1, Math.max(0, Math.floor((e.clientX - rc.left) / rc.width * NH)));
    const no = info.resp.filter(s => RESP[s.code].d[i][h] !== 'S');
    tip.innerHTML = `<b>${DAYS[i]}, ${faixa(h)}</b><br>${no.length ? `Não recebem: ${no.map(s => esc(s.name)).join(', ')}` : `Todas as ${info.resp.length} lojas que responderam recebem.`}`;
    tip.classList.add('on'); placeTip(e); return;
  }
  const b = e.target.closest('.dbar[data-c]');
  if(!b){ tip.classList.remove('on'); return; }
  const s = byCode[b.dataset.c], r = RESP[s.code], i = +b.dataset.i, rc = b.getBoundingClientRect();
  const h = Math.min(NH-1, Math.max(0, Math.floor((e.clientX - rc.left) / rc.width * NH)));
  const yes = r.d[i][h] === 'S', ri = r.rOf[i+'|'+h];
  tip.innerHTML = `<b>${esc(s.name)}, ${DAYS[i].toLowerCase()}, ${faixa(h)}</b><br>${yes ? 'Recebe' : `Não recebe${ri!=null ? `: ${esc(r.reasons[ri].txt.slice(0,200))}` : ''}`}`;
  tip.classList.add('on'); placeTip(e);
});

/* ---------- Formulário da loja ---------- */
let F = null, pickQ = '';
function openForm(raw){
  const p = new URLSearchParams(raw.split('?')[1] || '');
  const slug = p.get('r') || '', token = p.get('t') || '', reg = regBySlug[slug];
  const root = $('#formRoot');
  if(!reg || !token){ root.innerHTML = `<div class="fcard"><div class="fmsg"><h2>Link incompleto</h2><p>Abra a pesquisa pelo link enviado pelo seu regional. Ele já indica as lojas da sua regional.</p></div></div>`; return; }
  const code = (p.get('loja') || '').replace(/\D/g,'').padStart(4,'0');
  const s = byCode[code];
  if(!p.get('loja') || !s || s.reg !== reg){ renderPicker(reg, slug, token, p.get('loja') && !s ? 'Não encontramos essa loja. Escolha na lista.' : ''); return; }
  if(!F || F.code !== code) F = {code, s, slug, token, nome:'', cargo:'', cells:DAYS.map(() => Array(NH).fill(null)), reasons:new Map(), nextR:1, sel:new Set(), draft:'', mode:'', sent:null};
  F.slug = slug; F.token = token;
  renderForm();
}
function renderPicker(reg, slug, token, msg){
  const ss = STORES.filter(s => s.reg === reg);
  const done = ss.filter(s => RESP[s.code]).length;
  $('#formRoot').innerHTML = `<div class="fcard"><header class="fhead"><p class="k">Pesquisa de janelas de recebimento</p><h1 class="ftitle">Lojas da regional ${esc(reg)}</h1>
    <p class="fintro">Escolha a sua loja. Você vai informar, para cada hora entre 05h e 23h de segunda a sábado, se a loja pode receber o caminhão e, quando não puder, o motivo.</p></header>
    <div class="fsec" style="border-bottom:0">
      ${msg?`<p class="ferr" style="padding:10px 14px;border-radius:8px;margin-bottom:12px">${esc(msg)}</p>`:''}
      ${RSTATE==='ok' ? `<p class="hint" style="margin:0">${done} de ${ss.length} lojas da regional já responderam.</p>` : ''}
      <label class="pickq"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input id="pq" type="search" placeholder="Digite o código, o nome ou a cidade da loja" value="${esc(pickQ)}" autocomplete="off" aria-label="Buscar loja"></label>
      <div class="plist" id="plist"></div></div></div>`;
  const draw = () => {
    const q = pickQ.trim().toLowerCase();
    const list = ss.filter(s => !q || s.code.includes(q) || s.name.toLowerCase().includes(q) || s.city.toLowerCase().includes(q));
    $('#plist').innerHTML = list.length ? list.map(s => { const r = RESP[s.code];
      return `<button type="button" class="pstore" data-code="${s.code}"><small>${s.code}</small><span class="pn"><b>${esc(s.name)}</b><em>${esc(s.city)}/${s.uf}</em></span>${RSTATE==='ok' ? (r ? `<span class="pstat ok">Respondida</span>` : `<span class="pstat no">Pendente</span>`) : ''}</button>`; }).join('')
      : `<p class="hint" style="grid-column:1/-1">Nenhuma loja encontrada.</p>`;
  };
  draw();
  $('#pq').oninput = e => { pickQ = e.target.value; draw(); };
  $('#plist').onclick = e => { const b = e.target.closest('.pstore'); if(b) location.hash = `#responder?r=${slug}&t=${encodeURIComponent(token)}&loja=${b.dataset.code}`; };
}
const fk = (i,h) => i+'|'+h;
const cellOf = k => { const [i,h] = k.split('|').map(Number); return F.cells[i][h]; };
const answered = () => F.cells.flat().filter(v => v !== null).length;
const keysOfR = id => { const ks = []; F.cells.forEach((row,i) => row.forEach((v,h) => { if(v === id) ks.push(fk(i,h)); })); return ks; };
const rLabel = id => [...F.reasons.keys()].indexOf(id) + 1;
function renderForm(){
  const {s} = F, root = $('#formRoot'), back = `#responder?r=${F.slug}&t=${encodeURIComponent(F.token)}`;
  if(F.sent){
    root.innerHTML = `<div class="fcard"><div class="fdone"><div class="ic">${ICON_OK}</div><h2>Resposta enviada</h2>
      <p>Obrigado! As faixas da loja ${s.code} ${esc(s.name)} foram registradas. Protocolo <code>${esc(F.sent)}</code>.</p>
      <p style="font-size:13.5px">Se precisar corrigir, envie de novo. A resposta mais recente é a que vale.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center"><button class="fbtn ghost" id="fAgain">Corrigir e enviar de novo</button><a class="fbtn ghost" style="text-decoration:none" href="${back}">Voltar para a lista de lojas</a></div></div></div>`;
    $('#fAgain').onclick = () => { F.sent = null; renderForm(); };
    return;
  }
  root.innerHTML = `<div class="fcard">
    <header class="fhead"><p class="k">Loja ${s.code}, regional ${esc(s.reg)}</p><h1 class="ftitle">${esc(s.name)}</h1>
      <p class="fintro">${esc(s.addr)}, ${esc(s.city)}/${s.uf}. <a class="fswap" href="${back}">Não é a sua loja? Trocar</a></p></header>
    <div class="fsec"><h3><span class="n">1</span>Quem está respondendo</h3>
      <div class="frow"><label class="ff">Nome<input id="fNome" autocomplete="name" maxlength="120" value="${esc(F.nome)}"></label>
      <label class="ff">Cargo<input id="fCargo" maxlength="80" value="${esc(F.cargo)}" placeholder="Ex.: Gerente de loja"></label></div></div>
    <div class="fsec"><h3><span class="n">2</span>Em quais horários a loja pode receber o caminhão?</h3>
      <p class="hint">Selecione faixas tocando nelas (no computador, dá para arrastar). Tocar no dia ou na hora seleciona a coluna ou a linha inteira. Depois escolha "Recebe" ou "Não recebe"; para "Não recebe", escreva o motivo.</p>
      <div class="fprog" id="fProg"></div>
      <div class="shortcuts" id="fSc"></div>
      <div class="fgrid-wrap"><div class="fgrid" id="fGrid" role="grid" aria-label="Faixas horárias"></div></div>
      <div class="fleg"><span><i class="lg p"></i>Sem resposta</span><span><i class="lg x"></i>Selecionada</span><span><i class="lg s"></i>Recebe</span><span><i class="lg n"></i>Não recebe (número do motivo)</span></div>
      <div class="abar" id="fBar" hidden></div></div>
    <div class="fsec" id="fRsec" hidden><h3><span class="n">3</span>Motivos informados</h3><p class="hint">Confira os textos. "Desfazer" devolve as faixas para sem resposta.</p><div class="jlist" id="fReasons"></div></div>
    <p class="ferr" id="fErr" role="alert"></p>
    <div class="fsubmit"><p id="fSum"></p><button class="fbtn" id="fSend">Enviar resposta</button></div></div>`;
  $('#fNome').oninput = e => { F.nome = e.target.value; e.target.closest('.ff').classList.remove('bad'); $('#fErr').textContent=''; };
  $('#fCargo').oninput = e => { F.cargo = e.target.value; e.target.closest('.ff').classList.remove('bad'); $('#fErr').textContent=''; };
  $('#fSend').onclick = submitForm;
  bindGrid();
  fRefresh();
}
function fRefresh(){ drawGrid(); drawBar(); drawShortcuts(); drawReasons(); drawSum(); }
function drawGrid(){
  const g = ['<span class="corner">Hora</span>', ...DAYS.map((d,i) => `<button type="button" class="dh" data-col="${i}" title="Selecionar ${d.toLowerCase()} inteira">${DS[i]}</button>`)];
  for(let h=0;h<NH;h++){
    g.push(`<button type="button" class="hh2" data-row="${h}" title="Selecionar ${faixa(h)} em todos os dias"><span class="lf">${faixa(h)}</span><span class="ls">${hh(h)}</span></button>`);
    DAYS.forEach((d,i) => {
      const v = F.cells[i][h], k = fk(i,h), sel = F.sel.has(k);
      const cls = v === null ? '' : v === 'S' ? 's' : 'n';
      g.push(`<button type="button" class="fc ${cls}${sel?' sel':''}" data-k="${k}" aria-pressed="${sel}" aria-label="${d}, ${faixa(h)}: ${v===null?'sem resposta':v==='S'?'recebe':'não recebe, motivo '+rLabel(v)}">${v===null?'':v==='S'?'✓':rLabel(v)}</button>`);
    });
  }
  $('#fGrid').innerHTML = g.join('');
  const n = answered(), p = $('#fProg');
  p.innerHTML = `<div class="h"><span><b>${n} de ${NC}</b> faixas respondidas</span><b>${pct(n,NC)}%</b></div><div class="b"><i style="width:${pct(n,NC)}%"></i></div>`;
  p.classList.toggle('done', n === NC);
}
function paintSel(){ $('#fGrid').querySelectorAll('.fc').forEach(b => { const on = F.sel.has(b.dataset.k); b.classList.toggle('sel', on); b.setAttribute('aria-pressed', on); }); drawBar(); }
let drag = null;
addEventListener('pointerup', () => { if(drag && drag.moved){ drag.ignoreClick = true; setTimeout(() => { drag = null; }, 0); } else drag = null; });
function bindGrid(){
  const grid = $('#fGrid');
  grid.addEventListener('pointerdown', e => {
    const c = e.target.closest('.fc'); if(!c || e.pointerType !== 'mouse' || e.button !== 0) return;
    const [i,h] = c.dataset.k.split('|').map(Number);
    drag = {i, h, base:new Set(F.sel), add:!F.sel.has(c.dataset.k), moved:false};
  });
  grid.addEventListener('pointerover', e => {
    if(!drag) return; const c = e.target.closest('.fc'); if(!c) return;
    const [i,h] = c.dataset.k.split('|').map(Number);
    if(i === drag.i && h === drag.h && !drag.moved) return;
    drag.moved = true;
    const s = new Set(drag.base);
    for(let a=Math.min(i,drag.i); a<=Math.max(i,drag.i); a++) for(let b=Math.min(h,drag.h); b<=Math.max(h,drag.h); b++) drag.add ? s.add(fk(a,b)) : s.delete(fk(a,b));
    F.sel = s; paintSel();
  });
  grid.addEventListener('click', e => {
    if(drag && drag.ignoreClick) return;
    const c = e.target.closest('.fc, .dh, .hh2'); if(!c) return;
    let ks;
    if(c.classList.contains('fc')) ks = [c.dataset.k];
    else if(c.classList.contains('dh')) ks = Array.from({length:NH}, (_,h) => fk(+c.dataset.col, h));
    else ks = DAYS.map((_,i) => fk(i, +c.dataset.row));
    const all = ks.every(k => F.sel.has(k));
    ks.forEach(k => all ? F.sel.delete(k) : F.sel.add(k));
    paintSel();
  });
}
function drawBar(){
  const bar = $('#fBar'), n = F.sel.size;
  if(!n){ bar.hidden = true; F.mode = ''; return; }
  bar.hidden = false;
  const reuse = [...F.reasons.entries()];
  bar.innerHTML = `<div class="ah"><b>${n} ${n>1?'faixas selecionadas':'faixa selecionada'}</b><button type="button" class="linkbtn" id="fClr">Limpar seleção</button></div>
    ${F.mode === 'no' ? `<label class="ff">Por que a loja não pode receber nessas faixas?<textarea id="fDraft" maxlength="1500" placeholder="Escreva com as suas palavras">${esc(F.draft)}</textarea></label>
      ${reuse.length ? `<div class="reuse"><span>Usar um motivo já escrito:</span>${reuse.map(([id,r]) => `<button type="button" data-r="${id}" title="${esc(r.txt)}">${rLabel(id)}. ${esc(r.txt)}</button>`).join('')}</div>` : ''}
      <div class="acts"><button type="button" class="fbtn no" id="fApply">Aplicar motivo</button><button type="button" class="fbtn ghost" id="fBack">Voltar</button></div>`
    : `<div class="acts"><button type="button" class="fbtn yes" id="fYes">${ICON_OK}Recebe</button><button type="button" class="fbtn no" id="fNo">${ICON_X}Não recebe</button></div>`}`;
  $('#fClr').onclick = () => { F.sel.clear(); F.mode = ''; paintSel(); };
  if(F.mode === 'no'){
    const ta = $('#fDraft');
    ta.oninput = e => { F.draft = e.target.value; e.target.closest('.ff').classList.remove('bad'); $('#fErr').textContent=''; };
    if(matchMedia('(pointer:fine)').matches) ta.focus({preventScroll:true});
    $('#fBack').onclick = () => { F.mode = ''; drawBar(); };
    $('#fApply').onclick = () => {
      const txt = F.draft.trim();
      if(txt.length < 5){ ta.closest('.ff').classList.add('bad'); ta.focus(); $('#fErr').textContent = 'Escreva o motivo (pelo menos 5 caracteres).'; return; }
      let id = [...F.reasons.entries()].find(([,r]) => r.txt.trim().toLowerCase() === txt.toLowerCase())?.[0];
      if(!id){ id = 'r' + (F.nextR++); F.reasons.set(id, {txt}); }
      applySel(id); F.draft = '';
    };
    bar.querySelectorAll('.reuse button').forEach(b => b.onclick = () => applySel(b.dataset.r));
  } else {
    $('#fYes').onclick = () => applySel('S');
    $('#fNo').onclick = () => { F.mode = 'no'; drawBar(); };
  }
}
function applySel(v){
  F.sel.forEach(k => { const [i,h] = k.split('|').map(Number); F.cells[i][h] = v; });
  F.sel.clear(); F.mode = ''; cleanReasons(); $('#fErr').textContent = ''; fRefresh();
}
function cleanReasons(){ [...F.reasons.keys()].forEach(id => { if(!keysOfR(id).length) F.reasons.delete(id); }); }
function drawShortcuts(){
  const nulls = F.cells.flat().filter(v => v === null).length;
  const monDone = F.cells[0].every(v => v !== null), emptyDays = F.cells.slice(1).filter(r => r.every(v => v === null)).length;
  $('#fSc').innerHTML = `<button type="button" class="sc" id="scCopy" ${monDone && emptyDays ? '' : 'disabled'} title="Responda a segunda inteira para liberar">Copiar segunda para os dias vazios${emptyDays && monDone ? ` (${emptyDays})` : ''}</button>
    <button type="button" class="sc" id="scYes" ${nulls ? '' : 'disabled'}>${nulls ? `Marcar as ${nulls} sem resposta como "Recebe"` : 'Todas as faixas respondidas'}</button>`;
  $('#scCopy').onclick = () => { for(let i=1;i<6;i++) if(F.cells[i].every(v => v === null)) F.cells[i] = F.cells[0].slice(); fRefresh(); };
  $('#scYes').onclick = () => {
    if(nulls > 12 && !confirm(`Marcar ${nulls} faixas sem resposta como "Recebe"?`)) return;
    F.cells = F.cells.map(r => r.map(v => v === null ? 'S' : v)); fRefresh();
  };
}
function drawReasons(){
  const sec = $('#fRsec'), list = [...F.reasons.entries()];
  sec.hidden = !list.length; if(!list.length) return;
  $('#fReasons').innerHTML = list.map(([id,r]) => `<div class="jitem" data-r="${id}"><div class="jt"><b class="rn">${rLabel(id)}</b><span class="wins">${winLabel(keysOfR(id)).map(w=>`<span>${w}</span>`).join('')}</span><button type="button" class="linkbtn undo">Desfazer</button></div>
    <label class="ff">Motivo<textarea class="jtxt" maxlength="1500">${esc(r.txt)}</textarea></label></div>`).join('');
  $('#fReasons').querySelectorAll('.jitem').forEach(it => {
    const id = it.dataset.r;
    it.querySelector('.jtxt').oninput = e => { F.reasons.get(id).txt = e.target.value; e.target.closest('.ff').classList.remove('bad'); };
    it.querySelector('.undo').onclick = () => { F.cells = F.cells.map(r => r.map(v => v === id ? null : v)); F.reasons.delete(id); fRefresh(); };
  });
}
function drawSum(){
  const n = answered(), btn = $('#fSend');
  btn.disabled = n < NC;
  $('#fSum').innerHTML = n === NC ? '<strong>100% respondido.</strong> Pronto para enviar.' : `Faltam <strong>${NC-n} ${NC-n>1?'faixas':'faixa'}</strong> para enviar.`;
}
async function submitForm(){
  const err = $('#fErr'); err.textContent = ''; let bad = null;
  const mark = el => { el.closest('.ff').classList.add('bad'); bad = bad || el; };
  if(F.nome.trim().length < 3) mark($('#fNome'));
  if(F.cargo.trim().length < 3) mark($('#fCargo'));
  if(answered() < NC){ err.textContent = 'Ainda há faixas sem resposta.'; return; }
  document.querySelectorAll('#fReasons .jitem').forEach(it => { if(F.reasons.get(it.dataset.r).txt.trim().length < 5) mark(it.querySelector('.jtxt')); });
  if(bad){ err.textContent = 'Preencha os campos destacados.'; bad.focus(); return; }
  if(!FORM_ENDPOINT){ err.textContent = 'O envio ainda não foi configurado. Avise a equipe responsável pela pesquisa.'; return; }
  const payload = { r:F.slug, t:F.token, loja:F.code, nome:F.nome.trim(), cargo:F.cargo.trim(),
    dias: F.cells.map(row => row.map(v => v === 'S' ? 'S' : 'N').join('')),
    motivos: [...F.reasons.entries()].map(([id,r]) => ({texto:r.txt.trim(), celulas:keysOfR(id)})) };
  const btn = $('#fSend'); btn.disabled = true; btn.textContent = 'Enviando…';
  try{
    const r = await fetch(FORM_ENDPOINT, {method:'POST', body:JSON.stringify(payload)});
    const j = await r.json();
    if(!j.ok) throw new Error(j.erro || 'Não foi possível registrar a resposta.');
    F.sent = j.envio;
    RESP[F.code] = parseResp({[F.code]: {envio:j.envio, quando:'agora', nome:payload.nome, cargo:payload.cargo, d:payload.dias, m:payload.motivos.map(m => [m.texto, m.celulas])}})[F.code];
    renderForm(); scrollTo({top:0, behavior:'instant'});
  }catch(e){
    err.textContent = (e && e.message && !/fetch|network|json/i.test(e.message)) ? e.message : 'Não foi possível enviar agora. Verifique a internet e tente de novo.';
    btn.disabled = false; btn.textContent = 'Enviar resposta';
  }
}

/* ---------- Páginas ---------- */
const PAGES = ['resumo','regionais','lojas','grupos','motivos'];
let cur = 'resumo';
function refreshAll(){
  dstat();
  if(cur === 'responder'){ if(!/[?&]loja=/.test(location.hash)) openForm(location.hash.slice(1)); return; }
  renderResumo(); renderRegionais(); renderLojas(); renderGrupos(); renderMotivos();
}
function show(id, push){
  const raw = String(id || ''), base = raw.split('?')[0];
  if(md.open) md.close();
  if(base === 'responder'){
    cur = 'responder'; document.body.classList.add('form-mode');
    document.querySelectorAll('main>section').forEach(s => s.classList.toggle('active', s.id === 'responder'));
    document.title = 'Pesquisa de janelas de recebimento';
    openForm(raw); scrollTo({top:0, behavior:'instant'}); return;
  }
  document.body.classList.remove('form-mode');
  cur = PAGES.includes(base) ? base : 'resumo';
  document.querySelectorAll('main>section').forEach(s => s.classList.toggle('active', s.id === cur));
  document.querySelectorAll('.nav a, .mnav a').forEach(a => a.getAttribute('href') === '#'+cur ? a.setAttribute('aria-current','page') : a.removeAttribute('aria-current'));
  document.title = `${({resumo:'Resumo',regionais:'Regionais',lojas:'Lojas',grupos:'Agrupamentos',motivos:'Motivos'})[cur]}: Janelas de recebimento das lojas`;
  if(push && location.hash !== '#'+cur) history.pushState(null, '', '#'+cur);
  scrollTo({top:0, behavior:'instant'});
}
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]'); if(!a) return;
  const id = a.getAttribute('href').slice(1);
  if(PAGES.includes(id)){ e.preventDefault(); show(id, true); }
});
addEventListener('popstate', () => show(location.hash.slice(1)));
addEventListener('hashchange', () => show(location.hash.slice(1)));
if('scrollRestoration' in history) history.scrollRestoration = 'manual';

$('#themeBtn').onclick = () => {
  const root = document.documentElement;
  const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = dark ? 'light' : 'dark';
  try{ localStorage.setItem('theme', root.dataset.theme); }catch(e){}
};
try{ const t = localStorage.getItem('theme'); if(t) document.documentElement.dataset.theme = t; }catch(e){}

$('#foot').textContent = `${STORES.length} lojas ativas em ${UFS.length} estados, ${REGS.length} regionais. Pesquisa por faixa horária de uma hora, das 05h às 23h, de segunda a sábado; domingo não tem recebimento. A loja 0173 S.SPMarket está fechada e não entra na pesquisa.`;
show(location.hash.slice(1) || 'resumo');
refreshAll();
loadResp();