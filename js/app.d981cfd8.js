(()=>{"use strict";var t={375:(t,e,s)=>{var a=s(751),o=s(641);const i={id:"app"};function n(t,e,s,a,n,r){const l=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",i,[(0,o.bF)(l)])}const r={name:"App"};var l=s(262);const c=(0,l.A)(r,[["render",n]]),d=c;var k=s(220),u=s(33);const m=t=>((0,o.Qi)("data-v-44d4cad8"),t=t(),(0,o.jt)(),t),p={class:"container"},h=m((()=>(0,o.Lk)("h2",null,"Список задач",-1))),f={class:"taskList"},v={class:"taskContent"},b={class:"taskTitle"},L={class:"taskDescription"},T={class:"taskActions"},I=["onClick"];function g(t,e,s,a,i,n){const r=(0,o.g2)("router-link"),l=(0,o.g2)("delete-modal");return(0,o.uX)(),(0,o.CE)("div",p,[h,(0,o.Lk)("ul",f,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.tasks,(t=>((0,o.uX)(),(0,o.CE)("li",{key:t.id,class:"taskItem"},[(0,o.Lk)("div",v,[(0,o.Lk)("h3",b,(0,u.v_)(t.title),1),(0,o.Lk)("p",L,(0,u.v_)(t.description),1)]),(0,o.Lk)("div",T,[(0,o.Lk)("button",{onClick:e=>n.showDeleteModal(t.id),class:"deleteButton"},"Удалить",8,I),(0,o.bF)(r,{to:`/edit/${t.id}`,class:"editLink"},{default:(0,o.k6)((()=>[(0,o.eW)("Редактировать")])),_:2},1032,["to"])])])))),128))]),(0,o.bF)(r,{to:"/create",class:"createLink"},{default:(0,o.k6)((()=>[(0,o.eW)("Создать задачу")])),_:1}),(0,o.bF)(l,{show:i.showModal,onConfirm:n.confirmDelete,onCancel:n.cancelDelete},null,8,["show","onConfirm","onCancel"])])}const w=t=>((0,o.Qi)("data-v-69268a68"),t=t(),(0,o.jt)(),t),y={key:0,class:"modal"},D={class:"modalContent"},C=w((()=>(0,o.Lk)("p",null,"Вы уверены, что хотите удалить эту задачу?",-1))),O={class:"buttons"};function _(t,e,s,a,i,n){return s.show?((0,o.uX)(),(0,o.CE)("div",y,[(0,o.Lk)("div",D,[C,(0,o.Lk)("div",O,[(0,o.Lk)("button",{class:"confirmButton",onClick:e[0]||(e[0]=(...t)=>n.confirmDelete&&n.confirmDelete(...t))},"Да"),(0,o.Lk)("button",{class:"cancelButton",onClick:e[1]||(e[1]=(...t)=>n.cancelDelete&&n.cancelDelete(...t))},"Отмена")])])])):(0,o.Q3)("",!0)}const $={name:"DeleteModal",props:{show:Boolean},methods:{confirmDelete(){this.$emit("confirm")},cancelDelete(){this.$emit("cancel")}}},S=(0,l.A)($,[["render",_],["__scopeId","data-v-69268a68"]]),E=S,j={name:"TaskList",components:{DeleteModal:E},computed:{tasks(){return this.$store.state.tasks}},data(){return{showModal:!1,taskToDeleteId:null}},methods:{showDeleteModal(t){this.taskToDeleteId=t,this.showModal=!0},confirmDelete(){this.$store.dispatch("deleteTask",this.taskToDeleteId),this.showModal=!1},cancelDelete(){this.showModal=!1}}},M=(0,l.A)(j,[["render",g],["__scopeId","data-v-44d4cad8"]]),x=M,B=t=>((0,o.Qi)("data-v-4f81ae36"),t=t(),(0,o.jt)(),t),F={class:"container"},A={class:"title"},J={class:"formGroup"},X=B((()=>(0,o.Lk)("label",{for:"title",class:"formLabel"},"Заголовок:",-1))),N={class:"formGroup"},Q=B((()=>(0,o.Lk)("label",{for:"description",class:"formLabel"},"Описание:",-1))),P=["disabled"];function z(t,e,s,i,n,r){return(0,o.uX)(),(0,o.CE)("div",F,[(0,o.Lk)("h2",A,(0,u.v_)(n.editItemId?"Редактировать":"Создать новую")+" задачу",1),(0,o.Lk)("form",{onSubmit:e[2]||(e[2]=(0,a.D$)(((...t)=>r.saveTask&&r.saveTask(...t)),["prevent"])),class:"taskForm"},[(0,o.Lk)("div",J,[X,(0,o.bo)((0,o.Lk)("input",{type:"text",id:"title","onUpdate:modelValue":e[0]||(e[0]=t=>n.task.title=t),class:"formInput"},null,512),[[a.Jo,n.task.title]])]),(0,o.Lk)("div",N,[Q,(0,o.bo)((0,o.Lk)("textarea",{id:"description","onUpdate:modelValue":e[1]||(e[1]=t=>n.task.description=t),class:"formTextarea"},null,512),[[a.Jo,n.task.description]])]),(0,o.Lk)("button",{disabled:!n.task.description||!n.task.title,type:"submit",class:"createBtn createBtnPrimary"},(0,u.v_)(n.editItemId?"Сохранить":"Создать"),9,P)],32)])}const G={name:"TaskForm",data(){return{editItemId:null,task:{title:"",description:""}}},created(){this.$route.params.id&&(this.editItemId=this.$route.params.id,this.task=this.$store.getters.getTaskById(this.$route.params.id))},methods:{saveTask(){const t=this.editItemId?"saveEditedTask":"createTask";this.$store.dispatch(t,this.task).then((()=>{this.$router.push("/")})).catch((t=>{console.error("Ошибка сохранения задачи:",t)}))}}},U=(0,l.A)(G,[["render",z],["__scopeId","data-v-4f81ae36"]]),V=U,W=[{path:"/",component:x},{path:"/create",component:V},{path:"/edit/:id",component:V}],K=(0,k.aE)({history:(0,k.LA)(),routes:W}),q=K;var H=s(278);const R="tasks",Y=(0,H.y$)({state:{tasks:[]},getters:{getTaskById:t=>e=>t.tasks.find((t=>t.id===e))},mutations:{initializeStore(t){const e=localStorage.getItem(R);e&&(t.tasks=JSON.parse(e))},addTask(t,e){const s=Date.now().toString(),a={...e,id:s};t.tasks.push(a),localStorage.setItem(R,JSON.stringify(t.tasks))},deleteTask(t,e){t.tasks=t.tasks.filter((t=>t.id!==e)),localStorage.setItem(R,JSON.stringify(t.tasks))},updateTask(t,e){if(e&&e.id){const s=t.tasks.findIndex((t=>t.id===e.id));-1!==s&&(t.tasks.splice(s,1,e),localStorage.setItem(R,JSON.stringify(t.tasks)))}else console.error("Ошибка обновления задачи: объект updatedTask не содержит идентификатора")}},actions:{createTask({commit:t},e){t("addTask",e)},deleteTask({commit:t},e){t("deleteTask",e)},saveEditedTask({commit:t},e){t("updateTask",e)}}}),Z=(0,a.Ef)(d);Z.use(Y),Z.use(q),Y.commit("initializeStore"),Z.mount("#app")}},e={};function s(a){var o=e[a];if(void 0!==o)return o.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,s),i.exports}s.m=t,(()=>{var t=[];s.O=(e,a,o,i)=>{if(!a){var n=1/0;for(d=0;d<t.length;d++){for(var[a,o,i]=t[d],r=!0,l=0;l<a.length;l++)(!1&i||n>=i)&&Object.keys(s.O).every((t=>s.O[t](a[l])))?a.splice(l--,1):(r=!1,i<n&&(n=i));if(r){t.splice(d--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[a,o,i]}})(),(()=>{s.d=(t,e)=>{for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}})(),(()=>{s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{var t={524:0};s.O.j=e=>0===t[e];var e=(e,a)=>{var o,i,[n,r,l]=a,c=0;if(n.some((e=>0!==t[e]))){for(o in r)s.o(r,o)&&(s.m[o]=r[o]);if(l)var d=l(s)}for(e&&e(a);c<n.length;c++)i=n[c],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(d)},a=self["webpackChunkvue_task"]=self["webpackChunkvue_task"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))})();var a=s.O(void 0,[504],(()=>s(375)));a=s.O(a)})();
//# sourceMappingURL=app.d981cfd8.js.map