import { PrismaClient } from '@prisma/client';
 
export const db = new PrismaClient();


// db.toDo.create({
//     data: {
//       title: 'Next projekt',
//       description: "Wykonać projekt w technologii Next, termin 4.05",
//     },
//   });