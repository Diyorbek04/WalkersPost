import React from 'react';
import classes from './Section.module.css';
import Post from "../Chat/messges/Messages";
const Section = (props )=>{
    let mapEelements = props.state.postData.map( p => <Post   post={p.message} like={p.like} />);
    let expres = React.createRef();
    let addPost = ()=>{
        let text = expres.current.value;
        props.deafultElement(text);
        expres.current.value = '';
    };
    return(
        <>
   <div className={classes.Section}>
       <div className={classes.table}>
           <table  width='400' border='2' bgcolor='white'>
               <thead>
               <tr>
                   <th>Дата</th>
                   <th>Прибыль</th>
                   <th>Расход</th>

               </tr>
               </thead>
               <tbody>
               <tr>
                   <th>1-е январь  </th>
                   <th>285</th>
                   <th>48</th>
               </tr>

               <tr>
                   <th>1-е январь  </th>
                   <th>350</th>
                   <th>480</th>
               </tr>

               <tr>
                   <th>3-е январь  </th>
                   <th>250</th>
                   <th>78</th>
               </tr>
               </tbody>
               <tfoot>
               <td></td>
               <th>885</th>
               <th>606</th>
               </tfoot>
           </table>

           <p>Имя пользователя <input type="text" name='username' maxLength='50'/></p>
           <p>Пароль <input type="password" name='username' maxLength='50'/></p>
           <p>Checkbox <input type="Checkbox" name='username' maxLength='50'/></p>
           <p>Radio <input type="radio" name='username' maxLength='50'/></p>
           <p>Radio <input type="radio" name='username' maxLength='50'/></p>
           <p>File <input type="file" /></p>
           <select >
               <option value='ipod'>Home</option>
               <option value='ipod'>Register</option>
               <option value='ipod'>Login</option>
               <option value='ipod'>Enter</option>
           </select>

           <select size='5' multiple='10'>
               <option value='ipod'>Home</option>
               <option value='ipod'>Register</option>
               <option value='ipod'>Login</option>
               <option value='ipod'>Enter</option>
           </select>

       </div>


           <div className={classes.chat}>
               <div className={classes.content}>
                   <textarea ref={expres}/>
                   <button onClick={addPost}>Added</button>
               </div>
               {mapEelements}

       </div>
   </div>

       </>
    );
};
export default  Section;