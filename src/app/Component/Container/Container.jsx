"use client"

import React, { useState } from 'react'
import "./Container.css";
import Axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';


const APP_ID ="1dd9a025"
const APP_KEY="97bf65e8d7cf55b5bf21643208b3613d	"




function Container() {

  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);
  const [show, setShow] = React.useState(false);


  const fetchRecipe = async(searchString) =>{
    const response= await Axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    
    updateRecipeList(response.data.hits)

    

  }


  const onTextChange=(event) =>{
    clearTimeout(timeoutId)
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    updateTimeoutId(timeout);
  }



  // const RecipeContainer = (recipeObj) => {
  //   const { recipeObj } = props;
  // }
  


  
  
 
  
  
  return (
    <>

    <Dialog open = {show}>
      

    <DialogTitle>Ingredients</DialogTitle>
    <DialogContent>
          
            <table>
              <thead>
                <th>Ingredients</th>
                <th>weight</th>
              </thead>
              <tbody>
                <tr>
                  <td>  fdf</td>
                  <td>fdd</td>
                  </tr>
              
              </tbody>
              
            </table>
            
          
        </DialogContent>
        <DialogActions >
          <seemorename >Seemore</seemorename>
          <ingrediantname onClick={() => setShow("")}>Close</ingrediantname>
        </DialogActions>
      </Dialog>
        
        

    <div className='section'>
      <div className="searchComponent" >
        <input type="search" placeholder='find recipe' onChange={onTextChange}></input>
    
      </div>
      
      

    

      

      <div className="listContainer" >
        
        {recipeList.length>0 && recipeList.map((recipeObj, index)=> (
          <div className="recipeContainer " key={index} recipeObj={recipeObj.recipe}>
          <img src={recipeObj.recipe.image} alt={recipeObj.recipe.label} className='recipeImage'
         />
          <recipename>{recipeObj.recipe.label}</recipename>
          <ingrediantname onClick ={()=> setShow(true)}>Ingrediant</ingrediantname>
          <seemorename onClick ={()=> window.open(recipeObj.recipe.url)}>see complete recipe</seemorename>
        
          
      </div>
      
      

        ))}
        

        
      </div>



      

    </div>
    </>
   
  )
}

export default Container
