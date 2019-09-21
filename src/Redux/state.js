import {ReturnDomDereva} from './../indexEnter';
let state = {
    profilePage:{
        postData:[
            {id:1,message:'This is a post !!',like:25},
            {id:2,message:"It/'s  my first post ",like:0 },
            {id:3,message:"Hile Gidra",like:0 },
            {id:4,message:"yo",like:0 },
        ],
    },

};
  export let deafultElement = (messges)=>{
    let addmessages = {
    id:4,message:messges,like:0
    };
    state.profilePage.postData.push(addmessages);

      ReturnDomDereva(state);
      // ReturnDomDereva();
};
export default state;