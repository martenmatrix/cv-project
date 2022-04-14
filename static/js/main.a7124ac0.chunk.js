(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(10),r=n.n(i),s=(n(15),n(3)),d=n(4),l=n(6),o=n(5),u=n(9),h=n(7),j=n(2),p=n(0),b=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(j.a)(a)),a}return Object(d.a)(n,[{key:"handleChange",value:function(e){var t=e.target.name,n=e.target.value;this.props.setGeneral(t,n)}},{key:"render",value:function(){var e=this.props.currentState,t=e.firstName,n=e.lastName,a=e.email,c=e.phone,i=e.street,r=e.number,s=e.city,d=e.state,l=e.zip,o=e.country;return Object(p.jsx)("div",{className:"general",children:Object(p.jsxs)("div",{className:"general-input",children:[Object(p.jsx)("input",{type:"text",onChange:this.handleChange,value:t,name:"firstName",placeholder:"First Name"}),Object(p.jsx)("input",{type:"text",onChange:this.handleChange,value:n,name:"lastName",placeholder:"Last Name"}),Object(p.jsx)("input",{type:"text",onChange:this.handleChange,value:a,name:"email",placeholder:"Email"}),Object(p.jsx)("input",{type:"text",onChange:this.handleChange,value:c,name:"phone",placeholder:"Phone"}),Object(p.jsxs)("div",{className:"address",children:[Object(p.jsx)("input",{type:"text",onChange:this.handleChange,value:i,name:"street",placeholder:"Street"}),Object(p.jsx)("input",{type:"text",onChange:this.handleChange,value:r,name:"number",placeholder:"Number"}),Object(p.jsx)("input",{type:"text",onChange:this.handleChange,value:s,name:"city",placeholder:"City"}),Object(p.jsx)("input",{type:"text",onChange:this.handleChange,value:d,name:"state",placeholder:"State"}),Object(p.jsx)("input",{type:"text",onChange:this.handleChange,value:l,name:"zip",placeholder:"Zip"}),Object(p.jsx)("input",{type:"text",onChange:this.handleChange,value:o,name:"country",placeholder:"Country"})]})]})})}}]),n}(a.Component),x=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(j.a)(a)),a}return Object(d.a)(n,[{key:"handleChange",value:function(e){var t=e.target.name,n=e.target.value;this.props.setEducationValue(this.props.data.id,t,n)}},{key:"render",value:function(){var e=this.props.data,t=e.id,n=e.school,a=e.education,c=e.dateStart,i=e.dateEnd,r=this.props.removeEducation;return Object(p.jsxs)("div",{className:"education",children:[Object(p.jsxs)("div",{className:"education-input",children:[Object(p.jsx)("input",{type:"text",value:n,onChange:this.handleChange,name:"school",placeholder:"School"}),Object(p.jsx)("input",{type:"text",value:a,onChange:this.handleChange,name:"education",placeholder:"Education"}),Object(p.jsxs)("div",{className:"date",children:[Object(p.jsx)("input",{type:"text",value:c,onChange:this.handleChange,name:"dateStart",placeholder:"Start"}),Object(p.jsx)("input",{type:"text",value:i,onChange:this.handleChange,name:"dateEnd",placeholder:"End"})]})]}),Object(p.jsx)("button",{onClick:function(){return r(t)},children:"Delete"})]})}}]),n}(a.Component),v=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(j.a)(a)),a}return Object(d.a)(n,[{key:"handleChange",value:function(e){var t=e.target.name,n=e.target.value;this.props.setExperienceValue(this.props.data.id,t,n)}},{key:"render",value:function(){var e=this.props.data,t=e.id,n=e.company,a=e.position,c=e.dateStart,i=e.dateEnd,r=e.description,s=this.props.removeExperience;return Object(p.jsxs)("div",{className:"experience",children:[Object(p.jsxs)("div",{className:"experience-input",children:[Object(p.jsx)("input",{type:"text",onChange:this.handleChange,value:n,name:"company",placeholder:"Company"}),Object(p.jsx)("input",{type:"text",onChange:this.handleChange,value:a,name:"position",placeholder:"Position"}),Object(p.jsxs)("div",{className:"date",children:[Object(p.jsx)("input",{type:"text",onChange:this.handleChange,value:c,name:"dateStart",placeholder:"Start"}),Object(p.jsx)("input",{type:"text",onChange:this.handleChange,value:i,name:"dateEnd",placeholder:"End"})]}),Object(p.jsx)("textarea",{name:"description",onChange:this.handleChange,value:r,placeholder:"Description"})]}),Object(p.jsx)("button",{onClick:function(){return s(t)},children:"Delete"})]})}}]),n}(a.Component),m=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.currentState,n=e.setGeneral,a=e.setEducationValue,c=e.addEducation,i=e.removeEducation,r=e.addExperience,s=e.removeExperience,d=e.setExperienceValue;return Object(p.jsxs)("div",{className:"cv-generator-input",children:[Object(p.jsx)("h2",{children:"General Info"}),Object(p.jsx)(b,{currentState:t,setGeneral:n}),Object(p.jsx)("h2",{children:"Education"}),t.education.map((function(e,t){return Object(p.jsx)(x,{data:e,removeEducation:i,setEducationValue:a},t)})),Object(p.jsx)("button",{onClick:c,children:"Add"}),Object(p.jsx)("h2",{children:"Experience"}),t.experience.map((function(e,t){return Object(p.jsx)(v,{data:e,removeExperience:s,setExperienceValue:d},t)})),Object(p.jsx)("button",{onClick:r,children:"Add"})]})}}]),n}(a.Component),O=m;n(17);function y(e){return Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)("div",{className:"name",children:e.name}),Object(p.jsxs)("div",{className:"contact",children:[Object(p.jsx)("div",{className:"email",children:e.email}),Object(p.jsx)("div",{className:"phone",children:e.phone})]})]})}function E(e){return Object(p.jsxs)("div",{className:"address",children:[Object(p.jsx)("div",{className:"streetNumber",children:"".concat(e.street," ").concat(e.number)}),Object(p.jsx)("div",{className:"zipCountry",children:"".concat(e.zip," ").concat(e.city)}),Object(p.jsx)("div",{className:"state",children:e.state}),Object(p.jsx)("div",{className:"country",children:e.country})]})}var f=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.data,t=e.firstName,n=e.lastName,a=e.email,c=e.phone,i=e.street,r=e.number,s=e.city,d=e.state,l=e.zip,o=e.country;return Object(p.jsxs)("div",{className:"general",children:[Object(p.jsx)(y,{name:"".concat(t," ").concat(n),email:a,phone:c}),Object(p.jsx)(E,{street:i,number:r,city:s,state:d,zip:l,country:o})]})}}]),n}(a.Component);function C(e){var t=e.education,n=t.school,a=t.education,c=t.dateStart,i=t.dateEnd;return Object(p.jsxs)("div",{className:"education-section",children:[Object(p.jsx)("div",{className:"education",children:a}),Object(p.jsx)("div",{className:"school",children:n}),Object(p.jsx)("div",{className:"date",children:c+(c&&i?"-":"")+i})]})}function g(e){var t=e.experience,n=t.company,a=t.position,c=t.dateStart,i=t.dateEnd,r=t.description;return Object(p.jsxs)("div",{className:"experience-section",children:[Object(p.jsx)("div",{className:"company",children:n}),Object(p.jsx)("div",{className:"position",children:a}),Object(p.jsx)("div",{className:"date",children:c+(c&&i?"-":"")+i}),Object(p.jsx)("div",{className:"description",children:r})]})}var N=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.data,t=e.education,n=e.experience;return Object(p.jsx)("div",{className:"cv-generator-output",children:Object(p.jsxs)("div",{className:"cv-output",children:[Object(p.jsxs)("div",{className:"general-output",children:[Object(p.jsx)("h2",{children:"General"}),Object(p.jsx)(f,{data:e})]}),Object(p.jsxs)("div",{className:"education-output",children:[Object(p.jsx)("h2",{children:"Education"}),Object(p.jsx)("div",{className:"education",children:t.map((function(e,t){return Object(p.jsx)(C,{education:e},t)}))})]}),Object(p.jsxs)("div",{className:"experience-output",children:[Object(p.jsx)("h2",{children:"Experience"}),n.map((function(e,t){return Object(p.jsx)(g,{experience:e},t)}))]})]})})}}]),n}(a.Component),k=N,S=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={firstName:"",lastName:"",email:"",phone:"",street:"",number:"",city:"",state:"",zip:"",country:"",lastIndex:0,education:[],experience:[]},e.setGeneral=e.setGeneral.bind(Object(j.a)(e)),e.addEducation=e.addEducation.bind(Object(j.a)(e)),e.setEducationValue=e.setEducationValue.bind(Object(j.a)(e)),e.removeEducation=e.removeEducation.bind(Object(j.a)(e)),e.addExperience=e.addExperience.bind(Object(j.a)(e)),e.setExperienceValue=e.setExperienceValue.bind(Object(j.a)(e)),e.removeExperience=e.removeExperience.bind(Object(j.a)(e)),e}return Object(d.a)(n,[{key:"addEntry",value:function(e,t){this.setState((function(n){var a,c=n.lastIndex+1;t.id=c;var i=n[e].concat(t);return a={},Object(h.a)(a,e,i),Object(h.a)(a,"lastIndex",c),a}))}},{key:"removeEntry",value:function(e,t){this.setState((function(n){var a=n[e].filter((function(e){return e.id!==t}));return Object(h.a)({},e,a)}))}},{key:"setValue",value:function(e,t,n,a){this.setState((function(c){var i=c[e].map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},Object(h.a)({},n,a)):e}));return Object(h.a)({},e,i)}))}},{key:"setGeneral",value:function(e,t){this.setState(Object(h.a)({},e,t))}},{key:"addEducation",value:function(){this.addEntry("education",{school:"",education:"",dateStart:"",dateEnd:""})}},{key:"removeEducation",value:function(e){this.removeEntry("education",e)}},{key:"setEducationValue",value:function(e,t,n){this.setValue("education",e,t,n)}},{key:"addExperience",value:function(){this.addEntry("experience",{company:"",position:"",dateStart:"",dateEnd:"",description:""})}},{key:"removeExperience",value:function(e){this.removeEntry("experience",e)}},{key:"setExperienceValue",value:function(e,t,n){this.setValue("experience",e,t,n)}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"cv-generator",children:[Object(p.jsx)(O,{currentState:this.state,setGeneral:this.setGeneral,addEducation:this.addEducation,setEducationValue:this.setEducationValue,removeEducation:this.removeEducation,addExperience:this.addExperience,setExperienceValue:this.setExperienceValue,removeExperience:this.removeExperience}),Object(p.jsx)(k,{data:this.state})]})}}]),n}(a.Component);n(18);function V(){return Object(p.jsx)("div",{className:"navbar",children:Object(p.jsx)("h1",{className:"title",children:"CV Generator"})})}var G=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={information:{name:"",email:"peter"}},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(V,{}),Object(p.jsx)(S,{})]})}}]),n}(a.Component);r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(G,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.a7124ac0.chunk.js.map