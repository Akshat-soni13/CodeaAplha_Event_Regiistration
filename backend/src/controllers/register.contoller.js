const registerModel = require("../models/register.model")

const eventModel = require("../models/Event.model")


const registerEvent = async (req,res)=>{


    const eventId = req.params.eventId;

     const event = await eventModel.findById(
      eventId
    );

        if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

     const registration =
      await registerModel.create({
        user: req.user.id,
        event: eventId,
      });

     res.status(201).json({
      message: "Registered successfully",
      registration,
    });

}

const getMyregistration = async (req,res)=>
{
     const registrations =
      await registerModel.find({
        user: req.user.id,
      }).populate("event");

      res.status(200).json(registrations);

}

const cancleRegistration = async (req,res)=>{


    const registration =
      await registerModel.findById(
        req.params.id
      );

    if (!registration) {
      return res.status(404).json({
        message: "Registration not found",
      });
    }

    if (
      registration.user.toString() !==
      req.user.id
    ) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    await registration.deleteOne();

    res.status(200).json({
      message: "Registration cancelled",
    });

}


module.exports = { registerEvent,getMyregistration,cancleRegistration}