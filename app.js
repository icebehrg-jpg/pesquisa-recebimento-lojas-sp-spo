"use strict";

/* ===== CONFIGURAÇÃO: cole aqui a URL do Apps Script (termina em /exec) ===== */
const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxE3hKLXwcSvDKvZekwUg7BKlC7wxgUnz5GKd35obDb1XehH5SReuCUy-MwNPfuUQe_/exec';
/* ============================================================================ */
const STORES = [{ "code": "0003", "name": "Ipiranga", "full": "0003 - SP-SPO-Ipiranga", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Bom Pastor, 2.912", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Capital Sul 1", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0007", "name": "Lapa", "full": "0007 - SP-SPO-Lapa", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Luiz Gatti, 50", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Capital Norte Oeste", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0008", "name": "Tuiuti", "full": "0008 - SP-SPO-Tuiuti", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Tuiuti, 2.516 - Tatuapé", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Leste 1", "truck": "Toco", "ativo": "PQ 3 ALTO" }, { "code": "0009", "name": "R.Iguatemi", "full": "0009 - SP-SPO-R.Iguatemi", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Iguatemi, 321", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Oeste", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0010", "name": "Pompeia", "full": "0010 - SP-SPO-Pompeia", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Francisco Matarazzo, 2.000", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Capital Norte Oeste", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0011", "name": "S.Trimais", "full": "0011 - SP-SPO-S.Trimais", "uf": "SP", "city": "Sao Paulo", "addr": "Avenida Tucuruvi, 220 - 2o. piso", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Norte 1", "truck": "Truck", "ativo": "PQ 2 ALTO" }, { "code": "0013", "name": "V.Mariana", "full": "0013 - SP-SPO-V.Mariana", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Domingos de Morais, 1.118", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Capital Sul 1", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0015", "name": "Jurubatuba", "full": "0015 - SP-SBC-Jurubatuba", "uf": "SP", "city": "Sao Bernardo do Campo", "addr": "Rua Jurubatuba, 646 - SÃO BERNARDO - 09725-220", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "Grande São Paulo ABC 1", "truck": "", "ativo": "" }, { "code": "0016", "name": "A.Neves", "full": "0016 - SP-CAM-A.Neves", "uf": "SP", "city": "Campinas", "addr": "Av. Andrade Neves, 533 e 555", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Interior Campinas 2", "truck": "", "ativo": "" }, { "code": "0019", "name": "AnieloPratici", "full": "0019 - SP-GRU-AnieloPratici", "uf": "SP", "city": "Guarulhos", "addr": "Av. Aniello Pratici, 520", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "Grande São Paulo Guarulhos 1", "truck": "", "ativo": "" }, { "code": "0020", "name": "Av.Industrial", "full": "0020 - SP-STA-Av.Industrial", "uf": "SP", "city": "Santo Andre", "addr": "Av. Industrial, 681", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "Grande São Paulo ABC 2", "truck": "", "ativo": "" }, { "code": "0021", "name": "Centro", "full": "0021 - SP-RIB-Centro", "uf": "SP", "city": "Ribeirao Preto", "addr": "Rua Américo Brasiliense, 711", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Ribeirão", "truck": "", "ativo": "" }, { "code": "0022", "name": "Moema", "full": "0022 - SP-SPO-Moema", "uf": "SP", "city": "Sao Paulo", "addr": "Av. dos Imarés, 266", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Sul 2", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0023", "name": "Vergueiro", "full": "0023 - SP-SPO-Vergueiro", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Vergueiro, 3.305", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Capital Sul 1", "truck": "Toco", "ativo": "GD 3 ALTO" }, { "code": "0024", "name": "S.NovaAmerica", "full": "0024 - RJ-RIO-S.NovaAmerica", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Av. Pastor Martin Luther King Jr, 126", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Norte", "truck": "", "ativo": "" }, { "code": "0025", "name": "ItaAvJPessego", "full": "0025 - SP-SPO-ItaAvJPessego", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Sabbado DAngelo, 1980", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Leste 2", "truck": "Truck", "ativo": "PQ 2 ALTO" }, { "code": "0026", "name": "Santana", "full": "0026 - SP-SPO-Santana", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Voluntários da Pátria, 1.483", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Norte 1", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0027", "name": "Centro", "full": "0027 - RJ-RIO-Centro", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Av. Passos, 42, 44 e 46 - Centro", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Sul", "truck": "", "ativo": "" }, { "code": "0028", "name": "GoianiaJdGoias", "full": "0028 - GO-GO-GoianiaJdGoias", "uf": "GO", "city": "Goiania", "addr": "Av. I, 208, Quadra B-37, Lote 02 - Jardim Goiás", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Goias 2", "truck": "", "ativo": "" }, { "code": "0029", "name": "S.Bauru", "full": "0029 - SP-BAU-S.Bauru", "uf": "SP", "city": "Bauru", "addr": "Rua Henrique Savi, 55 - quadra 15", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Bauru", "truck": "", "ativo": "" }, { "code": "0030", "name": "S.Aricanduva", "full": "0030 - SP-SPO-S.Aricanduva", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Aricanduva, 5.555", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Leste 2", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0031", "name": "AvPaulistaTri", "full": "0031 - SP-SPO-AvPaulistaTri", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Paulista, 1.439 - Loja L01", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Capital Central Paulista", "truck": "Toco", "ativo": "ROLL GRANDE" }, { "code": "0032", "name": "S.MarketPlace", "full": "0032 - SP-SPO-S.MarketPlace", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Doutor Chucri Zaidan, 902 -Subsolo", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Sul 2", "truck": "Truck", "ativo": "PQ 2 ALTO" }, { "code": "0033", "name": "Fco.Morato", "full": "0033 - SP-SPO-Fco.Morato", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Professor Francisco Morato, 1,092", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Capital Oeste", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0034", "name": "Savassi", "full": "0034 - MG-BHZ-Savassi", "uf": "MG", "city": "Belo Horizonte", "addr": "Av. do Contorno, 5.873 - Savassi", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Minas Gerais BH", "truck": "", "ativo": "" }, { "code": "0035", "name": "EzequielRamos", "full": "0035 - SP-BAU-EzequielRamos", "uf": "SP", "city": "Bauru", "addr": "Rua Ezequiel Ramos, 5-25", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Bauru", "truck": "", "ativo": "" }, { "code": "0036", "name": "Mal.Deodoro", "full": "0036 - SP-SBC-Mal.Deodoro", "uf": "SP", "city": "Sao Bernardo do Campo", "addr": "Rua Marechal Deodoro, 2.177", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "Grande São Paulo ABC 1", "truck": "", "ativo": "" }, { "code": "0037", "name": "Taboao", "full": "0037 - SP-TAB-Taboao", "uf": "SP", "city": "Taboao da Serra", "addr": "Praça Nicola Vivilechio, 3", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "Grande São Paulo", "truck": "", "ativo": "" }, { "code": "0038", "name": "S.Interlagos", "full": "0038 - SP-SPO-S.Interlagos", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Interlagos, 2.255", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Sul 4", "truck": "Toco", "ativo": "GD 2 ALTO" }, { "code": "0040", "name": "Araguaia", "full": "0040 - SP-BAR-Araguaia", "uf": "SP", "city": "Barueri", "addr": "Alameda Araguaia, 2.179", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "Grande São Paulo Barueri", "truck": "", "ativo": "" }, { "code": "0041", "name": "Centro", "full": "0041 - SP-SJR-Centro", "uf": "SP", "city": "Sao Jose do Rio Preto", "addr": "Rua General Glicério, 3.112 - Centro", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior São José", "truck": "", "ativo": "" }, { "code": "0043", "name": "S.Cantareira", "full": "0043 - SP-SPO-S.Cantareira", "uf": "SP", "city": "Sao Paulo", "addr": "Av Raimundo Pereira de Magalhães, 11001", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Capital Norte Oeste", "truck": "Truck", "ativo": "PQ 2 ALTO" }, { "code": "0045", "name": "S.Penha", "full": "0045 - SP-SPO-S.Penha", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Dr. João Ribeiro, 304 - Térreo", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Leste 1", "truck": "Toco", "ativo": "PQ 2 ALTO" }, { "code": "0046", "name": "S.Piracicaba", "full": "0046 - SP-PIR-S.Piracicaba", "uf": "SP", "city": "Piracicaba", "addr": "Av. Limeira, 722", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Limeira", "truck": "", "ativo": "" }, { "code": "0047", "name": "Leopoldina", "full": "0047 - SP-SPO-Leopoldina", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Imperatriz Leopoldina, 1.170", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Capital Oeste", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0049", "name": "N.DÁvila", "full": "0049 - SP-SJC-N.DÁvila", "uf": "SP", "city": "Sao Jose dos Campos", "addr": "Av. Nelson D Ávila, 1.005 - Jd. São Dimas", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Interior Taubaté", "truck": "", "ativo": "" }, { "code": "0050", "name": "S.Estação", "full": "0050 - PR-CTB-S.Estação", "uf": "PR", "city": "Curitiba", "addr": "Av. 7 de Setembro, 2.775 - Lj 1151", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Parana CTB 1", "truck": "", "ativo": "" }, { "code": "0051", "name": "GalCarneiro", "full": "0051 - SP-SOR-GalCarneiro", "uf": "SP", "city": "Sorocaba", "addr": "Av. General Carneiro, 875/877", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Interior Sorocaba", "truck": "", "ativo": "" }, { "code": "0052", "name": "Centro", "full": "0052 - SP-MAR-Centro", "uf": "SP", "city": "Marilia", "addr": "R. São Luiz, 1.085 - Alto Cafezal", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Bauru", "truck": "", "ativo": "" }, { "code": "0053", "name": "Seminário", "full": "0053 - PR-CTB-Seminário", "uf": "PR", "city": "Curitiba", "addr": "Av. Nossa Senhora Aparecida, 582", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Parana CTB 1", "truck": "", "ativo": "" }, { "code": "0054", "name": "NiloPeçanha", "full": "0054 - RJ-NIG-NiloPeçanha", "uf": "RJ", "city": "Nova Iguaçu", "addr": "Av. Nilo Peçanha, 639 - Centro", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "", "truck": "", "ativo": "" }, { "code": "0055", "name": "S.Iguatemi", "full": "0055 - SP-CAM-S.Iguatemi", "uf": "SP", "city": "Campinas", "addr": "Av. Iguatemi, 777 - Primeiro Piso - Loja 1", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Interior Campinas 1", "truck": "", "ativo": "" }, { "code": "0056", "name": "A.Pinheiro", "full": "0056 - SP-SPO-A.Pinheiro", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Adolfo Pinheiro, 886", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Sul 3", "truck": "Truck", "ativo": "PQ 3 ALTO" }, { "code": "0057", "name": "V.Maria", "full": "0057 - SP-SPO-V.Maria", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Guilherme Cotching, 563", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Norte 1", "truck": "Truck", "ativo": "GD 2 ALTO" }, { "code": "0058", "name": "S.Bangu", "full": "0058 - RJ-RIO-S.Bangu", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Rua Fonseca, 240 - Loja 154", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Oeste", "truck": "", "ativo": "" }, { "code": "0059", "name": "Com.Norte", "full": "0059 - DF-BRA-Com.Norte", "uf": "DF", "city": "Brasilia", "addr": "SCN Quadra 01, Bloco B, Setor Comercial Norte - Ce", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Brasilia", "truck": "", "ativo": "" }, { "code": "0060", "name": "Freguesia", "full": "0060 - SP-SPO-Freguesia", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Otaviano Alves de Lima, 4.694", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Capital Norte Oeste", "truck": "Truck", "ativo": "PQ 3 ALTO" }, { "code": "0061", "name": "V.Guilherme", "full": "0061 - SP-SPO-V.Guilherme", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Morvan Dias de Figueiredo, 2.305", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Norte 1", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0062", "name": "S.MauaPlaza", "full": "0062 - SP-MAU-S.MauaPlaza", "uf": "SP", "city": "Maua", "addr": "Av. Gov. Mario Covas Jr, 1 - Lj 181", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "Grande São Paulo ABC 2", "truck": "", "ativo": "" }, { "code": "0063", "name": "S.Jacareí", "full": "0063 - SP-JAC-S.Jacareí", "uf": "SP", "city": "Jacarei", "addr": "Rua Olimpio Catão, 500 - Centro", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Interior Taubaté", "truck": "", "ativo": "" }, { "code": "0064", "name": "LiberoBadaro", "full": "0064 - SP-SPO-LiberoBadaro", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Líbero Badaró, 309", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Capital Central", "truck": "Toco", "ativo": "ROLL PEQ" }, { "code": "0065", "name": "Mogi", "full": "0065 - SP-MOG-Mogi", "uf": "SP", "city": "Mogi das Cruzes", "addr": "R. Manuel de Oliveira, 310", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "Grande São Paulo Guarulhos 1", "truck": "", "ativo": "" }, { "code": "0066", "name": "DiademaCentro", "full": "0066 - SP-DIA-DiademaCentro", "uf": "SP", "city": "Diadema", "addr": "Av. Fabio Eduardo Ramos Esquivel, 50", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "Grande São Paulo ABC 1", "truck": "", "ativo": "" }, { "code": "0067", "name": "S.União", "full": "0067 - SP-OSA-S.União", "uf": "SP", "city": "Osasco", "addr": "Av. dos Autonomistas, 1400", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "Grande São Paulo Osasco", "truck": "", "ativo": "" }, { "code": "0068", "name": "SantaCatarina", "full": "0068 - SP-SPO-SantaCatarina", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Santa Catarina, 1.850", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Sul 4", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0069", "name": "GranjaViana", "full": "0069 - SP-COT-GranjaViana", "uf": "SP", "city": "Cotia", "addr": "R.Ushima Kira, 87 - Km 23,5 R.Tavares", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "Grande São Paulo", "truck": "", "ativo": "" }, { "code": "0070", "name": "S.Polo", "full": "0070 - SP-IND-S.Polo", "uf": "SP", "city": "Indaiatuba", "addr": "Av. Filtros Mann, 670 - Jd. Tropical", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Interior Indaiatuba", "truck": "", "ativo": "" }, { "code": "0071", "name": "Sao Caetano", "full": "0071 - SP-SCS-Sao Caetano", "uf": "SP", "city": "Sao Caetano do Sul", "addr": "Av. Goiás, 101 - Santo Antònio", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "Grande São Paulo ABC 2", "truck": "", "ativo": "" }, { "code": "0073", "name": "S.NovoShop", "full": "0073 - SP-RIB-S.NovoShop", "uf": "SP", "city": "Ribeirao Preto", "addr": "Av. Presidente Kennedy, 1.500", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Ribeirão", "truck": "", "ativo": "" }, { "code": "0074", "name": "Guanab.Barra", "full": "0074 - RJ-RIO-Guanab.Barra", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Av. das Américas, 3.501 - Box 1", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro Barra", "truck": "", "ativo": "" }, { "code": "0075", "name": "S.GrandeRio", "full": "0075 - RJ-SJM-S.GrandeRio", "uf": "RJ", "city": "Sao Joao de Meriti", "addr": "R. Maria Soares Sendas, 111 - Piso 01", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro trecho B", "truck": "", "ativo": "" }, { "code": "0076", "name": "Sao Miguel", "full": "0076 - SP-SPO-Sao Miguel", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Marechal Tito, 1.823", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Leste 2", "truck": "Toco", "ativo": "PQ 2 ALTO" }, { "code": "0077", "name": "S.Suzano", "full": "0077 - SP-SUZ-S.Suzano", "uf": "SP", "city": "Suzano", "addr": "Rua Sete de Setembro, 555 - Lj QE-01", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "Grande São Paulo Guarulhos 1", "truck": "", "ativo": "" }, { "code": "0078", "name": "DomAguirre", "full": "0078 - SP-SOR-DomAguirre", "uf": "SP", "city": "Sorocaba", "addr": "Av. Dom Aguirre, 2.121", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Interior Sorocaba", "truck": "", "ativo": "" }, { "code": "0079", "name": "N.Cantareira", "full": "0079 - SP-SPO-N.Cantareira", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Nova Cantareira, 1.776 - Tucuruvi", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Norte 1", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0081", "name": "S.Boulevard", "full": "0081 - RJ-RIO-S.Boulevard", "uf": "RJ", "city": "Rio de Janeiro", "addr": "R. Barão de São Francisco, 236 - Piso 2", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Norte", "truck": "", "ativo": "" }, { "code": "0082", "name": "S.PraiaBelas", "full": "0082 - RS-POA-S.PraiaBelas", "uf": "RS", "city": "Porto Alegre", "addr": "Av. Praia de Belas, 1181 - Andar 03", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Rio Grande do Sul", "truck": "", "ativo": "" }, { "code": "0083", "name": "S.Litoral", "full": "0083 - SP-PGR-S.Litoral", "uf": "SP", "city": "Praia Grande", "addr": "Av. Ayrton Senna da Silva, 1.511", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Interior Litoral", "truck": "", "ativo": "" }, { "code": "0084", "name": "S.Eldorado", "full": "0084 - SP-SPO-S.Eldorado", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Rebouças, 3.970 - Loja 2024", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Oeste", "truck": "Toco", "ativo": "GD 2 ALTO" }, { "code": "0085", "name": "S.Mooca", "full": "0085 - SP-SPO-S.Mooca", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Cap. Pacheco Chaves, 313 - piso L1", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Leste 1", "truck": "Toco", "ativo": "PQ 2 ALTO" }, { "code": "0086", "name": "S.Niteroi", "full": "0086 - RJ-NIT-S.Niteroi", "uf": "RJ", "city": "Niteroi", "addr": "R. Quinze de Novembro, 8 - Centro", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro trecho B", "truck": "", "ativo": "" }, { "code": "0087", "name": "Adhem.Barros", "full": "0087 - SP-GUA-Adhem.Barros", "uf": "SP", "city": "Guaruja", "addr": "Av. Adhemar de Barros, 1.255", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Interior Litoral", "truck": "", "ativo": "" }, { "code": "0088", "name": "S.PátioLimeir", "full": "0088 - SP-LIM-S.PátioLimeir", "uf": "SP", "city": "Limeira", "addr": "Rua Carlos Gomes, 1.321- Lj.336 - Centro", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Limeira", "truck": "", "ativo": "" }, { "code": "0090", "name": "S.Garten", "full": "0090 - SC-JOI-S.Garten", "uf": "SC", "city": "Joinville", "addr": "Av. Rolf Wiest, 333 - Bom Retiro", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Santa Catarina", "truck": "", "ativo": "" }, { "code": "0091", "name": "Alvarenga", "full": "0091 - SP-SPO-Alvarenga", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Alvarenga, 1040", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Capital Oeste", "truck": "Truck", "ativo": "PQ 2 ALTO" }, { "code": "0092", "name": "S.Boulevard", "full": "0092 - MG-BHZ-S.Boulevard", "uf": "MG", "city": "Belo Horizonte", "addr": "Av. dos Andradas, 3000 - Loja 03/04", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Minas Gerais BH", "truck": "", "ativo": "" }, { "code": "0093", "name": "V.Formosa", "full": "0093 - SP-SPO-V.Formosa", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Doutor Eduardo Cotching, 841", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Leste 1", "truck": "Toco", "ativo": "PQ 2 ALTO" }, { "code": "0094", "name": "S.ParkBarueri", "full": "0094 - SP-BAR-S.ParkBarueri", "uf": "SP", "city": "Barueri", "addr": "R Gal Div Pedro Rodrigues da Silva, 400, 06440-180", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "Grande São Paulo Barueri", "truck": "", "ativo": "" }, { "code": "0095", "name": "S.JardimNorte", "full": "0095 - MG-JDF-S.JardimNorte", "uf": "MG", "city": "Juiz de Fora", "addr": "Av. Brasil, 6.345", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Minas Gerais Juiz", "truck": "", "ativo": "" }, { "code": "0096", "name": "S.Iguatemi", "full": "0096 - SP-BAR-S.Iguatemi", "uf": "SP", "city": "Barueri", "addr": "Alameda Rio Negro, 110 - Barueri", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "Grande São Paulo Barueri", "truck": "", "ativo": "" }, { "code": "0098", "name": "S.Tivoli", "full": "0098 - SP-STB-S.Tivoli", "uf": "SP", "city": "Santa Bárbara D'Oeste", "addr": "R. do Ósmio, 699", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Limeira", "truck": "", "ativo": "" }, { "code": "0099", "name": "Jundiaí", "full": "0099 - SP-JUN-Jundiaí", "uf": "SP", "city": "Jundiai", "addr": "Av. Jundiai, 1.465 - Jardim Ana Maria", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Interior Jundiai", "truck": "", "ativo": "" }, { "code": "0100", "name": "Sao Carlos", "full": "0100 - SP-SCA-Sao Carlos", "uf": "SP", "city": "Sao Carlos", "addr": "R. Belarmino Indalécio de Souza, 79", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Araçatuba", "truck": "", "ativo": "" }, { "code": "0102", "name": "S.Boulevard", "full": "0102 - RJ-SGO-S.Boulevard", "uf": "RJ", "city": "São Gonçalo", "addr": "Av. Presidente Kennedy, 425", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro trecho B", "truck": "", "ativo": "" }, { "code": "0103", "name": "S.Carioca", "full": "0103 - RJ-RIO-S.Carioca", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Av. Vicente de Carvalho, 909 - Loja 102", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Norte", "truck": "", "ativo": "" }, { "code": "0105", "name": "S.Riomar", "full": "0105 - PE-REC-S.Riomar", "uf": "PE", "city": "Recife", "addr": "Av Republica do Libano, S/N - Pina", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Pernanbuco", "truck": "", "ativo": "" }, { "code": "0106", "name": "S.Palladium", "full": "0106 - PR-PTG-S.Palladium", "uf": "PR", "city": "Ponta Grossa", "addr": "R. Ermelino Leão, 703 - Olarias", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Parana CTB 2", "truck": "", "ativo": "" }, { "code": "0107", "name": "S.Center", "full": "0107 - MG-UBL-S.Center", "uf": "MG", "city": "Uberlandia", "addr": "Av. João Naves de Avila, 1.331 - Loja 1.270", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Minas Gerais Uberlandia", "truck": "", "ativo": "" }, { "code": "0108", "name": "S.ParkLagos", "full": "0108 - RJ-CBF-S.ParkLagos", "uf": "RJ", "city": "Cabo Frio", "addr": "R. Henrique Terra, 1.700 - Mega Loja 04 - Piso 01", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro Trecho C", "truck": "", "ativo": "" }, { "code": "0109", "name": "S.BelaVista", "full": "0109 - BA-SAL-S.BelaVista", "uf": "BA", "city": "Salvador", "addr": "Al. Euvaldo Luz, 92 - L04.1 - Horto B.Vista", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Bahia", "truck": "", "ativo": "" }, { "code": "0110", "name": "S.Londrina", "full": "0110 - PR-LON-S.Londrina", "uf": "PR", "city": "Londrina", "addr": "Av. Theodoro Victorelli, 150 - Piso Térreo", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "Parana Lon", "truck": "", "ativo": "" }, { "code": "0111", "name": "S.Itaquera", "full": "0111 - SP-SPO-S.Itaquera", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Jose Pinheiro Borges, S/N", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Leste 2", "truck": "Truck", "ativo": "ROLL GRANDE" }, { "code": "0112", "name": "MariaAntônia", "full": "0112 - SP-SPO-MariaAntônia", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Maria Antonia, 108 - Vila Buarque", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Capital Central", "truck": "Toco", "ativo": "PQ 2 ALTO" }, { "code": "0113", "name": "S.Uberaba", "full": "0113 - MG-UBE-S.Uberaba", "uf": "MG", "city": "Uberaba", "addr": "Av. Santa Beatriz da Silva, 1570/1576/1582", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Minas Gerais Uberlandia", "truck": "", "ativo": "" }, { "code": "0114", "name": "S.Iguatemi", "full": "0114 - SP-RIB-S.Iguatemi", "uf": "SP", "city": "Ribeirao Preto", "addr": "R. Luiz Eduardo Toledo Prado, 900", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Ribeirão", "truck": "", "ativo": "" }, { "code": "0115", "name": "S.DCaxias", "full": "0115 - RJ-DCX-S.DCaxias", "uf": "RJ", "city": "Duque de Caxias", "addr": "Rod. Washington Luiz, 2895 - Loja 201I", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro trecho B", "truck": "", "ativo": "" }, { "code": "0116", "name": "Copacabana", "full": "0116 - RJ-RIO-Copacabana", "uf": "RJ", "city": "Rio de Janeiro", "addr": "R. Barata Ribeiro, 181", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Sul", "truck": "", "ativo": "" }, { "code": "0117", "name": "S.Sulacap", "full": "0117 - RJ-RIO-S.Sulacap", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Av. Marechal Fontenele, 3.545", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Oeste", "truck": "", "ativo": "" }, { "code": "0118", "name": "S.Esplanada", "full": "0118 - SP-SOR-S.Esplanada", "uf": "SP", "city": "Votorantim", "addr": "Av. Gisele Constantino, 1.850 - Lj 229A", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Interior Sorocaba", "truck": "", "ativo": "" }, { "code": "0119", "name": "S.ABC", "full": "0119 - SP-STA-S.ABC", "uf": "SP", "city": "Santo Andre", "addr": "Av. Pereira Barreto, 42 - Piso Loft", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "Grande São Paulo ABC 2", "truck": "", "ativo": "" }, { "code": "0120", "name": "S.Taguat", "full": "0120 - DF-TAG-S.Taguat", "uf": "DF", "city": "Brasilia", "addr": "QS 01 Rua 210, Lote 40", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Brasilia", "truck": "", "ativo": "" }, { "code": "0121", "name": "S.Goytacazes", "full": "0121 - RJ-GOY-S.Goytacazes", "uf": "RJ", "city": "Campos dos Goytacazes", "addr": "Av. Dr. Silvio Bastos Tavares, 316/338 - Lj. B/C/D", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro Trecho C", "truck": "", "ativo": "" }, { "code": "0122", "name": "S.Metrop.Barr", "full": "0122 - RJ-RIO-S.Metrop.Barr", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Av. Abelardo Bueno, 1300 - Loja 1", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro Barra", "truck": "", "ativo": "" }, { "code": "0123", "name": "BarroPreto", "full": "0123 - MG-BHZ-BarroPreto", "uf": "MG", "city": "Belo Horizonte", "addr": "Av. do Contorno, 10.623 - Barro Preto", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Minas Gerais BH", "truck": "", "ativo": "" }, { "code": "0124", "name": "Giov.Gronchi", "full": "0124 - SP-SPO-Giov.Gronchi", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Giovanni Gronchi, 6333 - V.Andrade", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Capital Sul 3", "truck": "Truck", "ativo": "GD 3 ALTO" }, { "code": "0125", "name": "P.Faccini", "full": "0125 - SP-GRU-P.Faccini", "uf": "SP", "city": "Guarulhos", "addr": "Av. Paulo Faccini, 1107 - Macedo", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "Grande São Paulo Guarulhos 1", "truck": "", "ativo": "" }, { "code": "0126", "name": "S.CampoGrande", "full": "0126 - RJ-RIO-S.CampoGrande", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Estrada do Monteiro, 1200 - Loja 203P", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Oeste", "truck": "", "ativo": "" }, { "code": "0127", "name": "FashionMall", "full": "0127 - RJ-RIO-FashionMall", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Estrada da Gavea , 899 - LOJA 110", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro Sul", "truck": "", "ativo": "" }, { "code": "0128", "name": "Morumbi", "full": "0128 - SP-SPO-Morumbi", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Morumbi, 6.843", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Sul 2", "truck": "Truck", "ativo": "PQ 2 ALTO" }, { "code": "0130", "name": "S.Tiete", "full": "0130 - SP-SPO-S.Tiete", "uf": "SP", "city": "Sao Paulo", "addr": "Av Raimundo Pereira de Magalhaes, 1465", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Capital Norte Oeste", "truck": "Truck", "ativo": "ROLL GRANDE" }, { "code": "0131", "name": "S.Iguatemi", "full": "0131 - SP-SJR-S.Iguatemi", "uf": "SP", "city": "Sao Jose do Rio Preto", "addr": "Av. Pres. Juscelino Kubitschek de Oliveira, 5.000", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior São José", "truck": "", "ativo": "" }, { "code": "0132", "name": "S.Contagem", "full": "0132 - MG-CON-S.Contagem", "uf": "MG", "city": "Contagem", "addr": "Av. Severino Ballesteros Rodrigues, 850", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Minas Gerais BH", "truck": "", "ativo": "" }, { "code": "0133", "name": "S.Americas", "full": "0133 - RJ-RIO-S.Americas", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Av. das Américas, 15.500 - Loja 170 B", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro Oeste", "truck": "", "ativo": "" }, { "code": "0134", "name": "S.Independ", "full": "0134 - MG-JDF-S.Independ", "uf": "MG", "city": "Juiz de Fora", "addr": "Av. Pres. Itamar Franco, 3.600 - São Mateus", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Minas Gerais Juiz", "truck": "", "ativo": "" }, { "code": "0136", "name": "PedroFioreti", "full": "0136 - SP-OSA-PedroFioreti", "uf": "SP", "city": "Osasco", "addr": "Rua Pedro Fioretti, 479 - Centro", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "Grande São Paulo Osasco", "truck": "", "ativo": "" }, { "code": "0137", "name": "S.Vila Velha", "full": "0137 - ES-VIV-S.Vila Velha", "uf": "ES", "city": "Vila Velha", "addr": "Av. Luciano da Neves, 2.418", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Espirito Santo", "truck": "", "ativo": "" }, { "code": "0138", "name": "S.VilaOlimpia", "full": "0138 - SP-SPO-S.VilaOlimpia", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Olimpíadas, 360 - 3º piso", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Sul 2", "truck": "Truck", "ativo": "GD 2 ALTO" }, { "code": "0139", "name": "Araraquara", "full": "0139 - SP-ARA-Araraquara", "uf": "SP", "city": "Araraquara", "addr": "Av. Duque de Caxias, 515 - Centro", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Araçatuba", "truck": "", "ativo": "" }, { "code": "0140", "name": "S.Continente", "full": "0140 - SC-FLO-S.Continente", "uf": "SC", "city": "Sao Jose", "addr": "Rodovia BR 101 - KM211 - Mega Loja 05", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Santa Catarina", "truck": "", "ativo": "" }, { "code": "0141", "name": "S.Neumarkt", "full": "0141 - SC-BLU-S.Neumarkt", "uf": "SC", "city": "Blumenau", "addr": "Rua Sete de Setembro, 1.213", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Santa Catarina", "truck": "", "ativo": "" }, { "code": "0142", "name": "S.Norte", "full": "0142 - RJ-RIO-S.Norte", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Av. Dom Helder Camara, 5.474", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Norte", "truck": "", "ativo": "" }, { "code": "0143", "name": "Camboriú", "full": "0143 - SC-BCA-Camboriú", "uf": "SC", "city": "Balneario Camboriu", "addr": "Av. do Estado Dalmo Vieira, 898", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Santa Catarina", "truck": "", "ativo": "" }, { "code": "0145", "name": "S.Taubaté", "full": "0145 - SP-TAU-S.Taubaté", "uf": "SP", "city": "Taubate", "addr": "Av. Charles Scnneider, 1700 - Loja P1 / P2", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Interior Taubaté", "truck": "", "ativo": "" }, { "code": "0146", "name": "S.ID", "full": "0146 - DF-BRA-S.ID", "uf": "DF", "city": "Brasilia", "addr": "ST SCN QD 06 Conjunto A - Edif. Venancio 3000 Asa", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Brasilia", "truck": "", "ativo": "" }, { "code": "0147", "name": "S.Riomar", "full": "0147 - CE-FOR-S.Riomar", "uf": "CE", "city": "Fortaleza", "addr": "R. Desembargador Lauro Nogueira, 1500", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Ceará", "truck": "", "ativo": "" }, { "code": "0148", "name": "S.PraçaNova", "full": "0148 - SP-ARA-S.PraçaNova", "uf": "SP", "city": "Araçatuba", "addr": "Rod Marechal Rondon, Km 534,5 Lj 227", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior São José", "truck": "", "ativo": "" }, { "code": "0149", "name": "S.Del Rey", "full": "0149 - MG-BHZ-S.Del Rey", "uf": "MG", "city": "Belo Horizonte", "addr": "Av. Presidente Carlos Luz, 3001", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Minas Gerais BH", "truck": "", "ativo": "" }, { "code": "0150", "name": "S.VRedonda", "full": "0150 - RJ-VRD-S.VRedonda", "uf": "RJ", "city": "Volta Redonda", "addr": "Rod. dos Metalúrgicos 1.189 - Mega loja 02", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro Trecho A", "truck": "", "ativo": "" }, { "code": "0151", "name": "AvDePinedo", "full": "0151 - SP-SPO-AvDePinedo", "uf": "SP", "city": "Sao Paulo", "addr": "Av. de Pinedo, 215", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Sul 3", "truck": "Truck", "ativo": "PQ 2 ALTO" }, { "code": "0152", "name": "S.Iguatemi", "full": "0152 - CE-FOR-S.Iguatemi", "uf": "CE", "city": "Fortaleza", "addr": "Av. Washington Soares, 85 - Loja 797", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Ceará", "truck": "", "ativo": "" }, { "code": "0153", "name": "S.Piratas", "full": "0153 - RJ-ANG-S.Piratas", "uf": "RJ", "city": "Angra dos Reis", "addr": "Estrada dos Marinas 91 - Ljs. 248 a 252", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Trecho A", "truck": "", "ativo": "" }, { "code": "0155", "name": "Pres.Prudente", "full": "0155 - SP-PRU-Pres.Prudente", "uf": "SP", "city": "Presidente Prudente", "addr": "R. Comendador João Pereti, 540 - Lj. 5", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Prudente", "truck": "", "ativo": "" }, { "code": "0156", "name": "BarraShopping", "full": "0156 - RJ-RIO-BarraShopping", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Avenida das Américas, 4.666", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro Barra", "truck": "", "ativo": "" }, { "code": "0157", "name": "S.Iguatemi", "full": "0157 - RS-POA-S.Iguatemi", "uf": "RS", "city": "Porto Alegre", "addr": "Av. João Wallig, 1.800", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Rio Grande do Sul", "truck": "", "ativo": "" }, { "code": "0158", "name": "S.Recife", "full": "0158 - PE-REC-S.Recife", "uf": "PE", "city": "Recife", "addr": "Rua Padre Carapuceiro, 777", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Pernanbuco", "truck": "", "ativo": "" }, { "code": "0159", "name": "S.BarraSul", "full": "0159 - RS-POA-S.BarraSul", "uf": "RS", "city": "Porto Alegre", "addr": "Av. Diário de Notícias, 300", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Rio Grande do Sul", "truck": "", "ativo": "" }, { "code": "0161", "name": "S.NovaIguaçu", "full": "0161 - RJ-NIG-S.NovaIguaçu", "uf": "RJ", "city": "Nova Iguaçu", "addr": "Av. Abilio Augusto Távora, 1.111", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Trecho A", "truck": "", "ativo": "" }, { "code": "0162", "name": "AvPaulista", "full": "0162 - SP-SPO-AvPaulista", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Paulista, 2421", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Capital Central Paulista", "truck": "Toco", "ativo": "PQ 2 ALTO" }, { "code": "0163", "name": "S.West", "full": "0163 - RJ-RIO-S.West", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Estrada do Mendanha, 555 - Loja 102A", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Oeste", "truck": "", "ativo": "" }, { "code": "0164", "name": "S.Bahia", "full": "0164 - BA-SAL-S.Bahia", "uf": "BA", "city": "Salvador", "addr": "Av. Tancredo Neves, 148 - Loja 001/W1", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Bahia", "truck": "", "ativo": "" }, { "code": "0165", "name": "S.Golden", "full": "0165 - SP-SBC-S.Golden", "uf": "SP", "city": "Sao Bernardo do Campo", "addr": "Av. Kennedy, 700 - 2o. Piso", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "Grande São Paulo ABC 1", "truck": "", "ativo": "" }, { "code": "0166", "name": "S.Kennedy", "full": "0166 - CE-FOR-S.Kennedy", "uf": "CE", "city": "Fortaleza", "addr": "Av. Sargento Hermínio Sampaio, 3000", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Ceará", "truck": "", "ativo": "" }, { "code": "0167", "name": "S.Buritis", "full": "0167 - GO-GOI-S.Buritis", "uf": "GO", "city": "Aparecida de Goiania", "addr": "Av. Rio Verde, 102/104 - Loja 385", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Goias 2", "truck": "", "ativo": "" }, { "code": "0168", "name": "S.Caruaru", "full": "0168 - PE-CAR-S.Caruaru", "uf": "PE", "city": "Caruaru", "addr": "Av. Adjar da Silva Casé, 800", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Pernanbuco", "truck": "", "ativo": "" }, { "code": "0169", "name": "S.CaxiasSul", "full": "0169 - RS-CXS-S.CaxiasSul", "uf": "RS", "city": "Caxias do Sul", "addr": "Rod. RSC 453, 2780, Km 3,5", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Rio Grande do Sul", "truck": "", "ativo": "" }, { "code": "0170", "name": "S.Venancio", "full": "0170 - DF-BRA-S.Venancio", "uf": "DF", "city": "Brasilia", "addr": "SCS Quadra 8, S/N - Asa Sul", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Brasilia", "truck": "", "ativo": "" }, { "code": "0171", "name": "S.Via Brasil", "full": "0171 - RJ-RIO-S.Via Brasil", "uf": "RJ", "city": "Rio de Janeiro", "addr": "R. Itapera, 500 - Irajá", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "", "truck": "", "ativo": "" }, { "code": "0172", "name": "S.CenterValle", "full": "0172 - SP-SJC-S.CenterValle", "uf": "SP", "city": "Sao Jose dos Campos", "addr": "Av. Dep. Benedito Matarazzo, 9403", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Interior Taubaté", "truck": "", "ativo": "" }, { "code": "0174", "name": "S.Pamplona", "full": "0174 - SP-SPO-S.Pamplona", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Pamplona, 1704 - Jd Paulista", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Central Paulista", "truck": "Toco", "ativo": "PQ 2 ALTO" }, { "code": "0175", "name": "S.Itu", "full": "0175 - SP-ITU-S.Itu", "uf": "SP", "city": "Itu", "addr": "Av. Dr. Ermelino Maffei, 1199", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Interior Indaiatuba", "truck": "", "ativo": "" }, { "code": "0176", "name": "S.Pantanal", "full": "0176 - MT-CGB-S.Pantanal", "uf": "MT", "city": "Cuiaba", "addr": "Av. Historiador Rubens de Mendonça, 3.300 - Piso 2", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Mato Grosso", "truck": "", "ativo": "" }, { "code": "0178", "name": "S.Moxuara", "full": "0178 - ES-CAR-S.Moxuara", "uf": "ES", "city": "Cariacica", "addr": "Av. Mário Gurgel, 5353 - São Francisco", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Espirito Santo", "truck": "", "ativo": "" }, { "code": "0179", "name": "S.Salvador", "full": "0179 - BA-SAL-S.Salvador", "uf": "BA", "city": "Salvador", "addr": "Av. Tancredo Neves, 3133", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Bahia", "truck": "", "ativo": "" }, { "code": "0181", "name": "S.Natal", "full": "0181 - RN-NAT-S.Natal", "uf": "RN", "city": "Natal", "addr": "Av. Sen. Salgado Filho, 2234 - Loja 232", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Nordeste", "truck": "", "ativo": "" }, { "code": "0182", "name": "S.Midway", "full": "0182 - RN-NAT-S.Midway", "uf": "RN", "city": "Natal", "addr": "Av. Bernardo Vieira, 3775 - Loja 153", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "", "truck": "", "ativo": "" }, { "code": "0183", "name": "S.Aracaju", "full": "0183 - SE-ARA-S.Aracaju", "uf": "SE", "city": "Aracaju", "addr": "Av. Delmiro Gouveia, 400", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Nordeste", "truck": "", "ativo": "" }, { "code": "0184", "name": "S.MogiBuriti", "full": "0184 - SP-MOG-S.MogiBuriti", "uf": "SP", "city": "Mogi Guaçu", "addr": "R. Francisco Franco de Godoy Bueno, 801", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Campinas 2", "truck": "", "ativo": "" }, { "code": "0185", "name": "S.Tacaruna", "full": "0185 - PE-REC-S.Tacaruna", "uf": "PE", "city": "Recife", "addr": "Av. Gov. Agamenon Magalhães, 153", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Pernanbuco", "truck": "", "ativo": "" }, { "code": "0186", "name": "S.Vitória", "full": "0186 - ES-VIT-S.Vitória", "uf": "ES", "city": "Vitoria", "addr": "Av. Americo Buaiz, 200 - Loja 247", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Espirito Santo", "truck": "", "ativo": "" }, { "code": "0187", "name": "S.Canoas", "full": "0187 - RS-CAN-S.Canoas", "uf": "RS", "city": "Canoas", "addr": "Av. Farroupilha, 4545", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Rio Grande do Sul", "truck": "", "ativo": "" }, { "code": "0188", "name": "S.Catuai", "full": "0188 - PR-LON-S.Catuai", "uf": "PR", "city": "Londrina", "addr": "Rod. Celso Garcia CID KM 377, 5.600", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "Parana Lon", "truck": "", "ativo": "" }, { "code": "0189", "name": "S.Maia", "full": "0189 - SP-GRU-S.Maia", "uf": "SP", "city": "Guarulhos", "addr": "Av. Bartolomeu de Carlos, 230", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "Grande São Paulo Guarulhos 2", "truck": "", "ativo": "" }, { "code": "0190", "name": "W.Luis", "full": "0190 - SP-SPO-W.Luis", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Washington Luís, 4937 - Sto Amaro", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Sul 4", "truck": "Truck", "ativo": "PQ 2 ALTO" }, { "code": "0191", "name": "S.Catuai", "full": "0191 - PR-MAR-S.Catuai", "uf": "PR", "city": "Maringa", "addr": "Av. Colombo, 9161 - Pq Ind Bandeirante", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "Parana Lon", "truck": "", "ativo": "" }, { "code": "0192", "name": "S.Olinda", "full": "0192 - PE-OLI-S.Olinda", "uf": "PE", "city": "Olinda", "addr": "Rua Eduardo de Moraes, s/n - Piso L1", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Pernanbuco", "truck": "", "ativo": "" }, { "code": "0193", "name": "S.PatioMaceio", "full": "0193 - AL-MAC-S.PatioMaceio", "uf": "AL", "city": "Maceio", "addr": "Av. Menino Marcelo, 3800 - Cidade Universitaria", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Nordeste", "truck": "", "ativo": "" }, { "code": "0194", "name": "C.Grande", "full": "0194 - PB-CGR-C.Grande", "uf": "PB", "city": "Campina Grande", "addr": "Av. Prefeito Severino Cabral, 1.050", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Nordeste", "truck": "", "ativo": "" }, { "code": "0195", "name": "F.Coutinho", "full": "0195 - SP-SPO-F.Coutinho", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Fradique Coutinho, 496", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Capital Oeste", "truck": "Truck", "ativo": "PQ 2 ALTO" }, { "code": "0196", "name": "RicardoJafet", "full": "0196 - SP-SPO-RicardoJafet", "uf": "SP", "city": "Sao Paulo", "addr": "Av Dr. Ricardo Jafet, 1.501", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Sul 1", "truck": "Truck", "ativo": "PQ 2 ALTO" }, { "code": "0197", "name": "Mangabeira", "full": "0197 - PB-JPA-Mangabeira", "uf": "PB", "city": "Joao Pessoa", "addr": "Av. Hílton Souto Maior, S/N - Mangabeira", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Nordeste", "truck": "", "ativo": "" }, { "code": "0198", "name": "Manaira", "full": "0198 - PB-JPA-Manaira", "uf": "PB", "city": "Joao Pessoa", "addr": "Rua Manoel Arruda Cavalcanti, 805", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Nordeste", "truck": "", "ativo": "" }, { "code": "0199", "name": "JabaquaraBra", "full": "0199 - SP-SPO-JabaquaraBra", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Jabaquara, 1.182", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Capital Sul 1", "truck": "Toco", "ativo": "GD 3 ALTO" }, { "code": "0200", "name": "RadialMooca", "full": "0200 - SP-SPO-RadialMooca", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Alcântara Machado, 400", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Leste 1", "truck": "Toco", "ativo": "PQ 2 ALTO" }, { "code": "0201", "name": "S.Cuiaba", "full": "0201 - MT-CGB-S.Cuiaba", "uf": "MT", "city": "Cuiaba", "addr": "Av. Miguel Sutil, 9300 - Duque de Caxias", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Mato Grosso", "truck": "", "ativo": "" }, { "code": "0202", "name": "S.PortoVelho", "full": "0202 - RO-PVH-S.PortoVelho", "uf": "RO", "city": "Porto Velho", "addr": "Av. Rio Madeira, 3288 - Flodoaldo Pontes Pinto", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Rondônia", "truck": "", "ativo": "" }, { "code": "0203", "name": "Av.Rudge", "full": "0203 - SP-SPO-Av.Rudge", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Rudge, 1.001 - Bom Retiro", "reg": "Aloisio Miranda", "slug": "aloisio-miranda", "grp": "São Paulo / Capital Central", "truck": "Toco", "ativo": "PQ 3 ALTO" }, { "code": "0204", "name": "S.JoqueiNorth", "full": "0204 - CE-FOR-S.JoqueiNorth", "uf": "CE", "city": "Fortaleza", "addr": "Av. Lineu Machado, 419 - Jóquei Clube", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Ceará", "truck": "", "ativo": "" }, { "code": "0206", "name": "S.Palladium", "full": "0206 - PR-CTB-S.Palladium", "uf": "PR", "city": "Curitiba", "addr": "Av. Pres. Kennedy, 4121 - Portão", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Parana CTB 2", "truck": "", "ativo": "" }, { "code": "0207", "name": "GoianiaBueno", "full": "0207 - GO-GOI-GoianiaBueno", "uf": "GO", "city": "Goiania", "addr": "Av. T63, 841 - Quadra 148 - Lote 01 e 02", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Goias 1", "truck": "", "ativo": "" }, { "code": "0208", "name": "S.Ilha", "full": "0208 - MA-SLZ-S.Ilha", "uf": "MA", "city": "Sao Luis", "addr": "Av. Daniel de La Touche , 987 - loja 313", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Maranhão", "truck": "", "ativo": "" }, { "code": "0209", "name": "S.PFundo", "full": "0209 - RS-PFD-S.PFundo", "uf": "RS", "city": "Passo Fundo", "addr": "Av. Presidente Vargas, 1610", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Rio Grande do Sul", "truck": "", "ativo": "" }, { "code": "0210", "name": "S.V.Conquista", "full": "0210 - BA-VDC-S.V.Conquista", "uf": "BA", "city": "Vitoria da Conquista", "addr": "Av. Olivia Flores, 2.500 - Loja 1083", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Bahia", "truck": "", "ativo": "" }, { "code": "0211", "name": "S.Paralela", "full": "0211 - BA-SAL-S.Paralela", "uf": "BA", "city": "Salvador", "addr": "Av. Luis Viana Filho, 8.544", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Bahia", "truck": "", "ativo": "" }, { "code": "0212", "name": "S.FCaneca", "full": "0212 - SP-SPO-S.FCaneca", "uf": "SP", "city": "Sao Paulo", "addr": "Rua Frei Caneca, 569 - Consolação", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Capital Central Paulista", "truck": "Toco", "ativo": "PQ 2 ALTO" }, { "code": "0213", "name": "S.PrudenShop", "full": "0213 - SP-PRU-S.PrudenShop", "uf": "SP", "city": "Presidente Prudente", "addr": "Av. Manoel Goulart, 2.400", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Prudente", "truck": "", "ativo": "" }, { "code": "0214", "name": "Pq.ShopMaceio", "full": "0214 - AL-MAC-Pq.ShopMaceio", "uf": "AL", "city": "Maceio", "addr": "Av. Comendador Gustavo Paiva, 5.945", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Nordeste", "truck": "", "ativo": "" }, { "code": "0215", "name": "Tirol", "full": "0215 - RN-NAT-Tirol", "uf": "RN", "city": "Natal", "addr": "Av. Senador Salgado Filho, 1760", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Nordeste", "truck": "", "ativo": "" }, { "code": "0216", "name": "S.Pelotas", "full": "0216 - RS-PLT-S.Pelotas", "uf": "RS", "city": "Pelotas", "addr": "Av. Ferreira Viana, 1.526 - Loja 27B", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Rio Grande do Sul", "truck": "", "ativo": "" }, { "code": "0217", "name": "TijucaExtra", "full": "0217 - RJ-RIO-TijucaExtra", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Rua José Higino, 115", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Norte", "truck": "", "ativo": "" }, { "code": "0218", "name": "S.Jacarepagua", "full": "0218 - RJ-RIO-S.Jacarepagua", "uf": "RJ", "city": "Rio de Janeiro", "addr": "Estrada de Jacarepaguá 6069 - loja 104 B / 105 A", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro Barra", "truck": "", "ativo": "" }, { "code": "0219", "name": "S.Jockey", "full": "0219 - PR-CTB-S.Jockey", "uf": "PR", "city": "Curitiba", "addr": "Av. Victor Ferreira do Amaral, 2633 - Loja L1074", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Parana CTB 1", "truck": "", "ativo": "" }, { "code": "0220", "name": "S.Mogi", "full": "0220 - SP-MOG-S.Mogi", "uf": "SP", "city": "Mogi das Cruzes", "addr": "Av Ver. Narciso Yague Guimarães, 1001", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "Grande São Paulo Guarulhos 1", "truck": "", "ativo": "" }, { "code": "0221", "name": "S.GrãoPará", "full": "0221 - PA-BEL-S.GrãoPará", "uf": "PA", "city": "Belem", "addr": "Rod. dos trabalhadores, s/n - Parque Verde", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Maranhão", "truck": "", "ativo": "" }, { "code": "0222", "name": "S.MacaePlaza", "full": "0222 - RJ-MAC-S.MacaePlaza", "uf": "RJ", "city": "Macae", "addr": "Av. Aluízio da Silva Gomes, 800", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Rio de Janeiro Trecho C", "truck": "", "ativo": "" }, { "code": "0223", "name": "S.RioPoty", "full": "0223 - PI-TER-S.RioPoty", "uf": "PI", "city": "Teresina", "addr": "Av. Marechal Castelo Branco, 911", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Pernanbuco", "truck": "", "ativo": "" }, { "code": "0224", "name": "S.Sumare", "full": "0224 - SP-SUM-S.Sumare", "uf": "SP", "city": "Sumare", "addr": "Av. Rebouças, 3.400 - Loja L34", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Limeira", "truck": "", "ativo": "" }, { "code": "0225", "name": "S.Ananindeua", "full": "0225 - PA-ANA-S.Ananindeua", "uf": "PA", "city": "Ananindeua", "addr": "Rod. BR-316, Km 4, 4500 - Coqueiro", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Maranhão", "truck": "", "ativo": "" }, { "code": "0226", "name": "S.Jequitiba", "full": "0226 - BA-ITA-S.Jequitiba", "uf": "BA", "city": "Itabuna", "addr": "Av. Aziz Maron, s/n", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Bahia", "truck": "", "ativo": "" }, { "code": "0227", "name": "Gal.Campinas", "full": "0227 - SP-CAM-Gal.Campinas", "uf": "SP", "city": "Campinas", "addr": "Av. Bailarina Selma Parada, 505", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Interior Campinas 1", "truck": "", "ativo": "" }, { "code": "0228", "name": "S.Anapolis", "full": "0228 - GO-ANA-S.Anapolis", "uf": "GO", "city": "Anapolis", "addr": "Av. Brasil, 505 - Loja 08A", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Goias 1", "truck": "", "ativo": "" }, { "code": "0230", "name": "JundiaíCentro", "full": "0230 - SP-JUN-JundiaíCentro", "uf": "SP", "city": "Jundiai", "addr": "Av. Antonio Frederico Ozanan, 2601", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Interior Jundiai", "truck": "", "ativo": "" }, { "code": "0231", "name": "S.Iguatemi", "full": "0231 - DF-BRA-S.Iguatemi", "uf": "DF", "city": "Brasilia", "addr": "ST SHIN CA 04 Bloco A Loja, 183", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Brasilia", "truck": "", "ativo": "" }, { "code": "0232", "name": "S.JdAracaju", "full": "0232 - SE-ARA-S.JdAracaju", "uf": "SE", "city": "Aracaju", "addr": "Av. Ministro Geraldo Barreto Sobral, 215", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Nordeste", "truck": "", "ativo": "" }, { "code": "0234", "name": "S.RioAnil", "full": "0234 - MA-SLZ-S.RioAnil", "uf": "MA", "city": "Sao Luis", "addr": "Av.São Luis Rei de Franca, 8 - Turu", "reg": "Francisco Cruz", "slug": "francisco-cruz", "grp": "Maranhão", "truck": "", "ativo": "" }, { "code": "0236", "name": "AvAnaCosta", "full": "0236 - SP-SAN-AvAnaCosta", "uf": "SP", "city": "Santos", "addr": "Av. Ana Costa, 64 - Loja: 66 e 68", "reg": "Helio Shimba", "slug": "helio-shimba", "grp": "São Paulo / Interior Litoral", "truck": "", "ativo": "" }, { "code": "0238", "name": "Pq.ShopBahia", "full": "0238 - BA-LFR-Pq.ShopBahia", "uf": "BA", "city": "Lauro de Freitas", "addr": "Av Santos Dumont, 4360 - Piso L1 Loja 1010", "reg": "Adriano Lazarini", "slug": "adriano-lazarini", "grp": "Bahia", "truck": "", "ativo": "" }, { "code": "0239", "name": "S.Itaguaçu", "full": "0239 - SC-SJO-S.Itaguaçu", "uf": "SC", "city": "Sao Jose", "addr": "Rua Gerôncio Thives,1.079", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Santa Catarina", "truck": "", "ativo": "" }, { "code": "0241", "name": "S.Chapeco", "full": "0241 - SC-CHA-S.Chapeco", "uf": "SC", "city": "Chapeco", "addr": "Av. Fernando Machado, 4000 D - Líder", "reg": "Anderson Luiz", "slug": "anderson-luiz", "grp": "Rio Grande do Sul", "truck": "", "ativo": "" }, { "code": "0242", "name": "Assis", "full": "0242 - SP-ASS-Assis", "uf": "SP", "city": "Assis", "addr": "Rua Floriano Peixoto, 145, Centro", "reg": "Roberto Znidarsis", "slug": "roberto-znidarsis", "grp": "São Paulo / Interior Prudente", "truck": "", "ativo": "" }, { "code": "0243", "name": "MateoBei", "full": "0243 - SP-SPO-MateoBei", "uf": "SP", "city": "Sao Paulo", "addr": "Av. Mateo Bei, 1600 - São Mateus", "reg": "Daniel Rossi", "slug": "daniel-rossi", "grp": "São Paulo / Capital Leste 2", "truck": "Truck", "ativo": "PQ 3 ALTO" }, { "code": "0244", "name": "S.Estação", "full": "0244 - MG-BHZ-S.Estação", "uf": "MG", "city": "Belo Horizonte", "addr": "Av. Cristiano Machado, 11.833 - Loja 1007", "reg": "Silvano Cesar", "slug": "silvano-cesar", "grp": "Minas Gerais BH", "truck": "", "ativo": "" }, { "code": "0245", "name": "S.Campinas", "full": "0245 - SP-CAM-S.Campinas", "uf": "SP", "city": "Campinas", "addr": "Rua Jacy Teixeira Camargo, 940", "reg": "Agnaldo Costa", "slug": "agnaldo-costa", "grp": "São Paulo / Interior Campinas 1", "truck": "", "ativo": "" }, { "code": "0246", "name": "Botafogo", "full": "0246 - RJ-RIO-Botafogo", "uf": "RJ", "city": "Rio de Janeiro", "addr": "R. Voluntários da Pátria, 264", "reg": "Cosme Cravo", "slug": "cosme-cravo", "grp": "Rio de Janeiro Sul", "truck": "", "ativo": "" }];
const RESTR_DRAFT = [
    ["0007", "ZMRC São Paulo", "Truck, Toco", "Seg-Sex", "05:00", "21:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0007", "ZMRC São Paulo", "Truck, Toco", "Sáb", "10:00", "14:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0009", "ZMRC São Paulo", "Truck, Toco", "Seg-Sex", "05:00", "21:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0009", "ZMRC São Paulo", "Truck, Toco", "Sáb", "10:00", "14:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0010", "ZMRC São Paulo", "Truck, Toco", "Seg-Sex", "05:00", "21:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0010", "ZMRC São Paulo", "Truck, Toco", "Sáb", "10:00", "14:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0013", "ZMRC São Paulo", "Truck, Toco", "Seg-Sex", "05:00", "21:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0013", "ZMRC São Paulo", "Truck, Toco", "Sáb", "10:00", "14:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0022", "ZMRC São Paulo", "Truck, Toco", "Seg-Sex", "05:00", "21:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0022", "ZMRC São Paulo", "Truck, Toco", "Sáb", "10:00", "14:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0023", "ZMRC São Paulo", "Truck, Toco", "Seg-Sex", "05:00", "21:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0023", "ZMRC São Paulo", "Truck, Toco", "Sáb", "10:00", "14:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0031", "ZMRC São Paulo", "Truck, Toco", "Seg-Sex", "05:00", "21:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0031", "ZMRC São Paulo", "Truck, Toco", "Sáb", "10:00", "14:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0047", "ZMRC São Paulo", "Truck, Toco", "Seg-Sex", "05:00", "21:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0047", "ZMRC São Paulo", "Truck, Toco", "Sáb", "10:00", "14:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0064", "ZMRC São Paulo", "Truck, Toco", "Seg-Sex", "05:00", "21:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0064", "ZMRC São Paulo", "Truck, Toco", "Sáb", "10:00", "14:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0084", "ZMRC São Paulo", "Truck, Toco", "Seg-Sex", "05:00", "21:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0084", "ZMRC São Paulo", "Truck, Toco", "Sáb", "10:00", "14:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0085", "ZMRC São Paulo", "Truck, Toco", "Seg-Sex", "05:00", "21:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0085", "ZMRC São Paulo", "Truck, Toco", "Sáb", "10:00", "14:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0112", "ZMRC São Paulo", "Truck, Toco", "Seg-Sex", "05:00", "21:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0112", "ZMRC São Paulo", "Truck, Toco", "Sáb", "10:00", "14:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0138", "ZMRC São Paulo", "Truck, Toco", "Seg-Sex", "05:00", "21:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0138", "ZMRC São Paulo", "Truck, Toco", "Sáb", "10:00", "14:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0162", "ZMRC São Paulo", "Truck, Toco", "Seg-Sex", "05:00", "21:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0162", "ZMRC São Paulo", "Truck, Toco", "Sáb", "10:00", "14:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0174", "ZMRC São Paulo", "Truck, Toco", "Seg-Sex", "05:00", "21:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0174", "ZMRC São Paulo", "Truck, Toco", "Sáb", "10:00", "14:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0195", "ZMRC São Paulo", "Truck, Toco", "Seg-Sex", "05:00", "21:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0195", "ZMRC São Paulo", "Truck, Toco", "Sáb", "10:00", "14:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0196", "ZMRC São Paulo", "Truck, Toco", "Seg-Sex", "05:00", "21:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0196", "ZMRC São Paulo", "Truck, Toco", "Sáb", "10:00", "14:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0200", "ZMRC São Paulo", "Truck, Toco", "Seg-Sex", "05:00", "21:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0200", "ZMRC São Paulo", "Truck, Toco", "Sáb", "10:00", "14:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0203", "ZMRC São Paulo", "Truck, Toco", "Seg-Sex", "05:00", "21:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0203", "ZMRC São Paulo", "Truck, Toco", "Sáb", "10:00", "14:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0212", "ZMRC São Paulo", "Truck, Toco", "Seg-Sex", "05:00", "21:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"],
    ["0212", "ZMRC São Paulo", "Truck, Toco", "Sáb", "10:00", "14:00", "Rascunho pela regra geral da ZMRC (centro expandido de SP); confirmar endereço e regra vigente com a CET", "A confirmar"]
];
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

/* ---------- Restrições de trânsito ---------- */
const DIDX = { seg: 0, ter: 1, qua: 2, qui: 3, sex: 4, sab: 5, 'sáb': 5 };

function parseDias(s) {
    const n = String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+a\s+/g, '-');
    const key = x => DIDX[(x.trim().match(/seg|ter|qua|qui|sex|sab/) || [])[0]];
    const out = new Set();
    n.split(/,|;|\s+e\s+/).forEach(part => {
        const [a, b] = part.split(/[-–]/);
        const ia = key(a || ''),
            ib = b != null ? key(b) : ia;
        if (ia == null || ib == null) return;
        for (let k = Math.min(ia, ib); k <= Math.max(ia, ib); k++) out.add(k);
    });
    return out;
}
const toH = v => { const m = String(v).match(/(\d{1,2})(?::(\d{2}))?/); return m ? +m[1] + (+(m[2] || 0)) / 60 : NaN; };

function buildRestr(rows) {
    const out = {};
    (rows || []).forEach(r => {
        const code = String(r[0]).trim().padStart(4, '0');
        if (!byCode[code]) return;
        const rule = { zona: String(r[1] || 'Zona de restrição'), veic: String(r[2] || ''), dias: parseDias(r[3]), ini: toH(r[4]), fim: toH(r[5]), fonte: String(r[6] || ''), sit: String(r[7] || '') };
        if (!rule.dias.size || isNaN(rule.ini) || isNaN(rule.fim)) return;
        (out[code] = out[code] || []).push(rule);
    });
    return out;
}
let RESTR = buildRestr(RESTR_DRAFT),
    RZSRC = 'rascunho',
    TR = false;

function restrAt(code, i, h) {
    const rs = RESTR[code];
    if (!rs) return null;
    const s = byCode[code];
    return rs.find(r => r.dias.has(i) && H0 + h < r.fim && H0 + h + 1 > r.ini && (!s.truck || !r.veic || r.veic.toLowerCase().includes(s.truck.toLowerCase()))) || null;
}
// "pode receber" para os cálculos: a loja recebe e, se a opção estiver ligada, o caminhão pode circular
const ok = (code, i, h) => RESP[code].d[i][h] === 'S' && !(TR && restrAt(code, i, h));
const conflictN = code => {
    const r = RESP[code];
    if (!r || !RESTR[code]) return 0;
    let n = 0;
    for (let i = 0; i < 6; i++)
        for (let h = 0; h < NH; h++)
            if (r.d[i][h] === 'S' && restrAt(code, i, h)) n++;
    return n;
};
const hhf = x => String(Math.floor(x)).padStart(2, '0') + 'h' + (x % 1 ? String(Math.round(x % 1 * 60)).padStart(2, '0') : '');

function rulesTxt(code) {
    const rs = RESTR[code] || [];
    return rs.map(r => {
        const d = [...r.dias].sort();
        const dl = d.length > 1 && d[d.length - 1] - d[0] === d.length - 1 ? `${DS[d[0]]} a ${DS[d[d.length-1]]}` : d.map(x => DS[x]).join(', ');
        return `${dl} ${hhf(r.ini)}–${hhf(r.fim)}`;
    }).join('; ');
}

function setTR(on) {
    TR = on;
    const b = $('#gTr');
    b.setAttribute('aria-pressed', on);
    b.classList.toggle('on', on);
    refreshAll();
}

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
    if (!FORM_ENDPOINT) {
        RSTATE = 'off';
        refreshAll();
        return;
    }
    RSTATE = 'loading';
    dstat();
    try {
        const r = await fetch(FORM_ENDPOINT + '?acao=respostas&_=' + Date.now());
        const j = await r.json();
        if (!j.ok) throw new Error(j.erro || 'erro');
        RESP = parseResp(j.lojas);
        DEMO = false;
        RSTATE = 'ok';
        if (Array.isArray(j.restricoes) && j.restricoes.length) {
            RESTR = buildRestr(j.restricoes);
            RZSRC = 'planilha';
        }
        if (j.coords) GEO = {...GEO_FIXED, ...j.coords };
        if (j.abastecimento) ABAST = j.abastecimento;
        if (j.cd) CD = j.cd;
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
    if (on) {
        RESP = parseResp(makeDemo());
        RSTATE = 'demo';
    } else {
        RESP = {};
        RSTATE = FORM_ENDPOINT ? 'loading' : 'off';
        if (FORM_ENDPOINT) { loadResp(); return; }
    }
    refreshAll();
}

function dstat() {
    const el = $('#dstat'),
        n = Object.keys(RESP).length;
    if (RSTATE === 'demo') {
        el.innerHTML = `<span class="demo-flag">Dados de exemplo</span><span>Números ilustrativos, não são respostas reais.</span><button class="linkbtn" id="dsx">Sair do exemplo</button>`;
        $('#dsx').onclick = () => setDemo(false);
        return;
    }
    if (RSTATE === 'loading') { el.innerHTML = '<span class="dot"></span>Carregando respostas…'; return; }
    if (RSTATE === 'ok') {
        el.innerHTML = `<span class="dot ok"></span><span>${n} de ${STORES.length} lojas responderam. Atualizado às ${RAT}.</span><button class="linkbtn" id="dsr">Atualizar</button>${n?'':'<button class="linkbtn" id="dsd">Ver com dados de exemplo</button>'}`;
        $('#dsr').onclick = loadResp;
        const dd = $('#dsd');
        if (dd) dd.onclick = () => setDemo(true);
        return;
    }
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

function setG(k, v) {
    G[k] = v;
    const el = $(k === 'reg' ? '#gReg' : '#gUf');
    el.value = v;
    syncChip(el);
    $('#gClear').hidden = !(G.reg || G.uf);
    refreshAll();
}
$('#gReg').onchange = e => setG('reg', e.target.value);
$('#gUf').onchange = e => setG('uf', e.target.value);
$('#gClear').onclick = () => {
    G.reg = '';
    G.uf = '';
    ['#gReg', '#gUf'].forEach(id => {
        $(id).value = '';
        syncChip($(id));
    });
    $('#gClear').hidden = true;
    refreshAll();
};
[$('#gReg'), $('#gUf')].forEach(syncChip);
$('#gTr').onclick = () => setTR(!TR);

/* ---------- Cálculos ---------- */
function stats(list) {
    const resp = list.filter(s => RESP[s.code]);
    const yes = DAYS.map(() => Array(NH).fill(0));
    let ys = 0,
        full = 0;
    resp.forEach(s => {
        const r = RESP[s.code];
        let all = true;
        r.d.forEach((row, i) => {
            for (let h = 0; h < NH; h++) {
                if (ok(s.code, i, h)) {
                    yes[i][h]++;
                    ys++;
                } else all = false;
            }
        });
        if (all) full++;
    });
    return { list, resp, n: resp.length, yes, ys, cells: resp.length * NC, full };
}
const scopeLabel = () => [G.reg && `regional ${G.reg}`, G.uf && `UF ${G.uf}`].filter(Boolean).join(', ');
const storeAvail = code => {
    let n = 0;
    for (let i = 0; i < 6; i++)
        for (let h = 0; h < NH; h++)
            if (ok(code, i, h)) n++;
    return n;
};

function winLabel(keys) {
    const byDay = DAYS.map(() => []);
    keys.forEach(k => {
        const [i, h] = k.split('|').map(Number);
        byDay[i].push(h);
    });
    const dayTxt = byDay.map(hs => {
        hs.sort((a, b) => a - b);
        const rs = [];
        let a = null,
            p = null;
        hs.forEach(h => {
            if (a === null) { a = p = h; } else if (h === p + 1) { p = h; } else {
                rs.push([a, p]);
                a = p = h;
            }
        });
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
  const zl = list.filter(s => RESTR[s.code]), zc = zl.filter(s => conflictN(s.code) > 0);
  if(zl.length) $('#heatNote').innerHTML += `<br><span class="zline"><i class="sw" style="box-shadow:inset 0 0 0 2px var(--rzc)"></i><b>${zl.length} ${zl.length>1?'lojas estão':'loja está'}</b> em zona de restrição de trânsito (${RZSRC==='planilha'?'conforme a aba Restrições':'rascunho a confirmar'})${st.n ? `; <b>${zc.length}</b> ${zc.length===1?'informou que recebe':'informaram que recebem'} em horário restrito` : ''}. ${TR ? 'O mapa já desconta essas horas.' : 'Ligue "Considerar trânsito" para descontar essas horas do mapa.'}</span>`;
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
const LS = {q:'', status:'', sort:'code'};
function barBg(code, i){
  const row = RESP[code].d[i], st = [];
  for(let h=0;h<NH;h++){ const c = row[h]==='S' ? 'var(--sim)' : 'var(--nao)'; st.push(`${c} ${(h*100/NH).toFixed(3)}% ${((h+1)*100/NH).toFixed(3)}%`); }
  return `linear-gradient(90deg,${st.join(',')})`;
}
// hachura das horas com restrição de trânsito, por cima da barra
function rzMarks(code, i){
  if(!RESTR[code]) return '';
  const out = []; let a = null;
  for(let h=0;h<=NH;h++){ const on = h < NH && restrAt(code,i,h); if(on && a === null) a = h; if(!on && a !== null){ out.push(`<i class="rz" style="left:${(a*100/NH).toFixed(3)}%;width:${((h-a)*100/NH).toFixed(3)}%"></i>`); a = null; } }
  return out.join('');
}
const dbarHTML = (code, i, cls='') => `<div class="dbar${cls}" data-c="${code}" data-i="${i}" style="background:${barBg(code,i)}">${rzMarks(code,i)}</div>`;
function renderLojas(){
  const q = LS.q.trim().toLowerCase();
  let rows = STORES.filter(inScope).filter(s => !q || s.name.toLowerCase().includes(q) || s.code.includes(q) || s.city.toLowerCase().includes(q));
  rows = rows.filter(s => { const r = RESP[s.code];
    if(LS.status === 'resp') return !!r; if(LS.status === 'pend') return !r;
    if(LS.status === 'restr') return r && storeAvail(s.code) < NC; if(LS.status === 'full') return r && storeAvail(s.code) === NC;
    if(LS.status === 'zona') return !!RESTR[s.code]; if(LS.status === 'conf') return conflictN(s.code) > 0; return true; });
  const av = s => RESP[s.code] ? storeAvail(s.code) : 999;
  rows.sort(LS.sort==='low' ? (a,b) => av(a)-av(b) || pt(a.code,b.code) : LS.sort==='reg' ? (a,b) => pt(a.reg,b.reg) || pt(a.code,b.code) : (a,b) => pt(a.code,b.code));
  $('#lCount').textContent = `${rows.length} de ${STORES.filter(inScope).length} lojas`;
  $('#ltable').innerHTML = `<thead><tr><th>Loja</th>${DAYS.map(d=>`<th>${d}</th>`).join('')}<th style="text-align:right;padding-right:18px">Faixas</th></tr></thead><tbody>${
    rows.length ? rows.map(s => { const r = RESP[s.code];
      return `<tr data-code="${s.code}"><td class="st"><div class="ln"><small>${s.code}</small><b>${esc(s.name)}</b>${RESTR[s.code]?`<span class="zbadge" title="${esc(RESTR[s.code][0].zona)}: ${esc(rulesTxt(s.code))}">${esc(RESTR[s.code][0].zona.split(' ')[0])}</span>`:''}</div><div class="lsub">${esc(s.city)}/${s.uf}, ${esc(s.reg)}</div></td>
      ${r ? DAYS.map((_,i) => `<td>${dbarHTML(s.code,i)}</td>`).join('')
          : `<td colspan="6"><div class="dbar pend"></div></td>`}
      <td class="pc">${r ? `${pct(storeAvail(s.code), NC)}%<small>${storeAvail(s.code)} de ${NC}</small>` : '<span class="pending-txt">Sem resposta</span>'}</td></tr>`; }).join('')
    : `<tr><td colspan="8" class="empty">Nenhuma loja com esses filtros.</td></tr>`}</tbody>`;
}
$('#lq').oninput = e => { LS.q = e.target.value; renderLojas(); };

/* ---------- Extrair grade (Excel colorido) ---------- */
// Carrega o ExcelJS só quando precisa: primeiro o arquivo local do projeto, depois o cdnjs
function loadExcelJS(){
  if(window.ExcelJS) return Promise.resolve();
  const tryLoad = src => new Promise((ok, fail) => { const s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = fail; document.head.appendChild(s); });
  return tryLoad('exceljs.min.js').catch(() => tryLoad('https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.4.0/exceljs.min.js'));
}
async function extrairGrade(btn){
  const old = btn.innerHTML; btn.disabled = true; btn.textContent = 'Gerando planilha…';
  try{
    await loadExcelJS();
    const lojas = STORES.filter(inScope).slice()
      .sort((a,b) => (a.grp ? 0 : 1) - (b.grp ? 0 : 1) || pt(a.grp, b.grp) || pt(a.code, b.code));
    const wb = new ExcelJS.Workbook();
    // Modelo: uma linha por loja; para cada dia, 18 colunas de hora (5 a 22); verde recebe, vermelho não recebe
    const ws = wb.addWorksheet('Grade', {views:[{state:'frozen', xSplit:1, ySplit:2}]});
    const fill = argb => ({type:'pattern', pattern:'solid', fgColor:{argb}});
    const F = {cab:fill('FF262626'), sim:fill('FFCCFFCC'), nao:fill('FFFF7C80'), sem:fill('FFEDEDED')};
    const branco = {style:'thin', color:{argb:'FFFFFFFF'}}, divisa = {style:'medium', color:{argb:'FF262626'}};
    const fCab = {name:'Arial', size:10, bold:true, color:{argb:'FFFFFFFF'}}, fHora = {...fCab, size:8}, fLoja = {name:'Arial', size:10};
    const col0 = di => 2 + di * NH;                       // primeira coluna de cada dia
    const ULT = 1 + 6 * NH;
    // cabeçalho
    const c11 = ws.getCell(1,1); c11.fill = F.cab; c11.border = {left:branco, top:branco, bottom:branco};
    const c21 = ws.getCell(2,1); c21.value = 'Loja'; c21.fill = F.cab; c21.font = fCab; c21.alignment = {horizontal:'center', vertical:'middle'}; c21.border = {left:branco, top:branco};
    DAYS.forEach((dia, di) => {
      ws.mergeCells(1, col0(di), 1, col0(di) + NH - 1);
      const t = ws.getCell(1, col0(di)); t.value = dia; t.fill = F.cab; t.font = fCab; t.alignment = {horizontal:'center', vertical:'middle'};
      for(let h=0;h<NH;h++){
        const c = ws.getCell(2, col0(di) + h);
        c.value = H0 + h; c.fill = F.cab; c.font = fHora; c.alignment = {horizontal:'center', vertical:'middle'};
        c.border = {top:branco, right:branco, ...(h === 0 ? {left:divisa} : {})};
        ws.getCell(1, col0(di) + h).border = {bottom:branco, ...(h === 0 ? {left:divisa} : {})};
      }
    });
    // uma linha por loja
    lojas.forEach((s, k) => {
      const r = 3 + k, resp = RESP[s.code];
      const a = ws.getCell(r, 1); a.value = `${s.code} - ${s.name}`; a.font = fLoja; a.alignment = {vertical:'middle'};
      DAYS.forEach((_, di) => {
        for(let h=0;h<NH;h++){
          const c = ws.getCell(r, col0(di) + h);
          c.fill = !resp ? F.sem : resp.d[di][h] === 'S' ? F.sim : F.nao;
          if(h === 0) c.border = {left:divisa};
        }
      });
    });
    ws.getColumn(1).width = 22;
    for(let c=2;c<=ULT;c++) ws.getColumn(c).width = 2.6;
    // legenda à direita
    const L = ULT + 2;
    ws.getColumn(L).width = 3; ws.getColumn(L+1).width = 34;
    ws.getCell(1, L).value = 'Legenda'; ws.getCell(1, L).font = {name:'Arial', size:10, bold:true};
    [['Recebe', F.sim], ['Não recebe', F.nao], ['Loja ainda não respondeu', F.sem]]
      .forEach(([txt, f], i) => { ws.getCell(2+i, L).fill = f; const c = ws.getCell(2+i, L+1); c.value = txt; c.font = fLoja; });
    const info = ws.getCell(6, L+1);
    info.value = `Gerado em ${new Date().toLocaleString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}).replace(',','')}${scopeLabel() ? `, ${scopeLabel()}` : ''}${RSTATE === 'demo' ? '. DADOS DE EXEMPLO' : ''}.`;
    info.font = {name:'Arial', size:9, color:{argb:'FF5D6B7A'}};
    const buf = await wb.xlsx.writeBuffer();
    const blob = new Blob([buf], {type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
    const a = document.createElement('a'), d = new Date();
    a.href = URL.createObjectURL(blob);
    a.download = `grade-recebimento-${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}.xlsx`;
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 5000);
  }catch(e){
    alert('Não foi possível gerar a planilha agora. Verifique a internet e tente de novo.');
  }finally{ btn.disabled = false; btn.innerHTML = old; }
}
$('#lGrade').onclick = e => extrairGrade(e.currentTarget);
[['#lStatus','status'],['#lSort','sort']].forEach(([id,k]) => { const el = $(id); syncChip(el); el.onchange = () => { LS[k] = el.value; syncChip(el); renderLojas(); }; });
$('#ltable').addEventListener('click', e => { const tr = e.target.closest('tr[data-code]'); if(tr) openStore(tr.dataset.code); });

/* ---------- Agrupamentos ---------- */
const GRPS = [...new Set(STORES.map(s => s.grp || ''))].sort((a,b) => (a==='') - (b==='') || pt(a,b));
const grpName = g => g || 'Sem agrupamento definido';
function groupInfo(g){
  const ss = STORES.filter(s => (s.grp || '') === g).sort((a,b) => pt(a.code,b.code));
  const resp = ss.filter(s => RESP[s.code]);
  const common = resp.length ? DAYS.map((_,i) => Array.from({length:NH}, (_,h) => resp.every(s => ok(s.code,i,h)))) : null;
  const keys = []; if(common) common.forEach((row,i) => row.forEach((v,h) => { if(v) keys.push(i+'|'+h); }));
  return {g, ss, resp, common, keys, n:keys.length, pend:ss.length - resp.length};
}
// Rota em sequência: 1 hora por loja, horas seguidas, cada loja numa hora em que recebe.
// Para cada dia testa todas as janelas de n horas seguidas e verifica, por emparelhamento
// (loja ↔ hora), se dá para encaixar todas as lojas que responderam.
function matchWindow(stores, i, start){
  const n = stores.length, hourOf = Array(n).fill(-1), storeAt = Array(n).fill(-1);
  const can = (s, k) => ok(stores[s].code, i, start + k);
  const tryS = (s, seen) => { for(let k=0;k<n;k++){ if(!can(s,k) || seen[k]) continue; seen[k] = true;
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
      ${r ? DAYS.map((_,i) => `<td>${dbarHTML(s.code,i)}</td>`).join('') : `<td colspan="6"><div class="dbar pend"></div></td>`}
      <td class="pc">${r ? pct(storeAvail(s.code),NC)+'%' : 'Sem resposta'}</td></tr>`; }).join('')}</tbody>
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
const GS = {q:'', sort:'name', ab:''};
/* Modo de abastecimento por agrupamento (Min e Max ou Simulador), salvo na planilha */
let ABAST = {};
const MODOS = ['Min e Max', 'Simulador'];
const abSwitch = g => !g ? '' : `<div class="abseg" role="group" aria-label="Modo de abastecimento de ${esc(g)}" data-ag="${esc(g)}"><span class="abl">Abastecimento</span>${MODOS.map(m => `<button type="button" data-m="${m}" aria-pressed="${ABAST[g]===m}">${m}</button>`).join('')}</div>`;
async function setAbast(g, modo, btnBox){
  const prev = ABAST[g] || '', novo = prev === modo ? '' : modo;
  if(!FORM_ENDPOINT || RSTATE === 'demo'){ alert('Para salvar o modo de abastecimento, o painel precisa estar conectado à planilha.'); return; }
  let chave = ''; try{ chave = localStorage.getItem('chaveEdicao') || ''; }catch(e){}
  const paint = v => document.querySelectorAll(`.abseg[data-ag="${CSS.escape(g)}"] button`).forEach(b => b.setAttribute('aria-pressed', b.dataset.m === v));
  const send = async ch => {
    const r = await fetch(FORM_ENDPOINT, {method:'POST', body:JSON.stringify({acao:'abastecimento', grupo:g, modo:novo, chave:ch})});
    return r.json();
  };
  ABAST[g] = novo; paint(novo); btnBox && btnBox.classList.add('saving');
  try{
    let j = await send(chave);
    if(!j.ok && j.erro === 'chave'){
      const ch = prompt('Digite o código de edição para alterar o modo de abastecimento:');
      if(ch){ j = await send(ch.trim()); if(j.ok) try{ localStorage.setItem('chaveEdicao', ch.trim()); }catch(e){} }
    }
    if(!j.ok) throw new Error(j.mensagem || 'Não foi possível salvar.');
  }catch(e){ ABAST[g] = prev; paint(prev); alert(e.message && !/fetch|json/i.test(e.message) ? e.message : 'Não foi possível salvar agora. Tente de novo.'); }
  btnBox && btnBox.classList.remove('saving');
  if(GS.ab) renderGrupos();
}
/* Extração: agrupamentos marcados como Simulador */
function simRows(){
  return GRPS.filter(g => g && ABAST[g] === 'Simulador').map(g => {
    const ss = STORES.filter(s => s.grp === g).sort((a,b) => pt(a.code,b.code));
    return {g, n:ss.length, lojas:ss.map(s => `${s.code} ${s.name}`)};
  });
}
function simTable(rows, pfx, mapH){
  return `<div class="tblwrap"><table class="xtab"><thead><tr><th>Agrupamento</th><th class="num">Lojas</th><th>Lojas do agrupamento</th><th>Rota</th></tr></thead>
    <tbody>${rows.map((r,i) => `<tr><td><b>${esc(r.g)}</b></td><td class="num">${r.n}</td><td><ul class="xlist">${r.lojas.map(l => `<li>${esc(l)}</li>`).join('')}</ul></td>
      <td class="xroute"><button type="button" class="linkbtn" data-gmap="${esc(r.g)}" data-back="${pfx}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" style="vertical-align:-2px;margin-right:4px"><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/></svg>Ver rota no mapa</button></td></tr>`).join('')}</tbody>
    <tfoot><tr><td>Total</td><td class="num">${rows.reduce((a,r) => a + r.n, 0)}</td><td></td><td></td></tr></tfoot></table></div>`;
}
const simStores = g => STORES.filter(s => s.grp === g).sort((a,b) => pt(a.code,b.code));
function openExtract(){
  const rows = simRows(), tot = rows.reduce((a,r) => a + r.n, 0);
  showMd(`<div class="md-head"><div><p class="meta" style="margin:0">Extração</p><h2 id="mdTitle">Agrupamentos abastecidos por Simulador</h2>
      <p>${rows.length ? `${rows.length} ${rows.length>1?'agrupamentos':'agrupamento'}, ${tot} lojas.` : 'Nenhum agrupamento está marcado como Simulador.'}</p></div>${closeBtn()}</div>
    ${rows.length ? `<div class="xact"><a class="fbtn ghost" href="#simulador" target="_blank" rel="noopener" style="text-decoration:none"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 3h7v7M10 14 21 3M21 14v7H3V3h7"/></svg>Exportar página</a>
      <button class="fbtn" id="xPng" type="button"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>Salvar como imagem</button></div>
      ${simTable(rows, 'xm')}`
      : `<div class="pendbox">Marque "Simulador" na chave de abastecimento dos agrupamentos para que eles apareçam aqui.</div>`}`);
  const b = $('#xPng'); if(b) b.onclick = () => savePng(rows, tot, 'xm', b);
}
/* Página exportada só com o resumo (#simulador) */
function renderSimPage(){
  while(PAGE_MAPS.length){ try{ PAGE_MAPS.pop().remove(); }catch(e){} }
  const rows = simRows(), tot = rows.reduce((a,r) => a + r.n, 0), root = $('#simRoot');
  const quando = new Date().toLocaleString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}).replace(',','');
  root.innerHTML = `<header class="simhead"><div><p class="meta" style="margin:0">Janelas de recebimento das lojas</p><h1>Agrupamentos abastecidos por Simulador</h1>
      <p class="sub">${RSTATE === 'loading' ? 'Carregando dados da planilha…' : rows.length ? `${rows.length} ${rows.length>1?'agrupamentos':'agrupamento'}, ${tot} lojas. Gerado em ${quando}.` : 'Nenhum agrupamento está marcado como Simulador.'}</p></div>
    <div class="simact"><button class="fbtn ghost" id="spPrint" type="button">Imprimir ou salvar PDF</button><button class="fbtn" id="spPng" type="button">Salvar como imagem</button></div></header>
    ${rows.length ? simTable(rows, 'sp') : ''}`;
  $('#spPrint').onclick = () => print();
  root.onclick = e => { const gm = e.target.closest('[data-gmap]'); if(gm) openGroupMap(gm.dataset.gmap); };
  $('#spPng').onclick = e => rows.length && savePng(rows, tot, 'sp', e.currentTarget);
}
// Desenha a tabela (com os mapas, quando disponíveis) num canvas e baixa como PNG
const waitIdle = m => new Promise(res => { if(!m || m.loaded()) return res(); const to = setTimeout(res, 6000); m.once('idle', () => { clearTimeout(to); res(); }); });
async function savePng(rows, tot, pfx, btn){
  if(btn){ btn.disabled = true; btn.dataset.t = btn.innerHTML; btn.textContent = 'Gerando imagem…'; }
  try{
    const blob = await buildPng(rows, tot, pfx, false);
    const a = document.createElement('a'), d = new Date();
    a.href = URL.createObjectURL(blob);
    a.download = `agrupamentos-simulador-${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}.png`;
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  }finally{ if(btn){ btn.disabled = false; btn.innerHTML = btn.dataset.t; } }
}
function buildPng(rows, tot, pfx, withMaps){
  const S = 2, MW = 520, W = withMaps ? 1640 : 1240, P = 40, LH = 23, F = '"Instrument Sans", "Segoe UI", Arial, sans-serif';
  const cw = [300, 90, withMaps ? W - 2*P - 390 - MW - 20 : W - 2*P - 390];
  const c = document.createElement('canvas'), x = c.getContext('2d');
  const wrap = (txt, w, font) => { x.font = font; const out = []; let line = '';
    String(txt).split(' ').forEach(wd => { const tl = line ? line + ' ' + wd : wd; if(x.measureText(tl).width > w && line){ out.push(line); line = wd; } else line = tl; });
    if(line) out.push(line); return out; };
  const body = rows.map((r,i) => {
    const a = wrap(r.g, cw[0]-24, `600 16px ${F}`);
    const l = r.lojas.flatMap(lj => wrap(lj, cw[2]-40, `15px ${F}`).map((ln,k) => ({ln, first:k===0})));
    const R = ROUTE_DRAW[pfx+i], cv = withMaps && R && R.map ? R.map.getCanvas() : null;
    const mh = cv ? Math.round(MW * cv.clientHeight / cv.clientWidth) : 0;
    const info = R && R.r ? `${fmtKm(R.r.km)}, cerca de ${fmtMin(R.r.min)} saindo do ${CD ? CD.nome : 'CD'}` : '';
    return {r, a, l, R, cv, mh, info, h: Math.max(a.length*LH, l.length*LH, withMaps ? mh + 30 : 0) + 28};
  });
  const H = P + 90 + 44 + body.reduce((s,b) => s + b.h, 0) + 52 + P;
  c.width = W*S; c.height = H*S; x.scale(S,S);
  x.fillStyle = '#FFFFFF'; x.fillRect(0,0,W,H);
  x.fillStyle = '#1D2733'; x.font = `600 28px ${F}`; x.fillText('Agrupamentos abastecidos por Simulador', P, P+30);
  x.fillStyle = '#5D6B7A'; x.font = `15px ${F}`;
  x.fillText(`${rows.length} ${rows.length>1?'agrupamentos':'agrupamento'}, ${tot} lojas. Gerado em ${new Date().toLocaleString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}).replace(',','')}.`, P, P+60);
  let y = P + 90; const X2 = P + cw[0] + cw[1], X3 = X2 + cw[2] + 20;
  x.fillStyle = '#F2F5F7'; x.fillRect(P, y, W-2*P, 44);
  x.fillStyle = '#5D6B7A'; x.font = `600 14px ${F}`;
  x.fillText('Agrupamento', P+12, y+27); x.textAlign = 'right'; x.fillText('Lojas', P+cw[0]+cw[1]-12, y+27); x.textAlign = 'left';
  x.fillText('Lojas do agrupamento', X2+12, y+27); if(withMaps) x.fillText('Rota saindo do CD', X3, y+27);
  y += 44;
  body.forEach((b,i) => {
    if(i % 2){ x.fillStyle = '#FAFBFC'; x.fillRect(P, y, W-2*P, b.h); }
    const ya = y + (b.h - b.a.length*LH)/2 - 4, yn = y + (b.h - LH)/2 - 4, yl = y + (b.h - b.l.length*LH)/2 - 4;
    x.fillStyle = '#1D2733'; x.font = `600 16px ${F}`; b.a.forEach((ln,k) => x.fillText(ln, P+12, ya+20+k*LH));
    x.textAlign = 'right'; x.fillText(String(b.r.n), P+cw[0]+cw[1]-12, yn+20); x.textAlign = 'left';
    x.font = `15px ${F}`; const y0 = y; y = yl - 10; b.l.forEach((o,k) => { x.fillStyle = '#33404D'; if(o.first){ x.beginPath(); x.arc(X2+18, y+25+k*LH, 2.6, 0, 7); x.fill(); } x.fillText(o.ln, X2+30, y+30+k*LH); }); y = y0;
    if(withMaps){
      if(b.cv){
        const mx = X3, my = y + 14, sc = MW / b.cv.clientWidth;
        x.save(); x.beginPath(); x.roundRect ? x.roundRect(mx, my, MW, b.mh, 8) : x.rect(mx, my, MW, b.mh); x.clip();
        x.drawImage(b.cv, mx, my, MW, b.mh);
        const dot = (ll, txt, dark) => { const p = b.R.map.project([ll[1], ll[0]]); const px = mx + p.x*sc, py = my + p.y*sc;
          x.beginPath(); x.arc(px, py, 11, 0, 7); x.fillStyle = dark ? '#1D2733' : '#2F5D7C'; x.fill(); x.lineWidth = 2; x.strokeStyle = '#fff'; x.stroke();
          x.fillStyle = '#fff'; x.font = `700 ${dark?9:11}px ${F}`; x.textAlign = 'center'; x.fillText(txt, px, py+4); x.textAlign = 'left'; };
        b.R.order.forEach((ix,k) => dot(b.R.pts[ix], String(k+1)));
        dot(b.R.pts[0], 'CD', true);
        x.restore(); x.strokeStyle = '#DCE3E9'; x.lineWidth = 1; x.strokeRect(mx, my, MW, b.mh);
        x.fillStyle = '#5D6B7A'; x.font = `13px ${F}`; x.fillText(b.info, mx, my + b.mh + 20);
      } else { x.fillStyle = '#8A97A6'; x.font = `13px ${F}`; x.fillText('Mapa indisponível', X3, y+30); }
    }
    y += b.h; x.fillStyle = '#DCE3E9'; x.fillRect(P, y-1, W-2*P, 1);
  });
  x.fillStyle = '#1D2733'; x.font = `700 16px ${F}`; x.fillText('Total', P+12, y+32);
  x.textAlign = 'right'; x.fillText(String(tot), P+cw[0]+cw[1]-12, y+32); x.textAlign = 'left';
  if(withMaps){ x.fillStyle = '#8A97A6'; x.font = `12px ${F}`; x.fillText('Mapa: © OpenStreetMap, OpenFreeMap. Rotas: OSRM.', X3, y+32); }
  return new Promise((res, rej) => { try{ c.toBlob(bl => bl ? res(bl) : rej(new Error('vazio')), 'image/png'); }catch(e){ rej(e); } });
}
$('#gExt').onclick = openExtract;
document.addEventListener('click', e => { const b = e.target.closest('.abseg button'); if(!b) return; e.stopPropagation(); const box = b.closest('.abseg'); setAbast(box.dataset.ag, b.dataset.m, box); });
function renderGrupos(){
  const q = GS.q.trim().toLowerCase();
  let infos = GRPS.map(groupInfo).filter(x => x.ss.some(inScope));
  const total = infos.length;
  if(GS.ab) infos = infos.filter(x => x.g && (GS.ab === 'none' ? !ABAST[x.g] : ABAST[x.g] === GS.ab));
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
  $('#glist').innerHTML = infos.length ? infos.map(x => `<article class="gcard"><header><h3>${esc(grpName(x.g))}</h3>${abSwitch(x.g)}<div class="gmeta"><span>${x.ss.length} ${x.ss.length>1?'lojas':'loja'}</span><span>${[...new Set(x.ss.map(s=>s.reg))].map(esc).join(', ')}</span>${x.pend?`<span class="warn">${x.pend} sem resposta</span>`:''}${x.ss.some(s => RESTR[s.code]) ? `<span class="rzwarn" title="${esc(x.ss.filter(s=>RESTR[s.code]).map(s=>s.code+' '+s.name).join(', '))}"><b>!</b>Contém loja com restrição</span>` : ''}</div></header>
      ${groupTable(x)}<p class="gnote">${groupNoteFull(x)}</p><div><button class="btn mapbtn" data-gmap="${esc(x.g)}"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/></svg>Ver rota no mapa</button></div>${groupBlockers(x)}</article>`).join('')
    : `<div class="empty">Nenhum agrupamento com esses filtros.</div>`;
}
$('#gq').oninput = e => { GS.q = e.target.value; renderGrupos(); };
(() => { const el = $('#gSort'); syncChip(el); el.onchange = () => { GS.sort = el.value; syncChip(el); renderGrupos(); }; })();
(() => { const el = $('#gAb'); syncChip(el); el.onchange = () => { GS.ab = el.value; syncChip(el); renderGrupos(); }; })();
$('#glist').addEventListener('click', e => { const gm = e.target.closest('[data-gmap]'); if(gm){ openGroupMap(gm.dataset.gmap); return; } const t = e.target.closest('tr[data-code], .bs'); if(t) openStore(t.dataset.code); });

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

/* ---------- Mapa e trajeto (OpenStreetMap + OSRM, sem chave) ---------- */
const GEO_FIXED = {"0003": [-23.602001, -46.603943], "0007": [-23.5146, -46.69701], "0008": [-23.547634, -46.573853], "0009": [-23.583889, -46.682946], "0010": [-23.52522, -46.68197], "0011": [-23.478305, -46.609467], "0013": [-23.586532, -46.636697], "0015": [-23.703311, -46.553874], "0016": [-22.90367, -47.06952], "0019": [-23.476059, -46.52948], "0020": [-23.648667, -46.533617], "0021": [-21.178078, -47.808278], "0022": [-23.612188, -46.66689], "0023": [-23.588943, -46.631746], "0024": [-22.878208, -43.271774], "0025": [-23.54996, -46.44572], "0026": [-23.507501, -46.626704], "0027": [-22.904872, -43.182712], "0028": [-16.71275, -49.23402], "0029": [-22.34209, -49.0493], "0030": [-23.566149, -46.503635], "0031": [-23.563399, -46.655262], "0032": [-23.621545, -46.699664], "0033": [-23.580197, -46.711388], "0034": [-19.940074, -43.932139], "0035": [-22.320287, -49.072253], "0036": [-23.71711, -46.54877], "0037": [-23.609068, -46.756552], "0038": [-23.67445, -46.67801], "0040": [-23.50045, -46.84122], "0041": [-20.811301, -49.382429], "0043": [-23.44582, -46.72255], "0045": [-23.524517, -46.547375], "0046": [-22.704012, -47.649764], "0047": [-23.532251, -46.730392], "0049": [-23.19478, -45.885457], "0050": [-25.438202, -49.266478], "0051": [-23.504454, -47.476822], "0052": [-22.21404, -49.952058], "0053": [-25.44934, -49.30422], "0055": [-22.89197, -47.027293], "0056": [-23.64574, -46.70081], "0057": [-23.523164, -46.593986], "0058": [-22.878875, -43.467141], "0059": [-15.78806, -47.88245], "0060": [-23.50695, -46.70358], "0061": [-23.522405, -46.608765], "0062": [-23.6643, -46.460625], "0063": [-23.30409, -45.962213], "0064": [-23.546879, -46.636782], "0065": [-23.509364, -46.194409], "0066": [-23.68567, -46.62533], "0067": [-23.539012, -46.765448], "0068": [-23.650728, -46.660148], "0069": [-23.592981, -46.837834], "0070": [-23.116974, -47.219709], "0071": [-23.613437, -46.577893], "0073": [-21.206512, -47.765686], "0074": [-23.001421, -43.338245], "0075": [-22.797494, -43.35312], "0076": [-23.49456, -46.428036], "0077": [-23.542278, -46.318424], "0078": [-23.492003, -47.445062], "0079": [-23.480768, -46.611386], "0081": [-22.919432, -43.250095], "0082": [-30.049527, -51.228753], "0083": [-23.99763, -46.406236], "0084": [-23.57246, -46.6957], "0085": [-23.579756, -46.594417], "0086": [-22.8962, -43.12293], "0087": [-23.99248, -46.272234], "0088": [-22.57095, -47.407966], "0090": [-26.25393, -48.85325], "0091": [-23.5727, -46.7111], "0092": [-19.920802, -43.920289], "0093": [-23.562019, -46.551481], "0094": [-23.516227, -46.855518], "0095": [-21.73918, -43.37143], "0096": [-23.505419, -46.846202], "0098": [-22.7484, -47.3672], "0099": [-23.191693, -46.902913], "0100": [-22.024114, -47.889805], "0102": [-22.82174, -43.045899], "0103": [-22.85059, -43.31101], "0105": [-8.086329, -34.894133], "0106": [-25.094793, -50.152244], "0107": [-18.909879, -48.260615], "0108": [-22.873024, -42.035875], "0109": [-12.971364, -38.474561], "0110": [-23.31228, -51.14694], "0111": [-23.54068, -46.47018], "0112": [-23.54728, -46.64957], "0113": [-19.76612, -47.95197], "0114": [-21.22522, -47.83543], "0115": [-22.78739, -43.28569], "0116": [-22.96525, -43.18001], "0117": [-22.88582, -43.40257], "0118": [-23.53602, -47.46443], "0119": [-23.66779, -46.53356], "0120": [-15.84132, -48.04402], "0121": [-21.75451, -41.34907], "0122": [-22.97107, -43.37238], "0123": [-19.91725, -43.95433], "0124": [-23.63491, -46.7367], "0125": [-23.461331, -46.527814], "0126": [-22.927065, -43.575446], "0127": [-22.99641, -43.25943], "0128": [-23.61728, -46.70468], "0130": [-23.50658, -46.71854], "0131": [-20.86645, -49.41441], "0132": [-19.88057, -44.03816], "0133": [-23.01112, -43.46097], "0134": [-21.78056, -43.35992], "0136": [-23.53614, -46.77796], "0137": [-20.35204, -40.29771], "0138": [-23.59529, -46.68668], "0139": [-21.79317, -48.17637], "0140": [-27.614597, -48.645527], "0141": [-26.92066, -49.06992], "0142": [-22.88643, -43.28349], "0143": [-26.96362, -48.63974], "0145": [-23.02277, -45.58189], "0146": [-15.788661, -47.883314], "0147": [-3.74123, -38.47233], "0148": [-21.212166, -50.468998], "0149": [-19.8903, -43.96801], "0150": [-22.522475, -44.078243], "0151": [-23.66747, -46.71276], "0152": [-3.75733, -38.488057], "0153": [-23.00302, -44.300008], "0155": [-22.120358, -51.397157], "0156": [-22.99924, -43.35617], "0157": [-30.02496, -51.16225], "0158": [-8.12006, -34.90503], "0159": [-30.084494, -51.245297], "0161": [-22.764102, -43.465905], "0162": [-23.55673, -46.66249], "0163": [-22.88446, -43.55754], "0164": [-12.980284, -38.456889], "0165": [-23.68362, -46.55725], "0166": [-3.72744, -38.56752], "0167": [-16.74177, -49.27668], "0168": [-8.29523, -35.95196], "0169": [-29.17669, -51.21993], "0170": [-15.79549, -47.89267], "0172": [-23.19985, -45.8812], "0174": [-23.57037, -46.66133], "0175": [-23.26417, -47.28024], "0176": [-15.5772, -56.071514], "0178": [-20.34354, -40.40027], "0179": [-12.97806, -38.45543], "0181": [-5.84171, -35.21082], "0183": [-10.94528, -37.04809], "0184": [-22.36859, -46.95364], "0185": [-8.03791, -34.87202], "0186": [-20.31351, -40.28865], "0187": [-29.91581, -51.16516], "0188": [-23.34275, -51.18705], "0189": [-23.44339, -46.54005], "0190": [-23.63622, -46.67027], "0191": [-23.42017, -51.96954], "0192": [-7.99373, -34.84389], "0193": [-9.55868, -35.74631], "0194": [-7.23544, -35.87013], "0195": [-23.5623, -46.6868], "0196": [-23.58994, -46.6188], "0197": [-7.16207, -34.83055], "0198": [-7.09889, -34.84483], "0199": [-23.614592, -46.638594], "0200": [-23.55253, -46.62103], "0201": [-15.5897, -56.11826], "0202": [-8.74815, -63.87579], "0203": [-23.51977, -46.65276], "0204": [-3.76473, -38.57445], "0206": [-25.47784, -49.29076], "0207": [-16.71429, -49.26661], "0208": [-2.52741, -44.2553], "0209": [-28.27102, -52.38545], "0210": [-14.87676, -40.81731], "0211": [-12.936688, -38.394585], "0212": [-23.55399, -46.65271], "0213": [-22.117569, -51.405059], "0214": [-9.62746, -35.69886], "0215": [-5.80935, -35.20406], "0216": [-31.76133, -52.31809], "0217": [-22.92671, -43.239058], "0218": [-22.95596, -43.33719], "0219": [-25.42914, -49.21427], "0220": [-23.51599, -46.17952], "0221": [-1.390294, -48.465665], "0222": [-22.3919, -41.80726], "0223": [-5.07695, -42.8022], "0224": [-22.83028, -47.26605], "0225": [-1.38594, -48.40912], "0226": [-14.79664, -39.27431], "0227": [-22.86427, -47.02153], "0228": [-16.32397, -48.9491], "0230": [-23.19107, -46.87127], "0231": [-15.72087, -47.88589], "0232": [-10.94326, -37.05982], "0234": [-2.53357, -44.22505], "0236": [-23.94637, -46.3306], "0238": [-12.888337, -38.321257], "0239": [-27.58523, -48.61414], "0241": [-27.07015, -52.62631], "0242": [-22.6625, -50.41867], "0243": [-23.59732, -46.48734], "0244": [-19.82143, -43.94744], "0245": [-22.93194, -47.0768], "0246": [-22.95353, -43.19096]}, CD_FIXED = [-23.509183754401036, -46.9267730548887];
let GEO = {...GEO_FIXED}, CD = {nome:'CD Barueri', lat:CD_FIXED[0], lng:CD_FIXED[1]};
const ROUTES = new Map(), MAPS = [], PAGE_MAPS = [];
const hav = (a, b) => { const R = 6371, r = x => x * Math.PI / 180, dl = r(b[0]-a[0]), dn = r(b[1]-a[1]);
  const q = Math.sin(dl/2)**2 + Math.cos(r(a[0]))*Math.cos(r(b[0]))*Math.sin(dn/2)**2; return 2*R*Math.asin(Math.sqrt(q)); };
const fmtMin = m => m < 60 ? `${Math.round(m)} min` : `${Math.floor(m/60)} h ${String(Math.round(m%60)).padStart(2,'0')} min`;
const fmtKm = k => `${k < 10 ? k.toFixed(1).replace('.',',') : Math.round(k)} km`;
// ordem pela loja mais próxima, usada se o serviço de rotas não responder
function nearestOrder(pts){
  const left = pts.slice(1).map((p,i) => i+1), order = []; let cur = pts[0];
  while(left.length){ let bi = 0; left.forEach((ix,k) => { if(hav(cur, pts[ix]) < hav(cur, pts[left[bi]])) bi = k; }); const ix = left.splice(bi,1)[0]; order.push(ix); cur = pts[ix]; }
  return order;
}
// Servidores públicos de rota (OSRM, sem chave). Tenta um e, se falhar, o próximo.
const ROUTERS = [
  'https://routing.openstreetmap.de/routed-car',
  'https://router.project-osrm.org'
];
async function osrmCall(base, pts){
  const q = pts.map(p => `${p[1].toFixed(6)},${p[0].toFixed(6)}`).join(';');
  const url = pts.length === 2
    ? `${base}/route/v1/driving/${q}?overview=full&geometries=geojson`
    : `${base}/trip/v1/driving/${q}?source=first&roundtrip=false&destination=any&overview=full&geometries=geojson`;
  const ac = new AbortController(), to = setTimeout(() => ac.abort(), 20000);
  try{
    const r = await fetch(url, {signal:ac.signal});
    if(!r.ok) throw new Error('HTTP ' + r.status);
    const j = await r.json();
    if(j.code !== 'Ok') throw new Error(j.code);
    const tr = pts.length === 2 ? j.routes[0] : j.trips[0];
    const order = pts.length === 2 ? [1] : j.waypoints.map((w,i) => ({i, k:w.waypoint_index})).filter(x => x.i > 0).sort((a,b) => a.k-b.k).map(x => x.i);
    return {exact:true, order, line:tr.geometry.coordinates.map(c => [c[1], c[0]]), km:tr.distance/1000, min:tr.duration/60,
            legs:tr.legs.map(l => ({km:l.distance/1000, min:l.duration/60}))};
  } finally { clearTimeout(to); }
}
async function bestRoute(pts){
  const key = pts.map(p => p.join(',')).join(';');
  if(ROUTES.has(key)) return ROUTES.get(key);
  for(const base of ROUTERS){
    for(let tentativa = 0; tentativa < 2; tentativa++){
      try{ const res = await osrmCall(base, pts); ROUTES.set(key, res); return res; }
      catch(e){ if(tentativa === 0) await new Promise(r => setTimeout(r, 700)); }
    }
  }
  // sem serviço de rotas: ordem pela loja mais próxima e estimativa (não guarda, para tentar de novo depois)
  const order = nearestOrder(pts), seq = [0, ...order];
  const legs = order.map((ix,k) => { const km = hav(pts[seq[k]], pts[ix]) * 1.25; return {km, min: km / (km > 60 ? 65 : 28) * 60}; });
  return {exact:false, order, line:seq.map(ix => pts[ix]), km:legs.reduce((a,l)=>a+l.km,0), min:legs.reduce((a,l)=>a+l.min,0), legs};
}
const mapBlock = (id, h) => `<div class="mapbox"><div class="map" id="${id}" style="height:${h}px"></div><div class="mapinfo" id="${id}-i"><span class="ni-dot"></span>Calculando o melhor trajeto…</div></div>`;
const ROUTE_DRAW = {};
async function drawRoute(id, stores, opts = {}){
  const el = document.getElementById(id), info = document.getElementById(id+'-i'); if(!el) return;
  const fail = msg => { el.remove(); info.innerHTML = `<span class="mapmsg">${msg}</span>`; };
  if(!window.maplibregl) return fail('Mapa indisponível: não foi possível carregar a biblioteca do mapa.');
  if(!CD) return fail('O ponto de partida ainda não tem coordenadas.');
  const withGeo = stores.filter(s => GEO[s.code]), miss = stores.filter(s => !GEO[s.code]);
  if(!withGeo.length) return fail(`${stores.length>1?'Estas lojas ainda não têm':'Esta loja ainda não tem'} coordenadas. Preencha Latitude e Longitude na aba Lojas da planilha.`);
  const pts = [[CD.lat, CD.lng], ...withGeo.map(s => GEO[s.code].map(Number))];
  const r = await bestRoute(pts);
  if(!document.body.contains(el)) return;
  const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#2F5D7C';
  // Mapa vetorial gratuito, sem chave e sem limite de uso: OpenFreeMap (dados do OpenStreetMap) com MapLibre
  const map = new maplibregl.Map({container:el, style:'https://tiles.openfreemap.org/styles/liberty', attributionControl:false, dragRotate:false, pitchWithRotate:false, preserveDrawingBuffer:!!opts.snap});
  (opts.page ? PAGE_MAPS : MAPS).push(map);
  ROUTE_DRAW[id] = {map, pts, order:r.order, withGeo, r};
  map.addControl(new maplibregl.AttributionControl({compact:true}), 'bottom-right');
  map.addControl(new maplibregl.NavigationControl({showCompass:false}), 'top-left');
  map.touchZoomRotate.disableRotation();
  const lineLL = r.line.map(p => [p[1], p[0]]);
  const bounds = lineLL.reduce((b,c) => b.extend(c), new maplibregl.LngLatBounds(lineLL[0], lineLL[0]));
  pts.forEach(p => bounds.extend([p[1], p[0]]));
  const fit = () => { map.resize(); map.fitBounds(bounds, {padding:opts.compact ? 30 : 44, maxZoom:14, duration:0}); };
  fit();
  // o mapa pode nascer antes de a tabela/modal terminar de se ajustar: reenquadra quando o tamanho muda
  if(window.ResizeObserver){ let w0 = el.clientWidth; const ro = new ResizeObserver(() => { if(Math.abs(el.clientWidth - w0) > 4){ w0 = el.clientWidth; fit(); } }); ro.observe(el); map.on('remove', () => ro.disconnect()); }
  map.on('load', () => {
    // demais lojas, em pontos claros, só para referência
    const inRoute = new Set(withGeo.map(s => s.code));
    map.addSource('outras', {type:'geojson', data:{type:'FeatureCollection', features:STORES.filter(s => GEO[s.code] && !inRoute.has(s.code)).map(s => ({type:'Feature',
      properties:{code:s.code, label:`${s.code} ${s.name}`, sub:`${s.city}/${s.uf}${s.grp ? `, ${s.grp}` : ''}`},
      geometry:{type:'Point', coordinates:[Number(GEO[s.code][1]), Number(GEO[s.code][0])]}}))}});
    map.addLayer({id:'outras', type:'circle', source:'outras', paint:{'circle-radius':['interpolate',['linear'],['zoom'],4,3.5,10,6,14,8],
      'circle-color':'#8A97A6', 'circle-opacity':.55, 'circle-stroke-color':'#ffffff', 'circle-stroke-width':1.2, 'circle-stroke-opacity':.8}});
    const pop = new maplibregl.Popup({closeButton:false, closeOnClick:false, offset:10});
    map.on('mouseenter', 'outras', e => { map.getCanvas().style.cursor = 'pointer'; const p = e.features[0].properties;
      pop.setLngLat(e.features[0].geometry.coordinates).setHTML(`<b>${esc(p.label)}</b><br><span style="color:#5D6B7A">${esc(p.sub)}</span>`).addTo(map); });
    map.on('mouseleave', 'outras', () => { map.getCanvas().style.cursor = ''; pop.remove(); });
    map.on('click', 'outras', e => openStore(e.features[0].properties.code));
    map.addSource('rota', {type:'geojson', data:{type:'Feature', geometry:{type:'LineString', coordinates:lineLL}}});
    map.addLayer({id:'rota-borda', type:'line', source:'rota', layout:{'line-join':'round','line-cap':'round'}, paint:{'line-color':'#ffffff','line-width':8,'line-opacity':.9}});
    map.addLayer({id:'rota', type:'line', source:'rota', layout:{'line-join':'round','line-cap':'round'}, paint:{'line-color':accent,'line-width':4.5, ...(r.exact ? {} : {'line-dasharray':[2,2]})}});
  });
  const marker = (ll, html, cls, label) => {
    const d = document.createElement('div'); d.className = `mk ${cls}`; d.innerHTML = html; d.title = label;
    new maplibregl.Marker({element:d}).setLngLat([ll[1], ll[0]]).setPopup(new maplibregl.Popup({offset:16, closeButton:false}).setText(label)).addTo(map);
  };
  marker(pts[0], 'CD', 'cd', CD.nome || 'CD');
  r.order.forEach((ix,k) => { const s = withGeo[ix-1]; marker(pts[ix], k+1, 'st', `${k+1}. ${s.code} ${s.name}`); });
  setTimeout(fit, 80); map.once('load', fit);
  if(opts.compact){
    info.innerHTML = `<p class="rtot" style="margin:0"><b>${fmtKm(r.km)}</b>, cerca de <b>${fmtMin(r.min)}</b> saindo do ${esc(CD.nome || 'CD')}${r.exact ? '' : ' (estimado em linha reta)'}.</p>
      <p class="rnote" style="margin:0">Ordem: ${r.order.map((ix,k) => `${k+1}. ${esc(withGeo[ix-1].name)}`).join(' → ')}${miss.length ? `. Sem coordenadas: ${miss.map(s => s.code).join(', ')}` : ''}.</p>`;
    return;
  }
  info.innerHTML = `<ol class="rsteps"><li class="cd"><b>Saída:</b> ${esc(CD.nome || 'CD')}</li>${r.order.map((ix,k) => { const s = withGeo[ix-1], l = r.legs[k];
      return `<li><b>${k+1}.</b> <button class="linkbtn" data-code="${s.code}">${s.code} ${esc(s.name)}</button> <span>${esc(s.city)}/${s.uf}</span><em>+${fmtKm(l.km)}, ${fmtMin(l.min)}</em></li>`; }).join('')}</ol>
    <p class="rtot"><b>${fmtKm(r.km)}</b> no total, cerca de <b>${fmtMin(r.min)}</b> de deslocamento.</p>
    <p class="rnote"><span class="dotl"></span>Pontos cinza: demais lojas, só para referência (clique para abrir a ficha). ${r.exact ? 'Trajeto por ruas calculado com OSRM sobre dados do OpenStreetMap, perfil de carro e sem trânsito; não considera restrições para caminhão.' : 'Os serviços de rotas não responderam agora: o trajeto aparece em linha reta, com distância e tempo estimados. Feche e abra o mapa de novo para tentar outra vez.'}${miss.length ? ` Sem coordenadas: ${miss.map(s => s.code).join(', ')}.` : ''}</p>`;
}
function openGroupMap(g, back){
  const info = groupInfo(g);
  showMd(`${back ? `<button type="button" class="linkbtn backx" id="mdBack">← Voltar para a extração</button>` : ''}<div class="md-head"><div><p class="meta" style="margin:0">Rota do agrupamento, saindo do ${esc(CD ? CD.nome : 'CD Barueri')}</p><h2 id="mdTitle">${esc(grpName(g))}</h2>
    <p>${info.ss.length} lojas, na ordem de menor deslocamento.</p></div>${closeBtn()}</div>${mapBlock('mapG', 440)}`);
  drawRoute('mapG', info.ss);
  const bk = $('#mdBack'); if(bk) bk.onclick = openExtract;
}

/* ---------- Modais ---------- */
const md = $('#md');
function showMd(html){
  md.classList.remove('wide');
  while(MAPS.length){ try{ MAPS.pop().remove(); }catch(e){} }
  $('#mdIn').innerHTML = html; $('#mdClose').onclick = () => md.close(); tip.classList.remove('on');
  if(!md.open) md.showModal(); md.scrollTop = 0;
  const t = $('#mdTitle'); if(t){ t.tabIndex = -1; t.focus({preventScroll:true}); }
}
md.addEventListener('click', e => { if(e.target === md) md.close(); });
$('#mdIn').addEventListener('click', e => { const gm = e.target.closest('[data-gmap]'); if(gm){ openGroupMap(gm.dataset.gmap, gm.dataset.back === 'xm'); return; } const c = e.target.closest('[data-code]'); if(c && !c.closest('.md-head')) openStore(c.dataset.code); });
function openStore(code){
  const s = byCode[code], r = RESP[code];
  let body;
  if(!r) body = `<div class="pendbox">A loja ainda não respondeu à pesquisa. Ela aparece aqui assim que o gerente enviar as faixas pelo link do regional ${esc(s.reg)}.</div>`;
  else {
    const g = ['<span></span>', ...DS.map(d => `<span class="gh">${d}</span>`)];
    for(let h=0;h<NH;h++){
      g.push(`<span class="gl">${faixa(h)}</span>`);
      DAYS.forEach((d,i) => { const yes = r.d[i][h]==='S', n = yes ? '' : (r.rOf[i+'|'+h] ?? -1) + 1, rz = restrAt(code,i,h);
        g.push(`<span class="gc ${yes?'s':'n'}${rz?' rzc':''}" data-c="${code}" data-k="${i}|${h}" aria-label="${yes ? 'Recebe' : esc(n ? `Motivo ${n}: ${r.reasons[n-1].txt}` : 'Não recebe, sem motivo informado')}">${yes?'':n||'!'}</span>`); });
    }
    const av = storeAvail(code);
    body = `<section><h4>Grade da semana: ${av} de ${NC} faixas com recebimento (${pct(av,NC)}%)</h4><div class="sgrid">${g.join('')}</div>
      <div class="legend" style="margin:10px 0 0"><span><i class="sw" style="background:var(--sim-soft);outline:1px solid var(--sim)"></i>Recebe</span><span><i class="sw" style="background:var(--nao-soft);outline:1.5px solid var(--nao)"></i>Não recebe (número do motivo)</span>${RESTR[code]?`<span><i class="sw" style="box-shadow:inset 0 0 0 2px var(--rzc)"></i>Horário com restrição de trânsito</span>`:''}</div></section>
      <section><h4>Justificativas</h4>${r.reasons.length ? `<ol class="rlist">${r.reasons.map((x,i) => `<li><div class="rl-h"><b class="rn">${i+1}</b><span class="wins">${winLabel(x.keys).map(w=>`<span>${w}</span>`).join('')}</span></div><p>${esc(x.txt)}</p></li>`).join('')}</ol>` : '<div class="okbox">A loja recebe em todas as faixas da semana.</div>'}
      <p class="hint" style="margin:12px 0 0">Respondido por ${esc(r.nome)} (${esc(r.cargo)}) em ${esc(r.quando)}.</p></section>`;
  }
  if(RESTR[code]){
    const rz = RESTR[code][0], cn = r ? conflictN(code) : 0;
    body = `<div class="rzbox"><div class="rz-h"><b>${esc(rz.zona)}</b><span class="rz-sit">${esc(rz.sit || 'A confirmar')}</span></div>
      <p>Restrição para ${esc(rz.veic || 'caminhões')}: ${esc(rulesTxt(code))}.${s.truck ? ` Veículo da loja: ${esc(s.truck)}.` : ' Veículo da loja não informado.'}</p>
      ${r ? (cn ? `<p class="rz-cf">A loja informou que recebe em <b>${cn} ${cn>1?'faixas':'faixa'}</b> que ficam dentro do horário restrito (contornadas na grade).</p>` : '<p>A loja não informou recebimento dentro do horário restrito.</p>') : ''}
      ${rz.fonte ? `<p class="rz-src">${esc(rz.fonte)}</p>` : ''}</div>` + body;
  }
  showMd(`<div class="md-head"><div><p class="meta" style="margin:0">Loja ${s.code}</p><h2 id="mdTitle">${esc(s.name)}</h2>
    <div class="tags"><span>${esc(s.city)}/${s.uf}</span><span>${esc(s.addr)}</span><span>Regional ${esc(s.reg)}</span><span>${esc(grpName(s.grp))}</span>${s.truck?`<span>${esc(s.truck)}, ${esc(s.ativo)}</span>`:''}</div></div>${closeBtn()}</div>${body}
    ${s.grp ? (() => { const info = groupInfo(s.grp), o = info.ss.length - 1; return `<section style="border-top:1px solid var(--line);padding-top:18px"><h4 style="color:var(--muted);display:flex;flex-wrap:wrap;align-items:center;gap:10px">Agrupamento ${esc(s.grp)}${abSwitch(s.grp)}</h4>
      <p class="hint">${o ? `Vai junto com ${o} ${o>1?'outras lojas':'outra loja'}. Clique em uma loja para abrir a ficha dela. <button class="linkbtn" data-gmap="${esc(s.grp)}">Ver rota do agrupamento no mapa</button>` : 'Esta é a única loja do agrupamento.'}</p>${groupTable(info, s.code)}<p class="gnote" style="margin-top:10px">${groupNoteFull(info)}</p></section>`; })() : ''}
    <section style="border-top:1px solid var(--line);padding-top:18px"><h4>Trajeto a partir do CD</h4>${mapBlock('mapS', 280)}</section>`);
  drawRoute('mapS', [s]);
}
function openSlot(i, h){
  const st = stats(STORES.filter(inScope));
  const no = st.resp.filter(s => !ok(s.code,i,h));
  const groups = new Map();
  no.forEach(s => { const r = RESP[s.code], ri = r.rOf[i+'|'+h], rz = restrAt(s.code,i,h);
    const txt = r.d[i][h] === 'S' && rz ? `Restrição de trânsito: ${rz.zona} (${rz.sit || 'a confirmar'})` : ri != null ? r.reasons[ri].txt : 'Sem motivo informado';
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
    const hx = +k.split('|')[1], rz = restrAt(gc.dataset.c, i, hx);
    tip.innerHTML = (r.d[i][hx] === 'S' ? 'Recebe'
      : ri != null ? `<b>Motivo ${ri+1}</b><br>${esc(r.reasons[ri].txt)}` : 'Não recebe, sem motivo informado')
      + (rz ? `<br><span class="tip-rz">Restrição de trânsito: ${esc(rz.zona)}, ${esc(rulesTxt(gc.dataset.c))} (${esc((rz.sit||'a confirmar').toLowerCase())})</span>` : '');
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
    const no = info.resp.filter(s => !ok(s.code,i,h));
    tip.innerHTML = `<b>${DAYS[i]}, ${faixa(h)}</b><br>${no.length ? `Não recebem: ${no.map(s => esc(s.name)).join(', ')}` : `Todas as ${info.resp.length} lojas que responderam recebem.`}`;
    tip.classList.add('on'); placeTip(e); return;
  }
  const b = e.target.closest('.dbar[data-c]');
  if(!b){ tip.classList.remove('on'); return; }
  const s = byCode[b.dataset.c], r = RESP[s.code], i = +b.dataset.i, rc = b.getBoundingClientRect();
  const h = Math.min(NH-1, Math.max(0, Math.floor((e.clientX - rc.left) / rc.width * NH)));
  const yes = r.d[i][h] === 'S', ri = r.rOf[i+'|'+h], rz = restrAt(s.code,i,h);
  tip.innerHTML = `<b>${esc(s.name)}, ${DAYS[i].toLowerCase()}, ${faixa(h)}</b><br>${rz ? 'Loja: ' : ''}${yes ? 'Recebe' : `Não recebe${ri!=null ? `: ${esc(r.reasons[ri].txt.slice(0,200))}` : ''}`}${rz ? `<br><span class="tip-rz">Restrição de trânsito: ${esc(rz.zona)}, ${esc(rulesTxt(s.code))}${rz.sit?` (${esc(rz.sit.toLowerCase())})`:''}</span>` : ''}`;
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
  if(!F || F.code !== code) F = makeF(s, code, slug, token);
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
// Cria o estado do formulário; se a loja já respondeu, começa com a última resposta dela
function makeF(s, code, slug, token, blank){
  const f = {code, s, slug, token, nome:'', cargo:'', cells:DAYS.map(() => Array(NH).fill(null)), reasons:new Map(), nextR:1, sel:new Set(), draft:'', mode:'', sent:null, edit:null, touched:false};
  const r = RESP[code];
  if(r && !blank && RSTATE !== 'demo'){
    f.nome = r.nome || ''; f.cargo = r.cargo || '';
    const ids = r.reasons.map(x => { const id = 'r' + (f.nextR++); f.reasons.set(id, {txt:x.txt}); return id; });
    f.cells = r.d.map((row,i) => row.split('').map((c,h) => c === 'S' ? 'S' : (r.rOf[i+'|'+h] != null ? ids[r.rOf[i+'|'+h]] : null)));
    f.edit = {quando:r.quando, envio:r.envio};
  }
  return f;
}
const touch = () => { if(F) F.touched = true; };
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
    ${F.edit ? `<div class="editbox"><span class="ei">✎</span><div><b>Você está editando a resposta enviada em ${esc(F.edit.quando)}.</b><br>Ao enviar, ela substitui a anterior. Mude só o que precisar.</div><button type="button" class="linkbtn" id="fBlank">Começar do zero</button></div>`
      : RSTATE === 'loading' ? `<div class="editbox wait"><span class="ni-dot"></span><div>Verificando se a loja já respondeu…</div></div>` : ''}
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
  $('#fNome').oninput = e => { touch(); F.nome = e.target.value; e.target.closest('.ff').classList.remove('bad'); $('#fErr').textContent=''; };
  $('#fCargo').oninput = e => { touch(); F.cargo = e.target.value; e.target.closest('.ff').classList.remove('bad'); $('#fErr').textContent=''; };
  $('#fSend').onclick = submitForm;
  const bl = $('#fBlank'); if(bl) bl.onclick = () => { if(!confirm('Apagar a resposta carregada e começar do zero?')) return; F = makeF(F.s, F.code, F.slug, F.token, true); F.touched = true; renderForm(); };
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
  touch();
  F.sel.forEach(k => { const [i,h] = k.split('|').map(Number); F.cells[i][h] = v; });
  F.sel.clear(); F.mode = ''; cleanReasons(); $('#fErr').textContent = ''; fRefresh();
}
function cleanReasons(){ [...F.reasons.keys()].forEach(id => { if(!keysOfR(id).length) F.reasons.delete(id); }); }
function drawShortcuts(){
  const nulls = F.cells.flat().filter(v => v === null).length;
  const monDone = F.cells[0].every(v => v !== null), emptyDays = F.cells.slice(1).filter(r => r.every(v => v === null)).length;
  $('#fSc').innerHTML = `<button type="button" class="sc" id="scCopy" ${monDone && emptyDays ? '' : 'disabled'} title="Responda a segunda inteira para liberar">Copiar segunda para os dias vazios${emptyDays && monDone ? ` (${emptyDays})` : ''}</button>
    <button type="button" class="sc" id="scYes" ${nulls ? '' : 'disabled'}>${nulls ? `Marcar as ${nulls} sem resposta como "Recebe"` : 'Todas as faixas respondidas'}</button>`;
  $('#scCopy').onclick = () => { touch(); for(let i=1;i<6;i++) if(F.cells[i].every(v => v === null)) F.cells[i] = F.cells[0].slice(); fRefresh(); };
  $('#scYes').onclick = () => {
    if(nulls > 12 && !confirm(`Marcar ${nulls} faixas sem resposta como "Recebe"?`)) return;
    touch(); F.cells = F.cells.map(r => r.map(v => v === null ? 'S' : v)); fRefresh();
  };
}
function drawReasons(){
  const sec = $('#fRsec'), list = [...F.reasons.entries()];
  sec.hidden = !list.length; if(!list.length) return;
  $('#fReasons').innerHTML = list.map(([id,r]) => `<div class="jitem" data-r="${id}"><div class="jt"><b class="rn">${rLabel(id)}</b><span class="wins">${winLabel(keysOfR(id)).map(w=>`<span>${w}</span>`).join('')}</span><button type="button" class="linkbtn undo">Desfazer</button></div>
    <label class="ff">Motivo<textarea class="jtxt" maxlength="1500">${esc(r.txt)}</textarea></label></div>`).join('');
  $('#fReasons').querySelectorAll('.jitem').forEach(it => {
    const id = it.dataset.r;
    it.querySelector('.jtxt').oninput = e => { touch(); F.reasons.get(id).txt = e.target.value; e.target.closest('.ff').classList.remove('bad'); };
    it.querySelector('.undo').onclick = () => { touch(); F.cells = F.cells.map(r => r.map(v => v === id ? null : v)); F.reasons.delete(id); fRefresh(); };
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
    F.edit = {quando:new Date().toLocaleString('pt-BR', {day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit'}).replace(',', ''), envio:j.envio}; F.touched = false;
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
  if(cur === 'simulador'){ renderSimPage(); return; }
  if(cur === 'responder'){
    if(!/[?&]loja=/.test(location.hash)) openForm(location.hash.slice(1));
    else if(F && !F.sent){
      if(!F.touched){ if(!F.edit && RESP[F.code]) F = makeF(F.s, F.code, F.slug, F.token); renderForm(); }
      else { const w = document.querySelector('.editbox.wait'); if(w) w.remove(); }
    }
    return;
  }
  renderResumo(); renderRegionais(); renderLojas(); renderGrupos(); renderMotivos();
}
function show(id, push){
  const raw = String(id || ''), base = raw.split('?')[0];
  if(md.open) md.close();
  if(base === 'simulador'){
    cur = 'simulador'; document.body.classList.add('form-mode', 'sim-mode');
    document.querySelectorAll('main>section').forEach(s => s.classList.toggle('active', s.id === 'simulador'));
    document.title = 'Agrupamentos abastecidos por Simulador';
    renderSimPage(); scrollTo({top:0, behavior:'instant'}); return;
  }
  document.body.classList.remove('sim-mode');
  while(PAGE_MAPS.length){ try{ PAGE_MAPS.pop().remove(); }catch(e){} }
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