import React from 'react';
const ListItem = ({todo,id})=>{
    const handleClickMe = () => {
        console.log({id})
      };
    return(
        <> <ul><li  onClick={handleClickMe}> {todo} {id} </li></ul> 
        </>
    )
}
export  default ListItem;