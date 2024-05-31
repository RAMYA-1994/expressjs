
    const rooms = [{
        roomId:"PK1",
        seatsAvailable:"5",
        amenities:"tv,ac,heater",
        pricePerhr:"200"

}]
let bookings = [{
    customer: "Ramya",
    bookingDate: "28121994",
    startTime: "12:00pm",
    endTime: "11:59am",
    bookingID: "R1",
    roomId: "PK1",
    status: "booked",
    booked_On: "13/7/2023"
}
];
 const getallusers=(req,res)=>{
    try{
    res.status(200).send({message:"user data fetched successfully",
    bookings 
    })
}catch(error)
 {
res.status(500).send({
    message:"internal server error"
})
 }

 }
 export default{
    getallusers
 }
