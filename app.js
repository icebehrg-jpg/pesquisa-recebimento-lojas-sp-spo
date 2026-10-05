"use strict";

/* ===== CONFIGURAÇÃO: cole aqui a URL do Apps Script (termina em /exec) ===== */
const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxE3hKLXwcSvDKvZekwUg7BKlC7wxgUnz5GKd35obDb1XehH5SReuCUy-MwNPfuUQe_/exec';
/* ============================================================================ */
const ALL = [{ "code": "0003", "name": "Ipiranga", "full": "0003 - SP-SPO-Ipiranga", "grp": "Capital Sul 1", "grpFull": "São Paulo / Capital Sul 1", "truck": "Truck", "ativo": "GD 3 ALTO", "responded": true, "resp": "Michele Aparecida do Carmo", "role": "Gerente", "days": [{ "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }], "ts": "01/10/2026 12:37" }, { "code": "0007", "name": "Lapa", "full": "0007 - SP-SPO-Lapa", "grp": "Capital Norte Oeste", "grpFull": "São Paulo / Capital Norte Oeste", "truck": "Truck", "ativo": "GD 3 ALTO", "responded": true, "resp": "Josimar Cavalcante", "role": "Gerente I", "days": [{ "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }], "ts": "01/10/2026 12:07" }, { "code": "0008", "name": "Tuiuti", "full": "0008 - SP-SPO-Tuiuti", "grp": "Capital Leste 1", "grpFull": "São Paulo / Capital Leste 1", "truck": "Toco", "ativo": "PQ 3 ALTO", "responded": true, "resp": "Juliana Mendes de Oliveira", "role": "Gerente de loja", "days": [{ "ok": true, "p": ["Manhã", "Noite"] }, { "ok": true, "p": ["Manhã", "Noite"] }, { "ok": true, "p": ["Manhã", "Noite"] }, { "ok": true, "p": ["Manhã", "Noite"] }, { "ok": true, "p": ["Manhã", "Noite"] }, { "ok": true, "p": ["Manhã"] }], "ts": "02/10/2026 09:50" }, { "code": "0009", "name": "R.Iguatemi", "full": "0009 - SP-SPO-R.Iguatemi", "grp": "Capital Oeste", "grpFull": "São Paulo / Capital Oeste", "truck": "Truck", "ativo": "GD 3 ALTO", "responded": true, "resp": "Fabiana Odilia da Costa Ciriaco", "role": "Gerente", "days": [{ "ok": true, "p": ["Manhã", "Noite"] }, { "ok": true, "p": ["Manhã", "Noite"] }, { "ok": true, "p": ["Manhã", "Noite"] }, { "ok": true, "p": ["Manhã", "Noite"] }, { "ok": true, "p": ["Manhã", "Noite"] }, { "ok": true, "p": ["Manhã"] }], "ts": "01/10/2026 13:47" }, { "code": "0010", "name": "Pompeia", "full": "0010 - SP-SPO-Pompeia", "grp": "Capital Norte Oeste", "grpFull": "São Paulo / Capital Norte Oeste", "truck": "Truck", "ativo": "GD 3 ALTO", "responded": true, "resp": "Marcos de Toledo", "role": "Gerente", "days": [{ "ok": true, "p": ["Tarde", "Noite"] }, { "ok": true, "p": ["Tarde", "Noite"] }, { "ok": true, "p": ["Tarde", "Noite"] }, { "ok": true, "p": ["Tarde", "Noite"] }, { "ok": true, "p": ["Tarde", "Noite"] }, { "ok": true, "p": ["Tarde", "Noite"] }], "ts": "01/10/2026 12:14" }, { "code": "0011", "name": "S.Trimais", "full": "0011 - SP-SPO-S.Trimais", "grp": "Capital Norte 1", "grpFull": "São Paulo / Capital Norte 1", "truck": "Truck", "ativo": "PQ 2 ALTO", "responded": true, "resp": "Cintia Franchi da Silva", "role": "Gerente III", "days": [{ "ok": true, "p": ["Manhã", "Tarde", "Noite"] }, { "ok": true, "p": ["Manhã", "Tarde", "Noite"] }, { "ok": true, "p": ["Manhã", "Tarde", "Noite"] }, { "ok": true, "p": ["Manhã", "Tarde", "Noite"] }, { "ok": true, "p": ["Manhã", "Tarde", "Noite"] }, { "ok": true, "p": ["Manhã", "Tarde", "Noite"] }], "ts": "02/10/2026 10:47" }, { "code": "0013", "name": "V.Mariana", "full": "0013 - SP-SPO-V.Mariana", "grp": "Capital Sul 1", "grpFull": "São Paulo / Capital Sul 1", "truck": "Truck", "ativo": "GD 3 ALTO", "responded": true, "resp": "Márcio Mathias", "role": "Gerente", "days": [{ "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã"] }], "ts": "01/10/2026 14:59" }, { "code": "0022", "name": "Moema", "full": "0022 - SP-SPO-Moema", "grp": "Capital Sul 2", "grpFull": "São Paulo / Capital Sul 2", "truck": "Truck", "ativo": "GD 3 ALTO", "responded": true, "resp": "Marco Antonio Almeida Monteiro", "role": "Gerente administrativo", "days": [{ "ok": true, "p": ["Tarde", "Noite"] }, { "ok": true, "p": ["Tarde", "Noite"] }, { "ok": true, "p": ["Tarde", "Noite"] }, { "ok": true, "p": ["Tarde", "Noite"] }, { "ok": true, "p": ["Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }], "ts": "02/10/2026 10:47" }, { "code": "0023", "name": "Vergueiro", "full": "0023 - SP-SPO-Vergueiro", "grp": "Capital Sul 1", "grpFull": "São Paulo / Capital Sul 1", "truck": "Toco", "ativo": "GD 3 ALTO", "responded": true, "resp": "Guilherme", "role": "Gerente operacional", "days": [{ "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }], "ts": "01/10/2026 16:40" }, { "code": "0025", "name": "ItaAvJPessego", "full": "0025 - SP-SPO-ItaAvJPessego", "grp": "Capital Leste 2", "grpFull": "São Paulo / Capital Leste 2", "truck": "Truck", "ativo": "PQ 2 ALTO", "responded": true, "resp": "Patrícia de Jesus", "role": "Gerente trainee", "days": [{ "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }], "ts": "01/10/2026 14:55" }, { "code": "0026", "name": "Santana", "full": "0026 - SP-SPO-Santana", "grp": "Capital Norte 1", "grpFull": "São Paulo / Capital Norte 1", "truck": "Truck", "ativo": "GD 3 ALTO", "responded": true, "resp": "Adriana Marangoni", "role": "Gerente operacional", "days": [{ "ok": true, "p": ["Manhã", "Tarde", "Noite"] }, { "ok": true, "p": ["Manhã", "Tarde", "Noite"] }, { "ok": true, "p": ["Manhã", "Tarde", "Noite"] }, { "ok": true, "p": ["Manhã", "Tarde", "Noite"] }, { "ok": true, "p": ["Manhã", "Tarde", "Noite"] }, { "ok": true, "p": ["Manhã", "Tarde", "Noite"] }], "ts": "01/10/2026 16:23" }, { "code": "0030", "name": "S.Aricanduva", "full": "0030 - SP-SPO-S.Aricanduva", "grp": "Capital Leste 2", "grpFull": "São Paulo / Capital Leste 2", "truck": "Truck", "ativo": "GD 3 ALTO", "responded": true, "resp": "Jackson Lima", "role": "Gerente de loja", "days": [{ "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": false, "why": "Existe uma restrição do shopping devido à alta circulação de pessoas.", "orig": "Existe uma restrição do shopping devido a alta circulação de pessoas.", "cat": "shopping" }], "ts": "02/10/2026 10:00" }, { "code": "0031", "name": "AvPaulistaTri", "full": "0031 - SP-SPO-AvPaulistaTri", "grp": "Capital Central Paulista", "grpFull": "São Paulo / Capital Central Paulista", "truck": "Toco", "ativo": "ROLL GRANDE", "responded": true, "resp": "Victor Marco Salgado", "role": "Gerente administrativo", "days": [{ "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": false, "why": "Aos domingos estamos fechados; seria um dia a menos para realizar a conferência da mercadoria.", "orig": "Domingos estamos fechados , seria 1 dia a menos para realizar a conferencia da mercadoria .", "cat": "rotina" }], "ts": "01/10/2026 12:28" }, { "code": "0032", "name": "S.MarketPlace", "full": "0032 - SP-SPO-S.MarketPlace", "grp": "Capital Sul 2", "grpFull": "São Paulo / Capital Sul 2", "truck": "Truck", "ativo": "PQ 2 ALTO", "responded": true, "resp": "Jaciel Braz", "role": "Gerente operacional", "days": [{ "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": false, "why": "Junto à doca há uma operação do iFood, onde os entregadores retiram pedidos; por ser sexta-feira, a doca fica cheia de entregadores com as motos, dificultando o recebimento de carga.", "orig": "JUNTO A DOCA TEM UMA OPERAÇÃO DO IFOOD, ONDE OS ENTREGADORES RETIRAM PEDIDOS, POR SER SEXTA FEIRA A DOCA FICA CHEIO DE ENTREGADORES COM AS MOTOS, DIFICULTANDO O RECEBIMENTO DE CARGA.", "cat": "doca" }, { "ok": false, "why": "A doca não funciona aos finais de semana.", "orig": "DOCA NÃO FUNCIONA AOS FINAIS DE SEMANA", "cat": "shopping" }], "ts": "01/10/2026 13:04" }, { "code": "0033", "name": "Fco.Morato", "full": "0033 - SP-SPO-Fco.Morato", "grp": "Capital Oeste", "grpFull": "São Paulo / Capital Oeste", "truck": "Truck", "ativo": "GD 3 ALTO", "responded": true, "resp": "Fernanda", "role": "Gerente operacional", "days": [{ "ok": false, "why": "Dia em que os gerentes que trabalham no domingo folgam. Como o caminhão sempre vem por volta das 21h/22h, quem for receber entra mais tarde; sendo assim, a loja ficaria muito tempo sem a presença da gerência.", "orig": "Dia em que os gerente que trabalha domingo folga. Como o caminhão sempre vem por volta de 21/22hs quem for receber entra mais tarde, sendo assim a loja ficaria muito tempo sem a presença da gerencia.", "cat": "equipe" }, { "ok": true, "p": ["Tarde", "Noite"] }, { "ok": true, "p": ["Tarde", "Noite"] }, { "ok": true, "p": ["Tarde", "Noite"] }, { "ok": true, "p": ["Tarde", "Noite"] }, { "ok": true, "p": ["Tarde"] }], "ts": "01/10/2026 12:11" }, { "code": "0038", "name": "S.Interlagos", "full": "0038 - SP-SPO-S.Interlagos", "grp": "Capital Sul 4", "grpFull": "São Paulo / Capital Sul 4", "truck": "Toco", "ativo": "GD 2 ALTO", "responded": true, "resp": "Vitória Wendy Almeida Maia", "role": "Gerente", "days": [{ "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": false, "why": "O shopping realiza uma feira de produtos artesanais; os corredores ficam com a passagem obstruída, pois são montadas barraquinhas pelos corredores do shopping.", "orig": "O shopping realiza uma feira de produtos artesanais, os corredores ficam com a passagem obstruída, pois é montada barraquinhas peles corredores do shopping.", "cat": "shopping" }], "ts": "01/10/2026 16:12" }, { "code": "0043", "name": "S.Cantareira", "full": "0043 - SP-SPO-S.Cantareira", "grp": "Capital Norte Oeste", "grpFull": "São Paulo / Capital Norte Oeste", "truck": "Truck", "ativo": "PQ 2 ALTO", "responded": true, "resp": "Fernanda Alves da Silva", "role": "Gerente administrativo de loja", "days": [{ "ok": true, "p": ["Manhã", "Noite"] }, { "ok": true, "p": ["Manhã", "Noite"] }, { "ok": true, "p": ["Manhã", "Noite"] }, { "ok": true, "p": ["Manhã", "Noite"] }, { "ok": true, "p": ["Manhã", "Noite"] }, { "ok": false, "why": "A administração do shopping tem como regra: no sábado, somente em ocasiões muito críticas.", "orig": "Administração do shopping tem como regra, sábado, somente em ocasiões muito críticas.", "cat": "shopping" }], "ts": "01/10/2026 12:18" }, { "code": "0045", "name": "S.Penha", "full": "0045 - SP-SPO-S.Penha", "grp": "Capital Leste 1", "grpFull": "São Paulo / Capital Leste 1", "truck": "Toco", "ativo": "PQ 2 ALTO", "responded": true, "resp": "Ricardo Gabriel", "role": "Gerente de loja", "days": [{ "ok": true, "p": ["Manhã", "Noite"] }, { "ok": true, "p": ["Manhã", "Noite"] }, { "ok": true, "p": ["Manhã", "Noite"] }, { "ok": true, "p": ["Manhã", "Noite"] }, { "ok": true, "p": ["Manhã", "Noite"] }, { "ok": true, "p": ["Manhã"] }], "ts": "02/10/2026 09:59" }, { "code": "0047", "name": "Leopoldina", "full": "0047 - SP-SPO-Leopoldina", "grp": "Capital Oeste", "grpFull": "São Paulo / Capital Oeste", "truck": "Truck", "ativo": "GD 3 ALTO", "responded": true, "resp": "Gabriel Alcantara", "role": "Assistente administrativo", "days": [{ "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }], "ts": "01/10/2026 12:48" }, { "code": "0056", "name": "A.Pinheiro", "full": "0056 - SP-SPO-A.Pinheiro", "grp": "Capital Sul 3", "grpFull": "São Paulo / Capital Sul 3", "truck": "Truck", "ativo": "PQ 3 ALTO", "responded": true, "resp": "Ronaldo Dutra da Silva", "role": "Gerente operacional", "days": [{ "ok": false, "why": "Devido às restrições de horário, o caminhão só poderia descarregar após as 22h e, como estamos em um bairro residencial, há reclamações.", "orig": "Devido as restrições de horário, o caminhão só poderia descarregar após as 22:00h e como estamos em um bairro residencial há reclamações", "cat": "horario" }, { "ok": false, "why": "Devido às restrições de horário, o caminhão só poderia descarregar após as 22h e, como estamos em um bairro residencial, há reclamações.", "orig": "Devido as restrições de horário, o caminhão só poderia descarregar após as 22:00h e como estamos em um bairro residencial há reclamações", "cat": "horario" }, { "ok": false, "why": "Devido às restrições de horário, o caminhão só poderia descarregar após as 22h e, como estamos em um bairro residencial, há reclamações.", "orig": "Devido as restrições de horário, o caminhão só poderia descarregar após as 22:00h e como estamos em um bairro residencial há reclamações", "cat": "horario" }, { "ok": false, "why": "Devido às restrições de horário, o caminhão só poderia descarregar após as 22h e, como estamos em um bairro residencial, há reclamações.", "orig": "Devido as restrições de horário, o caminhão só poderia descarregar após as 22:00h e como estamos em um bairro residencial há reclamações", "cat": "horario" }, { "ok": false, "why": "Devido às restrições de horário, o caminhão só poderia descarregar após as 22h e, como estamos em um bairro residencial, há reclamações.", "orig": "Devido as restrições de horário, o caminhão só poderia descarregar após as 22:00h e como estamos em um bairro residencial há reclamações", "cat": "horario" }, { "ok": true, "p": ["Manhã"] }], "ts": "01/10/2026 15:18" }, { "code": "0057", "name": "V.Maria", "full": "0057 - SP-SPO-V.Maria", "grp": "Capital Norte 1", "grpFull": "São Paulo / Capital Norte 1", "truck": "Truck", "ativo": "GD 2 ALTO", "responded": true, "resp": "Carlos Tomaz", "role": "Gerente", "days": [{ "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }], "ts": "01/10/2026 15:25" }, { "code": "0060", "name": "Freguesia", "full": "0060 - SP-SPO-Freguesia", "grp": "Capital Norte Oeste", "grpFull": "São Paulo / Capital Norte Oeste", "truck": "Truck", "ativo": "PQ 3 ALTO", "responded": true, "resp": "Elaine Cristina Lobo de Araújo", "role": "Gerente de loja", "days": [{ "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }], "ts": "01/10/2026 12:02" }, { "code": "0061", "name": "V.Guilherme", "full": "0061 - SP-SPO-V.Guilherme", "grp": "Capital Norte 1", "grpFull": "São Paulo / Capital Norte 1", "truck": "Truck", "ativo": "GD 3 ALTO", "responded": true, "resp": "Sandro Gamarra", "role": "Gerente", "days": [{ "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }], "ts": "02/10/2026 09:39" }, { "code": "0064", "name": "LiberoBadaro", "full": "0064 - SP-SPO-LiberoBadaro", "grp": "Capital Central", "grpFull": "São Paulo / Capital Central", "truck": "Toco", "ativo": "ROLL PEQ", "responded": true, "resp": "Leandro", "role": "Gerente", "days": [{ "ok": false, "why": "Devido ao horário do caminhão, entre 22h30 e 23h00, gerando custo com transporte adicional para os funcionários (Uber), região de risco no período da noite e avenida com muita movimentação de veículos, onde o caminhão descarrega.", "orig": "Devido ao horário do caminhão entre 22h30 / 23h00,  gerando custo com transporte adicional para os funcionários ( UBER ), região de risco no periodo da noite e avenida com muita movimentação de veículos, onde o caminhão descarrega.", "cat": "horario" }, { "ok": false, "why": "Devido ao horário do caminhão, entre 22h30 e 23h00, gerando custo com transporte adicional para os funcionários (Uber), região de risco no período da noite e avenida com muita movimentação de veículos, onde o caminhão descarrega.", "orig": "Devido ao horário do caminhão entre 22h30 / 23h00,  gerando custo com transporte adicional para os funcionários ( UBER ), região de risco no periodo da noite e avenida com muita movimentação de veículos, onde o caminhão descarrega.", "cat": "horario" }, { "ok": false, "why": "Devido ao horário do caminhão, entre 22h30 e 23h00, gerando custo com transporte adicional para os funcionários (Uber), região de risco no período da noite e avenida com muita movimentação de veículos, onde o caminhão descarrega.", "orig": "Devido ao horário do caminhão entre 22h30 / 23h00,  gerando custo com transporte adicional para os funcionários ( UBER ), região de risco no periodo da noite e avenida com muita movimentação de veículos, onde o caminhão descarrega.", "cat": "horario" }, { "ok": false, "why": "Devido ao horário do caminhão, entre 22h30 e 23h00, gerando custo com transporte adicional para os funcionários (Uber), região de risco no período da noite e avenida com muita movimentação de veículos, onde o caminhão descarrega.", "orig": "Devido ao horário do caminhão entre 22h30 / 23h00,  gerando custo com transporte adicional para os funcionários ( UBER ), região de risco no periodo da noite e avenida com muita movimentação de veículos, onde o caminhão descarrega.", "cat": "horario" }, { "ok": false, "why": "Devido ao horário do caminhão, entre 22h30 e 23h00, gerando custo com transporte adicional para os funcionários (Uber), região de risco no período da noite e avenida com muita movimentação de veículos durante a semana, onde o caminhão descarrega.", "orig": "Devido ao horário do caminhão entre 22h30 / 23h00,  gerando custo com transporte adicional para os funcionários ( UBER ), região de risco no periodo da noite e avenida com muita movimentação de veículos durante a semana, onde o caminhão descarrega.", "cat": "horario" }, { "ok": true, "p": ["Manhã"] }], "ts": "01/10/2026 15:36" }, { "code": "0068", "name": "SantaCatarina", "full": "0068 - SP-SPO-SantaCatarina", "grp": "Capital Sul 4", "grpFull": "São Paulo / Capital Sul 4", "truck": "Truck", "ativo": "GD 3 ALTO", "responded": true, "resp": "Uilson da Costa Aguiar", "role": "Gerente operacional", "days": [{ "ok": false, "why": "Porque nosso horário é de madrugada.", "orig": "Porque nosso horário é de madrugada.", "cat": "rotina" }, { "ok": false, "why": "Nosso melhor dia de recebimento é aos sábados, pois nesse dia a carga horária da loja é menor, temos todos os colaboradores e temos menos movimento; com isso, conseguimos receber e conferir toda a carga e ainda abastecer. Recebemos às 5h da manhã.", "orig": "Nosso melhor dia de recebimento é aos sábados pois, nesse dia a carga horaria da loja é menor, temos todos os colaboradores e temos menos movimento, com isso, conseguimos receber e conferi toda a carga ainda abastecer. Recebemos as 5:00 horas da manha.", "cat": "rotina" }, { "ok": false, "why": "Nosso melhor dia de recebimento é aos sábados, pois nesse dia a carga horária da loja é menor, temos todos os colaboradores e temos menos movimento; com isso, conseguimos receber e conferir toda a carga e ainda abastecer. Recebemos às 5h da manhã.", "orig": "Nosso melhor dia de recebimento é aos sábados pois, nesse dia a carga horaria da loja é menor, temos todos os colaboradores e temos menos movimento, com isso, conseguimos receber e conferi toda a carga ainda abastecer. Recebemos as 5:00 horas da manha.", "cat": "rotina" }, { "ok": false, "why": "Nosso melhor dia de recebimento é aos sábados, pois nesse dia a carga horária da loja é menor, temos todos os colaboradores e temos menos movimento; com isso, conseguimos receber e conferir toda a carga e ainda abastecer. Recebemos às 5h da manhã.", "orig": "Nosso melhor dia de recebimento é aos sábados pois, nesse dia a carga horaria da loja é menor, temos todos os colaboradores e temos menos movimento, com isso, conseguimos receber e conferi toda a carga ainda abastecer. Recebemos as 5:00 horas da manha.", "cat": "rotina" }, { "ok": false, "why": "Nosso melhor dia de recebimento é aos sábados, pois nesse dia a carga horária da loja é menor, temos todos os colaboradores e temos menos movimento; com isso, conseguimos receber e conferir toda a carga e ainda abastecer. Recebemos às 5h da manhã.", "orig": "Nosso melhor dia de recebimento é aos sábados pois, nesse dia a carga horaria da loja é menor, temos todos os colaboradores e temos menos movimento, com isso, conseguimos receber e conferi toda a carga ainda abastecer. Recebemos as 5:00 horas da manha.", "cat": "rotina" }, { "ok": true, "p": ["Manhã"] }], "ts": "01/10/2026 15:08" }, { "code": "0076", "name": "Sao Miguel", "full": "0076 - SP-SPO-Sao Miguel", "grp": "Capital Leste 2", "grpFull": "São Paulo / Capital Leste 2", "truck": "Toco", "ativo": "PQ 2 ALTO", "responded": true, "resp": "Rivania Bayma Oliveira", "role": "Gerente", "days": [{ "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }], "ts": "01/10/2026 14:15" }, { "code": "0079", "name": "N.Cantareira", "full": "0079 - SP-SPO-N.Cantareira", "grp": "Capital Norte 1", "grpFull": "São Paulo / Capital Norte 1", "truck": "Truck", "ativo": "GD 3 ALTO", "responded": true, "resp": "Edvanilson de Andrade Almeida", "role": "Gerente", "days": [{ "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }], "ts": "01/10/2026 14:20" }, { "code": "0084", "name": "S.Eldorado", "full": "0084 - SP-SPO-S.Eldorado", "grp": "Capital Oeste", "grpFull": "São Paulo / Capital Oeste", "truck": "Toco", "ativo": "GD 2 ALTO", "responded": true, "resp": "Pedro Camargo Girardi", "role": "Gerente de loja", "days": [{ "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }], "ts": "01/10/2026 13:25" }, { "code": "0085", "name": "S.Mooca", "full": "0085 - SP-SPO-S.Mooca", "grp": "Capital Leste 1", "grpFull": "São Paulo / Capital Leste 1", "truck": "Toco", "ativo": "PQ 2 ALTO", "responded": true, "resp": "Janilson Elias da Silva", "role": "Gerente", "days": [{ "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }], "ts": "02/10/2026 10:47" }, { "code": "0091", "name": "Alvarenga", "full": "0091 - SP-SPO-Alvarenga", "grp": "Capital Oeste", "grpFull": "São Paulo / Capital Oeste", "truck": "Truck", "ativo": "PQ 2 ALTO", "responded": true, "resp": "Lucia Petulia da Silva", "role": "Gerente", "days": [{ "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã"] }], "ts": "01/10/2026 12:36" }, { "code": "0093", "name": "V.Formosa", "full": "0093 - SP-SPO-V.Formosa", "grp": "Capital Leste 1", "grpFull": "São Paulo / Capital Leste 1", "truck": "Toco", "ativo": "PQ 2 ALTO", "responded": true, "resp": "Rodolpho Stephano", "role": "Gerente", "days": [{ "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã"] }], "ts": "01/10/2026 14:18" }, { "code": "0111", "name": "S.Itaquera", "full": "0111 - SP-SPO-S.Itaquera", "grp": "Capital Leste 2", "grpFull": "São Paulo / Capital Leste 2", "truck": "Truck", "ativo": "ROLL GRANDE", "responded": true, "resp": "Flavio de Jesus Santos", "role": "Gerente de loja", "days": [{ "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }, { "ok": true, "p": ["Manhã"] }], "ts": "01/10/2026 16:03" }, { "code": "0112", "name": "MariaAntônia", "full": "0112 - SP-SPO-MariaAntônia", "grp": "Capital Central", "grpFull": "São Paulo / Capital Central", "truck": "Toco", "ativo": "PQ 2 ALTO", "responded": true, "resp": "Rodrigo Ribeiro", "role": "Gerente de loja", "days": [{ "ok": false, "why": "Dificuldade logística\n\nDurante os dias úteis, a região apresenta elevado fluxo de pessoas e veículos, especialmente em razão da movimentação da faculdade localizada em frente à loja. Temos dificuldade para encontrar vaga e estacionar o caminhão; esse cenário aumenta o risco para a equipe e para os pedestres.\n\nDificuldade operacional\n\nO caminhão, recebemos conjugado com outra loja; o veículo tem chegado próximo das 23h, tendo impacto na jornada da equipe e gerando intervalo insuficiente entre as jornadas.\nA loja atualmente trabalha com quadro de funcionários enxuto, com disponibilidade limitada de colaboradores para realizar a descarga, o que aumenta o tempo do descarregamento.", "orig": "Dificuldade logística\n\nDurante os dias uteis, a região apresenta elevado fluxo de pessoas e veículos, especialmente em razão da movimentação da faculdade localizada em frente a loja. Temos dificuldade para encontrar vaga e estacionar o caminhão, esse cenário aumenta risco para equipe e aos pedestres .\n\nDificuldade operacional\n\nO caminhão recebemos conjugado com outra loja, o veiculo tem chegado próximo das 23:00 hrs, tendo impacto na jornada da equipe, gerando intervalo insuficiente entre as jornadas.   \nA loja atualmente trabalha com quadro de funcionários enxuto, com disponibilidade limitada de colaboradores para realizar a descarga, o que aumenta o tempo do descarregamento.", "cat": "horario" }, { "ok": false, "why": "Dificuldade logística\n\nDurante os dias úteis, a região apresenta elevado fluxo de pessoas e veículos, especialmente em razão da movimentação da faculdade localizada em frente à loja. Temos dificuldade para encontrar vaga e estacionar o caminhão; esse cenário aumenta o risco para a equipe e para os pedestres.\n\nDificuldade operacional\n\nO caminhão, recebemos conjugado com outra loja; o veículo tem chegado próximo das 23h, tendo impacto na jornada da equipe e gerando intervalo insuficiente entre as jornadas.\nA loja atualmente trabalha com quadro de funcionários enxuto, com disponibilidade limitada de colaboradores para realizar a descarga, o que aumenta o tempo do descarregamento.", "orig": "Dificuldade logística\n\nDurante os dias uteis, a região apresenta elevado fluxo de pessoas e veículos, especialmente em razão da movimentação da faculdade localizada em frente a loja. Temos dificuldade para encontrar vaga e estacionar o caminhão, esse cenário aumenta risco para equipe e aos pedestres .\n\nDificuldade operacional\n\nO caminhão recebemos conjugado com outra loja, o veiculo tem chegado próximo das 23:00 hrs, tendo impacto na jornada da equipe, gerando intervalo insuficiente entre as jornadas.   \nA loja atualmente trabalha com quadro de funcionários enxuto, com disponibilidade limitada de colaboradores para realizar a descarga, o que aumenta o tempo do descarregamento", "cat": "horario" }, { "ok": false, "why": "Dificuldade logística\n\nDurante os dias úteis, a região apresenta elevado fluxo de pessoas e veículos, especialmente em razão da movimentação da faculdade localizada em frente à loja. Temos dificuldade para encontrar vaga e estacionar o caminhão; esse cenário aumenta o risco para a equipe e para os pedestres.\n\nDificuldade operacional\n\nO caminhão, recebemos conjugado com outra loja; o veículo tem chegado próximo das 23h, tendo impacto na jornada da equipe e gerando intervalo insuficiente entre as jornadas.\nA loja atualmente trabalha com quadro de funcionários enxuto, com disponibilidade limitada de colaboradores para realizar a descarga, o que aumenta o tempo do descarregamento.", "orig": "Dificuldade logística\n\nDurante os dias uteis, a região apresenta elevado fluxo de pessoas e veículos, especialmente em razão da movimentação da faculdade localizada em frente a loja. Temos dificuldade para encontrar vaga e estacionar o caminhão, esse cenário aumenta risco para equipe e aos pedestres .\n\nDificuldade operacional\n\nO caminhão recebemos conjugado com outra loja, o veiculo tem chegado próximo das 23:00 hrs, tendo impacto na jornada da equipe, gerando intervalo insuficiente entre as jornadas.   \nA loja atualmente trabalha com quadro de funcionários enxuto, com disponibilidade limitada de colaboradores para realizar a descarga, o que aumenta o tempo do descarregamento", "cat": "horario" }, { "ok": false, "why": "Dificuldade logística\n\nDurante os dias úteis, a região apresenta elevado fluxo de pessoas e veículos, especialmente em razão da movimentação da faculdade localizada em frente à loja. Temos dificuldade para encontrar vaga e estacionar o caminhão; esse cenário aumenta o risco para a equipe e para os pedestres.\n\nDificuldade operacional\n\nO caminhão, recebemos conjugado com outra loja; o veículo tem chegado próximo das 23h, tendo impacto na jornada da equipe e gerando intervalo insuficiente entre as jornadas.\nA loja atualmente trabalha com quadro de funcionários enxuto, com disponibilidade limitada de colaboradores para realizar a descarga, o que aumenta o tempo do descarregamento.", "orig": "Dificuldade logística\n\nDurante os dias uteis, a região apresenta elevado fluxo de pessoas e veículos, especialmente em razão da movimentação da faculdade localizada em frente a loja. Temos dificuldade para encontrar vaga e estacionar o caminhão, esse cenário aumenta risco para equipe e aos pedestres .\n\nDificuldade operacional\n\nO caminhão recebemos conjugado com outra loja, o veiculo tem chegado próximo das 23:00 hrs, tendo impacto na jornada da equipe, gerando intervalo insuficiente entre as jornadas.   \nA loja atualmente trabalha com quadro de funcionários enxuto, com disponibilidade limitada de colaboradores para realizar a descarga, o que aumenta o tempo do descarregamento", "cat": "horario" }, { "ok": false, "why": "Dificuldade logística\n\nDurante os dias úteis, a região apresenta elevado fluxo de pessoas e veículos, especialmente em razão da movimentação da faculdade localizada em frente à loja. Temos dificuldade para encontrar vaga e estacionar o caminhão; esse cenário aumenta o risco para a equipe e para os pedestres.\n\nDificuldade operacional\n\nO caminhão, recebemos conjugado com outra loja; o veículo tem chegado próximo das 23h, tendo impacto na jornada da equipe e gerando intervalo insuficiente entre as jornadas.\nA loja atualmente trabalha com quadro de funcionários enxuto, com disponibilidade limitada de colaboradores para realizar a descarga, o que aumenta o tempo do descarregamento.", "orig": "Dificuldade logística\n\nDurante os dias uteis, a região apresenta elevado fluxo de pessoas e veículos, especialmente em razão da movimentação da faculdade localizada em frente a loja. Temos dificuldade para encontrar vaga e estacionar o caminhão, esse cenário aumenta risco para equipe e aos pedestres .\n\nDificuldade operacional\n\nO caminhão recebemos conjugado com outra loja, o veiculo tem chegado próximo das 23:00 hrs, tendo impacto na jornada da equipe, gerando intervalo insuficiente entre as jornadas.   \nA loja atualmente trabalha com quadro de funcionários enxuto, com disponibilidade limitada de colaboradores para realizar a descarga, o que aumenta o tempo do descarregamento", "cat": "horario" }, { "ok": true, "p": ["Manhã"] }], "ts": "01/10/2026 13:16" }, { "code": "0124", "name": "Giov.Gronchi", "full": "0124 - SP-SPO-Giov.Gronchi", "grp": "Capital Sul 3", "grpFull": "São Paulo / Capital Sul 3", "truck": "Truck", "ativo": "GD 3 ALTO", "responded": true, "resp": "Erika Rodrigues Moreira", "role": "Gerente de loja I", "days": [{ "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Manhã"] }], "ts": "02/10/2026 10:47" }, { "code": "0128", "name": "Morumbi", "full": "0128 - SP-SPO-Morumbi", "grp": "Capital Sul 2", "grpFull": "São Paulo / Capital Sul 2", "truck": "Truck", "ativo": "PQ 2 ALTO", "responded": true, "resp": "Fernanda Faria dos Santos", "role": "Gerente trainee", "days": [{ "ok": false, "why": "Os caminhões só podem transitar na Av. Marginal após as 21h, e devido aos assaltos.", "orig": "Os caminhões só pode transitar na av marginal após as 21:00 e devido aos assaltos.", "cat": "horario" }, { "ok": false, "why": "Por o caminhão não poder transitar na Av. Marginal e devido aos assaltos.", "orig": "Por o caminhão não poder transitar na av marginal e devido aos assaltos.", "cat": "horario" }, { "ok": false, "why": "Por o caminhão não poder transitar na Av. Marginal e devido aos assaltos.", "orig": "Por o caminhão não poder transitar na av marginal e devido aos assaltos.", "cat": "horario" }, { "ok": false, "why": "Por o caminhão não poder transitar na Av. Marginal e devido aos assaltos.", "orig": "Por o caminhão nao poder transitar na av marginal e devido aos assaltos.", "cat": "horario" }, { "ok": false, "why": "Por o caminhão não poder transitar na Av. Marginal e devido aos assaltos.", "orig": "Por o caminhão não poder transitar na av marginal e devido aos assaltos.", "cat": "horario" }, { "ok": true, "p": ["Manhã"] }], "ts": "02/10/2026 10:02" }, { "code": "0130", "name": "S.Tiete", "full": "0130 - SP-SPO-S.Tiete", "grp": "Capital Norte Oeste", "grpFull": "São Paulo / Capital Norte Oeste", "truck": "Truck", "ativo": "ROLL GRANDE", "responded": true, "resp": "Fabio Gama", "role": "Gerente de loja", "days": [{ "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": false, "why": "A operação de carga e descarga do shopping é de segunda a sexta, exceto (sábados, domingos e feriados).", "orig": "Operação do shopping de carga e descarga é de segunda a sexta exceto ( sábado, domingos e feriados )", "cat": "shopping" }], "ts": "01/10/2026 14:35" }, { "code": "0138", "name": "S.VilaOlimpia", "full": "0138 - SP-SPO-S.VilaOlimpia", "grp": "Capital Sul 2", "grpFull": "São Paulo / Capital Sul 2", "truck": "Truck", "ativo": "GD 2 ALTO", "responded": true, "resp": "Fabia", "role": "Gerente operacional", "days": [{ "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": false, "why": "Podemos receber, porém a dinâmica na doca é bem complicada. Doca extremamente pequena para atender mais de 300 lojas e o teatro; muitas vezes temos apenas um elevador funcionando. A demora é grande.", "orig": "Podemos receber porém a dinâmica na doca é bem complicada. Doca extremamente pequena para atender mais de 300 lojas e o teatro, muitas vezes temos apenas um elevador funcionando.. A demora é grande.", "cat": "doca" }], "ts": "01/10/2026 12:25" }, { "code": "0151", "name": "AvDePinedo", "full": "0151 - SP-SPO-AvDePinedo", "grp": "Capital Sul 3", "grpFull": "São Paulo / Capital Sul 3", "truck": "Truck", "ativo": "PQ 2 ALTO", "responded": true, "resp": "Derlania", "role": "Gerente", "days": [{ "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }], "ts": "01/10/2026 13:43" }, { "code": "0162", "name": "AvPaulista", "full": "0162 - SP-SPO-AvPaulista", "grp": "Capital Central Paulista", "grpFull": "São Paulo / Capital Central Paulista", "truck": "Toco", "ativo": "PQ 2 ALTO", "responded": true, "resp": "Adriano Pedreira / Lincoln Olinto", "role": "Gerentes", "days": [{ "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": false, "why": "Devido às folgas dos colaboradores.", "orig": "Devido as folgas dos colaboradores", "cat": "equipe" }, { "ok": false, "why": "Devido às folgas dos colaboradores.", "orig": "Devido as folgas dos colaboradores", "cat": "equipe" }, { "ok": false, "why": "Devido às folgas dos colaboradores, aproveitamos os finais de semana devido ao menor movimento em loja.", "orig": "Devido as folgas dos colaboradores aproveitamos os finais de semana devido ao menor movimento em loja.", "cat": "equipe" }], "ts": "01/10/2026 13:52" }, { "code": "0174", "name": "S.Pamplona", "full": "0174 - SP-SPO-S.Pamplona", "grp": "Capital Central Paulista", "grpFull": "São Paulo / Capital Central Paulista", "truck": "Toco", "ativo": "PQ 2 ALTO", "responded": true, "resp": "Éder Lucas Gomes", "role": "Gerente", "days": [{ "ok": false, "why": "Teríamos que solicitar a mudança do dia de recebimento junto ao shopping, pois temos a programação de recebimento das outras lojas.", "orig": "TERIAMOS QUE SOLICITAR A MUDANÇA DO DIA DE RECEBIMENTO JUNTO AO SHOPPING, POIS TEMOS A PROGRAMAÇÃO DE RECEBIMENTO DAS OUTRAS LOJAS.", "cat": "shopping" }, { "ok": false, "why": "Teríamos que solicitar a mudança do dia de recebimento junto ao shopping, pois temos a programação de recebimento das outras lojas.", "orig": "TERIAMOS QUE SOLICITAR A MUDANÇA DO DIA DE RECEBIMENTO JUNTO AO SHOPPING, POIS TEMOS A PROGRAMAÇÃO DE RECEBIMENTO DAS OUTRAS LOJAS.", "cat": "shopping" }, { "ok": true, "p": ["Noite"] }, { "ok": false, "why": "Teríamos que solicitar a mudança do dia de recebimento junto ao shopping, pois temos a programação de recebimento das outras lojas.", "orig": "TERIAMOS QUE SOLICITAR A MUDANÇA DO DIA DE RECEBIMENTO JUNTO AO SHOPPING, POIS TEMOS A PROGRAMAÇÃO DE RECEBIMENTO DAS OUTRAS LOJAS.", "cat": "shopping" }, { "ok": false, "why": "Teríamos que solicitar a mudança do dia de recebimento junto ao shopping, pois temos a programação de recebimento das outras lojas.", "orig": "TERIAMOS QUE SOLICITAR A MUDANÇA DO DIA DE RECEBIMENTO JUNTO AO SHOPPING, POIS TEMOS A PROGRAMAÇÃO DE RECEBIMENTO DAS OUTRAS LOJAS.", "cat": "shopping" }, { "ok": false, "why": "Teríamos que solicitar a mudança do dia de recebimento junto ao shopping, pois temos a programação de recebimento das outras lojas.", "orig": "TERIAMOS QUE SOLICITAR A MUDANÇA DO DIA DE RECEBIMENTO JUNTO AO SHOPPING, POIS TEMOS A PROGRAMAÇÃO DE RECEBIMENTO DAS OUTRAS LOJAS.", "cat": "shopping" }], "ts": "01/10/2026 12:31" }, { "code": "0190", "name": "W.Luis", "full": "0190 - SP-SPO-W.Luis", "grp": "Capital Sul 4", "grpFull": "São Paulo / Capital Sul 4", "truck": "Truck", "ativo": "PQ 2 ALTO", "responded": true, "resp": "Camila Gabriele da Silva", "role": "Gerente administrativo", "days": [{ "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Manhã"] }], "ts": "01/10/2026 15:29" }, { "code": "0195", "name": "F.Coutinho", "full": "0195 - SP-SPO-F.Coutinho", "grp": "Capital Oeste", "grpFull": "São Paulo / Capital Oeste", "truck": "Truck", "ativo": "PQ 2 ALTO", "responded": true, "resp": "Ana Sara", "role": "Gerente administrativo", "days": [{ "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": false, "why": "Folga do colaborador.", "orig": "FOLGA DO COLABORADOR", "cat": "equipe" }, { "ok": false, "why": "Folga do gerente.", "orig": "FOLGA DO GERENTE", "cat": "equipe" }, { "ok": false, "why": "Não conseguimos receber por conta do horário de funcionamento da loja.\nNo período da manhã há restrição, pois onde o caminhão fica estacionado é Zona Azul.\nE, por ser um bairro residencial, há restrição por conta do barulho.", "orig": "NÃO CONSEGUIMOS RECEBER POR CONTA DO HORARIO DE FUNCIONAMENTO DO LOJA.  \nNO PERIODO DA MANHÃ TEM RESTRIÇÃO, ONDE O CAMINHÃO FICA ESTACIONADO É ZONA AZUL.\nE POR SER UM BAIRRO RESIDENCIAL, TEM RESTRIÇÃO POR CONTA DO BARULHO.", "cat": "horario" }], "ts": "01/10/2026 17:07" }, { "code": "0196", "name": "RicardoJafet", "full": "0196 - SP-SPO-RicardoJafet", "grp": "Capital Sul 1", "grpFull": "São Paulo / Capital Sul 1", "truck": "Truck", "ativo": "PQ 2 ALTO", "responded": true, "resp": "Marília", "role": "Gerente de loja", "days": [{ "ok": false, "why": "A logística do complexo não permite. Autorizado só no sábado pela manhã.", "orig": "A logistica do complexo não permite - Autorizado só no sábado pela manhã", "cat": "shopping" }, { "ok": false, "why": "A logística do complexo não permite. Autorizado só no sábado pela manhã.", "orig": "A logistica do complexo não permite - Autorizado só no sábado pela manhã", "cat": "shopping" }, { "ok": false, "why": "A logística do complexo não permite. Autorizado só no sábado pela manhã.", "orig": "A logistica do complexo não permite - Autorizado só no sábado pela manhã", "cat": "shopping" }, { "ok": false, "why": "A logística do complexo não permite. Autorizado só no sábado pela manhã.", "orig": "A logistica do complexo não permite - Autorizado só no sábado pela manhã", "cat": "shopping" }, { "ok": false, "why": "A logística do complexo não permite. Autorizado só no sábado pela manhã.", "orig": "A logistica do complexo não permite - Autorizado só no sábado pela manhã", "cat": "shopping" }, { "ok": true, "p": ["Manhã"] }], "ts": "01/10/2026 17:47" }, { "code": "0199", "name": "JabaquaraBra", "full": "0199 - SP-SPO-JabaquaraBra", "grp": "Capital Sul 1", "grpFull": "São Paulo / Capital Sul 1", "truck": "Toco", "ativo": "GD 3 ALTO", "responded": true, "resp": "Aparecida Cristina Silva Gomes", "role": "Gerente", "days": [{ "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Manhã"] }], "ts": "01/10/2026 15:11" }, { "code": "0200", "name": "RadialMooca", "full": "0200 - SP-SPO-RadialMooca", "grp": "Capital Leste 1", "grpFull": "São Paulo / Capital Leste 1", "truck": "Toco", "ativo": "PQ 2 ALTO", "responded": true, "resp": "Leandro Teixeira de Araujo", "role": "Gerente", "days": [{ "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Manhã"] }], "ts": "01/10/2026 15:02" }, { "code": "0203", "name": "Av.Rudge", "full": "0203 - SP-SPO-Av.Rudge", "grp": "Capital Central", "grpFull": "São Paulo / Capital Central", "truck": "Toco", "ativo": "PQ 3 ALTO", "responded": true, "resp": "Flávio Luiz de Moraes", "role": "Gerente operacional", "days": [{ "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }, { "ok": true, "p": ["Manhã", "Tarde"] }], "ts": "01/10/2026 13:37" }, { "code": "0212", "name": "S.FCaneca", "full": "0212 - SP-SPO-S.FCaneca", "grp": "Capital Central Paulista", "grpFull": "São Paulo / Capital Central Paulista", "truck": "Toco", "ativo": "PQ 2 ALTO", "responded": true, "resp": "Omir Hermelino Raymundo", "role": "Gerente operacional", "days": [{ "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }, { "ok": true, "p": ["Noite"] }], "ts": "02/10/2026 10:47" }, { "code": "0243", "name": "MateoBei", "full": "0243 - SP-SPO-MateoBei", "grp": "Capital Leste 2", "grpFull": "São Paulo / Capital Leste 2", "truck": "Truck", "ativo": "PQ 3 ALTO", "responded": true, "resp": "Makeila Cristina", "role": "Gerente", "days": [{ "ok": true, "p": ["Manhã", "Tarde", "Noite"] }, { "ok": true, "p": ["Manhã", "Tarde", "Noite"] }, { "ok": true, "p": ["Manhã", "Tarde", "Noite"] }, { "ok": true, "p": ["Manhã", "Tarde", "Noite"] }, { "ok": true, "p": ["Manhã", "Tarde", "Noite"] }, { "ok": true, "p": ["Manhã", "Tarde", "Noite"] }], "ts": "01/10/2026 15:59" }];
const DATA = ALL.filter(s => s.responded);
const PEND = ALL.filter(s => !s.responded);
const CLOSED = [{ code: '0173', name: 'S.SPMarket' }];
const closedTxt = CLOSED.length ? `A loja ${CLOSED.map(c => c.code + ' ' + c.name).join(', ')} está fechada e não entra na análise.` : '';
const DAYS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const DAYS_SHORT = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const TURNS = [
    ['Manhã', 'm', '--manha'],
    ['Tarde', 't', '--tarde'],
    ['Noite', 'n', '--noite']
];
const CATS = {
    horario: { t: 'Horário noturno, trânsito e segurança' },
    shopping: { t: 'Regras do shopping ou do complexo' },
    equipe: { t: 'Folgas e escala da equipe' },
    rotina: { t: 'Rotina de recebimento já definida pela loja' },
    doca: { t: 'Doca e espaço de descarga' }
};
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const N = DATA.length,
    TOTAL = N * 6;
const pct = (a, b) => Math.round(a / b * 100);
ALL.forEach(s => { s.score = s.responded ? s.days.filter(d => d.ok).length : -1; });

/* ---------- Resumo ---------- */
const okAll = DATA.reduce((a, s) => a + s.score, 0);
const fullWeek = DATA.filter(s => s.score === 6).length;
const weekdays = DATA.filter(s => s.days.slice(0, 5).every(d => d.ok)).length;
const onlySat = DATA.filter(s => s.days.slice(0, 5).every(d => !d.ok) && s.days[5].ok);
const satMorning = DATA.filter(s => s.days[5].ok && s.days[5].p.includes('Manhã')).length;
const satOk = DATA.filter(s => s.days[5].ok).length;
const satNight = DATA.filter(s => s.days[5].ok && s.days[5].p.includes('Noite')).length;

$('#metaLine').textContent = `Pesquisa com ${ALL.length} lojas ativas de São Paulo: ${PEND.length ? `${N} responderam` : 'todas responderam'} em 1 e 2 de outubro de 2026${PEND.length ? `, ${PEND.length} ainda não responderam` : ''}. ${closedTxt}`;
$('#daysHint').textContent = `Verde: recebe. Rosa: não recebe. Base: ${N} lojas${PEND.length ? ' que responderam' : ''}.`;
$('#headline').textContent = `${weekdays} das ${N} lojas ${PEND.length ? 'que responderam ' : ''}recebem caminhão de segunda a sexta.`;
$('#subline').textContent = `No sábado, a janela se desloca para a manhã: ${satMorning} das ${satOk} lojas que recebem nesse dia aceitam a manhã, e só ${satNight} aceitam a noite. ${onlySat.length} lojas só conseguem receber no sábado.`;
$('#kpis').innerHTML = [
    [`${pct(okAll, TOTAL)}%`, `dos dias aceitam caminhão (${okAll} de ${TOTAL} combinações de loja e dia)`, 'var(--sim)'],
    [fullWeek, 'lojas recebem de segunda a sábado, sem nenhuma restrição', 'var(--sim)'],
    [N - fullWeek, 'lojas têm ao menos um dia sem recebimento', 'var(--nao)'],
    [onlySat.length, 'lojas recebem apenas no sábado', 'var(--nao)']
].map(([v, l, c]) => `<div class="kpi"><b>${v}</b><small><span class="dot" style="background:${c}"></span>${l}</small></div>`).join('');

/* ---------- Dias ---------- */
let selDay = 0;
function renderDays() {
    $('#days').innerHTML = DAYS.map((d, i) => {
        const ok = DATA.filter(s => s.days[i].ok).length;
        return `<button class="day" data-i="${i}" aria-pressed="${i === selDay}" aria-label="${d}: ${ok} de ${N} lojas recebem">
      <span class="val">${ok}<small>${pct(ok, N)}%</small></span>
      <span class="bar"><span class="yes" style="height:${ok / N * 100}%"></span></span>
      <span class="lbl"><span class="lg">${d}</span><span class="sh">${DAYS_SHORT[i]}</span></span></button>`;
    }).join('');
    const no = DATA.filter(s => !s.days[selDay].ok);
    $('#dayDetail').innerHTML = no.length
        ? `<p><strong>${DAYS[selDay]}:</strong> ${no.length} ${no.length > 1 ? 'lojas não recebem' : 'loja não recebe'}.</p><div class="chips">${no.map(s => `<button class="chip" data-code="${s.code}"><span class="c">${s.code}</span>${esc(s.name)}</button>`).join('')}</div>`
        : `<p><strong>${DAYS[selDay]}:</strong> todas as lojas recebem.</p>`;
}
$('#days').addEventListener('click', e => { const b = e.target.closest('.day'); if (!b) return; selDay = +b.dataset.i; renderDays(); });
$('#dayDetail').addEventListener('click', e => { const c = e.target.closest('[data-code]'); if (c) openStore(c.dataset.code); });
renderDays();

const tg = ['<span></span>', ...DAYS_SHORT.map(d => `<span class="h">${d}</span>`)];
TURNS.forEach(([t, , v]) => {
    tg.push(`<span class="r"><i class="sw" style="background:var(${v})"></i>${t}</span>`);
    DAYS.forEach((_, i) => {
        const c = DATA.filter(s => s.days[i].ok && s.days[i].p.includes(t)).length;
        const a = Math.round(12 + c / N * 78);
        tg.push(`<span class="tcell" style="background:color-mix(in srgb,var(${v}) ${a}%,var(--surface))" title="${t}, ${DAYS[i]}: ${c} lojas">${c}</span>`);
    });
});
$('#tgrid').innerHTML = tg.join('');
const wkM = DATA.filter(s => s.days[0].ok && s.days[0].p.includes('Manhã')).length;
$('#tnote').innerHTML = `De segunda a sexta, manhã e noite têm adesão parecida, perto de <strong>${wkM} lojas</strong> cada. No sábado a noite praticamente some: <strong>${satNight} lojas</strong>.`;

/* ---------- Quadro semanal ---------- */
const st = { q: '', profile: 'all', turn: '', sort: 'code', grp: '', truck: '', ativo: '' };
const uniq = k => [...new Set(ALL.map(s => s[k]).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'pt'));
const fillSel = (id, k, label) => { $(id).innerHTML = `<option value="">${label}</option>` + uniq(k).map(v => `<option>${esc(v)}</option>`).join(''); };
fillSel('#fGrp', 'grp', 'Todos'); fillSel('#fTruck', 'truck', 'Todos'); fillSel('#fAtivo', 'ativo', 'Todos');
function syncChip(sel) {
    const c = sel.closest('.fchip');
    c.querySelector('.fv').textContent = sel.selectedOptions[0] ? sel.selectedOptions[0].text : '';
    c.classList.toggle('on', sel.selectedIndex > 0 && !c.dataset.neutral);
}
const FMAP = { fProfile: 'profile', fTurn: 'turn', fSort: 'sort', fGrp: 'grp', fTruck: 'truck', fAtivo: 'ativo' };
function syncClear() { $('#fClear').hidden = !(st.q || ['profile', 'turn', 'grp', 'truck', 'ativo'].some(k => $('#' + Object.keys(FMAP).find(i => FMAP[i] === k)).selectedIndex > 0)); }
Object.entries(FMAP).forEach(([id, k]) => { const el = $('#' + id); syncChip(el); el.addEventListener('change', () => { st[k] = el.value; syncChip(el); syncClear(); renderWeek(); }); });
$('#fClear').addEventListener('click', () => {
    Object.entries(FMAP).forEach(([id, k]) => { if (k === 'sort') return; const el = $('#' + id); el.selectedIndex = 0; st[k] = el.value; syncChip(el); });
    $('#q').value = ''; st.q = ''; syncClear(); renderWeek();
});
function segBind(id, key, after) {
    $(id).addEventListener('click', e => {
        const b = e.target.closest('button'); if (!b) return;
        $(id).querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b));
        st[key] = b.dataset.v; after();
    });
}
function cellHTML(s, i, mini) {
    const m = mini ? ' mini' : '';
    if (!s.responded) return `<div class="cell pend${m}" data-c="${s.code}" data-i="${i}">${mini ? '?' : 'Sem resposta'}</div>`;
    const d = s.days[i];
    if (mini) {
        if (!d.ok) return `<div class="cell no mini" data-c="${s.code}" data-i="${i}">Não</div>`;
        return `<div class="cell mini" data-c="${s.code}" data-i="${i}">${TURNS.map(([t, k]) => `<i class="${d.p.includes(t) ? k : ''}"></i>`).join('')}</div>`;
    }
    if (!d.ok) {
        const dim = st.turn ? ' dim' : '';
        return `<div class="cell no${dim}" data-c="${s.code}" data-i="${i}">Não</div>`;
    }
    const dim = st.turn && !d.p.includes(st.turn) ? ' dim' : '';
    return `<div class="cell${dim}" data-c="${s.code}" data-i="${i}">${TURNS.map(([t, k]) => `<i class="${d.p.includes(t) ? k : ''}"></i>`).join('')}</div>`;
}
function renderWeek() {
    const q = st.q.trim().toLowerCase();
    let rows = ALL.filter(s =>
        (!q || s.name.toLowerCase().includes(q) || s.code.includes(q)) &&
        (st.profile === 'all' || (st.profile === 'full' ? s.score === 6 : st.profile === 'pend' ? !s.responded : (s.responded && s.score < 6))) &&
        (!st.turn || !s.responded || s.days.some(d => d.ok && d.p.includes(st.turn))) &&
        (!st.grp || s.grp === st.grp) && (!st.truck || s.truck === st.truck) && (!st.ativo || s.ativo === st.ativo));
    rows = rows.slice().sort(st.sort === 'code' ? (a, b) => a.code.localeCompare(b.code) : (a, b) => b.score - a.score || a.code.localeCompare(b.code));
    $('#count').textContent = `${rows.length} de ${ALL.length} lojas`;
    $('#week').innerHTML = `<thead><tr><th>Loja</th>${DAYS.map(d => `<th>${d}</th>`).join('')}<th style="text-align:right;padding-right:18px">Dias</th></tr></thead>
  <tbody>${rows.length ? rows.map(s => `<tr data-code="${s.code}" class="${s.responded ? '' : 'pend'}">
    <td class="store"><button aria-label="Abrir ficha da loja ${esc(s.name)}"><span class="l1"><span class="code">${s.code}</span><span class="nm">${esc(s.name)}</span></span><span class="sub">${esc(s.grp)}, ${esc(s.truck)}, ${esc(s.ativo)}</span></button></td>
    ${DAYS.map((_, i) => `<td>${cellHTML(s, i)}</td>`).join('')}
    <td class="score">${s.responded ? `${s.score} de 6` : 'Pendente'}</td></tr>`).join('')
            : `<tr><td colspan="8" class="empty">Nenhuma loja corresponde aos filtros. Use "Limpar" na barra de filtros para ver todas as lojas.</td></tr>`}</tbody>`;
}
$('#q').addEventListener('input', e => { st.q = e.target.value; syncClear(); renderWeek(); });

$('#week').addEventListener('click', e => { const tr = e.target.closest('tr[data-code]'); if (tr) openStore(tr.dataset.code); });
renderWeek();

/* Tooltip */
const tip = $('#tip');
const byCode = Object.fromEntries(ALL.map(s => [s.code, s]));
document.addEventListener('pointermove', e => {
    const c = e.target.closest('.cell');
    if (!c) { tip.classList.remove('on'); return; }
    const s = byCode[c.dataset.c], i = +c.dataset.i;
    if (!s) { tip.classList.remove('on'); return; }
    const d = s.responded ? s.days[i] : null;
    const body = !d ? 'A loja ainda não respondeu à pesquisa.' : d.ok ? `Recebe: ${d.p.join(', ').toLowerCase()}` : `Não recebe. ${esc(d.why.split('\n')[0].slice(0, 160))}${d.why.length > 160 ? '…' : ''}`;
    tip.innerHTML = `<b>${esc(s.name)}, ${DAYS[i].toLowerCase()}</b><br>${body}`;
    tip.classList.add('on');
    const r = tip.getBoundingClientRect();
    let x = e.clientX + 14, y = e.clientY + 14;
    if (x + r.width > innerWidth - 8) x = e.clientX - r.width - 14;
    if (y + r.height > innerHeight - 8) y = e.clientY - r.height - 14;
    tip.style.left = x + 'px'; tip.style.top = y + 'px';
});

/* ---------- Motivos ---------- */
let selCat = '';
const groups = [];
DATA.forEach(s => {
    const m = new Map();
    s.days.forEach((d, i) => { if (!d.ok) { const k = d.cat + '|' + d.why; if (!m.has(k)) m.set(k, { s, cat: d.cat, why: d.why, days: [] }); m.get(k).days.push(i); } });
    groups.push(...m.values());
});
groups.sort((a, b) => b.days.length - a.days.length || a.s.code.localeCompare(b.s.code));
const catCount = {}, catStores = {};
groups.forEach(g => { catCount[g.cat] = (catCount[g.cat] || 0) + g.days.length; (catStores[g.cat] ||= new Set()).add(g.s.code); });
const noTotal = TOTAL - okAll;
$('#catHint').textContent = `${noTotal} dias sem recebimento no total, somando todas as lojas.`;
function renderCats() {
    const order = Object.keys(CATS).filter(k => catCount[k]).sort((a, b) => catCount[b] - catCount[a]);
    const max = Math.max(...Object.values(catCount));
    $('#cats').innerHTML = order.map(k => `<button class="cat" data-k="${k}" aria-pressed="${selCat === k}">
    <b>${catCount[k]}<small>dias</small></b>
    <span class="t">${CATS[k].t}</span>
    <span class="n">${catStores[k].size} ${catStores[k].size > 1 ? 'lojas' : 'loja'}, ${pct(catCount[k], noTotal)}% dos casos</span>
    <span class="track"><span class="fill" style="width:${catCount[k] / max * 100}%"></span></span></button>`).join('');
    const list = groups.filter(g => !selCat || g.cat === selCat);
    $('#rTitle').textContent = selCat ? `${CATS[selCat].t} (${list.length})` : `Todas as justificativas (${list.length})`;
    $('#clearCat').hidden = !selCat;
    $('#reasons').innerHTML = list.map(g => `<button class="reason" data-g="${groups.indexOf(g)}">
    <span class="who"><span>${g.s.code}</span>${esc(g.s.name)}</span>
    ${selCat ? '' : `<span class="cname">${CATS[g.cat].t}</span>`}
    <span class="dd">${g.days.map(i => `<span>${DAYS_SHORT[i]}</span>`).join('')}</span>
    <p>${esc(g.why.replace(/\n+/g, ' '))}</p>
    <span class="more">Ler justificativa completa</span></button>`).join('');
}
$('#cats').addEventListener('click', e => { const b = e.target.closest('.cat'); if (!b) return; selCat = selCat === b.dataset.k ? '' : b.dataset.k; renderCats(); });
$('#clearCat').addEventListener('click', () => { selCat = ''; renderCats(); });
$('#reasons').addEventListener('click', e => { const b = e.target.closest('.reason'); if (b) openReason(groups[+b.dataset.g]); });
renderCats();

/* ---------- Agrupamentos ---------- */
const byCodeSort = (a, b) => a.code.localeCompare(b.code);
const GROUPS = [...new Set(ALL.map(s => s.grp))].sort((a, b) => a.localeCompare(b, 'pt'));
const groupStores = g => ALL.filter(s => s.grp === g).sort(byCodeSort);
function commonDay(ss, i) {
    const r = ss.filter(s => s.responded); if (!r.length) return null;
    return TURNS.map(t => t[0]).filter(t => r.every(s => s.days[i].ok && s.days[i].p.includes(t)));
}
function mix(ss, k) {
    const c = {}; ss.forEach(s => c[s[k]] = (c[s[k]] || 0) + 1);
    return Object.entries(c).sort((a, b) => b[1] - a[1]).map(([v, n]) => `${n} ${v}`).join(', ');
}
function groupInfo(g) {
    const ss = groupStores(g), com = DAYS.map((_, i) => commonDay(ss, i));
    const resp = ss.filter(s => s.responded).length, pend = ss.length - resp;
    const days = com.filter(c => c && c.length).length;
    return { g, ss, com, resp, pend, days };
}
const GI = GROUPS.map(groupInfo);
const reasonsOf = st => groups.filter(g => g.s === st);
const dayLabel = ds => ds.length === 6 ? 'Seg a Sáb' : (ds.length > 1 && ds[ds.length - 1] - ds[0] === ds.length - 1) ? `${DAYS_SHORT[ds[0]]} a ${DAYS_SHORT[ds[ds.length - 1]]}` : ds.map(i => DAYS_SHORT[i]).join(', ');
const ALERT = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 7v6M12 17h.01"/></svg>';
function whyBox(st) {
    if (!st.responded) return '';
    const rs = reasonsOf(st);
    if (!rs.length) return `<div class="why-ok">Esta loja recebe todos os dias, de segunda a sábado. Não há motivo de restrição.</div>`;
    return `<div class="why-box" role="note"><div class="why-h">${ALERT}Por que a loja não recebe${rs.length > 1 ? ` (${rs.length} motivos)` : ''}</div>
    ${rs.map(g => `<div class="why-item"><div class="why-meta"><span class="dd">${g.days.map(i => `<span>${DAYS[i]}</span>`).join('')}</span><span class="catp">${CATS[g.cat].t}</span></div>
      <p class="why-text">${esc(g.why)}</p>
      ${g.s.days[g.days[0]].orig.trim() !== g.why.trim() ? `<details class="orig"><summary>Ver texto original</summary><div>${esc(g.s.days[g.days[0]].orig)}</div></details>` : ''}</div>`).join('')}</div>`;
}
function blockers(info, me) {
    const { ss, com } = info;
    const bad = com.map((c, i) => c && !c.length ? i : -1).filter(i => i >= 0);
    if (!bad.length) return '';
    const items = [];
    ss.filter(x => x.responded).forEach(x => {
        reasonsOf(x).forEach(g => {
            const ds = g.days.filter(i => bad.includes(i));
            if (ds.length) items.push({ x, g, ds });
        });
    });
    const turnDays = bad.filter(i => ss.filter(x => x.responded).every(x => x.days[i].ok));
    const nst = new Set(items.map(it => it.x.code)).size;
    const cnt = [nst ? `${nst} ${nst > 1 ? 'lojas' : 'loja'} com restrição` : '', turnDays.length ? 'turnos que não coincidem' : ''].filter(Boolean).join(' e ');
    return `<details class="block-box"><summary><span class="bt">O que impede a janela em comum (${dayLabel(bad)})</span><span class="bc">${cnt}</span>
    <span class="btog"><span class="o">Expandir</span><span class="c">Fechar</span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></span></summary><ul>
    ${items.map(({ x, g, ds }) => `<li><div class="bl1"><button class="bstore" data-code="${x.code}"><small>${x.code}</small>${esc(x.name)}</button>${x.code === me ? '<span class="me">esta loja</span>' : ''}
      <span class="dd">${ds.map(i => `<span>${DAYS_SHORT[i]}</span>`).join('')}</span><span class="catp">${CATS[g.cat].t}</span></div>
      <p>${esc(g.why.replace(/\n+/g, ' '))}</p></li>`).join('')}
    ${turnDays.length ? `<li class="turns"><div class="bl1"><b style="font-size:14px">Turnos diferentes</b><span class="dd">${turnDays.map(i => `<span style="background:var(--hover);color:var(--ink)">${DAYS_SHORT[i]}</span>`).join('')}</span></div>
      <p>Nesses dias todas as lojas que responderam recebem, mas em turnos que não coincidem.</p></li>`: ''}
  </ul></details>`;
}
function groupTable(info, hl) {
    const { ss, com } = info;
    return `<div class="gwrap"><table class="gt"><thead><tr><th>Loja</th><th>Caminhão</th><th>Ativo</th>${DAYS_SHORT.map(d => `<th>${d}</th>`).join('')}</tr></thead>
  <tbody>${ss.map(s => `<tr data-code="${s.code}" class="${s.code === hl ? 'hl' : ''}" title="Abrir ficha de ${esc(s.name)}">
    <td class="gs"><small>${s.code}</small><b>${esc(s.name)}</b></td><td class="gx">${esc(s.truck)}</td><td class="gx">${esc(s.ativo)}</td>
    ${DAYS.map((_, i) => `<td>${cellHTML(s, i, true)}</td>`).join('')}</tr>`).join('')}</tbody>
  <tfoot><tr><td colspan="3">Janela em comum</td>${com.map((c, i) => c === null ? '<td></td>' : `<td>${c.length
        ? `<div class="cell mini common" title="${DAYS[i]}: ${c.join(', ').toLowerCase()}">${TURNS.map(([t, k]) => `<i class="${c.includes(t) ? k : ''}"></i>`).join('')}</div>`
        : `<div class="cell mini none" title="${DAYS[i]}: nenhum turno em comum">–</div>`}</td>`).join('')}</tr></tfoot></table></div>`;
}
function groupNote(info) {
    const { resp, pend, days, com } = info;
    if (!resp) return `Nenhuma loja deste agrupamento respondeu ainda.`;
    const best = com.map((c, i) => c && c.length ? `${DAYS_SHORT[i]} (${c.join(', ').toLowerCase()})` : null).filter(Boolean);
    let t = resp === 1 ? `Só uma loja respondeu, então a janela em comum é a dela: ${days} de 6 dias.`
        : days ? `As ${resp} lojas que responderam têm janela em comum em <strong>${days} de 6 dias</strong>: ${best.join('; ')}.`
            : `As ${resp} lojas que responderam <strong>não têm nenhuma janela em comum</strong> na semana.`;
    if (pend) t += ` ${pend} ${pend > 1 ? 'lojas ainda não responderam' : 'loja ainda não respondeu'}, então a janela pode mudar.`;
    return t;
}
const gFull5 = GI.filter(x => x.resp && x.com.slice(0, 5).every(c => c && c.length)).length;
const gNone = GI.filter(x => x.resp && x.days === 0).length;
const gPend = GI.filter(x => x.pend).length;
$('#gsum').innerHTML = [
    [GROUPS.length, `agrupamentos, somando ${ALL.length} lojas`, 'var(--accent)'],
    [gFull5, `${gFull5 === 1 ? 'agrupamento tem' : 'agrupamentos têm'} janela em comum todos os dias, de segunda a sexta`, 'var(--sim)'],
    [gNone, `${gNone === 1 ? 'agrupamento não tem' : 'agrupamentos não têm'} nenhuma janela em comum${gPend ? `; ${gPend} têm loja sem resposta` : ''}`, 'var(--nao)']
].map(([v, l, c]) => `<div class="kpi"><b>${v}</b><small><span class="dot" style="background:${c}"></span>${l}</small></div>`).join('');
const gst = { sel: '', sort: 'name' };
$('#gSel').innerHTML = '<option value="">Todos</option>' + GROUPS.map(g => `<option>${esc(g)}</option>`).join('');
$('#gSel').addEventListener('change', e => { gst.sel = e.target.value; syncChip(e.target); renderGroups(); });
$('#gSort').addEventListener('change', e => { gst.sort = e.target.value; syncChip(e.target); renderGroups(); });
syncChip($('#gSel')); syncChip($('#gSort'));
function renderGroups() {
    let list = GI.filter(x => !gst.sel || x.g === gst.sel);
    if (gst.sort === 'conf') list = list.slice().sort((a, b) => a.days - b.days || a.g.localeCompare(b.g, 'pt'));
    $('#gcards').innerHTML = list.map(x => `<article class="gcard">
    <div><h3>${esc(x.g)}${x.pend ? `<span class="tag warn">${x.pend} sem resposta</span>` : ''}</h3></div>
    <div class="gmeta"><span>${x.ss.length} lojas</span><span>${mix(x.ss, 'truck')}</span><span>${mix(x.ss, 'ativo')}</span></div>
    ${groupTable(x)}
    <p class="gnote">${groupNote(x)}</p>${blockers(x)}</article>`).join('');
}
renderGroups();
$('#gcards').addEventListener('click', e => { const t = e.target.closest('tr[data-code], .bstore'); if (t) openStore(t.dataset.code); });

/* ---------- Ficha da loja ---------- */
const dr = $('#drawer');
function mergeDays(days) {
    const key = d => d.ok ? 'ok:' + d.p.join(',') : 'no:' + d.why;
    const out = [];
    days.forEach((d, i) => { const l = out[out.length - 1]; if (l && key(l.d) === key(d) && l.b === i - 1) l.b = i; else out.push({ d, a: i, b: i }); });
    return out;
}
function openStore(code) {
    const s = byCode[code];
    const info = GI.find(x => x.g === s.grp);
    const others = info.ss.length - 1;
    $('#drIn').innerHTML = `
    <div class="dr-head"><div><h2 id="drTitle">${esc(s.name)}</h2><p>Loja ${s.code}, ${s.responded ? `recebe em ${s.score} de 6 dias` : 'ainda não respondeu à pesquisa'}</p></div>
      ${closeBtn('drClose')}</div>
    ${whyBox(s)}
    <dl class="facts"><dt>Agrupamento</dt><dd>${esc(s.grpFull)}</dd><dt>Caminhão</dt><dd>${esc(s.truck)}</dd><dt>Ativo</dt><dd>${esc(s.ativo)}</dd>
      ${s.responded ? `<dt>Respondido por</dt><dd>${esc(s.resp)}</dd><dt>Cargo</dt><dd>${esc(s.role)}</dd><dt>Data da resposta</dt><dd>${s.ts}</dd>` : ''}</dl>
    <div class="mod-sec"><h4>Vão junto no agrupamento ${esc(s.grp)}</h4>
      <p class="hint">${others ? `${others} ${others > 1 ? 'outras lojas' : 'outra loja'} no mesmo agrupamento: ${mix(info.ss, 'truck')}; ${mix(info.ss, 'ativo')}. Esta loja está destacada; clique em outra para abrir a ficha dela.` : 'Esta é a única loja do agrupamento.'}</p>
      ${groupTable(info, s.code)}
      <p class="gnote" style="margin-top:12px">${groupNote(info)}</p>
      ${blockers(info, s.code)}</div>
    <div class="mod-sec"><h4>Detalhe por dia</h4>
    ${s.responded ? `<div class="dlist">${mergeDays(s.days).map(({ d, a, b }) => `<div class="drow"><span class="dn">${a === b ? DAYS[a] : (b - a === 1 ? DAYS_SHORT[a] + ' e ' + DAYS_SHORT[b] : DAYS_SHORT[a] + ' a ' + DAYS_SHORT[b])}</span><div>${d.ok ? TURNS.filter(([t]) => d.p.includes(t)).map(([t, k]) => `<span class="pill ${k}">${t}</span>`).join('')
            : `<span class="pill x">Não recebe</span><span class="dn-why">${CATS[d.cat].t}, motivo em destaque no topo</span>`
        }</div></div>`).join('')}</div>` : `<div class="notice">A loja ainda não respondeu. Os dias e turnos aparecem aqui assim que a resposta entrar na planilha.</div>`}</div>`;
    $('#drClose').onclick = () => dr.close();
    tip.classList.remove('on');
    if (!dr.open) dr.showModal();
    dr.scrollTop = 0;
    $('#drTitle').setAttribute('tabindex', '-1'); $('#drTitle').focus({ preventScroll: true });
}
$('#drIn').addEventListener('click', e => { const t = e.target.closest('.gt tr[data-code], .bstore'); if (t && t.dataset.code) openStore(t.dataset.code); });
dr.addEventListener('click', e => { if (e.target === dr) dr.close(); });
const closeBtn = id => `<button class="dr-close" id="${id}" aria-label="Fechar (Esc)" title="Fechar (Esc)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg><span>Fechar</span><kbd>Esc</kbd></button>`;
function openReason(g) {
    const d = g.s.days[g.days[0]];
    $('#drIn').innerHTML = `
    <div class="dr-head"><div><h2 id="drTitle">${esc(g.s.name)}</h2><p>Loja ${g.s.code}, ${esc(g.s.resp)} (${esc(g.s.role)})</p></div>${closeBtn('drClose')}</div>
    <div><span class="pill x">Não recebe</span><span class="pill" style="background:var(--bg)">${CATS[g.cat].t}</span></div>
    <dl class="facts"><dt>Dias afetados</dt><dd><span class="dd">${g.days.map(i => `<span>${DAYS[i]}</span>`).join('')}</span></dd></dl>
    <div class="why-box"><div class="why-h">${ALERT}Motivo informado pela loja</div><p class="why-text">${esc(g.why)}</p></div>
    ${d.orig.trim() !== g.why.trim() ? `<details class="orig"><summary>Ver texto original</summary><div>${esc(d.orig)}</div></details>` : ''}
    <div class="dr-foot"><button class="btn" id="toStore">Ver ficha completa da loja</button></div>`;
    $('#drClose').onclick = () => dr.close();
    $('#toStore').onclick = () => openStore(g.s.code);
    tip.classList.remove('on');
    if (!dr.open) dr.showModal();
    dr.scrollTop = 0;
    $('#drTitle').setAttribute('tabindex', '-1'); $('#drTitle').focus({ preventScroll: true });
}

/* ---------- Tema ---------- */
$('#themeBtn').addEventListener('click', () => {
    const root = document.documentElement;
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) { }
});
try { const t = localStorage.getItem('theme'); if (t) document.documentElement.dataset.theme = t; } catch (e) { }

