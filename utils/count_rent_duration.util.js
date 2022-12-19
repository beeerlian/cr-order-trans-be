



module.exports = (date) => {
       let rentDay = new Date(date);
       const currentDate = new Date();

       let totalRentHours = currentDate.getHours() - rentDay.getHours();
       let totalRentDay = currentDate.getDay() - rentDay.getDay();

       if (totalRentDay > 0) {
              totalRentHours = (24 * totalRentDay) + totalRentHours;
       }

       const totalRent = Math.ceil(totalRentHours / 24);


       return totalRent === 0 ? 1 : totalRent;
};



// module.exports = (date) => {
//        console.log(parseInt(date))
//        let rentDay = new Date(parseInt(date))
//        const currentDate = new Date();
//        console.log(`${rentDay} - ${currentDate}`);


//        let totalRentHours = currentDate.getHours() - rentDay.getHours();
//        let totalRentDay = currentDate.getDay() - rentDay.getDay();
//        if (totalRentDay > 0) {
//               totalRentHours = (24 * totalRentDay) + totalRentHours;
//        }

//        const totalRent = Math.ceil(totalRentHours / 24);


//        return totalRent === 0 ? 1 : totalRent;
// }