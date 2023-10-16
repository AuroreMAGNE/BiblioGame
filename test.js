import axios from 'axios';

try{
     const result = await axios.get('http://localhost:4000/categories');

     if (! result?.data)
        throw new Error ('Echec du chargement des catégories')

     console.log(result.data.map(c => c.label));

} catch(error){ 
    console.log(error)
}