/* ---------- Formulário do gerente ---------- */
const TIPOS = [...Object.values(CATS).map(c => c.t), 'Outro motivo'];
const ICON_OK = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
const ICON_NO = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';
let fs = null;
const slotKey = (i, t) => i + '|' + t;
let pickQ = '';
function openForm(raw) {
    const params = new URLSearchParams(raw.split('?')[1] || '');
    const rawCode = (params.get('loja') || '').replace(/\D/g, '');
    const code = rawCode ? rawCode.padStart(4, '0') : '';
    const token = (params.get('t') || '').trim();
    const s = code ? byCode[code] : null;
    if (!s) { renderPicker(code ? `Não encontramos a loja ${code}. Escolha na lista abaixo.` : ''); return; }
    if (!fs || fs.code !== code) fs = { code, token, s, nome: s.resp || '', cargo: s.role || '', prefilled: !!s.resp, blocked: new Map(), same: true, common: { tipo: '', txt: '' }, sent: null };
    fs.token = token;
    renderForm();
}
function renderPicker(msg) {
    const root = $('#formRoot');
    root.innerHTML = `<div class="fcard">
    <header class="fhead"><p class="meta">Pesquisa de recebimento de carga</p>
      <h1 class="ftitle">Janelas de recebimento da loja</h1>
      <p class="fintro">Escolha a sua loja para começar. Em seguida, confirme quem está respondendo e marque as janelas em que a loja não pode receber o caminhão.</p></header>
    <div class="fstep">
      <h3>Qual é a sua loja?</h3>
      ${msg ? `<p class="ferr" style="padding:10px 14px;border-radius:8px;margin:12px 0 0">${esc(msg)}</p>` : ''}
      <label class="psearch"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <input id="pickQ" type="search" placeholder="Digite o código ou o nome da loja" aria-label="Buscar loja" value="${esc(pickQ)}" autocomplete="off"></label>
      <div id="pickList" class="plist"></div>
    </div></div>`;
    const draw = () => {
        const q = pickQ.trim().toLowerCase();
        const list = ALL.filter(s => !q || s.code.includes(q) || s.name.toLowerCase().includes(q) || s.grp.toLowerCase().includes(q));
        if (!list.length) { $('#pickList').innerHTML = `<p class="pempty">Nenhuma loja encontrada para "${esc(pickQ)}".</p>`; return; }
        const gs = [...new Set(list.map(s => s.grp))].sort((a, b) => a.localeCompare(b, 'pt'));
        $('#pickList').innerHTML = gs.map(g => `<div class="pgroup"><h4>${esc(g)}</h4><div class="pgrid">${list.filter(s => s.grp === g).sort(byCodeSort).map(s => `<button type="button" class="pstore" data-code="${s.code}"><small>${s.code}</small><b>${esc(s.name)}</b><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></button>`).join('')
            }</div></div>`).join('');
    };
    draw();
    $('#pickQ').oninput = e => { pickQ = e.target.value; draw(); };
    $('#pickQ').onkeydown = e => { if (e.key === 'Enter') { const b = $('#pickList .pstore'); if (b) b.click(); } };
    $('#pickList').onclick = e => { const b = e.target.closest('.pstore'); if (b) location.hash = '#responder?loja=' + b.dataset.code; };
    if (matchMedia('(pointer:fine)').matches) $('#pickQ').focus();
}
function orderedBlocked() {
    return [...fs.blocked.values()].sort((a, b) => a.dia - b.dia || TURNS.findIndex(x => x[0] === a.turno) - TURNS.findIndex(x => x[0] === b.turno));
}
function renderForm() {
    const { s } = fs, root = $('#formRoot');
    if (fs.sent) {
        const bl = fs.sent.bloqueios;
        root.innerHTML = `<div class="fcard"><div class="fdone">
      <div class="ic"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
      <h2>Resposta enviada</h2>
      <p>Obrigado! As janelas da loja ${s.code} ${esc(s.name)} foram registradas. Protocolo <code>${esc(fs.sent.envio)}</code>.</p>
      ${bl.length ? `<ul>${bl.map(b => `<li><span class="pill x">Não recebe</span> ${b.dia}, ${b.turno.toLowerCase()}</li>`).join('')}</ul>` : '<p>A loja informou que recebe em todas as janelas.</p>'}
      <p style="font-size:13.5px">Se precisar corrigir, envie de novo. A resposta mais recente é a que vale.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center"><button class="fbtn ghost" id="fAgain">Corrigir e enviar de novo</button>${fs.token ? '' : '<a class="fbtn ghost" href="#responder" style="text-decoration:none">Responder por outra loja</a>'}</div></div></div>`;
        $('#fAgain').onclick = () => { fs.sent = null; renderForm(); };
        return;
    }
    root.innerHTML = `<div class="fcard">
    <header class="fhead"><p class="meta">Pesquisa de recebimento de carga</p>
      <h1 class="ftitle">Janelas de recebimento da loja</h1>
      <div class="fstore"><b>${s.code} ${esc(s.name)}</b><span>${esc(s.grp)}</span><span>${esc(s.truck)}</span><span>${esc(s.ativo)}</span>
        ${fs.token ? '' : `<a class="fswap" href="#responder">Não é a sua loja? Trocar</a>`}</div></header>
    <ol class="fsteps">
      <li class="fstep"><h3><span class="n">1</span>Quem está respondendo</h3>
        ${fs.prefilled ? `<p class="hint">Preenchemos com quem respondeu a primeira pesquisa. Se outra pessoa estiver respondendo agora, é só alterar.</p>` : ''}
        <div class="frow"><label class="ff" id="ffNome">Nome<input id="fNome" autocomplete="name" maxlength="120" value="${esc(fs.nome)}"></label>
        <label class="ff" id="ffCargo">Cargo<input id="fCargo" maxlength="80" value="${esc(fs.cargo)}" placeholder="Ex.: Gerente de loja"></label></div></li>
      <li class="fstep"><h3><span class="n">2</span>Marque as janelas em que a loja não pode receber</h3>
        <p class="hint">Todas começam como "recebe". Toque só nas janelas sem condição de recebimento; tocar no dia marca o dia inteiro. Domingo não tem recebimento.</p>
        <div class="slots" id="fGrid" role="group" aria-label="Janelas de recebimento"></div>
        <div class="legend2"><span style="display:inline-flex;gap:6px;align-items:center;color:var(--sim)">${ICON_OK}<span style="color:var(--muted)">Recebe</span></span><span style="display:inline-flex;gap:6px;align-items:center;color:var(--nao-ink)">${ICON_NO}<span style="color:var(--muted)">Não recebe</span></span></div></li>
      <li class="fstep"><h3><span class="n">3</span>Justificativa</h3><p class="hint">Conte o motivo de a loja não receber nas janelas marcadas.</p><div id="fJust"></div></li>
    </ol>
    <p class="ferr" id="fErr" role="alert"></p>
    <div class="fsubmit"><p id="fSum"></p><button class="fbtn" id="fSend">Enviar resposta</button></div></div>`;
    $('#fNome').oninput = e => { fs.nome = e.target.value; e.target.closest('.ff').classList.remove('bad'); };
    $('#fCargo').oninput = e => { fs.cargo = e.target.value; e.target.closest('.ff').classList.remove('bad'); };
    $('#fGrid').addEventListener('click', e => {
        const b = e.target.closest('.slot, .daybtn'); if (!b) return;
        if (b.classList.contains('daybtn')) {
            const i = +b.dataset.i, all = TURNS.every(([t]) => fs.blocked.has(slotKey(i, t)));
            TURNS.forEach(([t]) => { const k = slotKey(i, t); if (all) fs.blocked.delete(k); else if (!fs.blocked.has(k)) fs.blocked.set(k, { dia: i, turno: t, tipo: '', txt: '' }); });
        } else {
            const k = b.dataset.k, [i, t] = k.split('|');
            if (fs.blocked.has(k)) fs.blocked.delete(k); else fs.blocked.set(k, { dia: +i, turno: t, tipo: '', txt: '' });
        }
        renderSlots(); renderJust();
    });
    $('#fSend').onclick = submitForm;
    $('#formRoot').addEventListener('input', () => { const e = $('#fErr'); if (e) e.textContent = ''; });
    $('#formRoot').addEventListener('change', () => { const e = $('#fErr'); if (e && !$('#formRoot .ff.bad')) e.textContent = ''; });
    renderSlots(); renderJust();
}
function renderSlots() {
    const g = ['<span></span>', ...DAYS.map((d, i) => `<button type="button" class="daybtn" data-i="${i}" title="Marcar ou desmarcar o dia inteiro">${DAYS_SHORT[i]}</button>`)];
    TURNS.forEach(([t, , v]) => {
        g.push(`<span class="rh"><i class="sw" style="background:var(${v})"></i>${t}</span>`);
        DAYS.forEach((d, i) => {
            const k = slotKey(i, t), on = fs.blocked.has(k);
            g.push(`<button type="button" class="slot" data-k="${k}" aria-pressed="${on}" aria-label="${d}, ${t}: ${on ? 'não recebe' : 'recebe'}">${on ? ICON_NO : ICON_OK}${on ? 'Não recebe' : 'Recebe'}</button>`);
        });
    });
    $('#fGrid').innerHTML = g.join('');
    const n = fs.blocked.size;
    $('#fSum').innerHTML = n ? `<strong>${n} ${n > 1 ? 'janelas' : 'janela'}</strong> sem recebimento, ${18 - n} com recebimento.` : 'Nenhuma janela marcada: a loja recebe em todas.';
}
const tipoSel = (val, id) => `<select ${id ? `id="${id}"` : ''} class="jtipo"><option value="">Escolha</option>${TIPOS.map(o => `<option ${o === val ? 'selected' : ''}>${esc(o)}</option>`).join('')}</select>`;
function renderJust() {
    const bl = orderedBlocked(), box = $('#fJust');
    if (!bl.length) { box.innerHTML = `<div class="fok">Sem janelas marcadas, não é preciso justificar. A resposta será registrada como "recebe em todas as janelas".</div>`; return; }
    const chips = list => list.map(b => `<span>${DAYS_SHORT[b.dia]} ${b.turno.toLowerCase()}</span>`).join('');
    let h = bl.length > 1 ? `<label class="same"><input type="checkbox" id="fSame" ${fs.same ? 'checked' : ''}> Usar a mesma justificativa para todas as janelas marcadas</label>` : '';
    if (bl.length === 1 || fs.same) {
        h += `<div class="jitem" data-k="*"><div class="jt">Janelas: ${chips(bl)}</div><div class="jgrid">
      <label class="ff">Tipo de motivo${tipoSel(fs.common.tipo)}</label>
      <label class="ff">Justificativa<textarea class="jtxt" maxlength="1500" placeholder="Explique por que a loja não consegue receber nessas janelas">${esc(fs.common.txt)}</textarea></label></div></div>`;
    } else {
        h += `<div class="jlist">${bl.map(b => `<div class="jitem" data-k="${slotKey(b.dia, b.turno)}"><div class="jt">${DAYS[b.dia]}, ${b.turno.toLowerCase()}</div><div class="jgrid">
      <label class="ff">Tipo de motivo${tipoSel(b.tipo)}</label>
      <label class="ff">Justificativa<textarea class="jtxt" maxlength="1500">${esc(b.txt)}</textarea></label></div></div>`).join('')}</div>`;
    }
    box.innerHTML = h;
    const same = $('#fSame'); if (same) same.onchange = e => { fs.same = e.target.checked; renderJust(); };
    box.querySelectorAll('.jitem').forEach(it => {
        const k = it.dataset.k, tgt = k === '*' ? fs.common : fs.blocked.get(k);
        it.querySelector('.jtipo').onchange = e => { tgt.tipo = e.target.value; e.target.closest('.ff').classList.remove('bad'); };
        it.querySelector('.jtxt').oninput = e => { tgt.txt = e.target.value; e.target.closest('.ff').classList.remove('bad'); };
    });
}
async function submitForm() {
    const err = $('#fErr'); err.textContent = '';
    let bad = null;
    const mark = el => { el.closest('.ff').classList.add('bad'); bad = bad || el; };
    if (fs.nome.trim().length < 3) mark($('#fNome'));
    if (fs.cargo.trim().length < 3) mark($('#fCargo'));
    const bl = orderedBlocked(), useCommon = bl.length === 1 || fs.same;
    $('#fJust').querySelectorAll('.jitem').forEach(it => {
        const k = it.dataset.k, src = k === '*' ? fs.common : fs.blocked.get(k);
        if (!src.tipo) mark(it.querySelector('.jtipo'));
        if (src.txt.trim().length < 5) mark(it.querySelector('.jtxt'));
    });
    if (bad) { err.textContent = 'Preencha os campos destacados para enviar.'; bad.focus(); return; }
    if (!FORM_ENDPOINT) { err.textContent = 'O envio ainda não foi configurado. Avise a equipe responsável pela pesquisa.'; return; }
    const payload = {
        loja: fs.code, token: fs.token, nome: fs.nome.trim(), cargo: fs.cargo.trim(),
        bloqueios: bl.map(b => ({ dia: DAYS[b.dia], turno: b.turno, tipo: useCommon ? fs.common.tipo : b.tipo, justificativa: (useCommon ? fs.common.txt : b.txt).trim() }))
    };
    const btn = $('#fSend'); btn.disabled = true; btn.textContent = 'Enviando…';
    try {
        const r = await fetch(FORM_ENDPOINT, { method: 'POST', body: JSON.stringify(payload) });
        const j = await r.json();
        if (!j.ok) throw new Error(j.erro || 'Não foi possível registrar a resposta.');
        fs.sent = { envio: j.envio, bloqueios: payload.bloqueios };
        renderForm(); window.scrollTo({ top: 0, behavior: 'instant' });
    } catch (e) {
        err.textContent = (e && e.message && !/fetch|network|json/i.test(e.message)) ? e.message : 'Não foi possível enviar agora. Verifique a internet e tente de novo.';
        btn.disabled = false; btn.textContent = 'Enviar resposta';
    }
}

