import connectToMongo from "@/middleware/database";
import Student from "@/models/Student";

const handler = async (req, res) => {
  if (req.method === "POST") {

    const { name, roll, col } = req.body;

    let student = await Student.findOne({ roll: roll });
    if (student) return res.status(400).json({ success: false, msg: "User Already Exists" });

    try {
        await Student.create({
            name: name,
            roll: Number(roll),
            col: col
        })
    } catch (error) {
      console.log(error);
      return res.json({ error: "Something Went Wrong!" });
    }
    
    return res.status(200).json({ success: true, msg: "Form Submitted Success!!" });
  } else return res.status(404).json({ success: false, error: "GET Route is not Available" });
};

export default connectToMongo(handler);
