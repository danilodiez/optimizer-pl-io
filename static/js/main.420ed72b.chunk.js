(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(19),i=t.n(l),c=(t(88),t(89),t(46)),s=t(47),o=t(48),u=t(68),m=t(32),d=t(49),p=t(30),h=t(26),E=t(20),f=t(21),b=t(24),g=t(22),v=t(25),y=t(62),x=t(74),C=t.n(x),N=t(66),R=t(67),k=t(35),V=t(65),j=t(60),O=t(61),S=t(54),D=t(57),I=t(55),T=t(59),w=t(36),M=function(e){function a(e){var t;return Object(E.a)(this,a),(t=Object(b.a)(this,Object(g.a)(a).call(this,e))).handlerInputVar=function(e){var a=e.target,n=a.value,r=a.name,l=t.props.status.variables;l[r].xi=r,l[r].descripcion=n,r>1&&""===n&&l.splice(r,1),t.props.handleVariables(l),t.handleNewsVar(t.props.status.method)},t.handlerInputRes=function(e){var a=e.target,n=a.value,r=a.name,l=t.props.status.restricciones;l[r].ri=r,l[r].descripcion=n,""===n&&l.splice(r,1),t.props.handleRestricciones(l),t.handleNewsRes()},t.handleNewsRes=function(){var e=t.props.status.restricciones;0===e.filter(function(e){return 0===e.descripcion.length}).length&&(e.push({ri:e.length,descripcion:"",coeficientes:[],eq:">=",derecha:""}),t.props.handleRestricciones(e))},t.handleNewsVar=function(e){var a=t.props.status.variables;"simplex"===e?0===a.filter(function(e){return 0===e.descripcion.length}).length&&(a.push({xi:a.length,descripcion:"",coeficiente:""}),t.props.handleVariables(a)):a.length>2&&(a.splice(2),t.props.handleVariables(a))},t.state={faltaDescrip:""},t}return Object(v.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){this.handleNewsRes()}},{key:"componentDidUpdate",value:function(e){e!==this.props&&this.handleNewsRes()}},{key:"isValidated",value:function(){var e=this.props.status,a=e.variables,t=e.restricciones,n=a.filter(function(e){return""!==e.descripcion}),r=t.filter(function(e){return""!==e.descripcion});return n.length>1&r.length>0?(this.props.lastStep(1),this.setState({faltaDescrip:""}),!0):(n<2?this.setState({faltaDescrip:"Dale no seas Guampa poneme como minimo 2 variables"}):this.setState({faltaDescrip:"Poneme Alguna Restri pue "}),!1)}},{key:"render",value:function(){var e=this,a=this.props.status.variables,t=this.props.status.restricciones,n=a.map(function(a,t){return r.a.createElement(N.a,{className:"mt-1",id:"XTT"+t,key:"VTD"+t},r.a.createElement(R.a,{addonType:"prepend"},r.a.createElement(k.a,{name:"xi",id:"variable"},"X"+t)),r.a.createElement(V.a,{name:t,placeholder:"Descripcion de la Variable","aria-label":"Descripcion","aria-describedby":"variable",onChange:e.handlerInputVar,value:a.descripcion}),r.a.createElement(j.a,{trigger:"focus hover",placement:"auto",target:"XTT"+t},r.a.createElement(O.a,null,"Aqui debes ingresar el significado de la Variable.")))}),l=t.map(function(a,t){return r.a.createElement(N.a,{className:"mt-1",id:"TTR"+t,key:"RTD"+t},r.a.createElement(R.a,{addonType:"prepend"},r.a.createElement(k.a,{name:"ri",id:"restriccion"},"R"+t)),r.a.createElement(V.a,{name:t,placeholder:"Descripcion de la Restriccion","aria-label":"Descripcion","aria-describedby":"restriccion",onChange:e.handlerInputRes,value:a.descripcion}),r.a.createElement(j.a,{trigger:"focus hover",placement:"auto",target:"TTR"+t},r.a.createElement(O.a,null,"Aqui, debes ingresar el significado de la restriccion.")))}),i=r.a.createElement(d.a,{id:"ButtUtil"},r.a.createElement(m.a,{outline:!0,onClick:function(){e.props.handleMethod("graph"),e.handleNewsVar("graph")},active:"graph"===this.props.status.method,color:"primary"},"GRAFICO"),r.a.createElement(m.a,{outline:!0,onClick:function(){e.props.handleMethod("simplex"),e.handleNewsVar("simplex")},active:"simplex"===this.props.status.method,color:"primary"},"SIMPLEX")),u=r.a.createElement(d.a,null,r.a.createElement(m.a,{outline:!0,onClick:function(){return e.props.handleObjective("max")},active:"max"===this.props.status.objective,color:"primary"},"Maximizar"),r.a.createElement(m.a,{outline:!0,onClick:function(){return e.props.handleObjective("min")},active:"min"===this.props.status.objective,color:"primary"},"Minimizar"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Comenzamos configurando nuestro Modelo:"),r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement(o.a,null,r.a.createElement(S.a,{outline:!0,color:"secondary",id:"CardUtil",className:"mt-2 mx-auto"},r.a.createElement(D.a,null,"Programacion Entera:"),r.a.createElement(I.a,null,r.a.createElement(m.a,{outline:!0,color:this.props.status.integer?"success":"danger",onClick:function(){return e.props.toggleInteger()}},this.props.status.integer?"Activado":"Desactivado")))),r.a.createElement(o.a,null,r.a.createElement(S.a,{outline:!0,color:"secondary",id:"CardModel",className:"mt-2 mx-auto"},r.a.createElement(D.a,null,"Modelo de Ejemplo:"),r.a.createElement(I.a,null,r.a.createElement(m.a,{color:"warning",outline:!0,onClick:this.props.loadExampleModel},"Cargar"))))),r.a.createElement(s.a,null,r.a.createElement(o.a,null,r.a.createElement(j.a,{placement:"top",target:"CardUtil"},r.a.createElement(O.a,null,"Aqui debes seleccionar el metodo de Calculo y Visualizacion de los Resultados")),r.a.createElement(S.a,{outline:!0,color:"secondary",id:"CardUtil",className:"mt-3 mx-auto"},r.a.createElement(D.a,null,"Metodo a Utilizar:"),r.a.createElement(I.a,null,i))),r.a.createElement(o.a,null,r.a.createElement(j.a,{placement:"top",target:"CardOpt"},r.a.createElement(O.a,null,"Y aqui, el tipo de Optimizacion que deseas realizar, si deseas Maximizar tu funcion o Minimizarla")),r.a.createElement(S.a,{outline:!0,color:"secondary",id:"CardOpt",className:"mt-3 mx-auto"},r.a.createElement(D.a,null,"Tipo de Optimizacion:"),r.a.createElement(I.a,null,u)))),r.a.createElement(s.a,null,r.a.createElement(S.a,{outline:!0,color:"secondary",id:"CardVariables",className:"w-100 mt-3 mx-auto"},r.a.createElement(D.a,null,r.a.createElement(T.a,{className:"text-left"},r.a.createElement("h4",null,"Variables:"))),r.a.createElement(I.a,null,n))),r.a.createElement(s.a,null,r.a.createElement(S.a,{outline:!0,color:"secondary",id:"CardRestri",className:"w-100 mt-3 mx-auto"},r.a.createElement(D.a,null,r.a.createElement(T.a,{className:"text-left"},r.a.createElement("h4",null,"Restricciones:"))),r.a.createElement(I.a,null,l))),""!==this.state.faltaDescrip&&r.a.createElement(s.a,{className:"mt-3"},r.a.createElement(w.a,{className:"mx-auto",color:"danger"},this.state.faltaDescrip))))}}]),a}(r.a.Component),P=t(69),q=t(53),A=t(37),z=t(64),F=t(70),B=function(e){var a=e.restriccion.coeficientes;if(a.length!==e.cantVariables){var t=e.cantVariables-a.length;if(t>0)for(var n=0;n<t;n++)a.push("");else a.splice(e.cantVariables)}var l=e.restriccion.eq,i=r.a.createElement(d.a,{className:"mx-1",key:"Eq"+e.restriccion.ri},r.a.createElement(m.a,{key:"B<s"+e.restriccion.ri,name:"eq",onClick:function(a){e.handleCoefRes(a,e.restriccion.ri),l="<="},color:"<="===l?"primary":"secondary",value:"<="},"<="),r.a.createElement(m.a,{key:"B="+e.restriccion.ri,name:"eq",disabled:!0,onClick:function(a){e.handleCoefRes(a,e.restriccion.ri),l="="},color:"="===l?"primary":"secondary",value:"="},"="),r.a.createElement(m.a,{key:"B>"+e.restriccion.ri,name:"eq",onClick:function(a){e.handleCoefRes(a,e.restriccion.ri),l=">="},color:">="===l?"primary":"secondary",value:">="},">=")),c=a.map(function(t,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{key:"Ci"+e.restriccion.ri+"r"+n,type:"number",name:n,placeholder:"Coefiente",className:"InputCoeficiente",onChange:function(a){e.handleCoefRes(a,e.restriccion.ri)},value:t}),r.a.createElement(R.a,{key:"IADD"+e.restriccion.ri+"r"+n,addonType:"append"},r.a.createElement(k.a,{key:"r"+e.restriccion.ri+"r"+n},"X"+n)),n<a.length-1&&r.a.createElement(k.a,{key:"+"+e.restriccion.ri+"r"+n},"+"))});return r.a.createElement(S.a,{key:"CR"+e.restriccion.ri,id:"CR"+e.restriccion.ri},r.a.createElement(F.a,{key:"TTCR"+e.restriccion.ri,placement:"auto",target:"CR"+e.restriccion.ri},"Aqui debes ingresar los coeficiente de "+e.restriccion.descripcion),r.a.createElement(D.a,{className:"p-0 m-0"},r.a.createElement(T.a,null,"R"+e.restriccion.ri+":"+e.restriccion.descripcion)),r.a.createElement(I.a,{className:"p-0 my-1 mx-auto"},r.a.createElement(N.a,{key:"RT"+e.restriccion.ri},c,i,r.a.createElement(V.a,{key:"C"+e.restriccion.ri+"r"+a.length,type:"number",name:"derecha",placeholder:"Coe",className:"InputCoeficiente","aria-label":"Coe","aria-describedby":"restriccion",onChange:function(a){e.handleCoefRes(a,e.restriccion.ri)},value:e.restriccion.derecha}))))},U=function(e){var a=e.variables,t=a.filter(function(e){return""!==e.descripcion}).map(function(t,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{key:"TTV"+n,placement:"auto",target:"IF"+n},"Aqui debes ingresar el coeficiente de "+t.descripcion),r.a.createElement(V.a,{key:"IF"+n,id:"IF"+n,type:"number",name:t.xi,placeholder:"Coef",className:"InputCoeficiente","aria-label":"Coeficiente","aria-describedby":"coe",onChange:function(a){return e.handleCoefVar(a)},value:t.coeficiente}),r.a.createElement(R.a,{key:"ADDIF"+n,addonType:"append"},r.a.createElement(k.a,{key:"IFD"+n},"X"+t.xi)),n<a.filter(function(e){return""!==e.descripcion}).length-1&&r.a.createElement(k.a,{key:"+IF"+n},"+"))});return r.a.createElement(N.a,{key:"INPUTFUNCIONAL"},t,r.a.createElement(k.a,{className:"mx-1",key:"IFOPT"}," => "+e.objective.toUpperCase()))},L=function(e){function a(e){var t;return Object(E.a)(this,a),(t=Object(b.a)(this,Object(g.a)(a).call(this,e))).handleCoefVar=function(e){var a=e.target,n=a.value,r=a.name;if(n){var l=t.props.status.variables;l[r].coeficiente=parseInt(n),t.props.handleVariables(l),console.log(t.props.status.variables)}},t.handleCoefRes=function(e,a){var n=e.target,r=n.name,l=n.value,i=t.props.status.restricciones;switch(console.log("En la Res:"+a+", en el campo:"+r+",con el valor:"+l),r){case"derecha":i[a].derecha=parseInt(l);break;case"eq":i[a].eq=l;break;default:i[a].coeficientes[r]=parseInt(l)}console.log(i),t.props.handleRestricciones(i)},t.listDescriptionsVarItems=function(e){return e.filter(function(e){return""!==e.descripcion}).map(function(e){return r.a.createElement(P.a,{key:"DLGIV"+e.xi,className:"justify-content-between"},r.a.createElement(q.a,null,"X"+e.xi)," "+e.descripcion)})},t.listDescriptionsResItems=function(e){return e.filter(function(e){return""!==e.descripcion}).map(function(e){return r.a.createElement(P.a,{key:"DLGIR"+e.ri,className:"justify-content-between"},r.a.createElement(q.a,null,"R"+e.ri)," "+e.descripcion)})},t.state={faltaCoe:"",references:!1},t}return Object(v.a)(a,e),Object(f.a)(a,[{key:"isValidated",value:function(){return this.props.status.variables.filter(function(e){return""!==e.descripcion}).every(function(e){return""!==e.coeficiente})?(this.props.lastStep(2),this.setState({faltaCoe:""}),!0):(this.setState({faltaCoe:"Rellename pue todos los Coeficientes no seas Guampa"}),!1)}},{key:"render",value:function(){var e=this,a=this.props.status.variables,t=this.props.status.restricciones,n=a.filter(function(e){return""!==e.descripcion}).length,l=t.filter(function(e){return""!==e.descripcion}).map(function(a,t){return r.a.createElement(B,{className:"mt-1",key:"R"+t,handleCoefRes:e.handleCoefRes,cantVariables:n,restriccion:a})});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Cargamos los datos de nuestro Modelo:"),r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement(S.a,{outline:!0,color:"secondary",className:"w-100 mt-3"},r.a.createElement(D.a,null,r.a.createElement(s.a,null,r.a.createElement(o.a,{className:"text-left"},r.a.createElement(T.a,null,r.a.createElement("h4",null,"Referencias:"))),r.a.createElement(o.a,null,r.a.createElement(m.a,{outline:!0,size:"sm",onClick:function(){return e.setState({references:!e.state.references})},color:this.state.references?"danger":"success"},this.state.references?"Ocultar Referencias":"Ver Referencias")))),r.a.createElement(A.a,{isOpen:this.state.references},r.a.createElement(I.a,null,r.a.createElement("h5",{className:"text-left"},"Variables:"),r.a.createElement(z.a,null,this.listDescriptionsVarItems(a)),r.a.createElement("h5",{className:"text-left"},"Restricciones:"),r.a.createElement(z.a,null,this.listDescriptionsResItems(t)))))),r.a.createElement(s.a,null,r.a.createElement(S.a,{outline:!0,color:"secondary",className:"w-100 mt-3"},r.a.createElement(D.a,null,r.a.createElement(T.a,{className:"text-left"},r.a.createElement("h4",null,"Funcion Objetivo:"))),r.a.createElement(I.a,{className:"mx-auto"},r.a.createElement(U,{variables:a,handleCoefVar:this.handleCoefVar,objective:this.props.status.objective})))),r.a.createElement(s.a,null,r.a.createElement(S.a,{outline:!0,color:"secondary",className:"w-100 mt-3"},r.a.createElement(D.a,null,r.a.createElement(T.a,{className:"text-left"},r.a.createElement("h4",null,"Restricciones:"))),r.a.createElement(I.a,null,l))),""!==this.state.faltaCoe&&r.a.createElement(s.a,{className:"mt-3"},r.a.createElement(w.a,{className:"mx-auto",color:"danger"},this.state.faltaCoe))))}}]),a}(r.a.Component),X=t(82),G=t(63),_=t(58),J=t(56),W=t(79),Y=t.n(W),Z=function(e){var a=e.restricciones,t=e.variables,n=e.objective,r=e.integer;t=t.filter(function(e){return""!==e.descripcion}),a=a.filter(function(e){return""!==e.descripcion});var l={optimize:"coeficiente",opType:"",constraints:{},variables:{},ints:{}};return l.opType=n,r&&t.forEach(function(e){return l.ints[e.xi]=1}),t.forEach(function(e){var t={};t.coeficiente=e.coeficiente,a.forEach(function(a){return t["r"+a.ri]=a.coeficientes[e.xi]}),console.log(t),l.variables[e.xi]=t}),a.forEach(function(e){if(">="===e.eq){var a={};a.min=e.derecha,l.constraints["r"+e.ri]=a}else{var t={};t.max=e.derecha,l.constraints["r"+e.ri]=t}}),l},$=function(e){function a(e){var t;return Object(E.a)(this,a),(t=Object(b.a)(this,Object(g.a)(a).call(this,e))).calculateResults=function(){var e=Z(t.props.status);console.log(e);var a=Y.a.Solve(e,!1,!0);console.log(a),t.setState({result:a})},t.tablaDeRecursosFoot=function(e,a){var n=t.props.status.restricciones.filter(function(e){return""!==e.descripcion}).map(function(t){return r.a.createElement("tr",{key:"TdeV"+a+"R"+t.ri},r.a.createElement("td",null,"R"+t.ri),r.a.createElement("td",null,e*t.coeficientes[a]),r.a.createElement("td",null,t.derecha-e*t.coeficientes[a]))});return r.a.createElement(G.a,{size:"sm",responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Recurso"),r.a.createElement("th",null,"Usado"),r.a.createElement("th",null,"Diferencia"))),r.a.createElement("tbody",null,n))},t.mapperAnalisisTable=function(e){var a=[],t=Object.entries(e.solutionSet),n=e._tableau.matrix,r=e._tableau.varIndexByCol,l=e._tableau.variablesPerIndex,i=e._tableau.variablesPerIndex.filter(function(e){return!e.isSlack}),c=n[0].length-1-i.filter(function(a){return!Object.keys(e.solutionSet).includes(a.id)}).length;return a.push({name:"Optimo",item:"",value:e.evaluation}),t.forEach(function(e){var t=Object(X.a)(e,2),n=t[0],r=t[1];return a.push({name:"Producir",item:"X"+n,value:r})}),t.length<n.length-1&&console.log("hola"),n[0].slice(1).forEach(function(e,t){var n={name:"",item:"",value:""};t<c?(n.name="Valor Marginal",n.item="R"+r[t+1],n.value=Math.abs(e)):(n.name="Costo de Oportunidad",n.item="X"+l[r[t+1]].id,n.value=Math.abs(e)),a.push(n)}),a},t.state={result:!1,resultDual:!1,details:!1},t}return Object(v.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){this.props.status.result&&(this.calculateResults(),console.log(this.state.result),console.log(this.state.resultDual))}},{key:"componentDidUpdate",value:function(e){this.props!==e&&this.props.status.result&&this.calculateResults()}},{key:"render",value:function(){var e,a,t,n=this,l=this.state.result,i=this.props.status.variables;if(l.feasible){var c=this.mapperAnalisisTable(l).map(function(e,a){return r.a.createElement("tr",{key:"T-A-"+a},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.item),r.a.createElement("td",null,e.value))});e=i.filter(function(e){return""!==e.descripcion}).map(function(e){return r.a.createElement(S.a,{key:"Card"+e.xi,outline:!0,color:"secondary",className:"w-100 mt-3 mx-auto"},r.a.createElement(D.a,null,r.a.createElement(T.a,null,"Variable: X"+e.xi)),r.a.createElement(I.a,null,r.a.createElement(s.a,null,r.a.createElement(_.a,null,l.solutionSet[e.xi]?"Se recomienda producir "+l.solutionSet[e.xi]+" unidades":"No se recomienda la produccion"," de "+e.descripcion)),r.a.createElement(s.a,null)),r.a.createElement(J.a,null,r.a.createElement(_.a,null,"Tabla de Recursos:"),l.solutionSet[e.xi]?n.tablaDeRecursosFoot(l.solutionSet[e.xi],e.xi):"Sin Consumo de Recursos"))}),t=r.a.createElement(S.a,{outline:!0,color:"secondary",className:"w-100 mt-3 mx-auto"},r.a.createElement(D.a,null,r.a.createElement(T.a,null,r.a.createElement("h4",null,"Tablero de Analisis"))),r.a.createElement(I.a,null,r.a.createElement(G.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Elemento"),r.a.createElement("th",null,"Valor"))),r.a.createElement("tbody",null,c)))),a=r.a.createElement(S.a,{outline:!0,color:"secondary",className:"w-100 mt-3 mx-auto"},r.a.createElement(D.a,null,r.a.createElement(s.a,null,r.a.createElement(o.a,{className:"text-left"},r.a.createElement(T.a,null,r.a.createElement("h5",null,"Detalle de Variables Y Recursos:"))),r.a.createElement(o.a,null,r.a.createElement(m.a,{outline:!0,size:"sm",onClick:function(){return n.setState({details:!n.state.details})},color:this.state.details?"danger":"success"},this.state.details?"Ocultar Referencias":"Ver Detalles")))),r.a.createElement(A.a,{isOpen:this.state.details},r.a.createElement(I.a,null,e)))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{outline:!0,color:"info",className:"w-100 mt-3 mx-auto"},r.a.createElement(D.a,null,r.a.createElement(T.a,null,r.a.createElement("h3",null,l.feasible?"El resultado optimo de la funcion objetivo es: "+l.evaluation:"Solucion No Factible"))),l.feasible&&r.a.createElement(I.a,null,t,a)))}}]),a}(r.a.Component),H=t(80),K=t.n(H),Q=function(e){function a(e){var t;return Object(E.a)(this,a),(t=Object(b.a)(this,Object(g.a)(a).call(this,e))).handleRestricciones=function(e){t.setState({restricciones:e})},t.handleVariables=function(e){t.setState({variables:e})},t.handleMethod=function(e){t.setState({method:e})},t.handleObjective=function(e){t.setState({objective:e})},t.toggleInteger=function(){return t.setState({integer:!t.state.integer})},t.handleResult=function(e){t.setState({result:e})},t.lastStep=function(e){2===e?t.setState({result:!0,barProg:100}):t.setState({result:!1,barProg:66})},t.finishButtonClick=function(e){console.log("En algun momento va a imprimir resultados")},t.loadExampleModel=function(){t.toggleInteger(),t.setState({variables:[{xi:0,descripcion:"Pantalones (U/dia)",coeficiente:3},{xi:1,descripcion:"Camisas (U/Dia)",coeficiente:1}],restricciones:[{ri:0,descripcion:"Mano de Obra (hs/Dia)",coeficientes:[2,1],eq:"<=",derecha:8},{ri:1,descripcion:"Tela (m2)",coeficientes:[3,1],eq:"<=",derecha:30}],objective:"max"})},t.state={variables:[{xi:0,descripcion:"",coeficiente:""},{xi:1,descripcion:"",coeficiente:""}],restricciones:[{ri:0,descripcion:"",coeficientes:[],eq:">=",derecha:""}],method:"graph",objective:"max",integer:!1,result:!1,barProg:33},t}return Object(v.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=[{stepName:"Configuracion del Modelo",component:M,stepProps:{status:this.state,loadExampleModel:this.loadExampleModel,handleMethod:this.handleMethod,handleVariables:this.handleVariables,handleRestricciones:this.handleRestricciones,lastStep:this.lastStep,toggleInteger:this.toggleInteger,handleObjective:this.handleObjective}},{stepName:"Detalles del Modelo",component:L,stepProps:{status:this.state,handleVariables:this.handleVariables,lastStep:this.lastStep,handleRestricciones:this.handleRestricciones}},{stepName:"Presentacion de los Resultados",component:$,stepProps:{status:this.state,handleResult:this.handleResult,lastStep:this.lastStep}}];return r.a.createElement(c.a,{fluid:!0,className:"App"},r.a.createElement(s.a,{className:""},r.a.createElement(o.a,{xs:12,md:6,className:"mx-auto"},r.a.createElement("img",{src:K.a,className:"App-logo",alt:"logo",height:"200"}),r.a.createElement(y.a,{animated:!0,color:"blue",value:this.state.barProg}))),r.a.createElement(s.a,null,r.a.createElement(o.a,{xs:12,md:6,className:"my-4 mx-auto"},r.a.createElement(C.a,{steps:e,title:"Programacion Lineal",progressbar:!0,headerTextCenter:!0,validate:!0,color:"blue",previousButtonText:"Volver",nextButtonText:"Siguiente",finishButtonText:"Imprimir Resultados",finishButtonClick:this.finishButtonClick}))))}}]),a}(r.a.Component),ee=function(){return r.a.createElement(Q,null)},ae=function(){return r.a.createElement(c.a,{fluid:!0,className:"App"},r.a.createElement(s.a,{className:""},r.a.createElement(o.a,{xs:12,md:6,className:"mx-auto my-5"},r.a.createElement(u.a,{className:""},r.a.createElement(s.a,null,r.a.createElement("h2",null,"La PL No-Lineal recien estara disponible en el 2020.")),r.a.createElement(s.a,null,r.a.createElement(p.b,{to:"/"},r.a.createElement(m.a,{className:"fluid-left"},"Volver")))))))},te=function(){return r.a.createElement(c.a,{fluid:!0,className:"App"},r.a.createElement(s.a,{className:""},r.a.createElement(o.a,{xs:12,md:6,className:"mx-auto my-5"},r.a.createElement(u.a,null,r.a.createElement(s.a,null,r.a.createElement("h2",{className:"mx-auto"},"Bienvenido!!!! Seleccione una opcion.")),r.a.createElement(s.a,{className:"mt-2"},r.a.createElement(o.a,null,r.a.createElement(p.b,{to:"/linealProg"},r.a.createElement(m.a,{color:"success"},"Programacion Lineal "))),r.a.createElement(o.a,null,r.a.createElement(p.b,{to:"/noLinealProg"},r.a.createElement(m.a,{disabled:!0,color:"success"},"Programacion No Lineal ")))),r.a.createElement(s.a,{className:"mt-3"},r.a.createElement("h5",null,"Colaboradores:")),r.a.createElement(s.a,null,r.a.createElement(d.a,{className:"mx-auto"},r.a.createElement(m.a,{outline:!0,tag:"a",href:"https://github.com/EdgarCardozo"},"CE"),r.a.createElement(m.a,{outline:!0,tag:"a",href:"https://github.com/juliandiazok"},"DJ"),r.a.createElement(m.a,{outline:!0,tag:"a",href:"https://github.com/santisolis97"},"SS"),r.a.createElement(m.a,{outline:!0,tag:"a",href:"https://github.com/ianv97"},"VI"),r.a.createElement(m.a,{outline:!0,tag:"a",href:"https://github.com/santinozaracho"},"ZS")))))))},ne=function(){return r.a.createElement(p.a,{basename:"/optimizer-pl-io"},r.a.createElement(h.a,{exact:!0,path:"/",component:te}),r.a.createElement(h.a,{path:"/linealProg",component:ee}),r.a.createElement(h.a,{path:"/noLinealProg/",component:ae}))};t(117),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},80:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},83:function(e,a,t){e.exports=t(118)},88:function(e,a,t){},89:function(e,a,t){}},[[83,1,2]]]);
//# sourceMappingURL=main.420ed72b.chunk.js.map