/* ---------- Páginas ---------- */
const PAGES = [
    { id: 'resumo', t: 'Resumo' },
    { id: 'dias', t: 'Dias e turnos', d: 'Quantas lojas recebem em cada dia e em quais janelas de horário.', k: () => `Dia com mais lojas: ${DAYS[[0, 1, 2, 3, 4, 5].sort((a, b) => DATA.filter(s => s.days[b].ok).length - DATA.filter(s => s.days[a].ok).length)[0]].toLowerCase()}` },
    { id: 'quadro', t: 'Quadro semanal', d: 'A semana de cada uma das lojas, com filtros por perfil e turno.', k: () => `${fullWeek} lojas sem nenhuma restrição${PEND.length ? `, ${PEND.length} sem resposta` : ''}` },
    { id: 'grupos', t: 'Agrupamentos', d: 'Quem vai junto com quem: caminhão, ativo e grade de cada loja do grupo.', k: () => `${GROUPS.length} agrupamentos, ${gFull5} com janela em comum de segunda a sexta` },
    { id: 'motivos', t: 'Motivos', d: 'Por que algumas lojas não recebem, agrupado por tema.', k: () => `${noTotal} dias sem recebimento no total` }
];
const secs = PAGES.map(p => document.getElementById(p.id));
$('#explore').innerHTML = PAGES.slice(1).map(p => `<a href="#${p.id}"><b>${p.t}</b><span>${p.d}</span><span>${p.k()}</span><em>Abrir página</em></a>`).join('');
secs.forEach((sec, i) => {
    if (i === 0) return;
    const pv = PAGES[i - 1], nx = PAGES[i + 1];
    sec.insertAdjacentHTML('beforeend', `<nav class="pagenav" aria-label="Navegação entre páginas">
    <a class="prev" href="#${pv.id}" aria-label="Página anterior: ${pv.t}"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg><span>${pv.t}</span></a>
    ${nx ? `<a class="next" href="#${nx.id}" aria-label="Próxima página: ${nx.t}"><span>${nx.t}</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>` : ''}</nav>`);
});
let cur = 0;
function show(id, push) {
    const raw = String(id || '');
    if (raw.split('?')[0] === 'responder') {
        cur = -1;
        document.body.classList.add('form-mode');
        secs.forEach(s => s.classList.remove('active'));
        $('#responder').classList.add('active');
        document.title = 'Janelas de recebimento da loja';
        tip.classList.remove('on');
        window.scrollTo({ top: 0, behavior: 'instant' });
        openForm(raw);
        return;
    }
    document.body.classList.remove('form-mode');
    $('#responder').classList.remove('active');
    const i = Math.max(0, PAGES.findIndex(p => p.id === id));
    cur = i;
    secs.forEach((s, k) => s.classList.toggle('active', k === i));
    document.querySelectorAll('.nav a, .mnav a').forEach(a => a.getAttribute('href') === '#' + PAGES[i].id ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'));
    document.title = `${PAGES[i].t}: Recebimento de carga nas lojas`;
    $('#pos').textContent = `${i + 1} de ${PAGES.length}`;
    if (push && location.hash !== '#' + PAGES[i].id) history.pushState(null, '', '#' + PAGES[i].id);
    tip.classList.remove('on');
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (PAGES[i].id === 'dias') renderDays();
    document.querySelector('.mnav a[aria-current]')?.scrollIntoView({ block: 'nearest', inline: 'center' });
}
document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]'); if (!a) return;
    const id = a.getAttribute('href').slice(1);
    if (PAGES.some(p => p.id === id)) { e.preventDefault(); show(id, true); }
});
addEventListener('popstate', () => show(location.hash.slice(1)));
addEventListener('hashchange', () => { const id = location.hash.slice(1); if (cur < 0 || PAGES[cur].id !== id) show(id); });
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
show(location.hash.slice(1) || 'resumo');
addEventListener('load', () => setTimeout(() => window.scrollTo(0, 0), 0));
function go(d) { if (cur < 0) return; const i = Math.min(PAGES.length - 1, Math.max(0, cur + d)); if (i !== cur) show(PAGES[i].id, true); }

