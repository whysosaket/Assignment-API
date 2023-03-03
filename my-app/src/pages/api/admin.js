import connectToMongo from "@/middleware/database";
import Student from "@/models/Student";

const handler = async (req, res) => {

    if(req.query.key!==process.env.KEY){
        return res.status(400).json({error: "Key Not Valid"})
    }

    let students; 
    try {
        students = await Student.find({});
    } catch (error) {
      console.log(error);
      return res.json({ error: "Something Went Wrong!" });
    }
    
    return res.status(200).json({success: true, students: students});
};

export default connectToMongo(handler);
