// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { Pizza, SearchPizzaParams } from './types';
// import pickBy from 'lodash.pickby';
// import identity from 'lodash.identity';

// export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
//   'pizza/fetchPizzasStatus',
//   async (params) => {
//     const { sortBy, order, category, search, currentPage } = params;
//     // console.log(params, 4444);
//     const { data } = await axios.get<Pizza[]>(`https://628f5e0d0e69410599db2da5.mockapi/items&page=${currentPage}&limit=8&${category}&${search}`,
//      {
//       params: pickBy(

//         {
//           page: currentPage,
//           limit: 4,
//           category,
//           sortBy,
//           order,
//           search,
//         },
//         identity,
//       ),
//     }
//     ); 
//     console.log(pickBy)
// console.log(data,"ssssssss");
//     return data;
//   },
 
// );

 export {}