/* ---------- Apresentação ---------- */
function setPresent(on) {
    document.body.classList.toggle('present', on);
    $('#presentBtn span').textContent = on ? 'Sair da apresentação' : 'Apresentar';
}
$('#presentBtn').addEventListener('click', async () => {
    const on = !document.body.classList.contains('present');
    setPresent(on);
    try {
        if (on && document.documentElement.requestFullscreen && !document.fullscreenElement) await document.documentElement.requestFullscreen();
        if (!on && document.fullscreenElement) await document.exitFullscreen();
    } catch (e) { }
    if (on) show('resumo', true);
});
document.addEventListener('fullscreenchange', () => { if (!document.fullscreenElement) setPresent(false); });
$('#prevS').onclick = () => go(-1); $('#nextS').onclick = () => go(1);
document.addEventListener('keydown', e => {
    if (!document.body.classList.contains('present') || dr.open || e.target.matches('input')) return;
    if (['ArrowRight', 'PageDown'].includes(e.key)) { e.preventDefault(); go(1); }
    if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); go(-1); }
});

$('#foot').textContent = `Fonte: Pesquisa de Recebimento de Caminhão nas Lojas (${N} respostas de ${ALL.length} lojas ativas). ${closedTxt} Textos das justificativas com ortografia revisada; o original fica disponível nos detalhes de cada justificativa. Os temas dos motivos são um agrupamento feito a partir das respostas.`;