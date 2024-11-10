import { Form, User } from '../../Models/index.mjs'; // Adjust the path as needed
import { getUserFormCount,CloneAndUpdateLastForm } from '../../utils/index.mjs';

export const NextStep = async (req, res) => {
  //const userId = req.user.id; // Get the user ID from request parameters
  const userId = req.query.id; // Get the user ID from the query string
  //console.log("User ID from query:", userId);

  
  
  
  try {
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });
    
  

    
    if (!user) {
      return res.status(404).json({
        message: 'User not found.',
        success: false,
      });
    }
    
    

    const phase = user.phase
    console.log("phase:",phase)
    let Result = await Form.findOne({
        where: {
          user_id: userId,
        },
        order: [['createdAt', 'DESC']],
      });
      console.log("phase",phase)
      console.log("phase",user.role)
      console.log("condition",(phase === 1 && user.role === '3') )
    

    if((phase === 2 && user.role === '3') || (user.role === '2' && phase === 2)){
      return res.status(500).json({
        message: 'The survey has already been completed.',
        success: false,
        error: "The survey has already been completed.",
      });
      }
    


   
      if(phase ===0){
        if(user.progression < 100){
          return res.status(500).json({
            message: 'The user didn’t complete the first phase.',
            success: false,
            error: "The user didn’t complete the first phase.",
          });
        }
    }
    
    Result = await CloneAndUpdateLastForm(userId);
    await user.update({
      state: "0",
      phase : user.phase +1
    });

    return res.status(201).json({
        Result:Result,
        phase: phase,
    });
  } catch (error) {
    console.error('Error processing next step:', error);
    return res.status(500).json({
      message: 'An error occurred while processing the next step.',
      success: false,
      error: error.message,
    });
  }
};
