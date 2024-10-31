import { Form, User } from '../../Models/index.mjs'; // Adjust the path as needed
import { getUserFormCount,CloneAndUpdateLastForm } from '../../utils/index.mjs';

export const NextStep = async (req, res) => {
  const userId = req.user.id; // Get the user ID from request parameters

  
  
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
    await user.update({
        state: "0",
      });

    const phase = await getUserFormCount(userId, user.state, user.role);
 
    let Result = await Form.findOne({
        where: {
          user_id: userId,
        },
        order: [['createdAt', 'DESC']],
      });
    if (user.role === '2') {
        console.log("phase",phase)
      switch (phase) {
        case 1:
          console.log('Role 2, Phase 1');
          Result = await CloneAndUpdateLastForm(userId);
          break;
        case 2:
          Result = await CloneAndUpdateLastForm(userId);
          break;
        case 3:
          console.log('Role 2, Phase 3');
          break;
        default:
          console.log('Invalid phase for role 2');
      }
    } else if (user.role === '3') {
      switch (phase) {
        case 1:
          console.log('Role 3, Phase 1');
          Result = await CloneAndUpdateLastForm(userId);
          break;
        case 2:
          console.log('Role 3, Phase 2');
          break;
        default:
          console.log('Invalid phase for role 3');
      }
    }
    //console.log('Result:',Result)

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
