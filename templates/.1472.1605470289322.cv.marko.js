// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/curriculo-aline$1.0.0/templates/cv.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=en><head><meta http-equiv=Content-Type content=\"text/html; charset=UTF-8\"><title>Curriculo Aline Edvania de França</title><link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css integrity=sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2 crossorigin=anonymous><script src=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js integrity=sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx crossorigin=anonymous></script></head><body><div class=container><div class=bg-primary style=\"padding: 2%;\"><img src=img/foto.jpg alt=\"Imagem de perfil\" width=200px><h1>ALINE EDVANIA DE FRANÇA</h1><p><b>Nascimento:</b> <i>29/05/2000</i></p><p><b>Email:</b>alineedvania2018@gmail.com</p><p><b>Telefone:</b> (81) 98479-2226</p><p> Desenvolver na linguagem de COBOL e na linguagem de JAVA.</p><ul><li><a href=https://www.linkedin.com/in/aline-fran%C3%A7a-28a84a194/ >LinkedIn</a></li><li><a href=https://www.instagram.com/alinee_edvaniaa/ >Instagram pessoal</a></li></ul></div><h2>Endereço</h2><hr><dl><dt><b>Rua</b></dt><dd>Rua Vital de Oliveira, nº 42</dd><dt><b>Cidade</b></dt><dd>Jaboatão dos Guararapes - PE</dd><dt><b>Bairro</b></dt><dd>Centro</dd></dl><h2>Formação Acadêmica</h2><hr><dl><dt><b>Curso</b></dt><dd>Informática para Internet, IFPE - Campus Jaboatão dos Guararapes (Conclusão em 2021).</dd><br><dt><b>Capacitação</b></dt><dd>Capacitação na Linguagem de Cobol, Rece Cidadã/Accenture (Concluído em 2020).</dd></dl><h2>Experiência Profissional</h2><hr><dl><dt><b>Empresa</b></dt><dd>Accenture do Brasil</dd><dt><b>Cargo</b></dt><dd>Application Development New Associate</dd><dt><b>Descrição Cargo</b></dt><dd>Projetar, construir e configurar aplicativos para atender aos requisitos de aplicativos e processos de negócios. Atuar com programação COBOL, SQL DB2</dd><dt><b>Tempo de trabalho</b></dt><dd>Novembro de 2020</dd></dl><h2>Competências</h2><hr><ul><li>JavaScript</li><li>CSS3</li><li>HTML5</li><li>COBOL</li><li>SQL</li></ul></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "68");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/curriculo-aline$1.0.0/templates/cv.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
