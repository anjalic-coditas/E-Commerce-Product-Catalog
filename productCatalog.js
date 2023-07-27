
async function fetchData(){
    try{
     const apiUrl="https://fakestoreapi.com/products/category/jewelery";
     const response=await fetch(apiUrl);
     return response.data;
    }
    catch(error){
    console.error('Error while fetching data',error);
    }
}

async function fetchProductData(){
   const data=await fetchData();
   if(data){
    console.log('Product data',data);
   }
}

fetchProductData();