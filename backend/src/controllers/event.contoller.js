const eventModel = require("../models/Event.model")


const createEvent = async (req, res) => {
  try {

    const {
      title,
      description,
      date,
      location,
      image,
    } = req.body;

    const event = await eventModel.create({
      title,
      description,
      date,
      location,
      image,
      createdBy: req.user.id,
    });

    res.status(201).json({
      message: "Event created",
      event,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const getSingleEvent = async (req, res) => {
  try {

    const event = await eventModel.findById(
      req.params.id
    ).populate("createdBy", "name email");

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.status(200).json(event);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const deleteEvent = async (req,res)=>
{   
    const event = await eventModel.findById(
      req.params.id
    );
    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    // now jisna banay woh only delete karpaya ga 

     if (
      event.createdBy.toString() !== req.user.id
    ) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    await event.deleteOne();

    res.status(200).json({
      message: "Event deleted",
    });

}
const getAllEvent = async (req,res)=>{

     const events = await eventModel.find()
      .populate("createdBy", "name email");

    res.status(200).json(events);

}



module.exports = {
  createEvent,getSingleEvent,deleteEvent,getAllEvent
};