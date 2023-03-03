import connectToMongo from "@/middleware/database";
import Student from "@/models/Student";

const handler = async (req, res) => {

    let students; 
    try {
        students = await Student.find({});
    } catch (error) {
      console.log(error);
      return res.json({ error: "Something Went Wrong!" });
    }
    
    return res.status(200).json(students);
};

export default connectToMongo(handler);
